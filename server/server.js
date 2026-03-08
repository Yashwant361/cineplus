
const express = require('express')
const app = express();

const cors = require("cors");
app.use(cors());
app.use(express.json());

const opinionRoutes = require('./routes/opinionRoutes')
const connectDB = require('./config/db')
connectDB()


app.get('/', (req, res) => {
    res.send("CinePulse API running");
})
app.use('/api', opinionRoutes)

const PORT = 5000
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
})