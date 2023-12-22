import { Toaster } from "react-hot-toast";

function AlertToaster() {
  return (
    <Toaster
      position="top-center"
      gutter={12}
      containerStyle={{ margin: "8px" }}
      toastOptions={{
        success: {
          duration: 3500,
        },
        error: {
          duration: 4000,
        },
        style: {
          fontSize: "16px",
          maxWidth: "500px",
          padding: "15px 22px",
          backgroundColor: "var(--color-slightly-dark)",
          color: "var(--color-dark--1:)",
        },
      }}
    />
  );
}

export default AlertToaster;
