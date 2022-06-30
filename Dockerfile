FROM peaceiris/mdbook:v0.4.18 as builder
COPY . .
RUN mdbook build .

FROM httpd:2.4
COPY --from=builder ./book/book /usr/local/apache2/htdocs/
#CMD sed -i “s/80/$PORT/g” /etc/apache2/sites-available/000-default.conf /etc/apache2/ports.conf && docker-php-entrypoint apache2-foreground
