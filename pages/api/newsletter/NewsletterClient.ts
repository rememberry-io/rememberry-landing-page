import { drizzle, PostgresJsDatabase } from "drizzle-orm/postgres-js";
import postgres from "postgres";
import { emails } from "@/db/schema";
import { and, eq } from "drizzle-orm";

export class WaitlistClient {
  db: PostgresJsDatabase;
  constructor() {
    const client = postgres(process.env.DATABASE_URL!);
    this.db = drizzle(client);
  }

  async findAll() {
    try {
      const allEntries = await this.db.select().from(emails);

      return [null, allEntries] as const;
    } catch (error) {
      return [error, null] as const;
    }
  }

  async findById(id: string) {
    try {
      const emailEntry = await this.db
        .select()
        .from(emails)
        .where(eq(emails.id, id));

      return [null, emailEntry[0]] as const;
    } catch (error) {
      return [error, null] as const;
    }
  }

  async create(email: string) {
    try {
      const newEntry = await this.db
        .insert(emails)
        .values({ email, waitlist: true })
        .returning();

      return [null, newEntry[0]] as const;
    } catch (error) {
      return [error, null] as const;
    }
  }

  async updateOptIn(id: string, double_opt_in: boolean) {
    try {
      const updatedEntry = await this.db
        .update(emails)
        .set({ doubleOptIn: double_opt_in })
        .where(eq(emails.id, id))
        .returning();

      return [null, updatedEntry] as const;
    } catch (error) {
      return [error, null] as const;
    }
  }

  async deleteById(id: string) {
    try {
      const deletedEntry = await this.db
        .delete(emails)
        .where(eq(emails.id, id))
        .returning();

      return [null, deletedEntry] as const;
    } catch (error) {
      return [error, null] as const;
    }
  }

  async deleteByIdAndEmail(id: string, email: string) {
    try {
      const deletedEntry = await this.db
        .delete(emails)
        .where(and(eq(emails.id, id), eq(emails.email, email)))
        .returning();

      return [null, deletedEntry] as const;
    } catch (error) {
      return [error, null] as const;
    }
  }
}
