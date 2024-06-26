export const SignUpForm = () => {
  return (
    <>
      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-6">
            <h2 className="text-center mb-5">Register</h2>
            <form
              action=""
              className="login-form bg-white p-5 px-4 shadow-lg rounded-4"
            >
              <div className="mb-3">
                <label htmlFor="name" className="form-label">
                  Name
                </label>
                <input type="text" className="form-control" name="" id="name" />
              </div>
              <div className="mb-3">
                <label htmlFor="Email" className="form-label">
                  Email
                </label>
                <input
                  type="email"
                  className="form-control"
                  name=""
                  id="Email"
                />
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
                />
              </div>
              <button
                type="submit"
                className="btn btn-primary px-5 py-2 rounded-0"
              >
                Registers
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
