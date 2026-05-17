FROM node:18-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci --legacy-peer-deps
COPY . .
RUN npm run build

FROM nginx:alpine
COPY --from=builder /app/out /usr/share/nginx/html
# Nginx template to listen on Cloud Run's dynamic PORT and serve static files
RUN mkdir -p /etc/nginx/templates && echo 'server { listen ${PORT}; location / { root /usr/share/nginx/html; index index.html; try_files $uri $uri/ /index.html; } }' > /etc/nginx/templates/default.conf.template
