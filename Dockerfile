FROM node:20-alpine3.18 AS builder
WORKDIR /app
ENV NODE_ENV production
COPY package*.json /app/
RUN npm install
RUN npm ci --omit=dev
COPY . .
RUN npm run build

FROM nginx:mainline-alpine3.18-slim
COPY ./nginx/nginx.conf /etc/nginx/nginx.conf
RUN rm -rf /usr/share/nginx/html/*
COPY --from=builder /app/build /usr/share/nginx/html
EXPOSE 3000 80

ENTRYPOINT ["nginx", "-g", "daemon off;"]