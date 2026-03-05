import { useState, useMemo } from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from "recharts";
import { Calculator, TrendingUp, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import AnimatedSection, { FadeIn } from "./AnimatedSection";

const SeoRoiCalculator = () => {
  const [traffic, setTraffic] = useState(1000);
  const [conversionRate, setConversionRate] = useState(2);
  const [customerValue, setCustomerValue] = useState(5000);

  const chartData = useMemo(() => {
    const baseRevenue = traffic * (conversionRate / 100) * customerValue;
    return [
      { name: "Idag", revenue: Math.round(baseRevenue), fill: "hsl(218, 12%, 40%)" },
      { name: "+20% trafik", revenue: Math.round(baseRevenue * 1.2), fill: "hsl(38, 70%, 45%)" },
      { name: "+50% trafik", revenue: Math.round(baseRevenue * 1.5), fill: "hsl(38, 82%, 48%)" },
      { name: "+100% trafik", revenue: Math.round(baseRevenue * 2), fill: "hsl(38, 92%, 50%)" },
    ];
  }, [traffic, conversionRate, customerValue]);

  const formatCurrency = (value: number) =>
    new Intl.NumberFormat("sv-SE", { style: "currency", currency: "SEK", maximumFractionDigits: 0 }).format(value);

  return (
    <section className="py-14 sm:py-20 md:py-28 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <AnimatedSection>
          <div className="text-center mb-10 sm:mb-16">
            <span className="text-primary font-medium text-sm tracking-widest uppercase flex items-center justify-center gap-2">
              <Calculator size={16} />
              Verktyg
            </span>
            <h2 className="mt-4 text-2xl sm:text-3xl md:text-5xl font-bold">
              Beräkna din <span className="text-primary">SEO-avkastning</span>
            </h2>
            <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
              Se hur mycket mer intäkter din verksamhet kan generera med ökad organisk trafik genom SEO.
            </p>
          </div>
        </AnimatedSection>

        <FadeIn delay={0.2}>
          <div className="grid lg:grid-cols-5 gap-6 sm:gap-8">
            {/* Inputs */}
            <div className="lg:col-span-2 space-y-6 bg-card border border-border rounded-2xl p-6 sm:p-8">
              <h3 className="font-serif font-bold text-lg text-foreground flex items-center gap-2">
                <TrendingUp size={20} className="text-primary" />
                Dina siffror
              </h3>

              <div>
                <label htmlFor="roi-traffic" className="text-sm font-medium text-foreground mb-2 block">
                  Månatlig trafik (besökare)
                </label>
                <input
                  id="roi-traffic"
                  type="number"
                  min={0}
                  max={1000000}
                  value={traffic}
                  onChange={(e) => setTraffic(Math.max(0, Math.min(1000000, Number(e.target.value))))}
                  className="w-full px-4 py-3 rounded-lg border border-border bg-secondary text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 font-mono"
                />
              </div>

              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">
                  Konverteringsgrad (%)
                </label>
                <input
                  type="number"
                  min={0}
                  max={100}
                  step={0.1}
                  value={conversionRate}
                  onChange={(e) => setConversionRate(Math.max(0, Math.min(100, Number(e.target.value))))}
                  className="w-full px-4 py-3 rounded-lg border border-border bg-secondary text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 font-mono"
                />
              </div>

              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">
                  Genomsnittligt kundvärde (SEK)
                </label>
                <input
                  type="number"
                  min={0}
                  max={10000000}
                  value={customerValue}
                  onChange={(e) => setCustomerValue(Math.max(0, Math.min(10000000, Number(e.target.value))))}
                  className="w-full px-4 py-3 rounded-lg border border-border bg-secondary text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 font-mono"
                />
              </div>

              <div className="pt-4 border-t border-border">
                <div className="text-sm text-muted-foreground mb-1">Nuvarande månatlig intäkt</div>
                <div className="text-2xl font-bold text-foreground font-mono">
                  {formatCurrency(chartData[0].revenue)}
                </div>
              </div>

              <Link
                to="/kontakt"
                className="w-full px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium flex items-center justify-center gap-2 hover:bg-primary/90 transition-colors text-sm"
              >
                Boka fri SEO-analys <ArrowRight size={16} />
              </Link>
            </div>

            {/* Chart */}
            <div className="lg:col-span-3 bg-card border border-border rounded-2xl p-6 sm:p-8 flex flex-col">
              <h3 className="font-serif font-bold text-lg text-foreground mb-6">
                Potentiell intäktsökning med SEO
              </h3>
              <div className="flex-1 min-h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={chartData} margin={{ top: 10, right: 10, left: 10, bottom: 0 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="hsl(220, 16%, 16%)" />
                    <XAxis
                      dataKey="name"
                      tick={{ fill: "hsl(218, 12%, 55%)", fontSize: 12 }}
                      axisLine={{ stroke: "hsl(220, 16%, 16%)" }}
                      tickLine={false}
                    />
                    <YAxis
                      tick={{ fill: "hsl(218, 12%, 55%)", fontSize: 12 }}
                      axisLine={{ stroke: "hsl(220, 16%, 16%)" }}
                      tickLine={false}
                      tickFormatter={(v) => `${(v / 1000).toFixed(0)}k`}
                    />
                    <Tooltip
                      formatter={(value: number) => [formatCurrency(value), "Intäkt"]}
                      contentStyle={{
                        backgroundColor: "hsl(223, 40%, 10%)",
                        border: "1px solid hsl(220, 16%, 16%)",
                        borderRadius: "0.5rem",
                        color: "hsl(210, 40%, 96%)",
                        fontSize: "0.875rem",
                      }}
                      cursor={{ fill: "hsl(220, 16%, 12%)" }}
                    />
                    <Bar dataKey="revenue" radius={[6, 6, 0, 0]}>
                      {chartData.map((entry, index) => (
                        <Cell key={index} fill={entry.fill} />
                      ))}
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
              </div>

              {/* Growth summary */}
              <div className="grid grid-cols-3 gap-4 mt-6 pt-6 border-t border-border">
                {chartData.slice(1).map((d) => (
                  <div key={d.name} className="text-center">
                    <div className="text-xs text-muted-foreground mb-1">{d.name}</div>
                    <div className="text-sm font-bold text-foreground font-mono">{formatCurrency(d.revenue)}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default SeoRoiCalculator;
