import { drizzle } from "drizzle-orm/neon-http";
import { neon } from "@neondatabase/serverless";
import { config } from "dotenv";
import * as schema from '../db/schema';
import { sql } from "drizzle-orm";

config({ path: ".env.local" });

async function checkDatabase() {
    const client = neon(process.env.DATABASE_URL!);
    const db = drizzle(client);
    
    console.log("Checking database structure...");
    
    // Check table structure
    const result = await db.execute(sql`
        SELECT column_name, data_type 
        FROM information_schema.columns 
        WHERE table_name = 'events';
    `);
    
    console.log("Table structure:");
    console.log(result.rows);
    
    process.exit(0);
}

checkDatabase().catch((err) => {
    console.error('Error checking database:', err);
    process.exit(1);
});