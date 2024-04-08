import express, { Request, Response } from "express";
// import cookieParser from "cookie-parser";
import { json } from "body-parser";
import morgan from "morgan";
import routes from "./routes/index";
import { errorHandler } from "./middleware/errorHandler";
import config from "./config";

const app = express();
app.use(json());
morgan("dev");
// Add our route object to the Express object.
// This must be before the app.listen call.
app.use("/" + config.prefix, routes);

// Add error handling as the last middleware, just prior to our app.listen call.
// This ensures that all errors are always handled
app.use(errorHandler);

app.get("/", (request: Request, response: Response) => {
  response.status(200).send("Hello World");
});

export { app };

// https://www.toptal.com/nodejs/node-js-error-handling
// https://www.toptal.com/express-js/routes-js-promises-error-handling
// https://www.toptal.com/json/jwt-nodejs-security
// https://www.toptal.com/test-automation-engineer/automated-testing-best-practices
