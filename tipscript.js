// Express route for handling tip submissions
app.post('/submit-tip', async (req, res) => {
    const { amount, paymentMethod, userEmail } = req.body;

    if (!amount || amount <= 0) {
        return res.status(400).send('Invalid tip amount');
    }

    // Here you would integrate with the payment gateway API
    // For demonstration, we'll assume the payment is processed successfully

    // Store the tip information in the database
    const newTip = new Tip({
        amount: amount,
        paymentMethod: paymentMethod,
        userEmail: userEmail
    });
    await newTip.save();

    res.status(200).send('Tip processed successfully');
});
