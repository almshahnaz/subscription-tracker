# Subscription Tracker API

A Node.js/Express API for managing user subscriptions, tracking renewal dates, and sending automated email reminders before renewals. Built with MongoDB (Mongoose) and secured with JWT authentication.

## Features

- User account creation, update, and deletion

- Subscription creation, update, deletion, and cancellation

- Renewal date tracking

- Automated reminder emails at 7, 5, 2, and 1 day(s) before renewal

- JWT-based authentication

## Tech Stack

- Node.js

- Express.js

- MongoDB + Mongoose

- JWT Authentication

- QStash (for scheduling reminders)

- Nodemailer (email reminders)

## Installation

### 1. Clone the repository

`git clone <your-repo-url>`
<br>
`cd subscription-tracker-api`

### 2. Install dependencies

`npm install`

### 3. Create an `.env` file

Include the following environment variables;

PORT=<br> SERVER_URL=<br> NODE_ENV=<br> DB_URI=<br> JWT_SECRET=<br> JWT_EXPIRES_IN=<br> QSTASH_URL=<br> QSTASH_TOKEN=<br> EMAIL_PASSWORD=<br> EMAIL=

### 4. Start the server

`npm run dev`

## Reminder System

A scheduled job (QStash) checks renewal dates and sends reminder emails 7, 5, 2, and 1 day(s) before renewal using the configured email credentials.

## License

MIT
