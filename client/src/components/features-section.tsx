import { motion } from "framer-motion";
import { Building2, MessageSquare, FileText, BarChart3 } from "lucide-react";
import { Card } from "@/components/ui/card";

const features = [
  {
    icon: Building2,
    title: "Property & Tenant Management",
    description:
      "All property and tenant data in one intuitive dashboard. Track leases, maintenance, and documents with ease.",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: MessageSquare,
    title: "WhatsApp Payment Reminders",
    description:
      "Automated, branded payment messages directly on WhatsApp. Never chase rent payments manually again.",
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: FileText,
    title: "Automated Invoice Delivery",
    description:
      "Generate and send invoices instantly once payments are confirmed—via email or WhatsApp.",
    color: "from-emerald-500 to-teal-500",
  },
  {
    icon: BarChart3,
    title: "Insightful Analytics",
    description:
      "Real-time dashboards with metrics like revenue, occupancy, and payment trends. Make data-driven decisions.",
    color: "from-orange-500 to-red-500",
  },
];

export function FeaturesSection() {
  return (
    <section id="features" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 space-y-4"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground">
            Everything You Need,{" "}
            <span className="bg-gradient-to-r from-gradient-from via-gradient-via to-gradient-to bg-clip-text text-transparent">
              In One Platform
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Powerful features designed to streamline property management and save you hours every week.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card
                className="relative p-8 h-full hover-elevate active-elevate-2 transition-all duration-300 bg-card/50 backdrop-blur-sm border-card-border overflow-visible group hover:shadow-lg hover:-translate-y-1"
                data-testid={`card-feature-${index}`}
              >
                {/* Icon */}
                <div
                  className={`inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br ${feature.color} mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}
                >
                  <feature.icon className="w-7 h-7 text-white" />
                </div>

                {/* Content */}
                <div className="space-y-3">
                  <h3
                    className="text-xl font-semibold text-foreground"
                    data-testid={`text-feature-title-${index}`}
                  >
                    {feature.title}
                  </h3>
                  <p
                    className="text-muted-foreground leading-relaxed"
                    data-testid={`text-feature-description-${index}`}
                  >
                    {feature.description}
                  </p>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
