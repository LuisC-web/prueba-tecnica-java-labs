import { CorsOptions } from "cors";
import "dotenv/config";
const whitelist = [process.env.FRONTEND_URL];
export const corsOptions = {
  origin: function (origin, callback) {
       callback(null, true);
   },
};
