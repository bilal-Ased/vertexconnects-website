import { 
  type User, 
  type InsertUser, 
  type Testimonial, 
  type PricingPlan,
  type InsertTestimonial,
  type InsertPricingPlan,
  users,
  testimonials,
  pricingPlans
} from "@shared/schema";
import { randomUUID } from "crypto";
import { db } from "./db";
import { eq } from "drizzle-orm";

export interface IStorage {
  getUser(id: string): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  getTestimonials(): Promise<Testimonial[]>;
  getPricingPlans(): Promise<PricingPlan[]>;
}

export class DbStorage implements IStorage {
  async getUser(id: string): Promise<User | undefined> {
    const result = await db.select().from(users).where(eq(users.id, id));
    return result[0];
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    const result = await db.select().from(users).where(eq(users.username, username));
    return result[0];
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const result = await db.insert(users).values(insertUser).returning();
    return result[0];
  }

  async getTestimonials(): Promise<Testimonial[]> {
    return await db.select().from(testimonials);
  }

  async getPricingPlans(): Promise<PricingPlan[]> {
    return await db.select().from(pricingPlans);
  }
}

export class MemStorage implements IStorage {
  private users: Map<string, User>;
  private testimonialsData: Testimonial[];
  private pricingPlansData: PricingPlan[];

  constructor() {
    this.users = new Map();
    
    // Initialize testimonials
    this.testimonialsData = [
      {
        id: "1",
        name: "Sarah Johnson",
        role: "Property Manager",
        company: "Silver Fox Estates",
        content: "Since using this platform, rent collection is smoother and communication is effortless. The WhatsApp reminders have reduced late payments by 80%.",
        avatar: null,
      },
      {
        id: "2",
        name: "Michael Chen",
        role: "Real Estate Manager",
        company: "Urban Properties Inc",
        content: "The analytics dashboard gives us insights we never had before. We can now make data-driven decisions about our portfolio with confidence.",
        avatar: null,
      },
      {
        id: "3",
        name: "Emily Rodriguez",
        role: "Portfolio Director",
        company: "Metro Living Group",
        content: "Automated invoice delivery has saved us countless hours. Our team can now focus on growth instead of administrative tasks.",
        avatar: null,
      },
    ];

    // Initialize pricing plans
    this.pricingPlansData = [
      {
        id: "starter",
        name: "Starter",
        price: "$29",
        period: "per month",
        description: "Perfect for individual landlords",
        features: [
          "Up to 5 properties",
          "WhatsApp reminders",
          "Basic analytics",
          "Invoice generation",
          "Email support",
        ],
        highlighted: false,
        cta: "Get Started",
      },
      {
        id: "pro",
        name: "Pro",
        price: "$79",
        period: "per month",
        description: "For growing property managers",
        features: [
          "Up to 50 properties",
          "Advanced WhatsApp automation",
          "Real-time analytics",
          "Automated invoicing",
          "Priority support",
          "Custom branding",
          "API access",
        ],
        highlighted: true,
        cta: "Start Free Trial",
      },
      {
        id: "enterprise",
        name: "Enterprise",
        price: "Custom",
        period: "contact us",
        description: "For large-scale operations",
        features: [
          "Unlimited properties",
          "White-label solution",
          "Advanced analytics & reporting",
          "Dedicated account manager",
          "24/7 phone support",
          "Custom integrations",
          "SLA guarantee",
        ],
        highlighted: false,
        cta: "Contact Sales",
      },
    ];
  }

  async getUser(id: string): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = randomUUID();
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  async getTestimonials(): Promise<Testimonial[]> {
    return this.testimonialsData;
  }

  async getPricingPlans(): Promise<PricingPlan[]> {
    return this.pricingPlansData;
  }
}

export const storage = new DbStorage();

// Seed function to populate initial data
export async function seedDatabase() {
  try {
    // Check if data already exists
    const existingTestimonials = await db.select().from(testimonials);
    const existingPlans = await db.select().from(pricingPlans);

    console.log(`📊 Database check: ${existingTestimonials.length} testimonials, ${existingPlans.length} pricing plans`);

    // Seed testimonials if empty
    if (existingTestimonials.length === 0) {
      await db.insert(testimonials).values([
        {
          name: "Sarah Johnson",
          role: "Property Manager",
          company: "Silver Fox Estates",
          content: "Since using this platform, rent collection is smoother and communication is effortless. The WhatsApp reminders have reduced late payments by 80%.",
        },
        {
          name: "Michael Chen",
          role: "Real Estate Manager",
          company: "Urban Properties Inc",
          content: "The analytics dashboard gives us insights we never had before. We can now make data-driven decisions about our portfolio with confidence.",
        },
        {
          name: "Emily Rodriguez",
          role: "Portfolio Director",
          company: "Metro Living Group",
          content: "Automated invoice delivery has saved us countless hours. Our team can now focus on growth instead of administrative tasks.",
        },
      ]);
      console.log("✅ Seeded 3 testimonials");
    } else {
      console.log("ℹ️  Testimonials already exist, skipping seed");
    }

    // Seed pricing plans if empty
    if (existingPlans.length === 0) {
      await db.insert(pricingPlans).values([
        {
          id: "starter",
          name: "Starter",
          price: "$29",
          period: "per month",
          description: "Perfect for individual landlords",
          features: [
            "Up to 5 properties",
            "WhatsApp reminders",
            "Basic analytics",
            "Invoice generation",
            "Email support",
          ],
          highlighted: false,
          cta: "Get Started",
        },
        {
          id: "pro",
          name: "Pro",
          price: "$79",
          period: "per month",
          description: "For growing property managers",
          features: [
            "Up to 50 properties",
            "Advanced WhatsApp automation",
            "Real-time analytics",
            "Automated invoicing",
            "Priority support",
            "Custom branding",
            "API access",
          ],
          highlighted: true,
          cta: "Start Free Trial",
        },
        {
          id: "enterprise",
          name: "Enterprise",
          price: "Custom",
          period: "contact us",
          description: "For large-scale operations",
          features: [
            "Unlimited properties",
            "White-label solution",
            "Advanced analytics & reporting",
            "Dedicated account manager",
            "24/7 phone support",
            "Custom integrations",
            "SLA guarantee",
          ],
          highlighted: false,
          cta: "Contact Sales",
        },
      ]);
      console.log("✅ Seeded 3 pricing plans");
    } else {
      console.log("ℹ️  Pricing plans already exist, skipping seed");
    }
    
    console.log("✨ Database initialization complete");
  } catch (error) {
    console.error("❌ Error seeding database:", error);
    throw error;
  }
}
