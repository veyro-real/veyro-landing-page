# Veyro landing page

**Tell it what you want. Set the limits. Let it work.**

A responsive Next.js marketing site for Veyro, ready for Railway. No database, wallet connection or secrets are needed.

## Deploy on Railway

1. Create a service from this GitHub repository.
2. Keep the repository root as the build context. Railway uses the included Dockerfile.
3. Generate a public domain. The app listens on Railway's `PORT` at `0.0.0.0`.
4. Set `VEYRO_LIVE_URL` to the public URL of your separate `veyro-live` service and rebuild the landing page. This page is generated at build time.

The first deployment works without this variable; links lead to the demo section and repository instead of an invented live URL. Both web repositories are independently deployable.

Local commands: `npm ci`, `npm run dev`, `npm run build`, `npm start`.

The page describes an early testnet product. It makes no claim of investment, profitable trading, a production audit or an existing mainnet deployment.
