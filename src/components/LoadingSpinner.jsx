import { PuffLoader } from "react-spinners";

const LoadingSpinner = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-md z-50">
      <PuffLoader color="#ffffff" size={80} />
    </div>
  );
};

export default LoadingSpinner;
