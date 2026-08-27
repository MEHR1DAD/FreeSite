# 🚀 FreeSite — موتور سایت‌ساز رایگان و بدون کد
### Free, Open-Source & No-Code Static Website Builder
#### Powered by Astro SSG + Tailwind CSS + Sveltia/Decap CMS + Cloudflare Pages

<p align="center">
  <a href="https://deploy.workers.cloudflare.com/?url=https://github.com/MEHR1DAD/FreeSite">
    <img src="https://deploy.workers.cloudflare.com/button" alt="Deploy to Cloudflare" height="40" />
  </a>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Astro-5.x-BC52EE.svg?style=for-the-badge&logo=astro&logoColor=white" alt="Astro" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-3.4-38B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind CSS" />
  <img src="https://img.shields.io/badge/Sveltia_CMS-Git--Backed-FF3E00.svg?style=for-the-badge" alt="Sveltia CMS" />
  <img src="https://img.shields.io/badge/Cloudflare_Pages-100%25_Free-F38020.svg?style=for-the-badge&logo=cloudflare&logoColor=white" alt="Cloudflare" />
  <img src="https://img.shields.io/badge/RTL%20%2F%20LTR-Full_Support-6366F1.svg?style=for-the-badge" alt="RTL/LTR" />
</p>

---

## 🌟 معرفی پروژه (Overview)

**FreeSite** یک موتور سایت‌ساز مدرن، رایگان و بدون نیاز به سرور (Jamstack) است که به شما امکان می‌دهد ظرف کمتر از **۲ دقیقه** یک وبسایت شخصی، رزومه، پورتفولیو یا شرکتی فوق‌سریع و دو زبانه بسازید و آن را بدون پرداخت هیچ‌گونه هزینه هاست یا سرور روی **Cloudflare Pages** میزبانی کنید.

کلیه تغییرات و متون از طریق یک پنل گرافیکی بدون کد در مسیر `/admin` (توسعه‌یافته بر پایه Sveltia / Decap CMS) انجام شده و به طور خودکار به صورت کامیت مستقیم در ریپازیتوری گیت‌هاب شما ذخیره می‌گردد.

---

## ✨ ویژگی‌های کلیدی (Key Features)

- ⚡ **بیلد فوق‌سریع و صفر هزینه**: معماری استاتیک Astro با امتیاز ۱۰۰ در Google PageSpeed و هاستینگ رایگان کلودفلر.
- 🎨 **۱۴ واریانت قالب متنوع و آماده**: ۱۰ قالب شخصی (رزومه، ترمینال، نئون، بنتو و...) + ۴ قالب شرکتی و خدماتی.
- 🌍 **پشتیبانی کامل دو زبانه و راست‌چین (RTL/LTR)**: مجهز به فونت استاندارد وب فارسی **Vazirmatn** و فونت انگلیسی **Inter**.
- 🛠️ **پنل مدیریت بدون کد (Git-Backed CMS)**: محیط مدیریت محتوا در `/admin` بدون نیاز به نصب پایگاه داده و بک‌اند سروری.
- 📝 **موتور وبلاگ و سئو**: پشتیبانی از کالکشن‌های تایپ‌سیف مارک‌داون، تصاویر شاخص، متادیتای سئو، OpenGraph و فید RSS.
- 🔄 **پیش‌نمایش زنده قالب‌ها**: امکان تست و جابه‌جایی سریع بین تمامی تم‌ها به کمک منوی کشویی هوشمند.

---

## 🎨 راهنمای قالب‌ها (Themes Engine)

تمامی قالب‌ها از طریق فایل `src/config/site.json` یا پنل مدیریت `/admin` قابل انتخاب هستند:

### ۱. قالب‌های شخصی و پورتفولیو (Personal Themes - 10 Variants)
| نام تم (Theme Key) | عنوان فارسی | مشخصات و کاربرد |
| :--- | :--- | :--- |
| `minimal-dark` | 🌙 مینیمال تاریک | طراحی دارک شیک با درخشش ملایم، تایم‌لاین سوابق و مهارت‌ها |
| `minimal-light` | ☀️ مینیمال روشن | استایل سوئیسی روشن، فضای تنفس بالا و تایپوگرافی تمیز |
| `card-bento` | 🍱 بنتو گرید مدرن | چیدمان ماژولار کارتی الهام‌گرفته از سیستم طراحی اپل |
| `resume-cv` | 📄 رزومه و کارنامه | ساختار رسمی رزومه با دکمه چاپ و دریافت نسخه PDF |
| `terminal-tech` | 💻 ترمینال و هکری | شبیه‌ساز خط فرمان لینوکس با فونت مونو و دستورات بش |
| `glassmorphism` | 🪟 شیشه مات | افکت شیشه مات (Frosted Glass) با انیمیشن پس‌زمینه |
| `cyberpunk-neon` | ⚡ نئونی سایبرپانک | رنگ‌های کنتراست بالا نئونی (Cyan/Magenta) و شبکه گرید |
| `aurora-gradient` | 🌌 امواج شفق قطبی | گرادیان‌های نرم و امواج شناور شفق قطبی |
| `developer-portfolio` | 👨‍💻 پورتفولیو برنامه‌نویس | ماک‌آپ کدهای تایپ‌اسکریپت، پروژه‌های متن‌باز و استک |
| `bio-link` | 🔗 هاب بیو و لینک‌ها | لندینگ موبایل‌محور مشابه Linktree با دکمه‌های سریع |

### ۲. قالب‌های شرکتی و کسب‌وکار (Business Themes - 4 Variants)
| نام تم (Theme Key) | عنوان فارسی | مشخصات و کاربرد |
| :--- | :--- | :--- |
| `corporate` | 🏢 شرکتی و سازمانی | لندینگ شرکتی با شمارنده‌های آمار، معرفی خدمات و تماس |
| `services-consulting` | 💼 خدمات و مشاوره | مناسب مشاوران و آژانس‌ها همراه با پکیج‌های قیمتی |
| `product-showcase` | 🛍️ کاتالوگ محصولات | ویترین نمایش محصولات دیجیتال، ویژگی‌ها و برچسب‌های خرید |
| `startup-saas` | 🚀 استارتاپی و SaaS | لندینگ مدرن SaaS با ماک‌آپ دشبورد و بخش سوالات متداول |

---

## 🚀 استقرار با یک کلیک (Deploy to Cloudflare)

### روش ۱: استقرار ۱۰۰٪ خودکار و ۱-کلیکه (پیشنهادی)
روی دکمه رسمی زیر کلیک کنید تا مخزن در گیت‌هاب شما فورک/کلون شده و بر اساس فایل `wrangler.json`، کلودفلر بدون نیاز به پر کردن هیچ فرمی پروژه را مستقر کند:

[![Deploy to Cloudflare](https://deploy.workers.cloudflare.com/button)](https://deploy.workers.cloudflare.com/?url=https://github.com/MEHR1DAD/FreeSite)

---

### روش ۲: اتصال دستی از طریق پنل Cloudflare Pages
در صورتی که می‌خواهید مخزن را مستقیماً از داشبورد کلودفلر اضافه فرمایید:
1. در داشبورد کلودفلر به بخش **Workers & Pages > Create application > Pages > Connect to Git** بروید.
2. ریپازیتوری خود را انتخاب کنید.
3. در بخش تنظیمات بیلد:
   - **Framework preset**: `Astro` (یا `None`)
   - **Build command**: `npm run build`
   - **Build output directory**: `dist`
4. بر روی **Save and Deploy** کلیک کنید.

---

## 🔐 راهنمای راه‌اندازی پنل ادمین (/admin)

پنل ادمین FreeSite از **Sveltia CMS** استفاده می‌کند که به طور مستقیم با گیت‌هاب هماهنگ است:

1. به آدرس `https://your-site.pages.dev/admin` بروید.
2. بر روی دکمه **Login with GitHub** کلیک کنید.
3. دسترسی مخزن را تأیید کنید.
4. اکنون می‌توانید تمام متون، تم انتخابی، تصاویر آواتار و لوگو، و مقالات وبلاگ را به صورت ویژوال ویرایش کنید. هر ذخیره‌سازی، یک کامیت واقعی در ریپازیتوری شما ایجاد کرده و کلودفلر ظرف چند ثانیه سایت را به‌روز می‌کند!

---

## 💻 توسعه و اجرای لوکال (Local Development)

```bash
# ۱. کلون کردن ریپازیتوری
git clone https://github.com/MEHR1DAD/FreeSite.git
cd FreeSite

# ۲. نصب پکیج‌ها
npm install

# ۳. اجرای سرور توسعه محلی
npm run dev

# ۴. بیلد خروجی استاتیک
npm run build

# ۵. پیش‌نمایش خروجی بیلد
npm run preview
```

---

## 📁 ساختار فایل‌های پروژه (Project Structure)

```text
FreeSite/
├── public/
│   ├── admin/
│   │   ├── config.yml     # پیکربندی کالکشن‌ها و فیلدهای CMS
│   │   └── index.html     # فایل بارگذاری Sveltia CMS
│   └── images/            # آواتارها، لوگوها و تصاویر مقالات
├── src/
│   ├── components/
│   │   ├── common/        # Icon, Navbar, Footer, ThemeSwitcher, LanguageSwitcher
│   │   └── themes/        # ۱۰ تم شخصی و ۴ تم شرکتی
│   │       ├── personal/
│   │       ├── business/
│   │       └── ThemeRenderer.astro
│   ├── config/
│   │   └── site.json      # فایل اصلی تنظیمات و داده‌های سایت
│   ├── content/
│   │   ├── blog/          # مقالات مارک‌داون
│   │   └── config.ts      # اسکیمای Zod کالکشن‌ها
│   ├── layouts/
│   │   └── BaseLayout.astro
│   ├── pages/
│   │   ├── blog/
│   │   │   ├── [...slug].astro
│   │   │   └── index.astro
│   │   ├── index.astro
│   │   └── rss.xml.js
│   ├── styles/
│   │   └── global.css
│   └── utils/
│       └── config.ts
├── astro.config.mjs
├── tailwind.config.mjs
└── package.json
```

---

## 📄 لایسنس (License)

این پروژه تحت لایسنس [MIT](LICENSE) منتشر شده است و استفاده از آن برای مقاصد شخصی و تجاری کاملاً رایگان است.
