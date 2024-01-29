// MongoDB schemas
const tipSchema = new mongoose.Schema({
    amount: Number,
    paymentMethod: String,
    userEmail: String,
    date: { type: Date, default: Date.now }
});

const Tip = mongoose.model('Tip', tipSchema);
