import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

/** Client-side permanent redirect — replaces history entry */
const RedirectRoute = ({ to }: { to: string }) => {
  const navigate = useNavigate();
  useEffect(() => {
    navigate(to, { replace: true });
  }, [to, navigate]);
  return null;
};

export default RedirectRoute;
