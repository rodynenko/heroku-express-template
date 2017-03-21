const express = require("express");
const app = express();

app.set('port', 3000);
app.use(express.static(__dirname + '/public'));

app.use((req, res, next) => {
	res.status(404);
	res.redirect('/404.html');
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

app.listen(app.get('port'), function() {
	console.log('Node app is running on port', app.get('port'));
});
