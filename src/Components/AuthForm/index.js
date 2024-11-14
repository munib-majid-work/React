import { useState } from "react";

const AuthForm = () => {
  const [auth, setAuth] = useState({
    email: "",
    password: "",
  });
  // Changes done

  const [erros, setErros] = useState({
    email: "",
    password: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setAuth((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!auth.email) {
      setErros((prev) => ({ ...prev, email: "Email is empty" }));
    }
    console.log("The value I will submit is");
    console.log(auth);
  };

  return (
    <div className="mx-5">
      <form onSubmit={handleSubmit}>
        <div className="mb-1">
          <div className="mr-2 mb-1"> Email</div>
          <input
            className="border-2 border-black"
            type="email"
            value={auth.email}
            name="email"
            onChange={handleInputChange}
          />
        </div>
        {erros?.email && <div className="text-red-900">{erros.email}</div>}
        <div className="mb-1">
          <div className="mr-2 mb-1">Password</div>
          <input
            className="border-2 border-black"
            type="password"
            value={auth.password}
            name="password"
            onChange={handleInputChange}
          />
        </div>

        <br />
        <button className="border-2 border-black px-2" type="submit">
          Login
        </button>
      </form>
    </div>
  );
};

export default AuthForm;
