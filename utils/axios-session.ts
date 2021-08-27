import axios from "axios";
import axiosCookieJarSupport from "axios-cookiejar-support";
import tough from "tough-cookie";

const cookieJar = new tough.CookieJar();

const axiosSession = axios.create({
  // WARNING: This value will be ignored.
  // jar: cookieJar,
  // withCredentials: true,
  headers: {
    "Access-Control-Allow-Origin": "*",
  },
});

// axiosCookieJarSupport(axiosSession);
// axiosSession.defaults.jar = new tough.CookieJar();

export default axiosSession;
