import { Typography } from "@/components/ui/typography";

const marketStats = [
  {
    label: "Total Listings",
    value: "248",
    bg: "from-blue-500 via-blue-600 to-indigo-500",
  },
  {
    label: "Avg. Price / m²",
    value: "€2,180",
    bg: "from-emerald-500 via-emerald-600 to-teal-500",
  },
  {
    label: "Avg. Days on Market",
    value: "18",
    bg: "from-amber-500 via-orange-500 to-red-500",
  },
];

const RealtyStats = () => {
  return (
    <div className="lg:col-span-1 mt-0 lg:mt-15">
      <div className="grid h-full grid-cols-2 gap-6 sm:grid-cols-3 sm:grid-rows-1 lg:grid-cols-2">
        {marketStats.map((stat, index) => (
          <div
            key={stat.label}
            className={`flex h-full flex-col items-center justify-center gap-3 rounded-2xl bg-gradient-to-br ${
              stat.bg
            } p-6 text-white text-center shadow-lg ${
              index === 2 ? "lg:col-start-2" : ""
            }`}
          >
            <Typography className="mt-2 text-4xl font-extrabold text-white">
              {stat.value}
            </Typography>
            <Typography
              variant="small"
              className="uppercase tracking-widest text-[16px] text-white/80"
            >
              {stat.label}
            </Typography>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RealtyStats;
