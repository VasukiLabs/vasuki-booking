// Set your secret key. Remember to switch to your live secret key in production.
// See your keys here: https://dashboard.stripe.com/apikeys
// const stripe = require('stripe')('sk_test_tR3PYbcVNZZ796tH88S4VQ2u');
const stripe = require('stripe')('sk_test_51ItCQkSIa2QafZb82LHOJsNRGVytsCXl0H0GWCyv88AgmUNwY1ELvuAp5slxK4rvMmC7oXnV8np6nRfDXZFaUqmb00jRTXyFZN');

async function stripeFunc() {
    const paymentIntent = await stripe.paymentIntents.create({
        amount: 1099,
        currency: 'usd',
        description: 'Software development services',
      });

    console.log(paymentIntent)
}


stripeFunc()
