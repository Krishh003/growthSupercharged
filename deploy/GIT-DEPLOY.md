# Deploy via Git — Growth Supercharged

Git is the transport: push to GitHub, the server pulls and builds.
Runtime is Docker (uses [`Dockerfile`](../Dockerfile) +
[`docker-compose.yml`](../docker-compose.yml)). Server `10.10.10.100`, port **3000**.

Repo: `https://github.com/Krishh003/growthSupercharged.git`

---

## One-time setup on the server

```bash
# Docker present? install if not:
docker --version || (curl -fsSL https://get.docker.com | sudo sh)

# clone the repo
sudo git clone https://github.com/Krishh003/growthSupercharged.git /opt/growth-supercharged
cd /opt/growth-supercharged

# build the image + run the container (detached, auto-restart)
docker compose up -d --build

# verify
docker compose ps
curl -I http://10.10.10.100:3000     # expect 200 OK
```

Then give your admin **`10.10.10.100:3000`** + a hostname (e.g.
`http://growth.internal`) to point at it.

---

## Redeploy after pushing a change

```bash
cd /opt/growth-supercharged
git pull
docker compose up -d --build     # rebuilds only if source changed
```

That's the whole loop: `git push` locally → `git pull && docker compose up -d --build` on the server.

---

## If the repo is private

Public repos clone with no credentials. If you make it private, put a
**read-only deploy key** on the server:

```bash
# on the server
ssh-keygen -t ed25519 -f ~/.ssh/growth_deploy -N ""
cat ~/.ssh/growth_deploy.pub
# paste that into GitHub > repo > Settings > Deploy keys (allow read-only)

# then clone over SSH instead:
git clone git@github.com:Krishh003/growthSupercharged.git /opt/growth-supercharged
```

A deploy key is scoped to this one repo — safer than a personal token.

---

## Firewall

LAN must reach port 3000: `sudo ufw allow 3000/tcp` (Ubuntu) or the
firewalld equivalent. If the admin's proxy is on the same box, you can bind
to localhost only and let the proxy reach it.
