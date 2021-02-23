import { region, logger } from 'firebase-functions';
const { https } = region('asia-east2');

const dialogflowWebhook = https.onRequest((request, response) => {
  logger.info('Dialogflow!');
  response.send('Dialogflow!');
});

export default dialogflowWebhook;
