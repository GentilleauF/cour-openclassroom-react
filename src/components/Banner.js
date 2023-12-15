import '../styles/Banner.css';
import logo from '../assets/logo.png'
import Recommendations from './Recommendation';

const Banner = () => {
  return (
    <div className="lmj-banner">
        <img src={logo} alt='logo du site' className='lmj-logo' />
      <h1>La maison jungle</h1>
      <Recommendations/>
    </div>
  );
};

export default Banner;
