const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

app.post('/webhook-receive', (req, res) => {
  // Log the incoming webhook data
  console.log('Checkout created:', req.body);

  // You can add your logic here to process the webhook data
  
  // Respond with a 200 status to acknowledge receipt
  res.status(200).send('Webhook received');
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
