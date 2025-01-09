const express = require('express');
const cors = require('cors');
const stripe = require('stripe')(process.env.STRIPE_SECRET_TEST);
const router = express.Router();

router.post('stripe/charge', cors(), async (req, res) => {
    console.log("stripe-routes.js 9 | route reached", req.body);
    const { amount, id } = req.body;
    console.log("stripe-routes.js 10 | amount and id", amount, id);

    try {
        const payment = await stripe.paymentIntents.create({
            amount,
            currency: "usd",
            description: "Farm-app test payment",
            payment_method: id,
            confirm: true,
        });
        console.log("stripe-routes.js 19 | payment", payment);
        res.status(200).json({ message: "Payment successful", success: true, payment });
    } catch (error) {
        console.error("Payment failed:", error);
        console.log("stripe-routes.js 17 | error", error);   res.status(500).json({ success: false, error: error.message });
    }
});

module.exports = router;
