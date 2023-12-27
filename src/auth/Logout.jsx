import Button from "../components/Button";
import { HiMiniArrowLeftOnRectangle } from "react-icons/hi2";
import { useLogout } from "./useLogout";
import { ClipLoader } from "react-spinners";

function Logout() {
  const { logout, isLoading } = useLogout();
  return (
    <Button type="button-icon" disabled={isLoading} clickEvent={logout}>
      {!isLoading ? (
        <HiMiniArrowLeftOnRectangle />
      ) : (
        <ClipLoader color="var(--color-brand--2)" size={30} />
      )}
    </Button>
  );
}

export default Logout;
