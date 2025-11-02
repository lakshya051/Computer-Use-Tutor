import { drizzle } from "drizzle-orm/neon-http";
import { neon } from "@neondatabase/serverless";
import { config } from "dotenv";
import * as schema from '../db/schema';

config({ path: ".env.local" });

async function addTestEvent() {
    const client = neon(process.env.DATABASE_URL!);
    const db = drizzle(client, { schema });
    
    console.log("Adding test event...");
    try {
        const result = await db.insert(schema.eventsTable).values({
            date: new Date(),
            title: "Test Event",
            description: "This is a test event"
        }).returning();
        
        console.log("Test event added:", result);
        
        // Verify by querying all events
        const events = await db.query.eventsTable.findMany();
        console.log("All events:", events);
    } catch (err) {
        console.error("Error:", err);
    }
    
    process.exit(0);
}

addTestEvent().catch((err) => {
    console.error('Error adding test event:', err);
    process.exit(1);
});