import { region, logger } from 'firebase-functions';
const { https } = region('asia-east2');

export const ping = https.onRequest((request, response) => {
  logger.info('Pong!');
  response.send('Pong!');
});
