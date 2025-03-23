const express = require("express")
app = express();
app.get('/', function(req, res){
  res.sendFile("C:/Users/ghost/OneDrive/Project/SleepGame/DragonCrasher/index.html")
})

const hostname = '127.0.0.1';
const port = 3000;
app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
}); 
