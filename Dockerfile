FROM nginx:alpine
COPY /root/primera-infancia/dist/primeraInfancia /usr/share/nginx/html
EXPOSE 80

