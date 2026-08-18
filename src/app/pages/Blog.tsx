import { useState } from "react";
import { useNavigate } from "react-router";
import { Clock, User, ArrowLeft, Tag, TrendingUp } from "lucide-react";

const posts = [
  {
    id: 1,
    title: "راهنمای جامع شروع با یادگیری ماشین برای توسعه‌دهندگان",
    excerpt: "اگر یک توسعه‌دهنده هستید و می‌خواهید وارد دنیای ML شوید، این مقاله نقطه شروع مناسبی است. از مفاهیم پایه تا اولین مدل.",
    category: "یادگیری ماشین",
    author: "دکتر سارا محمدی",
    date: "۱۵ مرداد ۱۴۰۳",
    readTime: "۱۲ دقیقه",
    img: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=600&h=400&fit=crop&auto=format",
    featured: true,
    views: "۴,۲۰۰",
  },
  {
    id: 2,
    title: "چرا داشبورد شما خوانده نمی‌شود؟ ۷ اشتباه رایج در طراحی BI",
    excerpt: "بسیاری از داشبوردها پس از تحویل در کشوی مدیران بایگانی می‌شوند. این مقاله دلایل اصلی و راه‌حل‌هایشان را بررسی می‌کند.",
    category: "هوش تجاری",
    author: "خانم پریسا کرمی",
    date: "۸ مرداد ۱۴۰۳",
    readTime: "۸ دقیقه",
    img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop&auto=format",
    featured: false,
    views: "۳,۱۰۰",
  },
  {
    id: 3,
    title: "مقایسه Snowflake، BigQuery و Redshift برای بازار ایران",
    excerpt: "کدام Data Warehouse برای شرکت‌های ایرانی مناسب‌تر است؟ بررسی جامع از جنبه هزینه، عملکرد و محدودیت‌های تحریم.",
    category: "مهندسی داده",
    author: "مهندس کاوه صادقی",
    date: "۱ مرداد ۱۴۰۳",
    readTime: "۱۵ دقیقه",
    img: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&h=400&fit=crop&auto=format",
    featured: false,
    views: "۵,۸۰۰",
  },
  {
    id: 4,
    title: "BERT فارسی: آموزش و استفاده از مدل‌های زبانی برای متن فارسی",
    excerpt: "آموزش گام‌به‌گام fine-tuning مدل BERT روی داده‌های فارسی با استفاده از HuggingFace Transformers.",
    category: "پردازش زبان طبیعی",
    author: "دکتر نیلوفر احمدی",
    date: "۲۵ تیر ۱۴۰۳",
    readTime: "۲۰ دقیقه",
    img: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop&auto=format",
    featured: false,
    views: "۷,۳۰۰",
  },
  {
    id: 5,
    title: "MLOps چیست و چرا اهمیت دارد؟",
    excerpt: "بسیاری از مدل‌های ML هرگز به تولید نمی‌رسند. MLOps پل بین علم داده و مهندسی نرم‌افزار است.",
    category: "یادگیری ماشین",
    author: "مهندس دانیال موسوی",
    date: "۱۸ تیر ۱۴۰۳",
    readTime: "۱۰ دقیقه",
    img: "https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?w=600&h=400&fit=crop&auto=format",
    featured: false,
    views: "۲,۹۰۰",
  },
  {
    id: 6,
    title: "تحلیل آماری برای مدیران غیرفنی",
    excerpt: "چطور از گزارش‌های آماری معنی بگیریم بدون اینکه متخصص آمار باشیم؟ مفاهیم کلیدی به زبان ساده.",
    category: "تحلیل داده",
    author: "دکتر ریحانه نوری",
    date: "۱۰ تیر ۱۴۰۳",
    readTime: "۶ دقیقه",
    img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop&auto=format",
    featured: false,
    views: "۶,۱۰۰",
  },
];

const categories = ["همه", "یادگیری ماشین", "هوش تجاری", "مهندسی داده", "پردازش زبان طبیعی", "تحلیل داده"];

export default function Blog() {
  const navigate = useNavigate();
  const [activeCategory, setActiveCategory] = useState("همه");

  const featured = posts.find((p) => p.featured);
  const filtered = (activeCategory === "همه" ? posts.filter((p) => !p.featured) : posts.filter((p) => p.category === activeCategory && !p.featured));

  return (
    <>
      {/* Hero */}
      <section className="bg-primary pt-20 pb-0 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: "radial-gradient(circle at 2px 2px, white 1px, transparent 0)", backgroundSize: "40px 40px" }} />
        <div className="max-w-7xl mx-auto px-6 text-center relative">
          <span className="text-accent text-sm font-bold uppercase tracking-widest">وبلاگ</span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mt-3 mb-5">
            بینش‌های داده‌ای
          </h1>
          <p className="text-white/60 max-w-2xl mx-auto text-lg leading-relaxed">
            مقالات تخصصی، آموزش‌ها و تحلیل‌های به‌روز از دنیای علوم داده و هوش مصنوعی.
          </p>
        </div>
        <svg viewBox="0 0 1440 50" fill="none" className="w-full mt-16" style={{ marginBottom: -1 }}>
          <path d="M0 50L1440 50L1440 10C1080 50 360 50 0 10L0 50Z" fill="#F5F7FA" />
        </svg>
      </section>

      <section className="bg-background py-20">
        <div className="max-w-7xl mx-auto px-6">
          {/* Featured Post */}
          {featured && activeCategory === "همه" && (
            <div className="mb-12 bg-card border border-border rounded-2xl overflow-hidden hover:shadow-xl transition-shadow group cursor-pointer">
              <div className="grid md:grid-cols-2">
                <div className="h-64 md:h-auto bg-muted overflow-hidden">
                  <img src={featured.img} alt={featured.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-8 flex flex-col justify-center">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="bg-accent text-white text-xs font-bold px-2.5 py-1 rounded-full">ویژه</span>
                    <span className="text-accent text-xs font-bold bg-accent/10 px-2.5 py-1 rounded-full">{featured.category}</span>
                  </div>
                  <h2 className="text-primary font-extrabold text-2xl mb-3 leading-tight">{featured.title}</h2>
                  <p className="text-muted-foreground leading-relaxed mb-6 text-sm">{featured.excerpt}</p>
                  <div className="flex items-center gap-4 text-xs text-muted-foreground mb-6">
                    <span className="flex items-center gap-1"><User className="w-3.5 h-3.5" />{featured.author}</span>
                    <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" />{featured.readTime}</span>
                    <span className="flex items-center gap-1"><TrendingUp className="w-3.5 h-3.5" />{featured.views} بازدید</span>
                  </div>
                  <button className="self-start flex items-center gap-2 text-accent font-semibold text-sm hover:gap-3 transition-all">
                    مطالعه مقاله <ArrowLeft className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Filter */}
          <div className="flex flex-wrap gap-2 mb-8">
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

          {/* Posts Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((post) => (
              <div key={post.id} className="bg-card border border-border rounded-2xl overflow-hidden hover:shadow-lg hover:-translate-y-0.5 transition-all group cursor-pointer">
                <div className="h-48 bg-muted overflow-hidden">
                  <img src={post.img} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-6">
                  <span className="text-xs text-accent font-bold bg-accent/10 px-2 py-0.5 rounded-full">{post.category}</span>
                  <h3 className="text-primary font-bold mt-3 mb-2 leading-snug text-base">{post.title}</h3>
                  <p className="text-muted-foreground text-xs leading-relaxed mb-4">{post.excerpt}</p>
                  <div className="flex items-center justify-between pt-3 border-t border-border">
                    <div className="flex items-center gap-3 text-xs text-muted-foreground">
                      <span className="flex items-center gap-1"><User className="w-3 h-3" />{post.author.split(" ").slice(-1)[0]}</span>
                      <span className="flex items-center gap-1"><Clock className="w-3 h-3" />{post.readTime}</span>
                    </div>
                    <span className="text-xs text-muted-foreground">{post.date}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="bg-secondary/40 py-16">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <span className="text-accent text-sm font-bold uppercase tracking-widest">خبرنامه</span>
          <h2 className="text-2xl font-extrabold text-primary mt-2 mb-3">به‌روز بمانید</h2>
          <p className="text-muted-foreground text-sm mb-6">هر هفته جدیدترین مقالات و بینش‌های داده‌ای را در صندوق ورودی‌تان دریافت کنید.</p>
          <div className="flex gap-2 max-w-md mx-auto">
            <input
              type="email"
              placeholder="ایمیل خود را وارد کنید"
              className="flex-1 bg-card border border-border rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent"
            />
            <button className="bg-accent text-white font-bold px-5 py-3 rounded-xl hover:bg-accent/90 transition-colors shrink-0">
              ثبت‌نام
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
