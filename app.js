const express = require('express');
const morgan = require('morgan')
const app = express()
const layout = require('./views/layout')
const { db, Page, User } = require('./models');
const wiki = require('./routes/wiki')
const users = require('./routes/users')
app.use(morgan('dev'));
app.use(express.static(__dirname + "./public"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json())
app.use('/wiki', wiki);
app.use('/users', users);


app.get('/', (req,res, next)=>{
  res.redirect('/wiki')
})

db.authenticate()
  .then(() => {
    console.log('connected to the database');
  })

const init = async () => {
  await db.sync({force: true});
  app.listen(3000, ()=>{
    console.log('Listening on http://localhost:3000')
  })
}

init()
