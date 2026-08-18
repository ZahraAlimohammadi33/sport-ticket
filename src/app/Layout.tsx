import { useState } from "react";
import { NavLink, Outlet, useNavigate } from "react-router";
import { BarChart2, Menu, X } from "lucide-react";

const navItems = [
  { label: "خدمات", to: "/services" },
  { label: "درباره ما", to: "/about" },
  { label: "تیم", to: "/team" },
  { label: "پروژه‌ها", to: "/projects" },
  { label: "وبلاگ", to: "/blog" },
  { label: "تماس", to: "/contact" },
];

export default function Layout() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <div dir="rtl" className="min-h-screen bg-background text-foreground" style={{ fontFamily: "'Vazirmatn', sans-serif" }}>
      <header className="fixed top-0 inset-x-0 z-50 bg-primary/95 backdrop-blur-sm border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <NavLink to="/" className="flex items-center gap-3">
            <div className="w-9 h-9 bg-accent rounded-lg flex items-center justify-center">
              <BarChart2 className="w-5 h-5 text-white" />
            </div>
            <span className="text-white font-bold text-xl tracking-tight">پلمب</span>
            <span className="text-accent text-xs font-medium bg-accent/15 px-2 py-0.5 rounded-full">علوم داده</span>
          </NavLink>

          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  `px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                    isActive
                      ? "bg-white/15 text-white"
                      : "text-white/70 hover:text-white hover:bg-white/10"
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <span className="text-white/80 text-sm font-medium cursor-pointer hover:text-white transition-colors">
              ورود
            </span>
            <button
              onClick={() => navigate("/contact")}
              className="bg-accent hover:bg-accent/90 text-white text-sm font-semibold px-5 py-2 rounded-lg transition-all hover:shadow-lg hover:shadow-accent/25"
            >
              مشاوره رایگان
            </button>
          </div>

          <button
            className="md:hidden text-white p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {mobileOpen && (
          <div className="md:hidden bg-primary border-t border-white/10 px-6 py-4 flex flex-col gap-1">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                onClick={() => setMobileOpen(false)}
                className={({ isActive }) =>
                  `py-2.5 px-3 rounded-lg text-sm font-medium transition-colors ${
                    isActive ? "bg-white/15 text-white" : "text-white/70"
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
            <button
              onClick={() => { navigate("/contact"); setMobileOpen(false); }}
              className="mt-3 bg-accent text-white text-sm font-semibold px-5 py-2.5 rounded-lg text-center"
            >
              مشاوره رایگان
            </button>
          </div>
        )}
      </header>

      <main className="pt-16">
        <Outlet />
      </main>

      <footer className="bg-primary py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8 mb-10">
            <div className="md:col-span-2">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-9 h-9 bg-accent rounded-lg flex items-center justify-center">
                  <BarChart2 className="w-5 h-5 text-white" />
                </div>
                <span className="text-white font-bold text-xl">پلمب</span>
              </div>
              <p className="text-white/45 text-sm leading-relaxed max-w-sm">
                شرکت پلمب پیشرو در ارائه خدمات علوم داده، هوش مصنوعی و تحلیل کسب‌وکار در ایران است.
              </p>
            </div>
            <div>
              <h4 className="text-white font-bold text-sm mb-4">خدمات</h4>
              <ul className="space-y-2.5">
                {["هوش مصنوعی", "تحلیل داده", "مهندسی داده", "امنیت داده"].map((item) => (
                  <li key={item}>
                    <span className="text-white/45 hover:text-white text-sm transition-colors cursor-pointer">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold text-sm mb-4">شرکت</h4>
              <ul className="space-y-2.5">
                {navItems.map((item) => (
                  <li key={item.to}>
                    <NavLink to={item.to} className="text-white/45 hover:text-white text-sm transition-colors">
                      {item.label}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
            <p className="text-white/30 text-xs">© ۱۴۰۳ پلمب. تمام حقوق محفوظ است.</p>
            <div className="flex gap-4">
              {["حریم خصوصی", "شرایط استفاده"].map((item) => (
                <span key={item} className="text-white/30 hover:text-white/60 text-xs transition-colors cursor-pointer">{item}</span>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
