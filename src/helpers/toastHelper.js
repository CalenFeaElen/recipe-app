import { toast } from "react-toastify";

export const displayToast = (message, type = "success") => {
  const options = {
    position: "bottom-right",
    autoClose: 2000,
  };
  switch (type) {
    case "success":
      toast.success(message, options);
      break;
    case "error":
      toast.error(message, options);
      break;
    default:
      toast(message, options);
  }
};
