# Google Cloud Platform Billing/Budget Notification on Slack
## Stack used
-   Google Cloud Billing
-   Google Cloud Pub/Sub
-   Google Cloud Functions
-   Slack IncomingWebhook

## Steps

### Cloud Functions
-   Go to [Google Cloud Functions](https://console.cloud.google.com/functions/add)
-   Give a name and minimal spec
-   Select Trigger as Pub/Sub
-   Create a new topic
-   Select Inline editor for now
-   Select Runtime Nodejs
-   Paste the `index.js` and `package.json` content on respective text area
-   Enter the corresponding function to execute
-   Expand `More` and give `SLACK_WEBHOOK_URL` environment variable which is slack incoming webhook url
-   Create the function

### Budget
-   Create a budget from [Budgets and alerts](https://console.cloud.google.com/billing) of Google Cloud Console
-   At the bottom on `Manage notifications`, connect to the Pub/Sub topic create above and we are done

It will send the budget amount along with the expenses to slack channel
