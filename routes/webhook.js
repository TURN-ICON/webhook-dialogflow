var express = require('express');

var router = express.Router();
// Import the appropriate class
const {
  WebhookClient
} = require('dialogflow-fulfillment');

// Webhook page route.
router.get('/', function (req, res) {
  res.send('<h1>Webhook home page</h1>');
})


router.post('/', (req, res) => {
  console.log('POST: /');
  console.log('Body: ',req.body);

  //Create an instance
  const agent = new WebhookClient({
    request: req,
    response: res
  });

  //Test get value of WebhookClient
  console.log('agentVersion: ' + agent.agentVersion);
  console.log('intent: ' + agent.intent);
  console.log('locale: ' + agent.locale);
  console.log('query: ', agent.query);
  console.log('session: ', agent.session);


  // Run the proper function handler based on the matched Dialogflow intent name
  let intentMap = new Map();
  intentMap.set('Location', location);  // "Location" is once Intent Name of Dialogflow Agent
  agent.handleRequest(intentMap);
});
  //Function Location
  function location(agent) {
    agent.add('Welcome to Location : '  +agent.locale);
  }


module.exports = router;