// Set your secret key. Remember to switch to your live secret key in production.
// See your keys here: https://dashboard.stripe.com/apikeys
// const stripe = require('stripe')('sk_test_tR3PYbcVNZZ796tH88S4VQ2u');

async function stripeFunc(clientId, name, address, amount, desc, payment_method, currency) {
    // fetch the secret key from DB using the clientId
    const stripe = require('stripe')('sk_test_tR3PYbcVNZZ796tH88S4VQ2u');

    const customer = await stripe.customers.create({
        name: name,
        address: {
            line1: '510 Townsend St',
            postal_code: '98140',
            city: 'San Francisco',
            state: 'CA',
            country: 'US',
          },
    });

    const paymentIntent = await stripe.paymentIntents.create({
        amount: amount,
        currency: currency,
        description: desc,
        customer: customer.id,
        payment_method: payment_method,
        metadata: {
            customer_name: name,
            customer_address: address.country
        },
    });
      
    return paymentIntent.client_secret
}

module.exports = { stripeFunc }
