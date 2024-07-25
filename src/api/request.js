import axios from "axios";
import { showMessage } from "@/utils";

const instance = axios.create();
instance.interceptors.response.use(function(resp) {
  if (resp.data.code !== 0) {
    showMessage({
      content: `${resp.data.msg}`,
      type: "error",
    });
    return null;
  } else {
    return resp.data.data;
  }
});
export default instance;
