import { logger, region } from 'firebase-functions';
const { https } = region('asia-east2');

import line from './webhook/line';
import dialogflow from './webhook/dialogflow';

export const ping = https.onRequest((request, response) => {
  logger.info('Pong!');
  response.send('Pong!');
});

export const webhook = {
  line,
  dialogflow,
};
