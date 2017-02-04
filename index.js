var express = require('express')
var app = express()

app.set('port', (process.env.PORT || 5000));

app.get('/notes', function(req, res) {
  res.json({notes: "This is your notebook. Edit this to start saving your notes!"})
})
 
app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});