import { sql } from "drizzle-orm";
import { pgTable, text, varchar, integer, boolean } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const users = pgTable("users", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
});

export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
});

export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;

export const testimonials = pgTable("testimonials", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  name: text("name").notNull(),
  role: text("role").notNull(),
  company: text("company").notNull(),
  content: text("content").notNull(),
  avatar: text("avatar"),
});

export const insertTestimonialSchema = createInsertSchema(testimonials).omit({
  id: true,
});

export type InsertTestimonial = z.infer<typeof insertTestimonialSchema>;
export type Testimonial = typeof testimonials.$inferSelect;

export const pricingPlans = pgTable("pricing_plans", {
  id: varchar("id").primaryKey(),
  name: text("name").notNull(),
  price: text("price").notNull(),
  period: text("period").notNull(),
  description: text("description").notNull(),
  features: text("features").array().notNull(),
  highlighted: boolean("highlighted").default(false),
  cta: text("cta").notNull(),
});

export const insertPricingPlanSchema = createInsertSchema(pricingPlans);

export type InsertPricingPlan = z.infer<typeof insertPricingPlanSchema>;
export type PricingPlan = typeof pricingPlans.$inferSelect;
