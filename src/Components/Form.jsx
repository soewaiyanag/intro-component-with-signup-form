import clsx from "clsx";

const Form = () => {
  const inputClass = clsx(
    "p-4 text-dark-blue focus:outline-none border-2 rounded-md",
    "placeholder:text-dark-blue placeholder:font-medium placeholder:text-opacity-70"
  );
  return (
    <div className="bg-white p-6 rounded-lg">
      <form action="#" className="flex flex-col gap-4">
        <input
          type="text"
          name="first-name"
          id="first-name"
          placeholder="First Name"
          required
          className={inputClass}
        />
        <input
          type="text"
          name="last-name"
          id="last-name"
          required
          className={inputClass}
          placeholder="Last Name"
        />
        <input
          type="email"
          name="email"
          id="email"
          required
          className={inputClass}
          placeholder="Email Address"
        />
        <input
          type="password"
          name="password"
          id="password"
          required
          className={inputClass}
          placeholder="Password"
        />
        <button
          type="submit"
          className={clsx(
            "uppercase text-white bg-primary-2 rounded-md p-4",
            "shadow-bottom shadow-primary-2-dark font-medium focus:shadow-none transition-shadow"
          )}
        >
          claim your free trial
        </button>
      </form>
      <p className="mt-5 text-grayish-blue text-center">
        By clicking the button, you are agreeing to our{" "}
        <a href="#" className="text-primary-1 font-medium">
          Terms and Services
        </a>
      </p>
    </div>
  );
};

export default Form;
