import { useForm } from "react-hook-form";

const ReactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleSubmission = (data) => {
    console.log("Values i have submmited is=============");
    console.log(data);
  };
  return (
    <>
      <h1 className="mb-2 text-red-500 text-6xl">React Form</h1>
      <div>
        <form onSubmit={handleSubmit(handleSubmission)}>
          <div className="ms-2">
            <div> Email</div>
            <input
              className="border-2 border-red-600"
              type="text"
              name="email"
              {...register("email", {
                pattern: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
              })}
            />
          </div>
          {errors?.email && errors?.email?.type === "pattern" && (
            <div className="text-red-500 ms-4">
              {" "}
              Email pattern is not well defiend
            </div>
          )}
          <div className="ms-2">
            <div> Password</div>
            <input
              className="border-2 border-red-600"
              type="password"
              name="password"
              {...register("password")}
            />
          </div>
          <button type="submit"> Login</button>
        </form>
      </div>
    </>
  );
};

export default ReactForm;
