import { Button } from "@/components/ui/button";
import { Play, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import dashboardImage from "@assets/image_1761465989806.png";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-16">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-gradient-from/5 via-gradient-via/5 to-gradient-to/5" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(59,130,246,0.05),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(168,85,247,0.05),transparent_50%)]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-gradient-from/10 via-gradient-via/10 to-gradient-to/10 border border-gradient-from/20"
            >
              <Sparkles className="w-4 h-4 text-gradient-from" />
              <span className="text-sm font-medium text-foreground">
                Property Management, Reimagined
              </span>
            </motion.div>

            {/* Headline */}
            <div className="space-y-4">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-foreground leading-tight">
                Modern Property Management,{" "}
                <span className="bg-gradient-to-r from-gradient-from via-gradient-via to-gradient-to bg-clip-text text-transparent">
                  Simplified.
                </span>
              </h1>
              <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl">
                Automate rent reminders via WhatsApp, send invoices instantly,
                and manage everything from one powerful dashboard.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-gradient-to-r from-gradient-from via-gradient-via to-gradient-to text-white font-medium shadow-lg hover:shadow-xl transition-shadow text-base px-8 h-12"
                data-testid="button-start-trial-hero"
              >
                Start Free Trial
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="font-medium text-base px-8 h-12 gap-2"
                data-testid="button-watch-demo"
              >
                <Play className="w-4 h-4" />
                Watch Demo
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex items-center gap-6 pt-4">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="w-10 h-10 rounded-full bg-gradient-to-br from-gradient-from to-gradient-via border-2 border-background"
                  />
                ))}
              </div>
              <div className="text-sm text-muted-foreground">
                <span className="font-semibold text-foreground">500+</span>{" "}
                property managers trust us
              </div>
            </div>
          </motion.div>

          {/* Right Column - Dashboard Mockup */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <motion.div
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="relative"
            >
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-gradient-from via-gradient-via to-gradient-to opacity-20 blur-3xl rounded-2xl" />
              
              {/* Dashboard Image */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-border/50 bg-card">
                <img
                  src={dashboardImage}
                  alt="Property Management Dashboard"
                  className="w-full h-auto"
                  data-testid="img-dashboard-mockup"
                />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
