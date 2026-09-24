# API Endpoints & Contracts

All endpoints should be prefixed with `/api/v1`.

## Authentication
- `POST /auth/register` - Register a new user
- `POST /auth/login` - Authenticate and receive JWT
- `GET /auth/me` - Get current user profile

## Events
- `GET /events` - List all upcoming events
- `GET /events/:id` - Get event details
- `POST /events` - Create a new event (Admin only)
- `PUT /events/:id` - Update an event (Admin only)
- `DELETE /events/:id` - Delete an event (Admin only)

## Registrations (Tickets)
- `POST /events/:id/register` - Register for an event
- `GET /user/registrations` - List all user registrations

## Standard Response Format
```json
{
  "success": true,
  "data": { ... },
  "error": null
}
```
Status Codes: `200 OK`, `201 Created`, `400 Bad Request`, `401 Unauthorized`, `403 Forbidden`, `404 Not Found`, `500 Internal Server Error`.
