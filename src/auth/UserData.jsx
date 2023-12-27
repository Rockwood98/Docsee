import { useUser } from "./useUser";

function UserData({ style }) {
  const { user } = useUser();

  return (
    <span className={style}>
      {user?.email?.length >= 12
        ? user?.email.slice(0, 12) + "..."
        : user?.email}
    </span>
  );
}

export default UserData;
