import axios from 'axios'
import * as url from './urlConfig'

export const kafkaApi = {
  getTopics() {
    return axios.get(`${url.KAFKA_REST}/topics`);
  }
}
