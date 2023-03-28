const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors')
const { stripeFunc } = require('.');

const port = 8080;

app.use(cors())
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.post('/generate-payment-intent', async (req, res) => {
    const clientSecret = await stripeFunc(req.body.clientId, req.body.name, req.body.address, req.body.amount, req.body.desc, req.body.payment_method, req.body.currency)
    console.log(clientSecret)
    res.json({clientSecret})
});

app.listen(port, () => {
    console.log(`Example app listening at Port: ${port}`);
});