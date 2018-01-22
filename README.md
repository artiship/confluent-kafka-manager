# confluent-kafka-manager

> confluent kafka manager

## Install confluent Kafka

- Download Confluent Kafka

  [https://www.confluent.io/download/](https://www.confluent.io/download/)

- Start Confluent Kafka

  ``` bash
  > bin/confluent start

  ```
- Services

| Component | Port |
|-----------|------|
|Apache Kafka brokers (plain text)           |9092      |
|Kafka Connect REST API           |8083      |
|REST Proxy           |8082      |
|Schema Registry REST API           |8081      |
|ZooKeeper           |2181      |

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run all tests
npm test
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
