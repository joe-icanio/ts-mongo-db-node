import mongoose from 'mongoose';

mongoose.connect(
  `mongodb://localhost:27017/mydb`,

  err => {
    if (err) throw err;
    console.log('Connect To DB');
  }
);
