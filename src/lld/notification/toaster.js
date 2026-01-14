import { MdErrorOutline } from "react-icons/md";
import { MdOutlineWarningAmber } from "react-icons/md";
import { MdInfoOutline } from "react-icons/md";
import { MdOutlineCheck } from "react-icons/md";
import { MdClose } from "react-icons/md";
import "./toaster.css";

const ICONS = {
  success: <MdOutlineCheck />,
  error: <MdErrorOutline />,
  info: <MdInfoOutline />,
  warning: <MdOutlineWarningAmber />,
};

const Toaster = ({ type, message, onClose, position = "top-left" }) => {
  return (
    <>
      <div className={`toaster-container ${type} ${position}`}>
        <div style={{ cursor: "pointer" }}>{ICONS[type]}</div>
        <div>{message}</div>
        <div style={{ cursor: "pointer" }} onClick={onClose}>
          <MdClose />
        </div>
      </div>
    </>
  );
};

export default Toaster;
