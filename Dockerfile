# stage 1

FROM node:12-alpine 
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build
COPY /app/dist/primeraInfancia/ /root/client
# stage 2
FROM nginx:alpine
COPY /root/client /usr/share/nginx/html
EXPOSE 80



