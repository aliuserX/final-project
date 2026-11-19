# --- مرحله اول: بیلد کردن پروژه ---
FROM node:20-alpine AS builder

WORKDIR /app

# کپی کردن فایل‌های پکیج برای نصب وابستگی‌ها
COPY package*.json ./
RUN npm install

# کپی کردن کل پروژه و بیلد کردن
COPY . .
RUN npm run build

# --- مرحله دوم: سرو کردن با Nginx برای پروداکشن ---
FROM nginx:alpine

# کپی کردن فایل‌های بیلد شده از مرحله قبل به پوشه Nginx
COPY --from=builder /app/dist /usr/share/nginx/html

# پورت پیش‌فرض Nginx
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
