import { drizzle } from "drizzle-orm/neon-http";
import { neon } from "@neondatabase/serverless";
import { config } from "dotenv";
import * as schema from '../db/schema';

config({ path: ".env.local" });

async function testQuery() {
    const client = neon(process.env.DATABASE_URL!);
    const db = drizzle(client, { schema });
    
    console.log("Testing query...");
    try {
        const result = await db.query.eventsTable.findMany();
        console.log("Query successful!");
        console.log("Results:", result);
    } catch (err) {
        console.error("Query error:", err);
    }
    
    process.exit(0);
}

testQuery().catch((err) => {
    console.error('Error testing query:', err);
    process.exit(1);
});