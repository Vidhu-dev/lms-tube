import { useNavigate, useRouteError } from "react-router-dom";

type RouteError = {
  statusText?: string;
  message?: string;
  data?: string;
};

function Error() {
  const error = useRouteError() as RouteError;
  const navigate = useNavigate();

  return (
    <div>
      <h1>Something went wrong</h1>
      <p>{error?.data || error?.message || "An unexpected error occurred"}</p>
      <button onClick={() => navigate(-1)}> &larr; Go Back</button>
    </div>
  );
}

export  {Error};
