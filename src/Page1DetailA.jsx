import { useLocation } from "react-router-dom";

export const Page1DetailA = () => {
  // const location = useLocation();
  // console.log(location);
  const { state } = useLocation();
  console.log(state);

  return (
    <div>
      <h1>Page1DetailA page</h1>
    </div>
  );
};
