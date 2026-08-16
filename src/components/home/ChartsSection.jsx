import { Icon } from "@iconify/react";
import {
  BarChart,
  Bar,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  AreaChart,
  Area,
  Tooltip,
} from "recharts";

const dataTrafik = [
  { day: "Pzt", value: 280 },
  { day: "Sal", value: 320 },
  { day: "Çar", value: 260 },
  { day: "Per", value: 400 },
  { day: "Cum", value: 350 },
  { day: "Cmt", value: 210 },
  { day: "Paz", value: 130 },
];

const dataKanallar = [
  { name: "WhatsApp", value: 55, color: "#25D366" },
  { name: "Instagram", value: 30, color: "#E4405F" },
  { name: "Trendyol", value: 15, color: "#F27A1A" },
];

const dataDonusum = [
  { ay: "Oca", oran: 12 },
  { ay: "Şub", oran: 58 },
  { ay: "Mar", oran: 22 },
  { ay: "Nis", oran: 78 },
  { ay: "May", oran: 85 },
  { ay: "Haz", oran: 10 },
];

const ChartsSection = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Card 1: Günlük Trafik (BarChart) */}
        <div className="group relative rounded-2xl border border-slate-200/80 bg-white p-6 shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:border-blue-300 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                Trafik Analizi
              </span>
              <Icon
                icon="solar:graph-bold-duotone"
                className="w-5 h-5 text-blue-500 transition-transform group-hover:scale-110"
              />
            </div>
            <p className="text-sm font-medium text-slate-600">
              Günlük Konuşma Trafiği
            </p>
            <div className="flex items-baseline gap-2 mt-1 mb-4">
              <span className="text-3xl font-bold text-slate-900">2,250</span>
              <span className="inline-flex items-center text-xs text-emerald-600 font-semibold bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                +12%
              </span>
            </div>
          </div>
          <div className="w-full h-28">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={dataTrafik}>
                <Tooltip
                  contentStyle={{
                    backgroundColor: "#0f172a",
                    borderRadius: "8px",
                    border: "none",
                    color: "#fff",
                    fontSize: "12px",
                  }}
                  cursor={{ fill: "rgba(226, 232, 240, 0.4)" }}
                />
                <Bar
                  dataKey="value"
                  fill="#3b82f6"
                  radius={[6, 6, 0, 0]}
                  className="transition-all duration-300 group-hover:fill-blue-600"
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Card 2: Kanal Dağılımı (PieChart) */}
        <div className="group relative rounded-2xl border border-slate-200/80 bg-white p-6 shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:border-emerald-300 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                Kanal Analizi
              </span>
              <Icon
                icon="solar:pie-chart-2-bold-duotone"
                className="w-5 h-5 text-emerald-500 transition-transform group-hover:scale-110"
              />
            </div>
            <p className="text-sm font-medium text-slate-600">Kanal Dağılımı</p>
          </div>

          <div className="relative w-36 h-36 mx-auto my-2">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Tooltip
                  contentStyle={{
                    backgroundColor: "#0f172a",
                    borderRadius: "8px",
                    border: "none",
                    color: "#fff",
                    fontSize: "12px",
                  }}
                />
                <Pie
                  data={dataKanallar}
                  dataKey="value"
                  innerRadius={48}
                  outerRadius={66}
                  paddingAngle={3}
                >
                  {dataKanallar.map((entry, i) => (
                    <Cell key={i} fill={entry.color} />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
            <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
              <span className="text-2xl font-bold text-slate-900">3</span>
              <span className="text-[10px] uppercase font-semibold text-slate-400">
                Kanal
              </span>
            </div>
          </div>

          <div className="flex justify-center gap-3 pt-2 text-xs border-t border-slate-100">
            {dataKanallar.map((d) => (
              <div key={d.name} className="flex items-center gap-1.5">
                <span
                  className="w-2 h-2 rounded-full"
                  style={{ backgroundColor: d.color }}
                />
                <span className="text-slate-600 font-medium">{d.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Card 3: Satış Dönüşüm Oranı (AreaChart) */}
        <div className="group relative rounded-2xl border border-slate-200/80 bg-white p-6 shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:border-indigo-300 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                Performans
              </span>
              <Icon
                icon="solar:chart-2-bold-duotone"
                className="w-5 h-5 text-indigo-500 transition-transform group-hover:scale-110"
              />
            </div>
            <p className="text-sm font-medium text-slate-600">
              Satış Dönüşüm Oranı
            </p>
            <div className="flex items-baseline gap-2 mt-1 mb-4">
              <span className="text-3xl font-bold text-slate-900">%94.8</span>
              <span className="inline-flex items-center text-xs text-indigo-600 font-semibold bg-indigo-50 px-2 py-0.5 rounded-full border border-indigo-200">
                +8.4%
              </span>
            </div>
          </div>

          <div className="w-full h-28">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={dataDonusum}>
                <defs>
                  <linearGradient id="colorDonusum" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#6366f1" stopOpacity={0.3} />
                    <stop offset="95%" stopColor="#6366f1" stopOpacity={0.0} />
                  </linearGradient>
                </defs>
                <Tooltip
                  contentStyle={{
                    backgroundColor: "#0f172a",
                    borderRadius: "8px",
                    border: "none",
                    color: "#fff",
                    fontSize: "12px",
                  }}
                />
                <Area
                  type="monotone"
                  dataKey="oran"
                  stroke="#6366f1"
                  strokeWidth={2.5}
                  fillOpacity={1}
                  fill="url(#colorDonusum)"
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChartsSection;
