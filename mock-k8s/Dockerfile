FROM node:8.4.0-alpine

ENV APP_DIR=/opt/app-root
ENV PORT=8080

RUN mkdir -p /opt/app-root

COPY package.json /tmp/package.json
RUN \
    cd /tmp && \
    npm install --production && \
    npm cache verify

# Application setup
RUN cp -a /tmp/node_modules/ ${APP_DIR}

COPY .babelrc ${APP_DIR}/.babelrc
COPY src ${APP_DIR}/src
COPY package.json ${APP_DIR}/package.json

# ensure www-data user exists
RUN set -x ; \
  addgroup -g 82 -S www-data ; \
  adduser -u 82 -D -S -G www-data www-data && exit 0 ; exit 1
# 82 is the standard uid/gid for "www-data" in Alpine

WORKDIR ${APP_DIR}

RUN npm run build

RUN chown -R www-data.www-data ${APP_DIR}

USER www-data

EXPOSE ${PORT}

CMD ["npm", "start"]
