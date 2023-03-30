var express = require('express');
// var math = require('math');
var router = express.Router();

let x;
let y;

/* GET home page. */
router.get('/', function(req, res, next) {
 
    if(req.query.x ==undefined ) {
        console.log("if I am being executed")
        x=Math.floor(Math.random()*10000);
        y=Math.fround(Math.random()*100);
        let x1=Math.acosh(x);
        let x2=Math.log1p(x);
        let x3=Math.tan(x);
        let x4 = Math.sqrt(x);

        let y1=Math.acosh(y);
        let y2=Math.log1p(y);
        let y3=Math.tan(y);
        let y4 = Math.sqrt(y);
        res.send('Math.acosh() applied to '+x+' is ' +x1
        +"<br>" +'Math.log1p() applied to '+x+' is '+x2
        +"<br>"+'Math.tan()  applied to '+x+' is'+x3
        +"<br>"+'Math.sqrt()  applied to '+x+' is'+x4
        +"<br>"+'Math.acosh() applied to '+y+' is ' +y1
        +"<br>" +'Math.log1p() applied to '+y+' is '+y2
        +"<br>"+'Math.tan()  applied to '+y+' is'+y3
        +"<br>"+'Math.sqrt()  applied to '+y+' is'+y4); 
      
      }
      else{
        console.log("else I am being executed")
        x = req.query.x;
        let y1=Math.acosh(y);
        let y2=Math.log1p(y);
        let y3=Math.tan(y);
        let y4 = Math.sqrt(y);
      
        res.send('Math.acosh() applied to '+y+' is ' +y1
        +"<br>" +'Math.log1p() applied to '+y+' is '+y2
        +"<br>"+'Math.tan()  applied to '+y+' is'+y3)
        +"<br>"+'Math.sqrt()  applied to '+y+' is'+y4; 
      }
  


  res.send(x);
});

module.exports = router;
