FROM ubuntu:latest
MAINTAINER "Mustafiz"
RUN apt update -y
RUN apt install nginx -y
EXPOSE 80
COPY index.html /usr/share/nginx/html/index.html
COPY index.html /var/www/html/index.html
CMD ["nginx","-g","daemon off;"]