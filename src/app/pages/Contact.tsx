import { useState } from "react";
import { Mail, MapPin, Phone, Clock, CheckCircle, MessageSquare, Building, Send } from "lucide-react";

const offices = [
  { city: "تهران (دفتر مرکزی)", address: "خیابان ولیعصر، برج تجاری آرمان، طبقه ۱۲", phone: "۰۲۱-۸۸۱۲۳۴۵۶", email: "tehran@plamb.ir" },
  { city: "اصفهان", address: "خیابان چهارباغ عباسی، مجتمع فناوری نوآوری، واحد ۳۰۴", phone: "۰۳۱-۳۲۱۲۳۴۵۶", email: "isfahan@plamb.ir" },
  { city: "مشهد", address: "بلوار وکیل‌آباد، مرکز رشد فناوری، طبقه ۵", phone: "۰۵۱-۳۸۱۲۳۴۵۶", email: "mashhad@plamb.ir" },
];

const faqs = [
  { q: "مدت زمان اجرای یک پروژه معمولی چقدر است؟", a: "بسته به پیچیدگی پروژه، از ۲ هفته برای داشبوردهای ساده تا ۱۲ ماه برای پروژه‌های Data Warehouse کامل متفاوت است. در جلسه اول تخمین دقیق‌تری ارائه می‌دهیم." },
  { q: "آیا مشاوره اولیه رایگان است؟", a: "بله. اولین جلسه مشاوره (۶۰ تا ۹۰ دقیقه) کاملاً رایگان است و در آن نیازها، چالش‌ها و راه‌حل‌های احتمالی را بررسی می‌کنیم." },
  { q: "آیا با شرکت‌های کوچک هم کار می‌کنید؟", a: "قطعاً. پلن‌های ما از استارتاپ‌های کوچک تا سازمان‌های بزرگ را پوشش می‌دهد. راه‌حل‌هایمان با بودجه و نیاز شما تنظیم می‌شود." },
  { q: "چه صنایعی را پوشش می‌دهید؟", a: "بانکداری، بیمه، خرده‌فروشی، صنعت، سلامت، رسانه، لجستیک و بیش از ۱۵ صنعت دیگر. تیم ما تجربه‌ی متنوع صنعتی دارد." },
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "", company: "", email: "", phone: "", subject: "", message: "", budget: ""
  });
  const [submitted, setSubmitted] = useState(false);
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      {/* Hero */}
      <section className="bg-primary pt-20 pb-0 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: "radial-gradient(circle at 2px 2px, white 1px, transparent 0)", backgroundSize: "40px 40px" }} />
        <div className="max-w-7xl mx-auto px-6 text-center relative">
          <span className="text-accent text-sm font-bold uppercase tracking-widest">تماس با ما</span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mt-3 mb-5">
            بیایید صحبت کنیم
          </h1>
          <p className="text-white/60 max-w-xl mx-auto text-lg leading-relaxed">
            یک جلسه مشاوره رایگان رزرو کنید و ببینید چطور می‌توانیم کسب‌وکار شما را با داده متحول کنیم.
          </p>
          <div className="flex justify-center flex-wrap gap-6 mt-10">
            {[{ icon: Clock, text: "پاسخ در کمتر از ۲ ساعت" }, { icon: MessageSquare, text: "مشاوره اول رایگان" }, { icon: CheckCircle, text: "بدون تعهد اولیه" }].map(({ icon: Icon, text }) => (
              <div key={text} className="flex items-center gap-2 text-white/60 text-sm">
                <Icon className="w-4 h-4 text-accent" />
                {text}
              </div>
            ))}
          </div>
        </div>
        <svg viewBox="0 0 1440 50" fill="none" className="w-full mt-16" style={{ marginBottom: -1 }}>
          <path d="M0 50L1440 50L1440 10C1080 50 360 50 0 10L0 50Z" fill="#F5F7FA" />
        </svg>
      </section>

      {/* Main Content */}
      <section className="bg-background py-20">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-5 gap-12">
          {/* Left: Info */}
          <div className="lg:col-span-2 space-y-8">
            <div>
              <h2 className="text-2xl font-extrabold text-primary mb-6">اطلاعات تماس</h2>
              <div className="space-y-4">
                {[
                  { icon: Phone, label: "تلفن مرکزی", value: "۰۲۱-۸۸۱۲۳۴۵۶" },
                  { icon: Mail, label: "ایمیل", value: "info@plamb.ir" },
                  { icon: Clock, label: "ساعات کاری", value: "شنبه تا چهارشنبه، ۸ تا ۱۷" },
                ].map(({ icon: Icon, label, value }) => (
                  <div key={label} className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-accent/10 rounded-xl flex items-center justify-center shrink-0">
                      <Icon className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <div className="text-xs text-muted-foreground mb-0.5">{label}</div>
                      <div className="font-semibold text-primary text-sm">{value}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Offices */}
            <div>
              <h3 className="font-bold text-primary mb-4 flex items-center gap-2">
                <Building className="w-4 h-4 text-accent" />
                دفاتر ما
              </h3>
              <div className="space-y-3">
                {offices.map((office) => (
                  <div key={office.city} className="bg-card border border-border rounded-xl p-4">
                    <div className="font-bold text-sm text-primary mb-1">{office.city}</div>
                    <div className="text-xs text-muted-foreground leading-relaxed mb-2">{office.address}</div>
                    <div className="flex items-center gap-3 text-xs text-accent">
                      <span className="flex items-center gap-1"><Phone className="w-3 h-3" />{office.phone}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Form */}
          <div className="lg:col-span-3">
            <div className="bg-card border border-border rounded-2xl p-8 shadow-sm">
              {submitted ? (
                <div className="text-center py-16">
                  <div className="w-20 h-20 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="w-10 h-10 text-accent" />
                  </div>
                  <h3 className="text-2xl font-extrabold text-primary mb-3">پیام شما ارسال شد!</h3>
                  <p className="text-muted-foreground leading-relaxed max-w-sm mx-auto">
                    کارشناسان ما حداکثر ظرف ۲ ساعت کاری با شما تماس خواهند گرفت.
                  </p>
                </div>
              ) : (
                <>
                  <h2 className="text-xl font-extrabold text-primary mb-6">ارسال پیام</h2>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="text-xs font-semibold text-muted-foreground mb-1.5 block">نام و نام خانوادگی *</label>
                        <input
                          required
                          type="text"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="علی احمدی"
                          className="w-full bg-input-background border border-border rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-colors"
                        />
                      </div>
                      <div>
                        <label className="text-xs font-semibold text-muted-foreground mb-1.5 block">نام شرکت</label>
                        <input
                          type="text"
                          value={formData.company}
                          onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                          placeholder="شرکت نمونه"
                          className="w-full bg-input-background border border-border rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-colors"
                        />
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="text-xs font-semibold text-muted-foreground mb-1.5 block">ایمیل *</label>
                        <input
                          required
                          type="email"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="ali@company.ir"
                          className="w-full bg-input-background border border-border rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-colors"
                        />
                      </div>
                      <div>
                        <label className="text-xs font-semibold text-muted-foreground mb-1.5 block">شماره تماس</label>
                        <input
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="۰۹۱۲XXXXXXX"
                          className="w-full bg-input-background border border-border rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-colors"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="text-xs font-semibold text-muted-foreground mb-1.5 block">موضوع درخواست</label>
                      <select
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        className="w-full bg-input-background border border-border rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-colors"
                      >
                        <option value="">انتخاب کنید</option>
                        <option>مشاوره اولیه رایگان</option>
                        <option>درخواست پروپوزال</option>
                        <option>همکاری تجاری</option>
                        <option>استخدام</option>
                        <option>سایر</option>
                      </select>
                    </div>
                    <div>
                      <label className="text-xs font-semibold text-muted-foreground mb-1.5 block">بودجه تقریبی پروژه</label>
                      <select
                        value={formData.budget}
                        onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                        className="w-full bg-input-background border border-border rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-colors"
                      >
                        <option value="">انتخاب کنید (اختیاری)</option>
                        <option>کمتر از ۵۰ میلیون تومان</option>
                        <option>۵۰ تا ۲۰۰ میلیون تومان</option>
                        <option>۲۰۰ تا ۵۰۰ میلیون تومان</option>
                        <option>بیش از ۵۰۰ میلیون تومان</option>
                      </select>
                    </div>
                    <div>
                      <label className="text-xs font-semibold text-muted-foreground mb-1.5 block">شرح درخواست *</label>
                      <textarea
                        required
                        rows={4}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="توضیح کوتاهی از نیاز یا چالش کسب‌وکارتان بنویسید..."
                        className="w-full bg-input-background border border-border rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-colors resize-none"
                      />
                    </div>
                    <button
                      type="submit"
                      className="w-full bg-accent hover:bg-accent/90 text-white font-bold py-4 rounded-xl transition-all hover:shadow-lg hover:shadow-accent/25 flex items-center justify-center gap-2"
                    >
                      <Send className="w-4 h-4" />
                      ارسال درخواست
                    </button>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-secondary/40 py-20">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-12">
            <span className="text-accent text-sm font-bold uppercase tracking-widest">سوالات متداول</span>
            <h2 className="text-3xl font-extrabold text-primary mt-2">پرسش‌های رایج</h2>
          </div>
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-card border border-border rounded-xl overflow-hidden">
                <button
                  onClick={() => setActiveFaq(activeFaq === i ? null : i)}
                  className="w-full text-right px-6 py-4 flex items-center justify-between gap-4"
                >
                  <span className="font-semibold text-primary text-sm">{faq.q}</span>
                  <span className={`text-accent text-xl font-bold shrink-0 transition-transform ${activeFaq === i ? "rotate-45" : ""}`}>+</span>
                </button>
                {activeFaq === i && (
                  <div className="px-6 pb-5">
                    <p className="text-muted-foreground text-sm leading-relaxed border-t border-border pt-4">{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
