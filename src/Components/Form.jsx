import clsx from "clsx";

const Form = () => {
  const inputClass = clsx(
    "p-4 text-dark-blue outline-none",
    "placeholder:text-dark-blue placeholder:font-medium placeholder:text-opacity-70"
  );
  return (
    <div className="">
      <form action="#" className="flex flex-col">
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
          className="uppercase text-white bg-primary-2 rounded-md"
        >
          claim your free trial
        </button>
      </form>
      <p>
        By clicking the button, you are agreeing to our
        <a href="#" className="text-primary-1">
          Terms and Services
        </a>
      </p>
    </div>
  );
};

export default Form;
