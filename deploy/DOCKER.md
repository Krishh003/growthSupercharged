# Deploy via Docker — Growth Supercharged

Internal site. Server `10.10.10.100`, container exposes **port 3000**.
Build the image once, ship it to the server, run it with auto-restart.

Files: [`Dockerfile`](../Dockerfile), [`.dockerignore`](../.dockerignore),
[`docker-compose.yml`](../docker-compose.yml).

---

## Prereqs

- **Your machine:** Docker Desktop (Windows).
- **Server:** Docker Engine. Check: `docker --version`. If missing:
  `curl -fsSL https://get.docker.com | sudo sh`.

---

## 1. Build the image (on your Windows machine)

```powershell
cd "C:/Users/Krishh/Pristine Forests/growthSupercharged"
docker build -t growth-supercharged:1.0.0 .
```

Test it locally before shipping:

```powershell
docker run --rm -p 3000:3000 growth-supercharged:1.0.0
# open http://localhost:3000 — Ctrl-C to stop
```

---

## 2. Get the image onto the server — pick ONE

### Option A — ship a tar file (no registry needed, best for internal)

```powershell
docker save growth-supercharged:1.0.0 -o growth.tar
scp growth.tar youruser@10.10.10.100:/tmp/
```

On the server:

```bash
docker load -i /tmp/growth.tar
```

### Option B — company Docker registry (if you have one)

```powershell
docker tag growth-supercharged:1.0.0 registry.company.com/growth:1.0.0
docker push registry.company.com/growth:1.0.0
```

On the server:

```bash
docker pull registry.company.com/growth:1.0.0
```

---

## 3. Run it (on the server)

```bash
docker run -d --name growth \
  -p 3000:3000 \
  --restart unless-stopped \
  growth-supercharged:1.0.0
```

`-d` = background. `--restart unless-stopped` = survives crashes + reboots
(this replaces the systemd setup). Verify:

```bash
docker ps                              # growth should be "Up"
curl -I http://10.10.10.100:3000       # expect 200 OK
docker logs -f growth                  # live logs
```

---

## 4. Hand off to your admin

Give them **`10.10.10.100:3000`** and a hostname to point at it
(suggested `http://growth.internal`). Their proxy handles the URL + TLS.

If the LAN can't reach the port: `sudo ufw allow 3000/tcp` (or firewalld).

---

## Redeploying after a code change

```powershell
# rebuild + bump the tag, then reship (step 1 + 2)
docker build -t growth-supercharged:1.0.1 .
docker save growth-supercharged:1.0.1 -o growth.tar
scp growth.tar youruser@10.10.10.100:/tmp/
```

On the server:

```bash
docker load -i /tmp/growth.tar
docker stop growth && docker rm growth
docker run -d --name growth -p 3000:3000 --restart unless-stopped growth-supercharged:1.0.1
```

### Or use compose (if you copy the source to the server)

```bash
docker compose up -d --build      # build + run/replace in one command
docker compose logs -f
```

---

## Notes

- **Images:** `next.config.mjs` sets `images.unoptimized = true`, so the
  server needs no internet and no `sharp`. Browsers fetch Unsplash images
  directly — employee machines need normal web access. The local contact-page
  image is bundled into the image and served locally regardless.
- **Image size:** `.dockerignore` excludes the 34M `design/` and 12M
  `animAssets/` source folders (only referenced in comments). `designAssets/`
  is kept — the contact page imports from it.
- **Port clash:** change the host side of `-p HOST:3000` (e.g. `-p 8080:3000`)
  and tell the admin the new port. The container stays on 3000 internally.
