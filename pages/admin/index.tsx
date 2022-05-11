import { NextPage } from "next";
import { useState } from "react";
import { LoginForm } from "../../components/LoginForm";
import { LoginLayout } from "../../LoginLayout";
const Admin: NextPage = () => {
  const [auth, setAuth] = useState(false);
  return (
    <>
      {auth ? (
        <h2>Welcome</h2>
      ) : (
        <LoginLayout title="Please log in">
          <LoginForm />
        </LoginLayout>
      )}
    </>
  );
};

export default Admin;
