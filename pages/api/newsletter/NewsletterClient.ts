import { drizzle, PostgresJsDatabase } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';
import { emails } from '@/db/schema';
import { eq } from 'drizzle-orm';

export class NewsletterClient {
  db: PostgresJsDatabase;
  constructor() {
    const client = postgres(process.env.DATABASE_URL!);
    this.db = drizzle(client);
  }

  async create(email: string) {
    try {
      const newEntry = await this.db.insert(emails).values({ email, waitlist: true }).returning();

      return [null, newEntry[0]] as const;
    } catch (error) {
      return [error, null] as const;
    }
  }

  async update(id: string, double_opt_in: boolean) {
    try {

      const updatedEntry = await this.db.update(emails)
        .set({ doubleOptIn: double_opt_in })
        .where(eq(emails.id, id))
        .returning();

      return [null, updatedEntry] as const
    } catch (error) {
      return [error, null] as const
    }
  }
}
