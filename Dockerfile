# stage 1

FROM node:12-alpine
WORKDIR /app
COPY . .
RUN npm install
RUN chmod -R 777 /app/node_modules/
RUN rm -R '/app/node_modules/*'
RUN npm ci && npm run build

# stage 2

FROM nginx:alpine
COPY --from=node:12-alpine /app/dist/primeraInfancia /usr/share/nginx/html
EXPOSE 80
