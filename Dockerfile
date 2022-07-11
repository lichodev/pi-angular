# stage 1

FROM node:12-alpine as build
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build

# stage 2
FROM nginx:alpine
COPY --from=build /app/dist/primeraInfancia/ /usr/share/nginx/html
EXPOSE 80



