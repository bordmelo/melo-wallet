const path = require('path');
const express = require('express');

const app = express();

// static files
app.use(express.static(__dirname + '/public'));

// start server
app.listen(process.env.PORT || 5000);

const { Broker, Investment, Transaction, BalanceUpdate } = require('./models');

const test = async () => {
  // select all
  const brokerWithDetails = await Broker.findOne({
    include: [
      {
        model: Investment,
        include: [{ model: Transaction }, { model: BalanceUpdate }]
      }
    ]
  });
  console.log(JSON.stringify(brokerWithDetails));
};

test();
