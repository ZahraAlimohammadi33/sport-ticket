import { useState } from "react";
import { useNavigate } from "react-router";
import { Linkedin, Mail, Globe, ArrowLeft } from "lucide-react";

const team = [
  { name: "دکتر سارا محمدی", role: "مدیر ارشد علوم داده", dept: "رهبری", bio: "دکترای هوش مصنوعی از دانشگاه تهران. ۱۵ سال تجربه در ML و تحلیل داده. پیش از پلمب در Google DeepMind کار کرده است.", img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop&auto=format", skills: ["Machine Learning", "Python", "TensorFlow"] },
  { name: "مهندس علی رضایی", role: "معمار ارشد داده", dept: "معماری", bio: "کارشناسی ارشد مهندسی کامپیوتر از صنعتی شریف. طراح معماری داده برای بیش از ۸۰ سازمان بزرگ.", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&auto=format", skills: ["Apache Spark", "Kafka", "AWS"] },
  { name: "دکتر نیلوفر احمدی", role: "متخصص NLP", dept: "تحقیق", bio: "دکترای علوم شناختی با تخصص پردازش زبان طبیعی فارسی. مقالات متعدد در حوزه NLP فارسی.", img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop&auto=format", skills: ["NLP", "BERT", "PyTorch"] },
  { name: "مهندس کاوه صادقی", role: "مهندس داده ارشد", dept: "مهندسی", bio: "متخصص ETL و Data Pipeline. پیاده‌سازی زیرساخت داده برای شرکت‌های پتروشیمی و بانکی.", img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&auto=format", skills: ["dbt", "Airflow", "Snowflake"] },
  { name: "خانم پریسا کرمی", role: "تحلیلگر هوش تجاری", dept: "تحلیل", bio: "متخصص Power BI و Tableau با تجربه در صنایع خرده‌فروشی و لجستیک.", img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&auto=format", skills: ["Power BI", "Tableau", "SQL"] },
  { name: "مهندس دانیال موسوی", role: "مهندس MLOps", dept: "مهندسی", bio: "متخصص استقرار و مانیتورینگ مدل‌های ML در محیط تولید. تجربه در Kubernetes و Docker.", img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop&auto=format", skills: ["MLOps", "Kubernetes", "Kubeflow"] },
  { name: "دکتر ریحانه نوری", role: "متخصص آمار و داده", dept: "تحقیق", bio: "دکترای آمار کاربردی. تخصص در مدل‌سازی بیزی و آمار استنباطی برای تصمیم‌گیری.", img: "https://images.unsplash.com/photo-1598550874175-4d0ef436c909?w=400&h=400&fit=crop&auto=format", skills: ["Bayesian Stats", "R", "Stan"] },
  { name: "مهندس فرهاد تهرانی", role: "مدیر فناوری (CTO)", dept: "رهبری", bio: "کارآفرین تکنولوژی با سابقه تاسیس دو استارتاپ موفق. رهبر فنی پلمب از بدو تاسیس.", img: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop&auto=format", skills: ["System Design", "Leadership", "Cloud"] },
];

const depts = ["همه", "رهبری", "مهندسی", "تحقیق", "تحلیل", "معماری"];

export default function Team() {
  const navigate = useNavigate();
  const [activeDept, setActiveDept] = useState("همه");

  const filtered = activeDept === "همه" ? team : team.filter((m) => m.dept === activeDept);

  return (
    <>
      {/* Hero */}
      <section className="bg-primary pt-20 pb-0 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: "radial-gradient(circle at 2px 2px, white 1px, transparent 0)", backgroundSize: "40px 40px" }} />
        <div className="max-w-7xl mx-auto px-6 text-center relative">
          <span className="text-accent text-sm font-bold uppercase tracking-widest">تیم ما</span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mt-3 mb-5">
            ذهن‌هایی که داده را زنده می‌کنند
          </h1>
          <p className="text-white/60 max-w-2xl mx-auto text-lg leading-relaxed">
            تیم ما متشکل از دکتراها، مهندسان ارشد و متخصصان باتجربه است که با اشتیاق برای حل مسائل پیچیده کار می‌کنند.
          </p>
        </div>
        <svg viewBox="0 0 1440 50" fill="none" className="w-full mt-16" style={{ marginBottom: -1 }}>
          <path d="M0 50L1440 50L1440 10C1080 50 360 50 0 10L0 50Z" fill="#F5F7FA" />
        </svg>
      </section>

      {/* Team Grid */}
      <section className="bg-background py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-wrap gap-2 mb-10 justify-center">
            {depts.map((d) => (
              <button
                key={d}
                onClick={() => setActiveDept(d)}
                className={`px-4 py-2 rounded-full text-sm font-semibold transition-colors ${activeDept === d ? "bg-accent text-white" : "bg-card border border-border text-muted-foreground hover:text-primary"}`}
              >
                {d}
              </button>
            ))}
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filtered.map((member) => (
              <div key={member.name} className="bg-card border border-border rounded-2xl overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all group">
                <div className="aspect-square bg-muted overflow-hidden">
                  <img src={member.img} alt={member.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-5">
                  <span className="text-xs text-accent font-bold bg-accent/10 px-2 py-0.5 rounded-full">{member.dept}</span>
                  <h3 className="text-primary font-bold mt-2 mb-0.5">{member.name}</h3>
                  <div className="text-muted-foreground text-xs mb-3">{member.role}</div>
                  <p className="text-muted-foreground text-xs leading-relaxed mb-4">{member.bio}</p>
                  <div className="flex flex-wrap gap-1 mb-4">
                    {member.skills.map((s) => (
                      <span key={s} className="text-xs bg-secondary text-secondary-foreground px-2 py-0.5 rounded-md font-medium">{s}</span>
                    ))}
                  </div>
                  <div className="flex gap-2 pt-3 border-t border-border">
                    {[Linkedin, Mail, Globe].map((Icon, i) => (
                      <button key={i} className="w-7 h-7 rounded-full bg-muted hover:bg-accent/10 flex items-center justify-center transition-colors">
                        <Icon className="w-3.5 h-3.5 text-muted-foreground" />
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Us */}
      <section className="bg-accent py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-extrabold text-white mb-4">به تیم ما بپیوندید</h2>
          <p className="text-white/75 mb-8 leading-relaxed max-w-xl mx-auto">
            اگر علاقه‌مند به علوم داده هستید و می‌خواهید روی مسائل واقعی کار کنید، همیشه به دنبال استعدادهای برتر هستیم.
          </p>
          <button
            onClick={() => navigate("/contact")}
            className="bg-white text-accent font-bold px-8 py-3 rounded-xl hover:bg-white/90 transition-colors inline-flex items-center gap-2"
          >
            موقعیت‌های شغلی <ArrowLeft className="w-4 h-4" />
          </button>
        </div>
      </section>
    </>
  );
}
