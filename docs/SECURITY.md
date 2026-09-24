# Security Standards

## 1. Authentication & Authorization
- Use JWT (JSON Web Tokens) with short expiration times.
- Implement Refresh Token rotation.
- Secure HTTP-only cookies for token storage.
- Role-based access control (RBAC) enforced on both frontend and backend.

## 2. API Protection
- **Rate Limiting**: Apply rate limiters to all API endpoints to prevent DDoS attacks (e.g., `express-rate-limit`).
- **Input Validation**: Use **Zod** or `express-validator` to strictly validate all incoming JSON payloads.

## 3. File Uploads
- Perform secure MIME-type checks for all uploaded media.
- Limit file size (e.g., max 5MB for images).
- Store media in secured cloud buckets (e.g., AWS S3 or Cloudinary) rather than the local filesystem.
