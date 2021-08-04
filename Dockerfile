# Estagio 1 - Será responsavel em construir nossa aplicação
FROM node:alpine as node
RUN mkdir /app
WORKDIR /app
COPY package.json /app/

RUN npm i npm@latest -g
RUN npm install
COPY ./ /app/

ARG env=prod
RUN npm run build

# Estagio 2 - Será responsavel por expor a aplicação
FROM nginx:alpine
COPY --from=node /app/dist/webapp-mrproft /usr/share/nginx/html
COPY ./nginx-custom.conf /etc/nginx/conf.d/default.conf
