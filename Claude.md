# Claude.md

Keep your replies concise and focus on conveying key information. No unnecessary fluff.

## Project Overview

Fastify API with S3 image uploads and MongoDB (Mongoose).

## Commands

- `npm run dev` — start dev server with watch mode
- `npm start` — start production server

## Structure

- routes/ — Fastify route plugins, registered with prefix in app.js
- services/ — Business logic (\*.service.js), named exports
- models/ — Mongoose schemas (PascalCase), default exports
- config/ — External service setup (S3, DB)
- utils/ — Helpers (validation, pagination)
- plugins/ — Fastify plugins (healthcheck, cors, db)

## Conventions

- ES modules with explicit .js extensions in imports
- Services use named exports, plugins/routes use default exports
- Error response format: { error: "short message", message: "detailed message" }
- camelCase for functions/vars, PascalCase for models, UPPERCASE for constants
- S3 keys: images/YYYY/MM/uuid-filename.ext
- Pagination: limit (1-100, default 20) + offset query params
- **Controllers (future):** Routes should be thin — just mount HTTP methods pointing to controller functions. Controllers (\*.controller.js in controllers/) orchestrate the request: parse input, call services/utils, and return the response. Services stay focused on pure business logic.

## Environment Variables

PORT, NODE_ENV, MONGODB_URI, AWS_REGION, AWS_ACCESS_KEY_ID,
AWS_SECRET_ACCESS_KEY, S3_BUCKET_NAME, SIGNED_URL_EXPIRY,
MAX_FILE_SIZE, ALLOWED_MIME_TYPES, CORS_ORIGIN,
CLERK_PUBLISHABLE_KEY, CLERK_SECRET_KEY

## Authentication (future)

Clerk (`@clerk/fastify` + `@clerk/clerk-react`). Backend registers `clerkPlugin()` in app.js; routes use `getAuth(req)` or a `preHandler` hook for protection. Env vars: CLERK_PUBLISHABLE_KEY, CLERK_SECRET_KEY.
