const express = require('express');

const app = express();
const cookieParser = require('cookie-parser');
const placeRouter = require('./routes/placeRoute');
const userRouter = require('./routes/userRoute');


app.use(express.json());

app.use(cookieParser());

// Use router
app.use('/api/users', userRouter);

app.use('/api/places', placeRouter);




app.listen(3000, () => {
    console.log('Server is running on port 3000');
})

module.exports = app;

