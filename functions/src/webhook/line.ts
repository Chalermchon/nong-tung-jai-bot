import { logger, region } from 'firebase-functions';
const { https } = region('asia-east2');

const lineWebhook = https.onRequest((request, response) => {
  logger.info('LINE!');
  response.send('LINE!');
});

export default lineWebhook;
