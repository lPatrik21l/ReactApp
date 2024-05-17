const HeaderBorderWrapper = ({ children, heading, h2 }) => {
  console.log(h2 + "Jelloo ");
  let headingWeight;

  if (h2) {
    headingWeight = (
      <h2 className="mb-8 text-center text-2xl font-bold leading-none tracking-tight text-gray-900 md:text-4xl lg:text-5xl dark:text-white">
        {heading}
      </h2>
    );
  } else {
    headingWeight = (
      <h1 className="mb-8 text-center text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
        {heading}
      </h1>
    );
  }

  return (
    <div className="mt-12 border-2 border-gray-200 p-6 rounded-xl bg-white">
      {headingWeight}
      {children}
    </div>
  );
};

export default HeaderBorderWrapper;
