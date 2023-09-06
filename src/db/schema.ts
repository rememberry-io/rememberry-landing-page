import { varchar, pgTable, uuid, boolean } from "drizzle-orm/pg-core";

export const emails = pgTable("emails", {
  id: uuid("id").defaultRandom().primaryKey(),
  email: varchar("name", { length: 256 }).unique(),
  doubleOptIn: boolean("doubleOptIn").default(false),
  waitlist: boolean("waitlist").default(false),
});
