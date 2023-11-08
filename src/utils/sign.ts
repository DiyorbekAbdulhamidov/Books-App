import { useAuth } from "../modules/auth/context";
import md5 from "md5";

const sign = (method: string, url: string, body: string, userSecret: string) => {
  const stringToSign = `${method}${url}${body}${userSecret}`;
  const md5Sign = md5(stringToSign);
  return md5Sign;
};

const useAuthHeaders = () => {
  const { user } = useAuth();
  const userKey = user?.key || "";
  const userSecret = user?.secret || "";

  const firstRequest = {
    method: "GET",
    url: "/books",
    body: "",
  };

  const secondRequest = {
    method: "POST",
    url: "/users",
    body: JSON.stringify({ "isbn": "9781118464465" }),
  };

   const authHeadersFirst = {
    Key: userKey,
    Sign: sign(firstRequest.method, firstRequest.url, firstRequest.body, userSecret),
  };

  const authHeadersSecond = {
    Key: userKey,
    Sign: sign(secondRequest.method, secondRequest.url, secondRequest.body, userSecret),
  };

  return { authHeadersFirst, authHeadersSecond };
};

export default useAuthHeaders;