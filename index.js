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

const http = require('http');
const fs = require('fs');
const uuid = { uuid: '14d96bb1-5d53-472f-a96e-b3a1fa82addd' };

const readFile = (filePath, headerType, res) => {
  fs.readFile(filePath, 'utf-8', (error, data) => {
    if (error) {
      res.writeHead(404);
      res.write('Error');
    } else {
      res.writeHead(200, { 'Content-Type': headerType });
      res.write(data);
    }

    res.end();
  });
};

const app = http.createServer((req, res) => {
  let statusCode = req.url.split('/')[2];
  let delayTime = Number(req.url.split('/')[2]);

  if (req.url === '/') {
    res.write(`<h1>Hello</h1>`);

    res.end();
  } else if (req.url === '/html') {
    readFile('public/index.html', 'text/html', res);
  } else if (req.url === '/json') {
    readFile('public/output.json', 'application/json', res);
  } else if (req.url === '/uuid') {
    const jsonData = JSON.stringify(uuid);

    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.write(jsonData);

    res.end();
  } else if (
    req.url === `/status/${statusCode}` &&
    statusCode >= 100 &&
    statusCode < 600
  ) {
    res.writeHead(statusCode, { 'Content-type': 'text/html' });
    res.write(`<h1>Status code is : ${statusCode}  </h1>`);

    res.end();
  } else if (req.url === `/delay/${delayTime}` && !isNaN(delayTime)) {
    setTimeout(() => {
      res.writeHead(200, { 'Content-type': 'text/html' });
      res.write(`<h1>Success after delay of ${delayTime} Seconds.</h1>`);

      res.end();
    }, delayTime * 1000);
  } else {
    res.writeHead(404, { 'Content-type': 'text/html' });
    res.write(`<h2>Error!! No data is available!</h2>`);

    res.end();
  }
});

app.listen(3000, () => {
  console.log('server is running!');
});
