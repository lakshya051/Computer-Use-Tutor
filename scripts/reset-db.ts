import { drizzle } from "drizzle-orm/neon-http";
import { neon } from "@neondatabase/serverless";
import { config } from "dotenv";
import * as schema from '../db/schema';
import { sql } from "drizzle-orm";

config({ path: ".env.local" });

async function resetDatabase() {
    const client = neon(process.env.DATABASE_URL!);
    const db = drizzle(client);
    
    console.log("Dropping existing events table...");
    try {
        await db.execute(sql`DROP TABLE IF EXISTS events;`);
    } catch (err) {
        console.error("Error dropping table:", err);
    }
    
    console.log("Creating events table...");
    try {
        await db.execute(sql`
            CREATE TABLE events (
                id SERIAL PRIMARY KEY,
                date TIMESTAMP NOT NULL,
                title TEXT NOT NULL,
                description TEXT NOT NULL
            );
        `);
        console.log("Table created successfully!");
    } catch (err) {
        console.error("Error creating table:", err);
    }
    
    process.exit(0);
}

resetDatabase().catch((err) => {
    console.error('Error resetting database:', err);
    process.exit(1);
});