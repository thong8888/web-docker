# Stage 1: Build React app
FROM node:18-alpine as build

WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Stage 2: Serve bằng nginx
FROM nginx:alpine

# Copy file build vào nginx
COPY --from=build /app/build /usr/share/nginx/html

# Expose cổng 80
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
# Chạy nginx ở foreground để container không bị tắt
# CMD ["nginx", "-g", "daemon off;"]
# Lệnh này giữ cho nginx chạy ở foreground, ngăn container bị tắt
# khi không có lệnh nào khác đang chạy.
# Nếu không có lệnh này, container sẽ dừng ngay sau khi khởi động
# vì không có tiến trình nào đang chạy trong foreground.
