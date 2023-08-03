import clsx from "clsx";

const FreeTrialMessage = () => {
  return (
    <div
      className={clsx(
        "bg-accent text-white p-4 rounded-lg",
        "text-center font-light"
      )}
    >
      <span className="font-semibold">Try it free 7 days</span> then{" "}
      <br className="md:hidden inline" /> $20/mo. thereafter
    </div>
  );
};

export default FreeTrialMessage;
