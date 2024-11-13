import { useForm } from "react-hook-form";

const ReactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Errors are ==================");
    console.log(errors);

    console.log(data);
  };

  return (
    <div>
      <h1>React Form</h1>
      <div className="App">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-control">
            <label>Email</label>
            <input
              type="text"
              name="email"
              {...register("email", {
                required: true,
                pattern: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
              })}
            />
          </div>
          {errors?.email && errors?.email?.type == "required" && (
            <div className="text-red-500"> Error: email cannot be empty</div>
          )}
          {errors?.email && errors?.email?.type == "pattern" && (
            <div className="text-red-500">
              Error: Email pattern should be xxxxxx@domain.xx
            </div>
          )}
          <div className="form-control">
            <label>Password</label>
            <input type="password" name="password" {...register("password")} />
          </div>
          <div className="form-control">
            <label></label>
            <button type="submit">Login</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ReactForm;
