interface HeaderProps {
  onApplyClick: () => void; // Function type specified
}

const Header: React.FC<HeaderProps> = ({ onApplyClick }) => {
  return (
    <header className="bg-white py-4  flex justify-between sm:justify-around items-center w-100">
      {/* Logo */}
      <div className="text-2xl font-bold text-gray-800 flex">
        <img className="h-14 w-14" src="./imgs/Untitled design.png"></img>
        <h1 className="pt-2 font-poppins text-gray-700 hidden sm:block">CareerBanao</h1>
      </div>
      {/* Apply Now Button */}
      <a
        onClick={onApplyClick}
        className="bg-purple-700 text-white px-6 py-2 rounded-lg hover:bg-pink-500 transition cursor-pointer"
      >
        Apply Now
      </a>
    </header>
  );
};

export default Header;
