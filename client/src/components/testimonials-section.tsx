import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Quote, Loader2 } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import type { Testimonial } from "@shared/schema";

export function TestimonialsSection() {
  const { data: testimonials, isLoading, error } = useQuery<Testimonial[]>({
    queryKey: ["/api/testimonials"],
  });

  const getInitials = (name: string) => {
    return name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase();
  };

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-b from-card/30 via-transparent to-card/30" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 space-y-4"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground">
            Trusted by{" "}
            <span className="bg-gradient-to-r from-gradient-from via-gradient-via to-gradient-to bg-clip-text text-transparent">
              Property Professionals
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            See how leading property managers are transforming their operations
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
            <p className="text-muted-foreground" data-testid="text-testimonials-error">
              Failed to load testimonials. Please try again later.
            </p>
          </div>
        )}

        {/* Testimonials Grid */}
        {testimonials && !isLoading && (
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card
                  className="p-8 h-full hover-elevate active-elevate-2 transition-all duration-300 bg-card/50 backdrop-blur-sm overflow-visible group hover:shadow-lg hover:-translate-y-1"
                  data-testid={`card-testimonial-${index}`}
                >
                  {/* Quote Icon */}
                  <div className="mb-6">
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-gradient-from/10 to-gradient-via/10 group-hover:scale-110 transition-transform duration-300">
                      <Quote className="w-6 h-6 text-gradient-from" />
                    </div>
                  </div>

                  {/* Content */}
                  <p
                    className="text-muted-foreground leading-relaxed mb-6"
                    data-testid={`text-testimonial-content-${index}`}
                  >
                    "{testimonial.content}"
                  </p>

                  {/* Author */}
                  <div className="flex items-center gap-4 pt-6 border-t border-border">
                    <Avatar className="h-12 w-12">
                      <AvatarFallback className="bg-gradient-to-br from-gradient-from to-gradient-via text-white font-semibold">
                        {getInitials(testimonial.name)}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <p
                        className="font-semibold text-foreground"
                        data-testid={`text-testimonial-name-${index}`}
                      >
                        {testimonial.name}
                      </p>
                      <p
                        className="text-sm text-muted-foreground"
                        data-testid={`text-testimonial-role-${index}`}
                      >
                        {testimonial.role}, {testimonial.company}
                      </p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
