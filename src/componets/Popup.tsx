import { AiOutlineClose } from "react-icons/ai";
import AdmissionForm from "./AdmissionForm";

interface PopupProps {
  show: boolean;
  onClose: () => void;
}

const Popup: React.FC<PopupProps> = ({ show, onClose }) => {
  if (!show) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center">
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-black opacity-70"></div>

      {/* Popup Content */}
      <div className="relative bg-white p-10 rounded shadow-lg z-50 w-[500px]">
        {/* Close Icon Button (Top-Left Corner) */}
        <button 
          className="absolute top-1 left-1 text-gray-600 hover:text-red-600 p-1 cursor-pointer"
          onClick={onClose}
        >
          <AiOutlineClose className="w-5 h-5" />
        </button>

        <h1 className="font-semibold text-gray-700">Admission open 2025</h1>
        <AdmissionForm />
      </div>
    </div>
  );
};

export default Popup;
