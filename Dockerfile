FROM node:24-bookworm-slim AS build
WORKDIR /app
COPY . .
ARG VEYRO_LIVE_URL
ENV VEYRO_LIVE_URL=$VEYRO_LIVE_URL
RUN npm ci && npm run build
FROM node:24-bookworm-slim AS runner
WORKDIR /app
ENV NODE_ENV=production HOSTNAME=0.0.0.0 PORT=3000
COPY --from=build --chown=node:node /app/.next/standalone ./
COPY --from=build --chown=node:node /app/.next/static ./.next/static
COPY --from=build --chown=node:node /app/public ./public
USER node
EXPOSE 3000
CMD ["node", "server.js"]
