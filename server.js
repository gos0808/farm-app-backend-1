const express = require('express');
const app = express();

const mongoose = require('mongoose');

const ProductRoutes = require('./routes/ProductRoutes');
const EventRoutes = require('./routes/EventRoutes');
const OrderRoutes = require('./routes/OrderRoutes');
const ContactRoutes = require('./routes/ContactRoutes');
// const StripeRoutes = require('./routes/StripeRoutes'); 

const cors = require('cors');
const { applyVirtuals } = require('./models/ContactModel');

require('dotenv').config();
const stripe = require('stripe')(process.env.STRIPE_SECRET_TEST);
console.log("Stripe Secret Key:", process.env.STRIPE_SECRET_TEST); 

mongoose.set("strictQuery", false);

const PORT = process.env.PORT || 8000;

app.use(express.json());
app.use(cors());

mongoose
       .connect(process.env.MONGODB_LINK)
       .then(() => console.log('We were connected to Mongo DB'))
       .catch((err) => console.log(err));

app.use('/', ProductRoutes);
app.use('/', EventRoutes);
app.use('/', OrderRoutes);
app.use('/', ContactRoutes);
// app.use('/', StripeRoutes);

app.post("/stripe/charge", cors(), async (req, res) => {
       console.log("stripe-routes.js 9 | route reached", req.body);
       const { amount, id } = req.body;
       console.log("stripe-routes.js 10 | amount and id", amount, id);
   
       try {
           const payment = await stripe.paymentIntents.create({
               amount: amount,
               currency: "usd",
               description: "Farm-app test payment",
               payment_method: id,
               confirm: true,
               return_url: "http://localhost:3000",
           });
           console.log("stripe-routes.js 19 | payment", payment);
           res.status(200).json({ message: "Payment successful", success: true, payment });
       } catch (error) {
           console.error("Payment failed:", error);
           console.log("stripe-routes.js 17 | error", error);   res.status(500).json({ success: false, error: error.message });
       }
   });


app.listen(PORT, () => { console.log(`I'm listening on port ${PORT}`); })