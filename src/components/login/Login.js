import { useState } from "react";
import { FormInput } from "../shared/sharedComponents";

const Login = ({ updateIdentifier }) => {
  const setUser = (user) => {
    console.log(user);
    updateIdentifier(user);
  };
  const [identifier, setIdentifier] = useState("");

  return (
    <div className="container">
      <h2>Login</h2>
      <p>Use the login feature to simulate different users for different expierences.</p>
      <h4>Choose a user to login as:</h4>
      <div className="d-grid gap-2">
        <Button text="Anonymous" click={() => setUser("anonymous")} />
        <Button text="Troy Barnes" click={() => setUser("TroyBarnes")} />
        <Button text="Greg Benish" click={() => setUser("GregBenish")} />
        <Button text="Liz Lemon" click={() => setUser("LizLemon")} />
        <h4>Or enter an Identifier:</h4>
        <FormInput label="Identifier" onChange={(e) => setIdentifier(e.target.value)} />
        <Button text="Set Identifier" click={() => setUser(identifier)} />
      </div>
    </div>
  );
};

const Button = ({ text, click }) => {
  return (
    <button className="btn btn-primary" onClick={() => click()}>
      {text}
    </button>
  );
};

export default Login;
