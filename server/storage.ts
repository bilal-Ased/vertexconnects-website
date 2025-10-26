import { type User, type InsertUser, type Testimonial, type PricingPlan } from "@shared/schema";
import { randomUUID } from "crypto";

export interface IStorage {
  getUser(id: string): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  getTestimonials(): Promise<Testimonial[]>;
  getPricingPlans(): Promise<PricingPlan[]>;
}

export class MemStorage implements IStorage {
  private users: Map<string, User>;
  private testimonials: Testimonial[];
  private pricingPlans: PricingPlan[];

  constructor() {
    this.users = new Map();
    
    // Initialize testimonials
    this.testimonials = [
      {
        id: "1",
        name: "Sarah Johnson",
        role: "Property Manager",
        company: "Silver Fox Estates",
        content: "Since using this platform, rent collection is smoother and communication is effortless. The WhatsApp reminders have reduced late payments by 80%.",
      },
      {
        id: "2",
        name: "Michael Chen",
        role: "Real Estate Manager",
        company: "Urban Properties Inc",
        content: "The analytics dashboard gives us insights we never had before. We can now make data-driven decisions about our portfolio with confidence.",
      },
      {
        id: "3",
        name: "Emily Rodriguez",
        role: "Portfolio Director",
        company: "Metro Living Group",
        content: "Automated invoice delivery has saved us countless hours. Our team can now focus on growth instead of administrative tasks.",
      },
    ];

    // Initialize pricing plans
    this.pricingPlans = [
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
    return this.testimonials;
  }

  async getPricingPlans(): Promise<PricingPlan[]> {
    return this.pricingPlans;
  }
}

export const storage = new MemStorage();
