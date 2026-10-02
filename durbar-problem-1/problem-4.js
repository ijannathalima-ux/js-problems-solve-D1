function extractBodyContent(htmlString) {
    return htmlString.split("<body>")[1].split("</body>")[0];
}

console.log(extractBodyContent(
    ` "<html>
  <head>
    <title>My Page</title>
  </head>
  <body>
    <h1>Welcome!</h1>
    <p>This is my new React app.</p>
  </body>
</html>"`
))