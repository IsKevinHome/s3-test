# Fastify

Example project - https://github.com/fastify/demo

- Helpful for directory setup, etc

## Run

```bash
npm run dev   # Development with auto-reload
npm start     # Production
```

## Health Checks

- `GET /health` - General API health status
- `GET /health/s3` - Verifies S3 credentials and bucket access

## Structure

```
src/
├── config/        # Database and S3 client configuration
├── models/        # Mongoose models (User, Image)
├── plugins/       # Fastify plugins (database, CORS)
├── routes/        # API endpoints
├── services/      # Business logic (S3 operations, image CRUD)
├── utils/         # Validation and helper functions
├── app.js         # Application logic
└── server.js      # Server startup
```

## Dependencies

- [mongoose](https://www.npmjs.com/package/mongoose) - MongoDB ODM for storing image metadata
- [mime-types](https://www.npmjs.com/package/mime-types) - File type validation
- [@fastify/cors](https://www.npmjs.com/package/@fastify/cors) - Allow cross-origin requests from the frontend
- [@fastify/multipart](https://www.npmjs.com/package/@fastify/multipart) - Parse multipart/form-data for file uploads
- [uuid](https://www.npmjs.com/package/uuid) - Generate unique S3 object keys

### AWS S3

- [@aws-sdk/client-s3](https://www.npmjs.com/package/@aws-sdk/client-s3) - [Docs](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/introduction/) - Core S3 client for uploading and deleting objects
- [@aws-sdk/s3-request-presigner](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-s3-request-presigner/) - [npm](https://www.npmjs.com/package/@aws-sdk/s3-request-presigner) - Used to generate pre-signed URLs. Because our S3 bucket is private, we need it to generate temporary signed URLs so clients can view images without exposing the bucket publicly.
