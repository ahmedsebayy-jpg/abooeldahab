# ABO EL DAHAB — Premium Automotive Oils Website
# موقع أبو الدهب لزيوت السيارات

Official website for **Abo El Dahab** automotive oils and motor lubricants store in Faqous, Al Sharqia, Egypt. Designed with a premium dark automotive aesthetic inspired by Black Box Garage.

---

## 🚀 خطوتان لرفع الموقع على GitHub و Netlify

### 1. الرفع على GitHub (Upload to GitHub)

أنشئ مستودعاً جديداً (New Repository) على حسابك في GitHub، ثم نفّذ الأوامر التالية في مجلد المشروع:

```bash
git add .
git commit -m "feat: Abo El Dahab premium website ready for production"
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPOSITORY.git
git branch -M main
git push -u origin main
```
*(استبدل `YOUR_USERNAME/YOUR_REPOSITORY` برابط مستودعك الخاص على GitHub)*

---

### 2. الربط مع Netlify (Connect to Netlify)

1. ادخل على حسابك في [Netlify](https://app.netlify.com).
2. اضغط على **"Add new site"** ثم اختر **"Import an existing project"**.
3. اختر **GitHub** ثم اختر المستودع الخاص بك.
4. سيقرأ Netlify ملف `netlify.toml` تلقائياً بالإعدادات المجهزة مسبقاً:
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`
   - **Node Version**: `20`
5. اضغط **"Deploy site"**. سيتم البناء والتشغيل التلقائي بنجاح وبدون أي شاشة بيضاء!

---

## 🛠️ الأوامر المحلية (Local Development)

```bash
# تثبيت الحزم
npm install

# تشغيل بيئة التطوير
npm run dev

# بناء النسخة الإنتاجية
npm run build
```

---

## 📍 بيانات المتجر (Store Details)

- **اسم المتجر**: أبو الدهب لزيوت السيارات (Abo El Dahab)
- **العنوان**: شارع الإنتاج، الديدامون، فاقوس، محافظة الشرقية، مصر
- **الهاتف / واتساب**: +201022556513
- **TikTok**: [@abo.eldahabb](https://www.tiktok.com/@abo.eldahabb)
- **Instagram**: [@abooeldahab](https://www.instagram.com/abooeldahab/)
