const express = require('express');
const app = express();
app.use(express.json());

const mongoose = require('mongoose');
mongoose.set('strictQuery', false);
mongoose.connect("mongodb+srv://mnu4513:1234qwer@firstcluster.daae6aq.mongodb.net/procate      ", {useNewUrlParser: true})
.then(() => console.log('mongoDB is connected'))
.catch((error) => console.log(error));

const route = require('./router/route');
app.use('/', route);

app.listen(3000, () => {
    console.log('express app is runnig on port ' + 3000);
});