FROM google/nodejs:latest

ENV DEV /home/dev

RUN npm install jshint -g

RUN cd /home && npm install jshint-html-reporter --save

COPY . $DEV

WORKDIR $DEV

ENTRYPOINT ["./run.sh"]
