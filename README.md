<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo_text.svg" width="320" alt="Nest Logo" /></a>
</p>

[Nest.js](https://github.com/nestjs/nest)

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test
(Coverage included in coverage folder)

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Load Testing

I have also implemented load test in [attack.yml](attack.yml) using [Artillery](https://artillery.io/).
Load testing report is in [./report.json.html](report.json.html)

## Deployement
The application is Dockerized. You can find the [Dockerfile](Dockerfile) and [docker-compose.yml](docker-compose.yml).

## Swagger
The swagger API should be available on ```http://hostname:port/api```, or you can browse it here: [http://159.203.2.190:3200/api/](http://159.203.2.190:3200/api/)

Sample request: ```curl -X GET "http://159.203.2.190:3200/history?userId=38&from=2019-11-21&to=2021-11-21" -H "accept: application/json"```

There is not too much seed data at the moment, but I can easily add it on request.
