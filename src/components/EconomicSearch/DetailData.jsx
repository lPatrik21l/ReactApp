import { useEffect } from "react";
import HeaderBorderWrapper from "./HeaderBorderWrapper";

const DetailData = ({ detailObj, children, h2 }) => {
  useEffect(() => {
    // Posun na vrch stránky pri načítaní komponentu s miernym oneskorením
    window.scrollTo(0, 0);
  }, []);

  return (
    <HeaderBorderWrapper h2={true} heading={detailObj.name}>
      {children}
      <div className="flex mt-3 text-lime-700 font-extrabold justify-center space-x-4 text-xl">
        <h3>Category: {detailObj.category}</h3>
        <h3>Importance: {detailObj.importance}</h3>
        <h3>Frequency: {detailObj.frequency}</h3>
      </div>
    </HeaderBorderWrapper>
  );
};

export default DetailData;
