import { drizzle } from "drizzle-orm/neon-http";
import { neon } from "@neondatabase/serverless";
import { config } from "dotenv";
import * as schema from '../db/schema';
import { migrate } from "drizzle-orm/neon-http/migrator";

config({ path: ".env.local" });

async function runMigration() {
    const sql = neon(process.env.DATABASE_URL!);
    const db = drizzle(sql, { schema });
    
    console.log("Running migrations...");
    
    await migrate(db, { migrationsFolder: "./db/migrations" });
    
    console.log("Migrations completed!");
    
    process.exit(0);
}

runMigration().catch((err) => {
    console.error('Error running migration:', err);
    process.exit(1);
});