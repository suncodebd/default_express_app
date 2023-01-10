const express = require('express');

// express app initialization
const app = express();
app.use(express.json());

// aplication routes

// default error handler
function errorHandler(err, req, res, next) {
    if (res.headersSent) {
        return next(err);
    }

    res.status(500).json({ error: err });
}

app.listen(3000, () => {
    console.log('server runing 300');
});
