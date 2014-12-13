FROM ruby:latest

RUN gem install rubocop

ENV DEV /home/dev

COPY . $DEV

WORKDIR $DEV

ENTRYPOINT ["./run.sh"]
