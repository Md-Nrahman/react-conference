//loader component using react-loader-spinner

import { DNA } from "react-loader-spinner";

export const LoaderComponent = () => {
  return (
    <div className="flex justify-center items-center w-full h-full">
      <DNA
        visible={true}
        height="80"
        width="80"
        ariaLabel="dna-loading"
        wrapperStyle={{}}
        wrapperClass="dna-wrapper"
      />
    </div>
  );
};
