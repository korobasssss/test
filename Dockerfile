FROM node:20-alpine3.18 AS build
WORKDIR /app
ENV NODE_ENV production
COPY package*.json /app/
RUN npm install
RUN npm ci --omit=dev
COPY . .
RUN npm run build

FROM nginx:mainline-alpine3.18-slim
COPY --from=build /app/nginx/nginx.conf /etc/nginx/conf.d/default.conf
WORKDIR /usr/share/nginx/html
RUN rm -rf ./*
COPY --from=build /app/build .
EXPOSE 3000
ENTRYPOINT ["nginx", "-g", "daemon off;"]