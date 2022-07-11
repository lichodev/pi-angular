# stage 1

FROM node:12-alpine 
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build

# stage 2
FROM nginx:alpine
COPY ./dist/primeraInfancia /usr/share/nginx/html
EXPOSE 80

