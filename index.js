const express = require('express');
const swaggerJsdoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

const app = express();
const bodyParser = require("body-parser");

const usersRoutes = require("./routes/users.route");
const postsRoutes = require("./routes/posts.route");

app.use(bodyParser.json());

app.use("/users", usersRoutes);
app.use("/posts", postsRoutes);

/** Swagger Initialization - START */
const swaggerOption = {
  swaggerDefinition: (swaggerJsdoc.Options = {
    info: {
      title: "my-posts",
      description: "API documentation",
      contact: {
        name: "Developer",
      },
      servers: ["http://localhost:5000/"],
    },
  }),
  apis: ["index.js", "./routes/*.js"],
};

const swaggerDocs = swaggerJsdoc(swaggerOption);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));
/** Swagger Initialization - END */

app.listen(5000, () => {

  console.log("ready!!!")
});