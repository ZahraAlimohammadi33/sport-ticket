import { useNavigate } from "react-router";
import {
  Brain, BarChart2, Database, Shield, Globe, TrendingUp,
  Server, Cpu, ArrowLeft, CheckCircle, Layers, Workflow,
} from "lucide-react";

const services = [
  {
    icon: Brain,
    title: "هوش مصنوعی و یادگیری ماشین",
    desc: "مدل‌های پیشرفته ML برای پیش‌بینی رفتار مشتری، بهینه‌سازی فرآیندها و تصمیم‌گیری داده‌محور. از طبقه‌بندی تا خوشه‌بندی و شبکه‌های عصبی عمیق.",
    features: ["مدل‌سازی پیش‌بینانه", "پردازش زبان طبیعی (NLP)", "بینایی ماشین", "سیستم‌های توصیه‌گر"],
    color: "from-violet-500/10 to-purple-500/5",
    tag: "محبوب‌ترین",
  },
  {
    icon: BarChart2,
    title: "تحلیل داده و هوش تجاری",
    desc: "داشبوردهای تعاملی و گزارش‌های جامع برای دیده‌شدن الگوهای پنهان. از Excel تا Power BI و داشبوردهای سفارشی.",
    features: ["داشبورد بلادرنگ", "گزارش‌های اتوماتیک", "KPI Tracking", "تحلیل روند"],
    color: "from-blue-500/10 to-cyan-500/5",
  },
  {
    icon: Database,
    title: "مهندسی داده",
    desc: "طراحی و پیاده‌سازی زیرساخت داده مقیاس‌پذیر، pipeline های ETL و انبارهای داده سازمانی برای پردازش میلیون‌ها رکورد.",
    features: ["ETL Pipeline", "Data Warehouse", "Data Lake", "Real-time Streaming"],
    color: "from-emerald-500/10 to-teal-500/5",
  },
  {
    icon: Shield,
    title: "امنیت و حاکمیت داده",
    desc: "چارچوب‌های جامع برای حفاظت از داده، انطباق با مقررات GDPR و مدیریت چرخه حیات اطلاعات سازمانی.",
    features: ["Data Governance", "GDPR Compliance", "رمزنگاری داده", "کنترل دسترسی"],
    color: "from-red-500/10 to-rose-500/5",
  },
  {
    icon: Globe,
    title: "تحلیل داده ابری",
    desc: "راه‌حل‌های پردازش داده در بستر AWS، Azure و Google Cloud با قابلیت مقیاس‌پذیری خودکار.",
    features: ["AWS Analytics", "Azure Synapse", "BigQuery", "Auto-scaling"],
    color: "from-sky-500/10 to-blue-500/5",
  },
  {
    icon: TrendingUp,
    title: "تحلیل پیش‌بینانه",
    desc: "استفاده از الگوریتم‌های آماری و یادگیری عمیق برای پیش‌بینی روندهای آینده بازار و رفتار مشتریان.",
    features: ["پیش‌بینی فروش", "تحلیل ریسک", "مدل‌سازی تقاضا", "Time Series"],
    color: "from-orange-500/10 to-amber-500/5",
  },
  {
    icon: Server,
    title: "زیرساخت و DevOps داده",
    desc: "استقرار و مدیریت محیط‌های تولید داده با CI/CD، مانیتورینگ و بهینه‌سازی عملکرد.",
    features: ["MLOps", "CI/CD برای مدل‌ها", "مانیتورینگ مدل", "بهینه‌سازی هزینه"],
    color: "from-slate-500/10 to-gray-500/5",
  },
  {
    icon: Workflow,
    title: "اتوماسیون فرآیند",
    desc: "خودکارسازی جریان‌های کاری تکراری با استفاده از RPA و هوش مصنوعی برای افزایش بهره‌وری.",
    features: ["RPA", "هوش مصنوعی مکالمه‌ای", "اتوماسیون گزارش", "Alert هوشمند"],
    color: "from-pink-500/10 to-fuchsia-500/5",
  },
];

const plans = [
  {
    name: "پایه",
    price: "۵۰۰,۰۰۰",
    period: "ماهانه",
    desc: "مناسب برای کسب‌وکارهای کوچک و استارتاپ‌ها",
    features: ["داشبورد پایه", "گزارش ماهانه", "۲ کاربر", "پشتیبانی ایمیل", "۵ گیگابایت فضا"],
    cta: "شروع کنید",
    highlight: false,
  },
  {
    name: "حرفه‌ای",
    price: "۱,۸۰۰,۰۰۰",
    period: "ماهانه",
    desc: "برای شرکت‌های متوسط با نیاز به تحلیل پیشرفته",
    features: ["داشبورد پیشرفته", "گزارش هفتگی", "۱۵ کاربر", "پشتیبانی تلفنی ۲۴/۷", "۵۰ گیگابایت فضا", "API اختصاصی", "مدل ML پایه"],
    cta: "انتخاب کنید",
    highlight: true,
  },
  {
    name: "سازمانی",
    price: "سفارشی",
    period: "",
    desc: "برای سازمان‌های بزرگ با نیازهای خاص",
    features: ["همه امکانات حرفه‌ای", "کاربر نامحدود", "فضای نامحدود", "مدل ML سفارشی", "پیاده‌سازی On-premise", "SLA اختصاصی", "مشاور اختصاصی"],
    cta: "تماس بگیرید",
    highlight: false,
  },
];

export default function Services() {
  const navigate = useNavigate();

  return (
    <>
      {/* Hero */}
      <section className="bg-primary pt-20 pb-0 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: "radial-gradient(circle at 2px 2px, white 1px, transparent 0)", backgroundSize: "40px 40px" }} />
        <div className="max-w-7xl mx-auto px-6 text-center relative">
          <span className="text-accent text-sm font-bold uppercase tracking-widest">خدمات ما</span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mt-3 mb-5 leading-tight">
            راه‌حل‌های داده برای هر نیاز
          </h1>
          <p className="text-white/60 max-w-2xl mx-auto text-lg leading-relaxed">
            از مشاوره اولیه تا پیاده‌سازی کامل — طیف کاملی از خدمات تخصصی علوم داده را ارائه می‌دهیم.
          </p>
        </div>
        <svg viewBox="0 0 1440 50" fill="none" className="w-full mt-16" style={{ marginBottom: -1 }}>
          <path d="M0 50L1440 50L1440 10C1080 50 360 50 0 10L0 50Z" fill="#F5F7FA" />
        </svg>
      </section>

      {/* Services Grid */}
      <section className="bg-background py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {services.map((svc) => (
              <div key={svc.title} className={`relative bg-gradient-to-br ${svc.color} border border-border rounded-2xl p-6 hover:shadow-lg hover:-translate-y-1 transition-all group`}>
                {svc.tag && (
                  <span className="absolute top-4 left-4 bg-accent text-white text-xs font-bold px-2 py-0.5 rounded-full">
                    {svc.tag}
                  </span>
                )}
                <div className="w-11 h-11 bg-white rounded-xl shadow-sm flex items-center justify-center mb-4">
                  <svc.icon className="w-5 h-5 text-accent" />
                </div>
                <h3 className="text-primary font-bold text-base mb-2">{svc.title}</h3>
                <p className="text-muted-foreground text-xs leading-relaxed mb-4">{svc.desc}</p>
                <ul className="space-y-1.5">
                  {svc.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-xs text-foreground">
                      <div className="w-1.5 h-1.5 bg-accent rounded-full shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="bg-secondary/40 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <span className="text-accent text-sm font-bold uppercase tracking-widest">فرآیند کار</span>
            <h2 className="text-3xl font-extrabold text-primary mt-2">چطور کار می‌کنیم؟</h2>
          </div>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { step: "۰۱", title: "کشف نیاز", desc: "جلسه آنالیز رایگان برای درک دقیق اهداف و چالش‌های کسب‌وکار شما." },
              { step: "۰۲", title: "طراحی راه‌حل", desc: "ارائه نقشه راه فنی شخصی‌سازی شده با زمان‌بندی دقیق." },
              { step: "۰۳", title: "پیاده‌سازی", desc: "توسعه اجایل با چرخه‌های کوتاه و نمایش پیشرفت به صورت منظم." },
              { step: "۰۴", title: "پشتیبانی", desc: "مانیتورینگ مستمر، بهینه‌سازی و پشتیبانی ۲۴/۷ پس از راه‌اندازی." },
            ].map((s, i) => (
              <div key={s.step} className="relative">
                {i < 3 && (
                  <div className="hidden md:block absolute top-8 left-0 w-full h-px bg-border" style={{ right: "-50%" }} />
                )}
                <div className="bg-card border border-border rounded-2xl p-6 relative">
                  <div className="text-4xl font-extrabold text-accent/20 mb-3">{s.step}</div>
                  <h3 className="text-primary font-bold mb-2">{s.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="bg-background py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <span className="text-accent text-sm font-bold uppercase tracking-widest">تعرفه‌ها</span>
            <h2 className="text-3xl font-extrabold text-primary mt-2 mb-3">انتخاب پلن مناسب</h2>
            <p className="text-muted-foreground text-sm">قیمت‌ها به تومان. برای پلن سالانه ۲۰٪ تخفیف دریافت کنید.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 items-start">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`rounded-2xl p-7 border ${plan.highlight ? "bg-primary border-primary shadow-2xl shadow-primary/20 -mt-4" : "bg-card border-border"}`}
              >
                {plan.highlight && (
                  <div className="text-center mb-4">
                    <span className="bg-accent text-white text-xs font-bold px-3 py-1 rounded-full">پیشنهادی</span>
                  </div>
                )}
                <div className={`text-sm font-bold mb-1 ${plan.highlight ? "text-accent" : "text-muted-foreground"}`}>{plan.name}</div>
                <div className={`text-3xl font-extrabold mb-1 ${plan.highlight ? "text-white" : "text-primary"}`}>
                  {plan.price === "سفارشی" ? plan.price : `${plan.price} ﷼`}
                </div>
                {plan.period && <div className={`text-xs mb-3 ${plan.highlight ? "text-white/50" : "text-muted-foreground"}`}>{plan.period}</div>}
                <p className={`text-xs leading-relaxed mb-6 ${plan.highlight ? "text-white/60" : "text-muted-foreground"}`}>{plan.desc}</p>
                <ul className="space-y-2.5 mb-7">
                  {plan.features.map((f) => (
                    <li key={f} className={`flex items-center gap-2 text-sm ${plan.highlight ? "text-white/80" : "text-foreground"}`}>
                      <CheckCircle className={`w-4 h-4 shrink-0 ${plan.highlight ? "text-accent" : "text-accent"}`} />
                      {f}
                    </li>
                  ))}
                </ul>
                <button
                  onClick={() => navigate("/contact")}
                  className={`w-full py-3 rounded-xl font-bold text-sm transition-all ${plan.highlight ? "bg-accent text-white hover:bg-accent/90" : "bg-secondary text-primary hover:bg-secondary/70"}`}
                >
                  {plan.cta}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
