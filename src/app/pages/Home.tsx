import { useState } from "react";
import { useNavigate } from "react-router";
import {
  BarChart2, Brain, Database, Globe, LineChart, Shield,
  TrendingUp, Users, Zap, ArrowLeft, CheckCircle,
} from "lucide-react";
import {
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip,
  ResponsiveContainer, BarChart, Bar,
} from "recharts";

const chartData = [
  { ماه: "فروردین", درآمد: 4200, هزینه: 2800 },
  { ماه: "اردیبهشت", درآمد: 5800, هزینه: 3100 },
  { ماه: "خرداد", درآمد: 5200, هزینه: 2900 },
  { ماه: "تیر", درآمد: 7100, هزینه: 3400 },
  { ماه: "مرداد", درآمد: 6800, هزینه: 3200 },
  { ماه: "شهریور", درآمد: 8900, هزینه: 3900 },
];

const barData = [
  { دپارتمان: "فروش", عملکرد: 87 },
  { دپارتمان: "بازاریابی", عملکرد: 73 },
  { دپارتمان: "پشتیبانی", عملکرد: 91 },
  { دپارتمان: "توسعه", عملکرد: 95 },
  { دپارتمان: "مالی", عملکرد: 78 },
];

const services = [
  { icon: Brain, title: "هوش مصنوعی و یادگیری ماشین", desc: "مدل‌های پیشرفته ML برای پیش‌بینی رفتار مشتری، بهینه‌سازی فرآیندها و تصمیم‌گیری داده‌محور." },
  { icon: BarChart2, title: "تحلیل داده و گزارش‌دهی", desc: "داشبوردهای تعاملی و گزارش‌های جامع برای دیده‌شدن الگوهای پنهان در داده‌های کسب‌وکار شما." },
  { icon: Database, title: "مهندسی داده", desc: "طراحی و پیاده‌سازی زیرساخت داده مقیاس‌پذیر، pipeline های ETL و انبارهای داده سازمانی." },
  { icon: Shield, title: "امنیت و حاکمیت داده", desc: "چارچوب‌های جامع برای حفاظت از داده، انطباق با مقررات و مدیریت چرخه حیات اطلاعات." },
  { icon: Globe, title: "تحلیل داده ابری", desc: "راه‌حل‌های پردازش داده در بستر ابر با قابلیت مقیاس‌پذیری خودکار و بهینه‌سازی هزینه." },
  { icon: TrendingUp, title: "تحلیل پیش‌بینانه", desc: "استفاده از الگوریتم‌های آماری و یادگیری عمیق برای پیش‌بینی روندهای آینده بازار." },
];

const stats = [
  { value: "۲۵۰+", label: "پروژه موفق" },
  { value: "۱۸۰+", label: "مشتری راضی" },
  { value: "۹۸٪", label: "رضایت مشتریان" },
  { value: "۱۲", label: "سال تجربه" },
];

const testimonials = [
  { quote: "همکاری با پلمب تحول واقعی در کسب‌وکار ما ایجاد کرد. دقت پیش‌بینی‌های آن‌ها بی‌نظیر است.", author: "محمدرضا کاظمی", company: "مدیرعامل، آرمان‌گستر", avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=80&h=80&fit=crop&auto=format" },
  { quote: "راه‌حل‌های تحلیلی آن‌ها به ما کمک کرد ۳۵ درصد در هزینه‌های عملیاتی صرفه‌جویی کنیم.", author: "فاطمه حسینی", company: "مدیر مالی، نوآوران صنعت", avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=80&h=80&fit=crop&auto=format" },
  { quote: "تیم حرفه‌ای، تحویل به‌موقع و کیفیت خروجی فوق‌العاده. کاملاً توصیه می‌کنم.", author: "سینا موسوی", company: "مدیر فناوری، پارسیان دیجیتال", avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=80&h=80&fit=crop&auto=format" },
];

export default function Home() {
  const [activeTab, setActiveTab] = useState<"area" | "bar">("area");
  const navigate = useNavigate();

  return (
    <>
      {/* ── Hero ── */}
      <section className="relative bg-primary overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: "radial-gradient(circle at 2px 2px, white 1px, transparent 0)", backgroundSize: "40px 40px" }} />
        <div className="absolute top-0 left-0 w-96 h-96 bg-accent/20 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/10 rounded-full translate-x-1/3 translate-y-1/3 blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-6 py-20 md:py-28 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-accent/15 text-accent text-xs font-semibold px-3 py-1.5 rounded-full mb-6">
              <Zap className="w-3.5 h-3.5" />
              پیشرو در تحلیل داده ایران
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold text-white leading-tight mb-6">
              داده را به
              <span className="text-accent"> تصمیم‌های هوشمند </span>
              تبدیل کنید
            </h1>
            <p className="text-white/65 text-lg leading-relaxed mb-8 max-w-lg">
              با بهره‌گیری از جدیدترین روش‌های هوش مصنوعی و علوم داده، کسب‌وکار خود را متحول کنید و رقبا را پشت سر بگذارید.
            </p>
            <div className="flex flex-wrap gap-3">
              <button
                onClick={() => navigate("/contact")}
                className="bg-accent hover:bg-accent/90 text-white font-bold px-7 py-3 rounded-xl transition-all hover:shadow-xl hover:shadow-accent/30 flex items-center gap-2"
              >
                شروع کنید
                <ArrowLeft className="w-4 h-4" />
              </button>
              <button
                onClick={() => navigate("/projects")}
                className="bg-white/10 hover:bg-white/15 text-white font-semibold px-7 py-3 rounded-xl transition-colors border border-white/20"
              >
                مشاهده نمونه‌کارها
              </button>
            </div>
            <div className="mt-10 flex items-center gap-6 flex-wrap">
              {["تحویل به‌موقع", "پشتیبانی ۲۴/۷", "ضمانت کیفیت"].map((item) => (
                <div key={item} className="flex items-center gap-1.5 text-white/60 text-sm">
                  <CheckCircle className="w-4 h-4 text-accent shrink-0" />
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white/5 backdrop-blur border border-white/10 rounded-2xl p-5 shadow-2xl">
            <div className="flex items-center justify-between mb-4">
              <span className="text-white/50 text-xs">تحلیل درآمد — ۱۴۰۳</span>
              <div className="flex gap-1">
                {[0, 1, 2].map((i) => (
                  <div key={i} className={`w-2 h-2 rounded-full ${i === 0 ? "bg-accent" : "bg-white/20"}`} />
                ))}
              </div>
            </div>
            <ResponsiveContainer width="100%" height={180}>
              <AreaChart data={chartData}>
                <defs>
                  <linearGradient id="heroGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#0098A6" stopOpacity={0.4} />
                    <stop offset="95%" stopColor="#0098A6" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" />
                <XAxis dataKey="ماه" tick={{ fill: "rgba(255,255,255,0.4)", fontSize: 10 }} axisLine={false} tickLine={false} />
                <YAxis hide />
                <Tooltip contentStyle={{ background: "#0B2D4E", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 8, fontSize: 12, color: "white" }} />
                <Area type="monotone" dataKey="درآمد" stroke="#0098A6" fill="url(#heroGrad)" strokeWidth={2} dot={false} />
              </AreaChart>
            </ResponsiveContainer>
            <div className="mt-4 grid grid-cols-3 gap-3">
              {[{ label: "درآمد کل", value: "۸۹۰M ﷼" }, { label: "رشد ماهانه", value: "+۳۱٪" }, { label: "مشتریان جدید", value: "۱۴۸" }].map((kpi) => (
                <div key={kpi.label} className="bg-white/5 rounded-xl p-3">
                  <div className="text-white font-bold text-base">{kpi.value}</div>
                  <div className="text-white/40 text-xs mt-0.5">{kpi.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full block" style={{ marginBottom: -1 }}>
          <path d="M0 60L1440 60L1440 20C1440 20 1080 60 720 60C360 60 0 20 0 20L0 60Z" fill="#F5F7FA" />
        </svg>
      </section>

      {/* ── Stats ── */}
      <section className="bg-background py-14">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((s) => (
              <div key={s.label} className="bg-card border border-border rounded-2xl p-6 text-center hover:shadow-lg hover:shadow-primary/5 transition-shadow">
                <div className="text-4xl font-extrabold text-primary mb-1">{s.value}</div>
                <div className="text-muted-foreground text-sm font-medium">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Services Preview ── */}
      <section className="bg-secondary/40 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <span className="text-accent text-sm font-bold uppercase tracking-widest">خدمات ما</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-primary mt-2 mb-4">راه‌حل‌های جامع داده برای کسب‌وکار شما</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              از جمع‌آوری داده تا بینش عملی — ما در تمام مراحل سفر تحول دیجیتال همراه شما هستیم.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((svc) => (
              <div key={svc.title} className="bg-card border border-border rounded-2xl p-7 hover:shadow-xl hover:shadow-primary/8 hover:-translate-y-1 transition-all group">
                <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center mb-5 group-hover:bg-accent/20 transition-colors">
                  <svc.icon className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-primary font-bold text-lg mb-3">{svc.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{svc.desc}</p>
                <button onClick={() => navigate("/services")} className="mt-5 flex items-center gap-1 text-accent text-sm font-semibold">
                  بیشتر بدانید <ArrowLeft className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Analytics Dashboard ── */}
      <section className="bg-background py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-accent text-sm font-bold uppercase tracking-widest">داشبورد تحلیلی</span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-primary mt-2 mb-5 leading-tight">تمام داده‌ها در یک نگاه</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                داشبوردهای بلادرنگ ما به مدیران و تیم‌های کسب‌وکار امکان می‌دهد وضعیت سازمان را لحظه‌به‌لحظه رصد کنند.
              </p>
              <ul className="space-y-3">
                {["نمودارهای تعاملی و قابل شخصی‌سازی", "گزارش‌گیری خودکار و زمان‌بندی شده", "هشدارهای هوشمند بر اساس آستانه‌های تعریف‌شده", "اتصال به بیش از ۱۵۰ منبع داده"].map((f) => (
                  <li key={f} className="flex items-center gap-3 text-sm text-foreground">
                    <CheckCircle className="w-4 h-4 text-accent shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
              <button onClick={() => navigate("/contact")} className="inline-flex mt-8 items-center gap-2 bg-primary text-white font-semibold px-6 py-3 rounded-xl hover:bg-primary/90 transition-colors">
                درخواست دمو <ArrowLeft className="w-4 h-4" />
              </button>
            </div>

            <div className="bg-card border border-border rounded-2xl p-6 shadow-sm">
              <div className="flex items-center gap-2 mb-5">
                {(["area", "bar"] as const).map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`text-sm font-semibold px-4 py-2 rounded-lg transition-colors flex items-center gap-1.5 ${activeTab === tab ? "bg-accent text-white" : "text-muted-foreground hover:bg-muted"}`}
                  >
                    {tab === "area" ? <><LineChart className="w-4 h-4" />درآمد و هزینه</> : <><BarChart2 className="w-4 h-4" />عملکرد تیم</>}
                  </button>
                ))}
              </div>
              {activeTab === "area" ? (
                <ResponsiveContainer width="100%" height={260}>
                  <AreaChart data={chartData}>
                    <defs>
                      <linearGradient id="incomeGrad" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#0098A6" stopOpacity={0.15} />
                        <stop offset="95%" stopColor="#0098A6" stopOpacity={0} />
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" stroke="rgba(0,0,0,0.05)" />
                    <XAxis dataKey="ماه" tick={{ fontSize: 11, fill: "#5E7490" }} axisLine={false} tickLine={false} />
                    <YAxis tick={{ fontSize: 11, fill: "#5E7490" }} axisLine={false} tickLine={false} />
                    <Tooltip contentStyle={{ borderRadius: 10, fontSize: 12, border: "1px solid #E8EDF3" }} />
                    <Area type="monotone" dataKey="درآمد" stroke="#0098A6" fill="url(#incomeGrad)" strokeWidth={2.5} dot={false} />
                    <Area type="monotone" dataKey="هزینه" stroke="#0B2D4E" fill="none" strokeWidth={2} dot={false} strokeDasharray="4 2" />
                  </AreaChart>
                </ResponsiveContainer>
              ) : (
                <ResponsiveContainer width="100%" height={260}>
                  <BarChart data={barData} barSize={28}>
                    <CartesianGrid strokeDasharray="3 3" stroke="rgba(0,0,0,0.05)" vertical={false} />
                    <XAxis dataKey="دپارتمان" tick={{ fontSize: 11, fill: "#5E7490" }} axisLine={false} tickLine={false} />
                    <YAxis tick={{ fontSize: 11, fill: "#5E7490" }} axisLine={false} tickLine={false} domain={[0, 100]} />
                    <Tooltip contentStyle={{ borderRadius: 10, fontSize: 12, border: "1px solid #E8EDF3" }} />
                    <Bar dataKey="عملکرد" fill="#0098A6" radius={[6, 6, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ── Testimonials ── */}
      <section className="bg-secondary/40 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <span className="text-accent text-sm font-bold uppercase tracking-widest">نظرات مشتریان</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-primary mt-2">آنچه مشتریان می‌گویند</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div key={t.author} className="bg-card border border-border rounded-2xl p-7 hover:shadow-lg transition-shadow">
                <div className="text-accent text-4xl leading-none mb-4 font-serif">"</div>
                <p className="text-foreground leading-relaxed text-sm mb-6">{t.quote}</p>
                <div className="flex items-center gap-3 pt-4 border-t border-border">
                  <img src={t.avatar} alt={t.author} className="w-10 h-10 rounded-full object-cover bg-muted" />
                  <div>
                    <div className="font-bold text-sm text-primary">{t.author}</div>
                    <div className="text-muted-foreground text-xs">{t.company}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA Banner ── */}
      <section className="bg-accent py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-extrabold text-white mb-4">آماده تحول دیجیتال هستید؟</h2>
          <p className="text-white/75 mb-8 leading-relaxed">همین امروز با کارشناسان ما مشورت کنید و اولین گام را بردارید.</p>
          <div className="flex justify-center gap-4 flex-wrap">
            <button onClick={() => navigate("/contact")} className="bg-white text-accent font-bold px-8 py-3 rounded-xl hover:bg-white/90 transition-colors">
              مشاوره رایگان
            </button>
            <button onClick={() => navigate("/projects")} className="border border-white/40 text-white font-semibold px-8 py-3 rounded-xl hover:bg-white/10 transition-colors">
              نمونه‌کارها
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
