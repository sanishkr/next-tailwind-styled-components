FROM node:11

RUN mkdir /app
WORKDIR /app
COPY . .

RUN apt-get update 


RUN npm install
RUN npm run build

RUN apt-get install -y nginx 

COPY deploy/nginx-default /etc/nginx/sites-enabled/default

EXPOSE 3000
CMD sh ./deploy/commands.sh