FROM node:12-alpine as build
WORKDIR /app

COPY package*.json .
RUN npm install

COPY . .
RUN npm run build

# stage 2
FROM nginx:alpine
COPY --from=0 /app/dist/primeraInfancia /usr/share/nginx/html
COPY --from=0 /app/nginx.conf /etc/nginx/conf.d/default.conf

ENV BASE_URL=http://localhost:18080
EXPOSE 80

CMD ["/bin/sh",  "-c",  "envsubst < /usr/share/nginx/html/assets/env.template.js > /usr/share/nginx/html/assets/env.js && exec nginx -g 'daemon off;'"]
