FROM nginx:alpine
COPY /dist/primeraInfancia /usr/share/nginx/html
EXPOSE 80

