// import modules

import express from 'express'

// Create Express app

const app = express()

// Configure the app (app.set)

app.get('/', function(req, res) {
  res.send('<h1>hello, friend</h1>')
})

// Mount Middleware (app.use)



// Mount routes



// Tell the app to listen on port 3000

app.listen(3000, function() {
  console.log('Listening on port 3000')
})