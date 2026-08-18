import { useNavigate } from "react-router";
import { Award, Heart, Lightbulb, Target, Users, TrendingUp, ArrowLeft, CheckCircle } from "lucide-react";

const milestones = [
  { year: "۱۳۹۱", title: "تاسیس شرکت", desc: "پلمب با تمرکز بر هوش تجاری و گزارش‌دهی داده در تهران تاسیس شد." },
  { year: "۱۳۹۳", title: "اولین پروژه بزرگ", desc: "پیاده‌سازی سیستم تحلیل داده برای یک بانک بزرگ کشور." },
  { year: "۱۳۹۵", title: "توسعه تیم ML", desc: "راه‌اندازی واحد تخصصی یادگیری ماشین با جذب دکتراهای برتر." },
  { year: "۱۳۹۷", title: "۱۰۰ پروژه موفق", desc: "رسیدن به مایلستون ۱۰۰ پروژه تحویل‌شده در صنایع مختلف." },
  { year: "۱۳۹۹", title: "ورود به ابر", desc: "ارائه خدمات تحلیل داده مبتنی بر ابر و راه‌اندازی پلتفرم SaaS." },
  { year: "۱۴۰۱", title: "جایزه ملی", desc: "دریافت جایزه بهترین شرکت فناوری اطلاعات از وزارت ارتباطات." },
  { year: "۱۴۰۳", title: "امروز", desc: "بیش از ۲۵۰ پروژه، ۱۸۰ مشتری فعال و ۶۵ متخصص در تیم." },
];

const values = [
  { icon: Target, title: "دقت و صحت", desc: "داده‌های غلط بدتر از نداشتن داده‌اند. ما به کیفیت و دقت خروجی‌هایمان متعهدیم." },
  { icon: Lightbulb, title: "نوآوری مستمر", desc: "در دنیای داده همیشه چیز جدیدی هست. ما هرگز از یادگیری دست نمی‌کشیم." },
  { icon: Heart, title: "موفقیت مشتری", desc: "موفقیت ما در موفقیت مشتریانمان تعریف می‌شود — نه در تعداد پروژه‌ها." },
  { icon: Users, title: "همکاری واقعی", desc: "با تیم شما کار می‌کنیم، نه برای شما. دانش انتقال می‌دهیم، وابستگی ایجاد نمی‌کنیم." },
];

const partners = [
  "وزارت ارتباطات", "بانک ملت", "ایران خودرو", "پتروشیمی پارس",
  "همراه اول", "بورس تهران", "سازمان بهداشت", "آموزش و پرورش",
];

export default function About() {
  const navigate = useNavigate();

  return (
    <>
      {/* Hero */}
      <section className="bg-primary pt-20 pb-0 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: "radial-gradient(circle at 2px 2px, white 1px, transparent 0)", backgroundSize: "40px 40px" }} />
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center relative">
          <div>
            <span className="text-accent text-sm font-bold uppercase tracking-widest">درباره ما</span>
            <h1 className="text-4xl md:text-5xl font-extrabold text-white mt-3 mb-5 leading-tight">
              ۱۲ سال در خدمت داده‌های ایران
            </h1>
            <p className="text-white/65 text-lg leading-relaxed mb-8">
              پلمب از سال ۱۳۹۱ در حال تبدیل داده‌های خام به بینش‌های ارزشمند برای کسب‌وکارهای ایرانی است. ما باور داریم هر سازمانی — بزرگ یا کوچک — حق دارد از قدرت داده بهره‌مند شود.
            </p>
            <div className="grid grid-cols-3 gap-4">
              {[{ n: "۶۵+", l: "متخصص" }, { n: "۱۲", l: "سال سابقه" }, { n: "۲۵۰+", l: "پروژه" }].map((s) => (
                <div key={s.l} className="bg-white/5 rounded-xl p-4 text-center border border-white/10">
                  <div className="text-2xl font-extrabold text-accent">{s.n}</div>
                  <div className="text-white/50 text-xs mt-1">{s.l}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="rounded-2xl overflow-hidden bg-white/10 aspect-[4/3]">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=700&h=525&fit=crop&auto=format"
                alt="تیم پلمب"
                className="w-full h-full object-cover opacity-80"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 bg-accent rounded-2xl p-5 shadow-xl">
              <Award className="w-8 h-8 text-white mb-1" />
              <div className="text-white font-bold text-sm">جایزه ملی ۱۴۰۱</div>
              <div className="text-white/70 text-xs">بهترین شرکت فناوری</div>
            </div>
          </div>
        </div>
        <svg viewBox="0 0 1440 50" fill="none" className="w-full mt-16" style={{ marginBottom: -1 }}>
          <path d="M0 50L1440 50L1440 10C1080 50 360 50 0 10L0 50Z" fill="#F5F7FA" />
        </svg>
      </section>

      {/* Mission */}
      <section className="bg-background py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-accent text-sm font-bold uppercase tracking-widest">ماموریت ما</span>
              <h2 className="text-3xl font-extrabold text-primary mt-2 mb-5">
                دمکراتیزه کردن دسترسی به علوم داده
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                ما باور داریم که توانایی تصمیم‌گیری مبتنی بر داده نباید فقط برای شرکت‌های بزرگ با بودجه‌های کلان محفوظ باشد. پلمب با ارائه خدمات استاندارد جهانی در قالب مناسب برای بازار ایران، این مرز را برمی‌دارد.
              </p>
              <ul className="space-y-3">
                {[
                  "ارائه راه‌حل‌های متناسب با نیاز و بودجه",
                  "انتقال دانش به تیم‌های داخلی مشتریان",
                  "حمایت از رشد بلندمدت کسب‌وکارها",
                  "پشتیبانی مستمر پس از تحویل پروژه",
                ].map((f) => (
                  <li key={f} className="flex items-center gap-3 text-sm text-foreground">
                    <CheckCircle className="w-4 h-4 text-accent shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {values.map((v) => (
                <div key={v.title} className="bg-card border border-border rounded-2xl p-5 hover:shadow-md transition-shadow">
                  <v.icon className="w-8 h-8 text-accent mb-3" />
                  <h3 className="text-primary font-bold text-sm mb-2">{v.title}</h3>
                  <p className="text-muted-foreground text-xs leading-relaxed">{v.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="bg-secondary/40 py-20">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-14">
            <span className="text-accent text-sm font-bold uppercase tracking-widest">تاریخچه</span>
            <h2 className="text-3xl font-extrabold text-primary mt-2">مسیر رشد ما</h2>
          </div>
          <div className="relative">
            <div className="absolute right-[2.25rem] top-0 bottom-0 w-px bg-border" />
            <div className="space-y-8">
              {milestones.map((m, i) => (
                <div key={m.year} className="flex items-start gap-6">
                  <div className={`w-9 h-9 rounded-full flex items-center justify-center shrink-0 z-10 text-xs font-bold ${i === milestones.length - 1 ? "bg-accent text-white" : "bg-card border-2 border-accent text-accent"}`}>
                    {i === milestones.length - 1 ? "★" : String(i + 1)}
                  </div>
                  <div className="bg-card border border-border rounded-xl p-5 flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-accent font-bold text-sm">{m.year}</span>
                      <h3 className="text-primary font-bold">{m.title}</h3>
                    </div>
                    <p className="text-muted-foreground text-sm leading-relaxed">{m.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Partners */}
      <section className="bg-background py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-10">
            <span className="text-accent text-sm font-bold uppercase tracking-widest">مشتریان و شرکا</span>
            <h2 className="text-2xl font-extrabold text-primary mt-2">به ما اعتماد کرده‌اند</h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {partners.map((p) => (
              <div key={p} className="bg-card border border-border rounded-xl py-4 px-6 text-center text-sm font-semibold text-muted-foreground hover:text-primary hover:border-accent/30 hover:shadow-sm transition-all">
                {p}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary py-16">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <TrendingUp className="w-12 h-12 text-accent mx-auto mb-4" />
          <h2 className="text-3xl font-extrabold text-white mb-4">همین امروز شروع کنید</h2>
          <p className="text-white/60 mb-8 leading-relaxed">با کارشناسان ما صحبت کنید و ببینید چطور می‌توانیم کسب‌وکار شما را متحول کنیم.</p>
          <button onClick={() => navigate("/contact")} className="bg-accent hover:bg-accent/90 text-white font-bold px-8 py-3 rounded-xl transition-all hover:shadow-lg hover:shadow-accent/30 inline-flex items-center gap-2">
            مشاوره رایگان <ArrowLeft className="w-4 h-4" />
          </button>
        </div>
      </section>
    </>
  );
}
