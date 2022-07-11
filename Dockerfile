# stage 1

FROM node:12-alpine 
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build

# stage 2
ARG FILES=/app/dist/primeraInfancia
FROM nginx:alpine
COPY ${FILES} /usr/share/nginx/html
EXPOSE 80



