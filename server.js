var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articles = {
    'article-one': {
      title: "article-one", 
      heading : 'Article-one',
      date: '13 feb 2018',
      content: `
      <p>Paragraphs begin for article one from here...</p>
      <p>Paragraphs begin for article one from here...</p>
      <p>Paragraphs begin for article one from here...</p>
      <p>Paragraphs begin for article one from here...</p>
      <p>Paragraphs begin for article one from here...</p>
      <p>Paragraphs begin for article one from here...</p>
      <p>Paragraphs begin for article one from here...</p>
      `
    },
    'article-two': {
      title: "article-two", 
      heading : 'Article-two',
      date: '14 feb 2018',
      content: `
      <p>Paragraphs begin for article one from here...</p>
      <p>Paragraphs begin for article one from here...</p>
      <p>Paragraphs begin for article one from here...</p>
      <p>Paragraphs begin for article one from here...</p>
      <p>Paragraphs begin for article one from here...</p>
      <p>Paragraphs begin for article one from here...</p>
      <p>Paragraphs begin for article one from here...</p>
`
    },
    'article-three': {
      title: "article-three", 
      heading : 'Article-three',
      date: '15 feb 2018',
      content: `
      <p>Paragraphs begin for article one from here...</p>
      <p>Paragraphs begin for article one from here...</p>
      <p>Paragraphs begin for article one from here...</p>
      <p>Paragraphs begin for article one from here...</p>
      <p>Paragraphs begin for article one from here...</p>
      <p>Paragraphs begin for article one from here...</p>
      <p>Paragraphs begin for article one from here...</p>
`
    }
}

var counter = 0;

function createTemplate(data) {
 
    var title = data.title;
    var heading = data.heading;
    var date = data.date;
    var content = data.content;
    var htmlContent = 
        //beginning of the string
        `
        <html>
        <head>
            <title>
                ${title}.
            </title>
            <link  rel = "stylesheet" href = "/ui/style.css">
            <meta name ="viewport" content="width=device-width, initial-scale = 1">
        </head>
        <body>
            <div class = "container">
                <div>
                    <a href = '/'>Link to home page</a>
                    <hr/>
                </div>
                <div>
                    <h1>${heading}</h1>
                </div>
                <div>
                ${date}
                </div>
                <div>
                    ${content}
                </div>
            </div>
        </body>
    </html>
    `;//end of string
    return htmlContent;
} 

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/:articleName',function (req, res) {
    var articleName = req.params.articleName;
    res.send(createTemplate(articles[articleName])); 
});


app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


app.get('/ui/main.js', function(req, res) {
   res.sendFile(path.join(__dirname, 'ui', 'main.js')); 
});

app.get("/ui/counter", function(req, res) {
   counter += 1;
   res.send(counter.toString()); 
});


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
