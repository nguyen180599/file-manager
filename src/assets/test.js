var fs = require('fs');
var http = require('http')

try {
  var data = fs.readFile(__dirname + '/../app/show-project/show-project.component.html', function(err, data) {
    if (err) {
      throw err // Fail if the file can't be read.
      }
    http.createServer(function(req, res) {
      res.writeHead(200, {'Content-Type': 'image || json || text || html'})
      res.end(data) // Send the file data to the browser.
    }).listen(8124)
    console.log('Server running at http://localhost:8124/')
  })
} catch(e) {
  console.log('Error:', e.stack);
}
