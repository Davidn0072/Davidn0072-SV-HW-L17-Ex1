const express = require('express');
const app = express();
const port = 3000;
//ג
//app.get('/', (req, res) => res.send(`Hello world <img src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png">`));

app.use(express.urlencoded({ extended: false }));

app.use('/', express.static('html'));
app.use('/register', express.static('html/register.html'));
app.use('/about', express.static('html/forgot-password.html'));
    
app.post('/submit-login-data', (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  console.log(`Hello ${username} ${password}`);
  if ((username=='israel@svcollege.co.il')&&(password=='1234'))
    res.send(`Login successful`)
  else
    res.send(`Login Failed`)        
});

app.listen(port, () => console.log("dir:"+'\n'+__dirname+'\n'+`Example app listening on port ${port}`));
