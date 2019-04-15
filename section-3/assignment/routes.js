const requestHandler = (req, res) => {
  const { url } = req;
  const users = ["Paul", "Frank", "Foo", "Clair", "Joe"];
  if (url === '/') {
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>Greeting message</title></head>');
    res.write('<body><h1>Home page</h1></body>')
    res.write('</html>');
    return res.end();
  }
  if (url === '/users') {
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>Greeting message</title></head>');
    res.write('<body>');
    res.write('<h1>Users</h1>')
    res.write("<ul>");
    users.map(user => {
      res.write(`<li>${user}</li>`);
    });
    res.write("</ul>");
    res.write('</body>');
    res.write('</html>');
    return res.end();
  }

    // Root route
//     res.setHeader("Content-Type", "text/html");
//     res.write("<head><title>Greeting message</title></head>");
//     res.write('<body><h1>Here is some greeting message</h1><form action="/create-user" method="POST"><input type="text" name="createdUser"><button type="submit">Create User</button></form></body>'); 
//   }
//   // Users Route
//   if (url === "/users") {
//     res.write("<ul>");
//     users.map(user => {
//       res.write(`<li>${user}</li>`);
//     });
//     res.write("</ul>");
//   }

//   if (url === "/create-user") {
//     const body = []
//     req.on("data", chunk => {
//         body.push(chunk);
//     });
//     return req.on("end", () => {
//         const parsedBody = Buffer.concat(body).toString();
//         const newUser = parsedBody.split("=")[1];
//         console.log(newUser)
//       });
// }
//   res.setHeader("Content-Type", "text/html");
//   res.write("<html>");
//   res.write("<head><title>My First assignment</title></head>");
//   res.write("<body><h1>Hello from my first assignment!</h1></body>");
//   res.write("</html>");
//   res.end();
};

exports.handler = requestHandler;
