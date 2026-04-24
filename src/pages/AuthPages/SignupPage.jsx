import { Link } from "react-router-dom";

const inputClasses =
  "mt-2 w-full rounded-lg border border-teal-600 bg-[#061a1d] px-4 py-3 text-sm text-white outline-none placeholder:text-zinc-500 focus:border-teal-400 focus:ring-1 focus:ring-teal-400";

const SignUpPage = () => {
  return (
    <>
      {/* TITLE */}
      <div className="text-center">
        <h1 className="text-3xl font-bold !text-white">Create Account</h1>

        <p className="mt-2 text-sm text-white-400">
          Join the arena. Start your journey.
        </p>
      </div>

      {/* FORM */}
      <form className="mt-8 space-y-5">
        {/* NAME */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="text-sm text-teal-400">First Name</label>
            <input
              type="text"
              placeholder=""
              required
              className={inputClasses}
            />
          </div>

          <div>
            <label className="text-sm text-teal-400">Last Name</label>
            <input
              type="text"
              placeholder=""
              required
              className={inputClasses}
            />
          </div>
        </div>

        {/* EMAIL */}
        <div>
          <label className="text-sm text-teal-400">Email</label>
          <input
            type="email"
            placeholder=""
            required
            className={inputClasses}
          />
        </div>

        {/* PASSWORD */}
        <div>
          <label className="text-sm text-teal-400">Password</label>
          <input
            type="password"
            placeholder=""
            required
            className={inputClasses}
          />
          <p className="mt-2 text-xs text-white">
            Minimum 8 characters with letters, numbers, and symbols.
          </p>
        </div>

        {/* CONFIRM PASSWORD */}
        <div>
          <label className="text-sm text-teal-400">Confirm Password</label>
          <input
            type="password"
            placeholder=""
            required
            className={inputClasses}
          />
        </div>

        {/* BUTTON */}
        <button
          type="submit"
          className="w-full rounded-lg py-3 bg-gradient-to-r from-teal-400 to-cyan-400 text-black font-bold tracking-widest hover:opacity-90 transition"
        >
          CREATE ACCOUNT
        </button>

        {/* SOCIAL */}
        <div className="text-center text-xs text-zinc-500">OR</div>

        <div className="grid grid-cols-2 gap-3">
          <button
            type="button"
            className="rounded-lg py-3 bg-teal-400 text-black font-bold hover:bg-zinc-700 transition"
          >
            GOOGLE
          </button>

          <button
            type="button"
            className="rounded-lg py-3 bg-teal-400 text-black font-bold hover:bg-zinc-700 transition"
          >
            APPLE
          </button>
        </div>
      </form>

      {/* LINK */}
      <p className="mt-6 text-sm text-white text-center">
        Already have an account?{" "}
        <Link to="/auth/signin" className="text-teal-400 font-semibold">
          Log in
        </Link>
      </p>
    </>
  );
};

export default SignUpPage;
