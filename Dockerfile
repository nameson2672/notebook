FROM peaceiris/mdbook:v0.4.18 as builder
COPY . .
RUN mdbook build .

FROM node
WORKDIR .
COPY . .
RUN npm install
CMD [ "node", "index.js" ]

