const express = require('express')
const morgan = require('morgan')
const app = express()
const layout = require('./views/layout')
const { db, Page, User } = require('./models');

app.use(morgan('dev'));
app.use(express.static(__dirname + "/public"));
app.use(express.urlencoded({ extended: false }))

app.get('/', (req,res, next)=>{
  res.send(layout(''))
})

db.authenticate()
  .then(() => {
    console.log('connected to the database');
  })

const init = async () => {
  await db.sync();
  app.listen(3000, ()=>{
    console.log('Listening on http://localhost:3000')
  })
}

init()
