const express=require('express');
const app=express();
const mongoose=require('mongoose');
const bodyParser=require('body-parser');

const userRoutes=require('./routes/userRoutes');


const url= 'mongodb+srv://suryaveersinghrathore377:gRxhhbiJ7GUt0Gzm@cluster0.nlkaaa5.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';

mongoose.connect(url)
.then(() => console.log('Connected to MongoDB '))
.catch(err => console.error('Error connecting to MongoDB :', err));

app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.get('/users/list', (req, res) => {
  res.sendFile(__dirname + '/public/list.html');
});
app.use('/users', userRoutes);

app.listen(3000, () => console.log('Server started on port 3000'));
