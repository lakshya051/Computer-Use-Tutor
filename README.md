# 🗓️ Computer Use Tutor

> A **modern, full-stack clone of Google Calendar**, built with **Next.js**, **Tailwind CSS**, and **Neon Postgres**. Manage your schedule, create events, and seamlessly switch between month, week, and day views — all with persistent data storage and smooth navigation.

![Next.js](https://img.shields.io/badge/Next.js-14-black?style=flat-square\&logo=nextdotjs)
![Tailwind CSS](https://img.shields.io/badge/TailwindCSS-3.4-blue?style=flat-square\&logo=tailwindcss)
![Postgres](https://img.shields.io/badge/Database-Neon%20Postgres-blueviolet?style=flat-square\&logo=postgresql)
![License](https://img.shields.io/badge/License-MIT-green?style=flat-square)

---

## ✨ Features

✅ **Multiple Calendar Views**
Switch effortlessly between **Month**, **Week**, and **Day** views to manage your schedule at different time scales.

🗓️ **Create & Manage Events**
Click on any time slot or use the **“Create”** button to quickly add new events through a popover interface.

💾 **Persistent Storage**
All events are stored securely in a **Neon Serverless Postgres** database using **Next.js Server Actions** and **Drizzle ORM** — ensuring your data is always available.

🧭 **Dynamic Navigation**
Jump to **Today**, or move forward/backward through months, weeks, and days with smooth transitions.

⚡ **Global State Management**
Efficient and lightweight UI state control via **Zustand**, keeping the interface responsive and consistent.

📅 **Mini Calendar Sidebar**
A compact sidebar calendar for quick date selection and navigation.

---

## 🛠️ Tech Stack

| Category             | Technology                           |
| -------------------- | ------------------------------------ |
| **Framework**        | Next.js (App Router, Server Actions) |
| **Styling**          | Tailwind CSS                         |
| **UI Components**    | shadcn/ui                            |
| **Database**         | Neon (Serverless Postgres)           |
| **ORM**              | Drizzle ORM                          |
| **State Management** | Zustand                              |
| **Date/Time**        | Day.js                               |
| **Deployment**       | Vercel                               |

---

## 🚀 Getting Started

Follow these steps to set up the project locally.

### 🧩 Prerequisites

Before you begin, ensure you have the following:

* **Node.js** (v18.17.0 or later)
* **npm** or **yarn**
* **Neon** account for database setup

---

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/your-username/computer-use-tutor.git
cd computer-use-tutor
```

---

### 2️⃣ Install Dependencies

```bash
npm install
# or
yarn install
```

---

### 3️⃣ Configure Environment Variables

Create a new project on [Neon.tech](https://neon.tech), and get your Postgres connection string.

Then create a `.env.local` file in the root directory:

```bash
DATABASE_URL="postgresql://user:password@host.neon.tech/dbname?sslmode=require"
```

---

### 4️⃣ Run Database Migrations

Apply the database schema to your Neon database using **Drizzle Kit**:

```bash
npm run migrate
```

This command executes all SQL files in the `db/migrations` folder and sets up the required tables (like `events`).

---

### 5️⃣ Start the Development Server

```bash
npm run dev
```

Now open your browser and navigate to
👉 [http://localhost:3000](http://localhost:3000)

You should see your calendar app running!

---

## 🧰 Available Scripts

| Command              | Description                                             |
| -------------------- | ------------------------------------------------------- |
| `npm run dev`        | Start the Next.js development server                    |
| `npm run build`      | Build the application for production                    |
| `npm run start`      | Run the production server                               |
| `npm run lint`       | Check for code style and linting issues                 |
| `npm run migrate`    | Apply database migrations                               |
| `npm run reset-db`   | Drop and recreate the events table (useful for testing) |
| `npm run test-query` | Fetch and log all events from the database              |
| `npm run add-test`   | Insert a test event for today’s date                    |

---

## 🧠 Folder Structure

```
computer-use-tutor/
│
├── app/                  # Next.js App Router pages & layout
├── components/           # Reusable UI components
├── db/                   # Database configuration and migrations
├── lib/                  # Utility functions (date handling, etc.)
├── public/               # Static assets
├── styles/               # Global CSS and Tailwind setup
└── .env.local            # Environment variables (not committed)
```

---

## 🪄 Example Workflow

1. Open the app → navigate to **Month** view.
2. Click any date/time slot → popover opens.
3. Enter event details → save event.
4. The event is stored in your **Postgres** database and appears instantly on your calendar.

---

## ☁️ Deployment

Easily deploy on **Vercel**:

1. Push your code to GitHub.
2. Connect your repo to [Vercel](https://vercel.com/).
3. Add your `DATABASE_URL` environment variable in project settings.
4. Deploy 🚀

---

## 💡 Future Enhancements

* 🔔 Event reminders and notifications
* 🧑‍🤝‍🧑 Shared calendars & collaboration
* 📱 Responsive mobile-friendly interface improvements
* 🌙 Dark mode toggle
* 🕓 Time zone customization

---

## 👨‍💻 Author

**Lakshya Varshney**
📧 [Your Email or Portfolio link here]
🔗 [GitHub](https://github.com/lakshya051) • [LinkedIn](https://www.linkedin.com/in/)

---

## 🪪 License

This project is licensed under the **MIT License** – free to use, modify, and distribute.
