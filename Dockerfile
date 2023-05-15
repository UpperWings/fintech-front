FROM node:16.15.1 as build 

WORKDIR /react-app
COPY package*.json .
RUN npm install
COPY . .
RUN npm run build

FROM nginx
COPY ./nginx/nginx.conf /etc/nginx/nginx.conf
COPY --from=build /react-app/build /usr/share/nginx/html