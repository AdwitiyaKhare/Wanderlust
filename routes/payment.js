const express = require("express");
const Stripe = require("stripe");
const router = express.Router();
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
  apiVersion: "2024-04-10",
});

// Utility function to convert INR → USD (approx conversion)
const convertInrToUsd = (inrAmount) => {
  const exchangeRate = 1 / 92.2493;
  return parseFloat(inrAmount * exchangeRate);
};

// Create Stripe checkout session
router.post("/create-checkout-session", async (req, res) => {
  const { price, productId, email } = req.body;

  if (!email) {
    // Always respond with JSON
    return res.status(401).json({ error: "You must be logged in!" });
  }

  try {
    const priceInUsd = convertInrToUsd(price);

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      mode: "payment",
      customer_email: email,
      line_items: [
        {
          price_data: {
            currency: "usd",
            product_data: { name: `Travel Package ${productId}` },
            unit_amount: Math.round(priceInUsd * 100),
          },
          quantity: 1,
        },
      ],
      client_reference_id: productId,
      success_url: `${process.env.CLIENT_URL}?status=success`,
      cancel_url: `${process.env.CLIENT_URL}?status=failed`,
    });

    res.json({ url: session.url });
  } catch (err) {
    console.error("Stripe Error:", err);
    res.status(500).json({ error: "Payment session failed" });
  }
});

module.exports = router;
