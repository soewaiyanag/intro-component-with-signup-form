import clsx from "clsx";

const FreeTrialMessage = () => {
  return (
    <div
      className={clsx(
        "bg-accent text-white p-5 rounded-lg",
        "text-center font-light mb-8"
      )}
    >
      <span className="font-semibold">Try it free 7 days</span> then{" "}
      <br className="md:hidden inline" /> $20/mo. thereafter
    </div>
  );
};

export default FreeTrialMessage;
