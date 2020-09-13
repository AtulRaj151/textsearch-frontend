import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// notifications
toast.configure();

//success
const notify = (msg) => {
  toast.success(msg);
};

//warning
const notifyw = (msg) => {
  toast.warning(msg);
};
export { notify, notifyw };
