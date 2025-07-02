import logo from '../assets/logo/L.png';
import '../styles/Loader.css';

const Loader = () => {
  return (
    <div className="loader-container">
      <div className="loader">
        <img src={logo} alt="Logo" />
      </div>
    </div>
  );
};

export default Loader;
