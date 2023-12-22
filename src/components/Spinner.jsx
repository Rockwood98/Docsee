import { PulseLoader } from "react-spinners";

function Spinner({ styles, size = 15, color = "#0292c8" }) {
  return <PulseLoader className={styles} color={color} size={size} />;
}

export default Spinner;
