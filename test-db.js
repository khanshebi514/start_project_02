import "dotenv/config";
import fs from "fs";
import pg from "pg";

const { Client } = pg;

const ca = fs.readFileSync("./certs/ca.pem", "utf8");

const client = new Client({
  connectionString: process.env.DATABASE_URL,

  ssl: {
    ca,
    rejectUnauthorized: true,
  },
});

async function test() {
  try {
    await client.connect();

    const result = await client.query("SELECT NOW()");

    console.log("✅ AIVEN DATABASE CONNECTION SUCCESS");
    console.log(result.rows);

    await client.end();
  } catch (error) {
    console.error("❌ DATABASE CONNECTION FAILED");
    console.error(error);
  }
}

test();
