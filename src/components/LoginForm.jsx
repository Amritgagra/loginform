import { useForm } from "react-hook-form";
export const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <>
      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-6">
            <h2 className="text-center mb-5">Login</h2>
            <form
              onSubmit={handleSubmit(onSubmit)}
              action=""
              className="login-form bg-white p-5 px-4 shadow-lg rounded-4"
            >
              <div className="mb-3">
                <label htmlFor="Email" className="form-label">
                  Email
                </label>
                <input
                  type="email"
                  className="form-control"
                  name=""
                  id="Email"
                  {...register("email", { required: true })}
                />
                {errors.email && (
                  <span className="text-danger">This field is required</span>
                )}
              </div>
              <div className="mb-3">
                <label htmlFor="password" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  name=""
                  id="password"
                  {...register("password", { required: true })}
                />
                {errors.password && (
                  <span className="text-danger">This field is required</span>
                )}
              </div>
              <button
                type="submit"
                className="btn btn-primary px-5 py-2 rounded-0"
              >
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
