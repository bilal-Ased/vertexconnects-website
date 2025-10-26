import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { TrendingUp, Users, DollarSign, Home } from "lucide-react";
import {
  BarChart,
  Bar,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const revenueData = [
  { month: "Jan", revenue: 45000 },
  { month: "Feb", revenue: 52000 },
  { month: "Mar", revenue: 48000 },
  { month: "Apr", revenue: 61000 },
  { month: "May", revenue: 55000 },
  { month: "Jun", revenue: 67000 },
];

const occupancyData = [
  { month: "Jan", rate: 85 },
  { month: "Feb", rate: 88 },
  { month: "Mar", rate: 92 },
  { month: "Apr", rate: 90 },
  { month: "May", rate: 94 },
  { month: "Jun", rate: 96 },
];

const metrics = [
  {
    icon: DollarSign,
    label: "Monthly Revenue",
    value: "$67,000",
    change: "+12%",
    positive: true,
  },
  {
    icon: Home,
    label: "Properties",
    value: "42",
    change: "+3",
    positive: true,
  },
  {
    icon: Users,
    label: "Active Tenants",
    value: "156",
    change: "+8%",
    positive: true,
  },
  {
    icon: TrendingUp,
    label: "Occupancy Rate",
    value: "96%",
    change: "+4%",
    positive: true,
  },
];

export function AnalyticsSection() {
  return (
    <section id="analytics" className="py-24 bg-gradient-to-b from-transparent via-card/30 to-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <h2 className="text-4xl sm:text-5xl font-bold text-foreground">
                Smarter Decisions{" "}
                <span className="bg-gradient-to-r from-gradient-from via-gradient-via to-gradient-to bg-clip-text text-transparent">
                  Through Data
                </span>
              </h2>
              <p className="text-lg text-muted-foreground">
                Get instant insights into your property portfolio with beautiful, real-time dashboards. Track revenue, occupancy, and payment trends at a glance.
              </p>
            </div>

            {/* Metrics Grid */}
            <div className="grid grid-cols-2 gap-4">
              {metrics.map((metric, index) => (
                <motion.div
                  key={metric.label}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="p-4 bg-card/30 backdrop-blur-xl border-border/50" data-testid={`card-metric-${index}`}>
                    <div className="flex items-start justify-between mb-2">
                      <div className="p-2 rounded-lg bg-gradient-to-br from-gradient-from/10 to-gradient-via/10">
                        <metric.icon className="w-4 h-4 text-gradient-from" />
                      </div>
                      <span
                        className={`text-xs font-medium ${
                          metric.positive
                            ? "text-emerald-600 dark:text-emerald-400"
                            : "text-red-600 dark:text-red-400"
                        }`}
                      >
                        {metric.change}
                      </span>
                    </div>
                    <div className="space-y-1">
                      <p className="text-xs text-muted-foreground">
                        {metric.label}
                      </p>
                      <p className="text-2xl font-bold text-foreground">
                        {metric.value}
                      </p>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Column - Charts */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            {/* Revenue Chart */}
            <Card className="p-6 bg-card/30 backdrop-blur-xl border-border/50" data-testid="card-revenue-chart">
              <h3 className="text-sm font-semibold text-foreground mb-4">
                Monthly Revenue
              </h3>
              <ResponsiveContainer width="100%" height={200}>
                <BarChart data={revenueData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                  <XAxis
                    dataKey="month"
                    stroke="hsl(var(--muted-foreground))"
                    fontSize={12}
                  />
                  <YAxis
                    stroke="hsl(var(--muted-foreground))"
                    fontSize={12}
                  />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "hsl(var(--popover))",
                      border: "1px solid hsl(var(--border))",
                      borderRadius: "8px",
                    }}
                  />
                  <Bar
                    dataKey="revenue"
                    fill="url(#colorRevenue)"
                    radius={[8, 8, 0, 0]}
                  />
                  <defs>
                    <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                      <stop
                        offset="0%"
                        stopColor="hsl(var(--gradient-from))"
                        stopOpacity={0.8}
                      />
                      <stop
                        offset="100%"
                        stopColor="hsl(var(--gradient-to))"
                        stopOpacity={0.8}
                      />
                    </linearGradient>
                  </defs>
                </BarChart>
              </ResponsiveContainer>
            </Card>

            {/* Occupancy Chart */}
            <Card className="p-6 bg-card/30 backdrop-blur-xl border-border/50" data-testid="card-occupancy-chart">
              <h3 className="text-sm font-semibold text-foreground mb-4">
                Occupancy Trend
              </h3>
              <ResponsiveContainer width="100%" height={200}>
                <LineChart data={occupancyData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                  <XAxis
                    dataKey="month"
                    stroke="hsl(var(--muted-foreground))"
                    fontSize={12}
                  />
                  <YAxis
                    stroke="hsl(var(--muted-foreground))"
                    fontSize={12}
                  />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "hsl(var(--popover))",
                      border: "1px solid hsl(var(--border))",
                      borderRadius: "8px",
                    }}
                  />
                  <Line
                    type="monotone"
                    dataKey="rate"
                    stroke="hsl(var(--gradient-via))"
                    strokeWidth={3}
                    dot={{ fill: "hsl(var(--gradient-via))", r: 4 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
