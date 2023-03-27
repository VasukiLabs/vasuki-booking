// Set your secret key. Remember to switch to your live secret key in production.
// See your keys here: https://dashboard.stripe.com/apikeys
// const stripe = require('stripe')('sk_test_tR3PYbcVNZZ796tH88S4VQ2u');
const stripe = require('stripe')('sk_test_tR3PYbcVNZZ796tH88S4VQ2u');

async function stripeFunc() {
    const customer = await stripe.customers.create({
        name: 'Jenny Rosen',
        address: {
          line1: '510 Townsend St',
          postal_code: '98140',
          city: 'San Francisco',
          state: 'CA',
          country: 'US',
        },
    });

    const paymentIntent = await stripe.paymentIntents.create({
        amount: 1099,
        currency: 'usd',
        description: 'Software development services',
        customer: customer.id,
        payment_method: 'pm_card_visa',
        metadata: {
            customer_name: 'Jenny Rosen',
            customer_address: '510 Townsend St, San Francisco, USA',
        },
    });

      
    console.log(paymentIntent.client_secret)
    console.log(paymentIntent.status)
}


stripeFunc()
