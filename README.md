# Subscription Tracker (SubDub)

A Node.js/Express application for tracking and managing subscriptions. This project is currently under development.

## Overview

SubDub is a subscription management API built with Express.js and MongoDB, designed to help users track their active subscriptions, manage billing information, and monitor subscription statuses.

## Tech Stack

- **Backend**: Node.js with Express.js
- **Database**: MongoDB with Mongoose ODM
- **Development Tools**:
  - Nodemon for development server
  - ESLint for code quality
  - Morgan for HTTP request logging

## Project Structure

```
.
├── app.js                    # Main application entry point
├── package.json              # Project dependencies
├── eslint.config.js          # ESLint configuration
├── config/
│   └── env.js               # Environment configuration
├── database/
│   └── mongodb.js           # MongoDB connection setup
├── models/
│   ├── subscription.models.js # Subscription schema
│   └── user.models.js        # User schema
└── routes/
    ├── auth.routes.js       # Authentication routes
    ├── subscription.routes.js # Subscription management routes
    └── user.routes.js       # User management routes
```

## Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd subscriptionTracker
```

2. Install dependencies:

```bash
npm install
```

3. Create a `.env` file in the root directory with your environment variables:

```
MONGODB_URI=<your-mongodb-connection-string>
PORT=3000
NODE_ENV=development
```

## Usage

### Development

Start the development server with automatic reload:

```bash
npm run dev
```

### Production

Start the application:

```bash
npm start
```

The server will run on the configured PORT (default: 3000).

## Features (In Progress)

- [ ] User authentication and authorization
- [ ] Subscription creation and management
- [ ] Subscription tracking and renewal reminders
- [ ] Billing history
- [ ] User profile management

## Available Endpoints (In Development)

- `/auth/*` - Authentication routes
- `/users/*` - User management routes
- `/subscriptions/*` - Subscription management routes

## Development

### Running ESLint

Check code quality:

```bash
npm run lint
```

### Dependencies Overview

- **express**: Web application framework
- **mongoose**: MongoDB object modeling
- **dotenv**: Environment variable management
- **morgan**: HTTP request logger middleware
- **cookie-parser**: Cookie parsing middleware

## Contributing

This project is under active development. Contributions are welcome once the initial structure is finalized.

## Status

⚠️ **Work in Progress** - Core features are still being implemented.

v1.0

## Author

dunasCode
