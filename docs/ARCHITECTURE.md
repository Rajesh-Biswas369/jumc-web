# Architecture & Tech Stack

## Original Architecture & Development
- **Lead Developer & Systems Architect:** RAJESH BISWAS
- **Development Period:** 2026
- **Contact / Profile:** [Github - Rajesh-Biswas369](https://github.com/Rajesh-Biswas369)

## Tech Stack (MERN + Next.js)
- **Frontend**: Next.js, React, Tailwind CSS, Framer Motion
- **Backend**: Node.js, Express (or Next.js API Routes)
- **Database**: MongoDB (Mongoose)

## Directory Layout
The repository follows a decoupled monorepo structure (if integrating Express) or a Next.js fullstack structure.
- `/client` or `/src`: Next.js frontend code (pages, components, styles).
- `/server`: Backend services, API controllers, and route definitions.
- `/docs`: Project documentation and governance.

## Database Modeling (MongoDB)
- **User Schema**: `_id`, `name`, `email`, `role` (student, performer, admin), `passwordHash`, `createdAt`.
- **Event Schema**: `_id`, `title`, `date`, `location`, `description`, `performerIds`, `status`.
- **Registration Schema**: `_id`, `eventId`, `userId`, `status`, `qrCode`.
