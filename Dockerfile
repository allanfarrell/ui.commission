FROM node:latest
RUN addgroup app && adduser -S -G app app
USER app
#RUN mkdir -p /usr/src/app
#WORKDIR /usr/src/app
WORKDIR /app
COPY package*.json ./

RUN npm install -g @angular/cli

#COPY . ./
#RUN npm install
