import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check, Sparkles, Loader2 } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import type { PricingPlan } from "@shared/schema";

export function PricingSection() {
  const { data: plans, isLoading, error } = useQuery<PricingPlan[]>({
    queryKey: ["/api/pricing"],
  });

  const handlePlanClick = (planId: string) => {
    const contactSection = document.querySelector("#contact");
    if (contactSection) {
      const offsetTop = contactSection.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top: offsetTop, behavior: "smooth" });
    }
  };

  return (
    <section id="pricing" className="py-24 relative">
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
            Simple,{" "}
            <span className="bg-gradient-to-r from-gradient-from via-gradient-via to-gradient-to bg-clip-text text-transparent">
              Transparent Pricing
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Choose the perfect plan for your property management needs. All plans include a 14-day free trial.
          </p>
        </motion.div>

        {/* Loading State */}
        {isLoading && (
          <div className="flex items-center justify-center py-12">
            <Loader2 className="w-8 h-8 animate-spin text-gradient-from" />
          </div>
        )}

        {/* Error State */}
        {error && (
          <div className="text-center py-12">
            <p className="text-muted-foreground" data-testid="text-pricing-error">
              Failed to load pricing plans. Please try again later.
            </p>
          </div>
        )}

        {/* Pricing Cards */}
        {plans && !isLoading && (
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {plans.map((plan, index) => (
              <motion.div
                key={plan.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={plan.highlighted ? "md:-mt-4" : ""}
              >
                <Card
                  className={`relative p-8 h-full flex flex-col transition-all duration-300 overflow-visible group hover:-translate-y-1 ${
                    plan.highlighted
                      ? "bg-gradient-to-br from-gradient-from/5 via-gradient-via/5 to-gradient-to/5 backdrop-blur-xl border-gradient-from/30 shadow-xl hover:shadow-2xl"
                      : "bg-card/30 backdrop-blur-xl border-border/50 hover-elevate active-elevate-2 hover:shadow-xl"
                  }`}
                  data-testid={`card-pricing-${plan.id}`}
                >
                  {/* Popular Badge */}
                  {plan.highlighted && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                      <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-gradient-from via-gradient-via to-gradient-to text-white text-sm font-medium shadow-lg">
                        <Sparkles className="w-4 h-4" />
                        Most Popular
                      </div>
                    </div>
                  )}

                  {/* Plan Header */}
                  <div className="mb-6">
                    <h3
                      className="text-2xl font-bold text-foreground mb-2"
                      data-testid={`text-plan-name-${plan.id}`}
                    >
                      {plan.name}
                    </h3>
                    <p
                      className="text-sm text-muted-foreground"
                      data-testid={`text-plan-description-${plan.id}`}
                    >
                      {plan.description}
                    </p>
                  </div>

                  {/* Price */}
                  <div className="mb-8">
                    <div className="flex items-baseline gap-2">
                      <span
                        className="text-5xl font-bold text-foreground"
                        data-testid={`text-plan-price-${plan.id}`}
                      >
                        {plan.price}
                      </span>
                      <span className="text-muted-foreground">
                        {plan.period}
                      </span>
                    </div>
                  </div>

                  {/* Features */}
                  <ul className="space-y-4 mb-8 flex-grow">
                    {plan.features.map((feature, featureIndex) => (
                      <li
                        key={featureIndex}
                        className="flex items-start gap-3"
                        data-testid={`text-feature-${plan.id}-${featureIndex}`}
                      >
                        <div className="mt-0.5 flex-shrink-0">
                          <div className="w-5 h-5 rounded-full bg-gradient-to-br from-gradient-from to-gradient-via flex items-center justify-center">
                            <Check className="w-3 h-3 text-white" />
                          </div>
                        </div>
                        <span className="text-sm text-muted-foreground">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA Button */}
                  <Button
                    size="lg"
                    onClick={() => handlePlanClick(plan.id)}
                    className={`w-full transition-all duration-300 hover:scale-[1.02] ${
                      plan.highlighted
                        ? "bg-gradient-to-r from-gradient-from via-gradient-via to-gradient-to text-white shadow-lg hover:shadow-xl"
                        : ""
                    }`}
                    variant={plan.highlighted ? "default" : "outline"}
                    data-testid={`button-cta-${plan.id}`}
                  >
                    {plan.cta}
                  </Button>
                </Card>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
