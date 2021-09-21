/*
1.  GET /html - Should return the following HTML content. Note when opened in the browser it should display the HTML page and not the HTML code.
<!DOCTYPE html>
<html>
  <head>
  </head>
  <body>
      <h1>Any fool can write code that a computer can understand. Good programmers write code that humans can understand.</h1>
      <p> - Martin Fowler</p>

  </body>
</html>


2.   GET /json - Should return the following JSON string
{
  "slideshow": {
    "author": "Yours Truly",
    "date": "date of publication",
    "slides": [
      {
        "title": "Wake up to WonderWidgets!",
        "type": "all"
      },
      {
        "items": [
          "Why <em>WonderWidgets</em> are great",
          "Who <em>buys</em> WonderWidgets"
        ],
        "title": "Overview",
        "type": "all"
      }
    ],
    "title": "Sample Slide Show"
  }
}
3.   GET /uuid - Should return a UUID4. For example:
{
  "uuid": "14d96bb1-5d53-472f-a96e-b3a1fa82addd"
}
4.   GET /status/{status_code} - Should return a response with a status code as specified in the request. For example:

/status/100 - Return a response with 100 status code
/status/500 - Return a response with 500 status code
Try it out for 100,200,300,400,500.

5.  GET /delay/{delay_in_seconds} - Should return a success response but after the specified delay in the request. For example: If the request sent is GET /delay/3, then the server should wait for 3 seconds and only then send a response with 200 status code.

*/

const express = require('express');
const path = require('path');
const app = express();
const uuid = { uuid: '14d96bb1-5d53-472f-a96e-b3a1fa82addd' };
let errorMessage = '';

const middleware = (req, res, next) => {
  const delayTime = req.params.delayTime;

  if (!isNaN(delayTime)) {
    errorMessage = `<h1>Invalid Time format</h1>`;
  }
  next();
};

app.get('/', (req, res) => {
  res.send('<h1>Hello World</h1>');
});

app.get('/html', (req, res) => {
  res.sendFile(path.join(__dirname + '/public/index.html'));
});

app.get('/json', (req, res) => {
  res.sendFile(path.join(__dirname + '/public/output.json'));
});

app.get('/uuid', (req, res) => {
  res.send(uuid);
});

app.get('/status/:statusCode', (req, res) => {
  res.status(req.params.statusCode).send(`<h1>${req.params.statusCode}</h1>`);
});

app.get('/delay/:delayTime', middleware, (req, res) => {
  const delayTime = req.params.delayTime;

  setTimeout(() => {
    if (errorMessage) {
      res.send(`<h1>Success after delay of ${delayTime} Seconds.</h1>`);
    } else {
      res.status(404).send(`<h1>Please give a proper delay Time!</h1>`);
    }
  }, delayTime * 1000);
});

app.listen(3000, () => {
  console.log('server is running on 3000');
});
