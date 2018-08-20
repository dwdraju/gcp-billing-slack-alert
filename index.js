const IncomingWebhook = require('@slack/client').IncomingWebhook;
const SLACK_WEBHOOK_URL = process.env.SLACK_WEBHOOK_URL;
const webhook = new IncomingWebhook(SLACK_WEBHOOK_URL);


module.exports.subscribe = (event, callback) => {
  const pubsubMessage = eventToBilling(event.data.data);

// Send message to Slack.
  const message = createSlackMessage(pubsubMessage);
  webhook.send(message, (err, res) => {
    if (err) console.log('Error:', err);
    callback(err);
  });
};

const eventToBilling = (data) => {
  return JSON.parse(new Buffer(data, 'base64').toString());
}

const createSlackMessage = (pubsubMessage) => {
  let message = {
    text: `Budget Amount: ${pubsubMessage.budgetAmount}, CostAmount: ${pubsubMessage.costAmount}, Budget: ${pubsubMessage.budgetDisplayName}`,
    mrkdwn: true,
  };
  return message
}
