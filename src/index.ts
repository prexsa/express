import { app } from "./app";
import config from "./config";

app
  .listen(config.port, () => {
    console.log("Server running at PORT: ", config.port);
  })
  .on("error", (error: any) => {
    throw new Error(error.message);
  });
