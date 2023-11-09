import { useAuth } from "../modules/auth/context";
import md5 from "md5";

const sign = (method: string, url: string, body: string, userSecret: string) => {
  const stringToSign = `${method}+${url}+${body}+${userSecret}`;
  const md5Sign = md5(stringToSign);
  return md5Sign;
};

const useAuthHeaders = () => {

  const { user } = useAuth();
  const Key = user?.key || "";
  const userSecret = user?.secret || "";

  const firstRequest = {
    method: "GET",
    url: "/books",
    body: JSON.stringify({ "isbn": "9781118464465" }),
  };

  const secondRequest = {
    method: "POST",
    url: "/users",
    body: JSON.stringify({ "isbn": "9781118464465" }),
  };

  const thirdRequest = {
    method : "POST",
    url : "/books",
    body: JSON.stringify({ "isbn": "9781118464465" }),
  };

   const authHeadersFirst = {
    Key,
    Sign: sign(firstRequest.method, firstRequest.url, firstRequest.body, userSecret),
  };

  const authHeadersSecond = {
    Key,
    Sign: sign(secondRequest.method, secondRequest.url, secondRequest.body, userSecret),
  };

  const authHeadersThird = {
    Key,
    Sign: sign(thirdRequest.method, thirdRequest.url, thirdRequest.body, userSecret),
  }

  return { authHeadersFirst, authHeadersSecond, authHeadersThird };
};

export default useAuthHeaders;