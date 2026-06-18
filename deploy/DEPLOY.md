# Deploy — Growth Supercharged (Next.js, Linux, Node runtime)

Internal site. Server IP `10.10.10.100`, app listens on **port 3000**.
Admin maps a URL → `10.10.10.100:3000`.

---

## 0. One-time: install Node on the server

Next.js 15 needs **Node 20 LTS or newer**. Check first:

```bash
node -v   # want v20.x or higher
```

If missing/old (Ubuntu/Debian example):

```bash
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt-get install -y nodejs
```

---

## 1. Copy the project to the server

From your Windows machine (PowerShell), or via your normal file-transfer
tool. Exclude `node_modules`, `.next`, and the scratch `*.mjs` files — they
get rebuilt on the server.

```powershell
# scp example (run from the project folder)
scp -r app components public package.json package-lock.json `
    next.config.mjs tsconfig.json next-env.d.ts deploy `
    youruser@10.10.10.100:/opt/growth-supercharged
```

(`rsync -av --exclude node_modules --exclude .next ./ user@10.10.10.100:/opt/growth-supercharged`
works too if you have it.)

---

## 2. Install deps and build (ON the server)

```bash
cd /opt/growth-supercharged
npm ci                 # clean install from package-lock.json
npm install sharp      # required for next/image optimization in production
npm run build          # produces the .next production build
```

---

## 3. Smoke-test before wiring it up

```bash
PORT=3000 npm run start
# in another shell on the server:
curl -I http://localhost:3000     # expect HTTP/1.1 200 OK
```

Ctrl-C to stop once you see 200.

---

## 4. Run it as a service (survives reboots + crashes)

```bash
# fix ownership so the service user can read the files
sudo chown -R www-data:www-data /opt/growth-supercharged

# install the unit
sudo cp /opt/growth-supercharged/deploy/growth-supercharged.service \
        /etc/systemd/system/

sudo systemctl daemon-reload
sudo systemctl enable --now growth-supercharged

# verify
systemctl status growth-supercharged      # should say "active (running)"
curl -I http://10.10.10.100:3000           # expect 200 OK
journalctl -u growth-supercharged -f       # live logs
```

---

## 5. Hand off to your admin

Give them: **`10.10.10.100:3000`**

Ask them to point a hostname at it (suggested: `http://growth.internal` or
your company's naming convention). Their reverse proxy / load balancer
handles the URL and any TLS — the app just needs to keep listening on 3000.

---

## Redeploying after a code change

```bash
# copy changed files up (step 1), then on the server:
cd /opt/growth-supercharged
npm ci && npm install sharp && npm run build
sudo systemctl restart growth-supercharged
```

---

## Gotchas

- **Firewall:** the LAN must be able to reach port 3000 on the server.
  `sudo ufw allow 3000/tcp` (Ubuntu) or open it in firewalld. If the admin's
  proxy sits on the same box, you may instead bind to localhost only and let
  the proxy reach it.
- **No internet egress = broken images.** The site uses remote Unsplash
  images (`next.config.mjs`). `next/image` optimization fetches them from the
  server. If this internal box has no outbound internet, those images won't
  load. Either allow egress to `images.unsplash.com`, OR download the images
  into `/public` and reference them locally, OR set
  `images: { unoptimized: true }` in `next.config.mjs`.
- **Port clash:** if 3000 is taken, change `PORT` in the `.service` file and
  tell the admin the new port.
