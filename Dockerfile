# stage 1

FROM node:12-alpine AS my-app-build
WORKDIR /app
COPY . .
RUN npm install
RUN npm ci && npm run build

# stage 2

FROM nginx:alpine
COPY --from=my-app-build /app/dist/primeraInfancia /usr/share/nginx/html
EXPOSE 80