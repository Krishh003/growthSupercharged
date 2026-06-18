# syntax=docker/dockerfile:1

# ---- Builder: install deps + produce the standalone build ----
FROM node:20-slim AS builder
WORKDIR /app

# Deps layer (cached unless package*.json change)
COPY package.json package-lock.json ./
RUN npm ci

# Build (needs the rest of the source)
COPY . .
RUN npm run build

# ---- Runner: minimal runtime image ----
FROM node:20-slim AS runner
WORKDIR /app
ENV NODE_ENV=production
ENV PORT=3000
ENV HOSTNAME=0.0.0.0

# Run as an unprivileged user
RUN useradd --system --uid 1001 nextjs

# Next "standalone" output: a trimmed server.js + only the node_modules it
# actually uses. public/ and .next/static are copied in separately.
COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nextjs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nextjs /app/.next/static ./.next/static

USER nextjs
EXPOSE 3000
CMD ["node", "server.js"]
