Computer Use Tutor

This is a functional clone of Google Calendar built with a modern, full-stack tech stack. It allows users to view their schedule, navigate between different views (Month, Week, Day), and create new events which are persisted in a serverless database.

✨ Features

Multiple Calendar Views: Seamlessly switch between Month, Week, and Day views to manage your schedule at different resolutions.

Create Events: Click on any time slot or use the "Create" button to open a popover and add new events to your calendar.

Event Persistence: Events are saved to a Postgres database using Next.js Server Actions, making them available across sessions.

Dynamic Navigation: Easily navigate to "Today" or move to the previous/next month, week, or day.

Global State Management: Uses Zustand for lightweight and efficient global state management for UI state (like selected date and view) and events.

Mini Calendar: A sidebar calendar for quick date navigation.

🛠️ Tech Stack

This project uses a modern web development stack:

Framework: Next.js (with React Server Components & Server Actions)

Styling: Tailwind CSS

UI Components: shadcn/ui

Database: Neon (Serverless Postgres)

ORM: Drizzle ORM

State Management: Zustand

Date/Time: Day.js

Deployment: Vercel (implied by Neon/Next.js stack)

🚀 Getting Started

Follow these instructions to get a copy of the project up and running on your local machine.

Prerequisites

Node.js (v18.17.0 or later)

npm or yarn

A Neon account for the Postgres database.

1. Clone the Repository

git clone [https://github.com/your-username/computer-use-tutor.git](https://github.com/your-username/computer-use-tutor.git)
cd computer-use-tutor




2. Install Dependencies

Install the required packages using your preferred package manager:

npm install
# or
yarn install




3. Set Up Environment Variables

This project connects to a Neon serverless Postgres database.

Create a project on Neon and get your database connection string.

Create a .env.local file in the root of the project.

Add your database connection string to this file:

DATABASE_URL="postgresql://user:password@host.neon.tech/dbname?sslmode=require"




4. Run Database Migrations

Apply the database schema to your Neon database using Drizzle Kit:

npm run migrate




This will execute the SQL files in db/migrations and create the events table.

5. Run the Development Server

Start the Next.js development server:

npm run dev




Open http://localhost:3000 with your browser to see the application.

📂 Available Scripts

This project comes with a few helpful scripts defined in package.json:

npm run dev: Starts the Next.js development server.

npm run build: Builds the application for production.

npm run start: Starts a production server.

npm run lint: Runs ESLint to check for code quality issues.

npm run migrate: Runs Drizzle migrations to update your database schema.

npm run reset-db: Drops and recreates the events table (useful for testing).

npm run test-query: Fetches and logs all events from the database.

npm run add-test: Adds a single "Test Event" to the database for today's date.
