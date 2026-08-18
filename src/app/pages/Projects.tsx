import { useState } from "react";
import { useNavigate } from "react-router";
import { ArrowLeft, TrendingUp, Users, Clock, Tag } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "سیستم پیش‌بینی ریزش مشتری بانک ملت",
    category: "یادگیری ماشین",
    industry: "بانکداری",
    duration: "۸ ماه",
    team: "۶ نفر",
    result: "کاهش ۴۲٪ ریزش مشتری",
    desc: "طراحی و پیاده‌سازی مدل Gradient Boosting برای پیش‌بینی احتمال ریزش مشتری در بانک ملت با دقت ۸۷٪.",
    tags: ["XGBoost", "Python", "Spark"],
    img: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&h=400&fit=crop&auto=format",
    color: "from-blue-600 to-indigo-700",
  },
  {
    id: 2,
    title: "داشبورد مدیریت زنجیره تامین ایران خودرو",
    category: "هوش تجاری",
    industry: "خودروسازی",
    duration: "۵ ماه",
    team: "۴ نفر",
    result: "صرفه‌جویی ۱۸ میلیارد تومان سالانه",
    desc: "ساخت داشبورد یکپارچه برای مدیریت ۱۲۰۰ تامین‌کننده با قابلیت هشداردهی هوشمند.",
    tags: ["Power BI", "SQL Server", "Python"],
    img: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=400&fit=crop&auto=format",
    color: "from-teal-500 to-emerald-600",
  },
  {
    id: 3,
    title: "پلتفرم تحلیل احساسات شبکه‌های اجتماعی",
    category: "پردازش زبان طبیعی",
    industry: "رسانه",
    duration: "۴ ماه",
    team: "۵ نفر",
    result: "تحلیل ۵ میلیون پست روزانه",
    desc: "ساخت موتور NLP فارسی برای تحلیل احساسات و روند بحث‌ها در توییتر و اینستاگرام.",
    tags: ["BERT", "FastAPI", "Redis"],
    img: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=600&h=400&fit=crop&auto=format",
    color: "from-pink-500 to-rose-600",
  },
  {
    id: 4,
    title: "سیستم توصیه‌گر محصول فروشگاه‌های افق کوروش",
    category: "یادگیری ماشین",
    industry: "خرده‌فروشی",
    duration: "۶ ماه",
    team: "۵ نفر",
    result: "افزایش ۲۸٪ فروش متقاطع",
    desc: "پیاده‌سازی سیستم توصیه‌گر مبتنی بر Collaborative Filtering برای ۴ میلیون مشتری.",
    tags: ["ALS", "Spark ML", "Kafka"],
    img: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop&auto=format",
    color: "from-orange-500 to-amber-600",
  },
  {
    id: 5,
    title: "انبار داده مرکزی شرکت پتروشیمی پارس",
    category: "مهندسی داده",
    industry: "پتروشیمی",
    duration: "۱۲ ماه",
    team: "۸ نفر",
    result: "یکپارچه‌سازی ۳۸ سیستم مجزا",
    desc: "طراحی و پیاده‌سازی Data Warehouse مرکزی با قابلیت پردازش ۵۰۰ گیگابایت داده روزانه.",
    tags: ["Snowflake", "dbt", "Airflow"],
    img: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=600&h=400&fit=crop&auto=format",
    color: "from-slate-600 to-gray-700",
  },
  {
    id: 6,
    title: "سیستم تشخیص تقلب بانک صادرات",
    category: "یادگیری ماشین",
    industry: "بانکداری",
    duration: "۷ ماه",
    team: "۶ نفر",
    result: "کاهش ۶۵٪ خسارات تقلب",
    desc: "ساخت سیستم بلادرنگ تشخیص تراکنش‌های مشکوک با تاخیر زیر ۱۰۰ میلی‌ثانیه.",
    tags: ["Graph Neural Networks", "Kafka", "Flink"],
    img: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=600&h=400&fit=crop&auto=format",
    color: "from-red-600 to-rose-700",
  },
];

const categories = ["همه", "یادگیری ماشین", "هوش تجاری", "مهندسی داده", "پردازش زبان طبیعی"];

export default function Projects() {
  const navigate = useNavigate();
  const [activeCategory, setActiveCategory] = useState("همه");

  const filtered = activeCategory === "همه" ? projects : projects.filter((p) => p.category === activeCategory);

  return (
    <>
      {/* Hero */}
      <section className="bg-primary pt-20 pb-0 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: "radial-gradient(circle at 2px 2px, white 1px, transparent 0)", backgroundSize: "40px 40px" }} />
        <div className="max-w-7xl mx-auto px-6 text-center relative">
          <span className="text-accent text-sm font-bold uppercase tracking-widest">پروژه‌ها</span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mt-3 mb-5">
            نمونه‌کارهای ما
          </h1>
          <p className="text-white/60 max-w-2xl mx-auto text-lg leading-relaxed">
            نگاهی به پروژه‌های موفقی که برای کسب‌وکارهای پیشرو ایران اجرا کرده‌ایم.
          </p>
          <div className="grid grid-cols-3 gap-6 max-w-sm mx-auto mt-10">
            {[{ n: "۲۵۰+", l: "پروژه" }, { n: "۱۵", l: "صنعت" }, { n: "۱۸۰+", l: "مشتری" }].map((s) => (
              <div key={s.l} className="bg-white/5 rounded-xl p-3 border border-white/10">
                <div className="text-2xl font-extrabold text-accent">{s.n}</div>
                <div className="text-white/50 text-xs">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
        <svg viewBox="0 0 1440 50" fill="none" className="w-full mt-16" style={{ marginBottom: -1 }}>
          <path d="M0 50L1440 50L1440 10C1080 50 360 50 0 10L0 50Z" fill="#F5F7FA" />
        </svg>
      </section>

      {/* Projects */}
      <section className="bg-background py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-wrap gap-2 mb-10">
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setActiveCategory(c)}
                className={`px-4 py-2 rounded-full text-sm font-semibold transition-colors ${activeCategory === c ? "bg-accent text-white" : "bg-card border border-border text-muted-foreground hover:text-primary"}`}
              >
                {c}
              </button>
            ))}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((project) => (
              <div key={project.id} className="bg-card border border-border rounded-2xl overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all group">
                <div className="h-48 relative overflow-hidden bg-muted">
                  <img src={project.img} alt={project.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className={`absolute inset-0 bg-gradient-to-t ${project.color} opacity-60`} />
                  <div className="absolute bottom-4 right-4 flex gap-2 flex-wrap">
                    {project.tags.map((tag) => (
                      <span key={tag} className="bg-white/20 backdrop-blur text-white text-xs px-2 py-0.5 rounded-full font-medium">{tag}</span>
                    ))}
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xs text-accent font-bold bg-accent/10 px-2 py-0.5 rounded-full">{project.category}</span>
                    <span className="text-xs text-muted-foreground bg-muted px-2 py-0.5 rounded-full">{project.industry}</span>
                  </div>
                  <h3 className="text-primary font-bold text-base mb-2 leading-snug">{project.title}</h3>
                  <p className="text-muted-foreground text-xs leading-relaxed mb-4">{project.desc}</p>

                  <div className="bg-accent/8 border border-accent/20 rounded-xl px-4 py-3 mb-4">
                    <div className="flex items-center gap-2">
                      <TrendingUp className="w-4 h-4 text-accent shrink-0" />
                      <span className="text-sm font-bold text-accent">{project.result}</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 text-xs text-muted-foreground pt-3 border-t border-border">
                    <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" />{project.duration}</span>
                    <span className="flex items-center gap-1"><Users className="w-3.5 h-3.5" />{project.team}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary py-16">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-extrabold text-white mb-4">پروژه بعدی شماست</h2>
          <p className="text-white/60 mb-8">بیایید با هم از داده‌های شما یک موفقیت دیگر بسازیم.</p>
          <button onClick={() => navigate("/contact")} className="bg-accent hover:bg-accent/90 text-white font-bold px-8 py-3 rounded-xl transition-all hover:shadow-lg hover:shadow-accent/30 inline-flex items-center gap-2">
            درخواست پروژه <ArrowLeft className="w-4 h-4" />
          </button>
        </div>
      </section>
    </>
  );
}
