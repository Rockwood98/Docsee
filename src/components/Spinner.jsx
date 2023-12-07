import { PulseLoader } from "react-spinners";

function Spinner() {
  return (
    <PulseLoader
      color="#0292c8"
      size={15}
      cssOverride={{
        marginTop: "3rem",
      }}
    />
  );
}

export default Spinner;
