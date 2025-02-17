const express = require('express')
const {connectDB} = require('./utils/db')
const app = express();

const violationRoutes = require('./routes/violation');
const authRoutes = require('./routes/auth');
const whitelistRoutes = require('./routes/whitelist');

const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use('/violate', violationRoutes);
app.use('/auth', authRoutes);
app.use('/', whitelistRoutes);

const startServer = async() => {
    await connectDB();
    app.listen(PORT, () => {console.log(`Server running on port ${PORT}`)})
}

startServer();