FROM node:21-alpine3.18 AS build
WORKDIR /app
COPY . .
RUN rm -rf node_modules/
RUN npm i --legacy-peer-deps
RUN npm run build

FROM nginx:mainline-alpine3.18-slim
COPY --from=build /app/nginx/nginx.conf /etc/nginx/conf.d/default.conf
WORKDIR /usr/share/nginx/html
RUN rm -rf ./*
COPY --from=build /app/build .
EXPOSE 3000
ENTRYPOINT ["nginx", "-g", "daemon off;"]
