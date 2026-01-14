import { useNotification } from "../../hooks/use-notification";
import Toaster from "./toaster";

const Notification = () => {
  const { toast, showToast, closeToast } = useNotification(2000);

  const handleToasterClick = (type, message) => {
    showToast({ type, message });
  };

  return (
    <>
      <button
        onClick={() => handleToasterClick("success", " successful message")}
      >
        Show success
      </button>
      <button
        onClick={() =>
          handleToasterClick("info", " information message message")
        }
      >
        Show Info
      </button>
      <button onClick={() => handleToasterClick("error", " error message")}>
        Show Warning
      </button>
      <button onClick={() => handleToasterClick("warning", " warning message")}>
        Show Error
      </button>

      {toast && (
        <Toaster
          type={toast.type}
          message={toast.message}
          onClose={closeToast}
          position="bottom-right"
        />
      )}
    </>
  );
};

export default Notification;
