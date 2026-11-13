
import { LoaderCircle } from "lucide-react";

const Loader = () => {
  return (
    <div className="loader-container">
      <LoaderCircle className="spinner" size={42} />
      <p>Loading products...</p>
    </div>
  );
};

export default Loader;
