# http-server

This project is about creating a http server in nodejs and doing some tasks using server.

## Installations

### 1. Install git

**`For Linux`** <https://git-scm.com/downloads>

**`For Windows`** <https://gitforwindows.org/>

### 2. Install Node

<https://nodejs.org/en/download/>

### 3. Install VSCode

<https://code.visualstudio.com/download>

### 4. Clone the repository :

```sh
git clone https://github.com/Sutirtha17/sutirtha-http-server.git
```

### 5. Go to the working directory

```sh
cd sutirtha-http-server
```

### 6. Install npm

```sh
npm install
```

### Run the server

```sh
npm run start
```

### Problems:

- **`GET /html`** - Should return the following HTML content. Note when opened in the browser it should display the HTML page and not the HTML code.

```html
<!DOCTYPE html>
<html>
  <head> </head>
  <body>
    <h1>
      Any fool can write code that a computer can understand. Good programmers
      write code that humans can understand.
    </h1>
    <p>- Martin Fowler</p>
  </body>
</html>
```

- **`GET /json`** - Should return the following JSON string

```json
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
```

- **`GET /uuid `**- Should return a UUID4. For example:

```json
{
  "uuid": "14d96bb1-5d53-472f-a96e-b3a1fa82addd"
}
```

- **`GET /status/{status_code}`** - Should return a response with a status code as specified in the request. For example:

  - /status/100 - Return a response with 100 status code
  - /status/500 - Return a response with 500 status code
  - Try it out for 100,200,300,400,500.

- **`GET /delay/{delay_in_seconds}`** - Should return a success response but after the specified delay in the request. For example: If the request sent is
  - GET /delay/3, then the server should wait for 3 seconds and only then send a response with 200 status code.

# Branches

There are two branches :

1. **`main`**: Implemented server using http.

2. **`express`** : Implemented server using express.
