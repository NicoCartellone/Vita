import { Navigate, Outlet } from "react-router-dom";

const LayaoutRequireAuth = () => {
  const user = false;

  if (!user) {
    return <Navigate to="/login" />;
  }
  return (
    <div className="container mx-auto">
      <Outlet />
    </div>
  );
};
export default LayaoutRequireAuth;
