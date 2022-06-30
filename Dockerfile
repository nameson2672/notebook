FROM peaceiris/mdbook:v0.4.18 as builder
COPY . .
RUN mdbook build .

FROM httpd:2.4
RUN rm -rf /etc/apache2/sites-enabled/000-default.conf
COPY --from=builder ./book/book /usr/local/apache2/htdocs/