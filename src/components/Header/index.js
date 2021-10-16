import {Link} from 'react-router-dom';
import {ROUTES} from "../routes/routeNames";
import styles from "./styles.module.scss";



const Header = () => {
  return (
    <div className={styles.wrapper}>
      <Link to={ROUTES.HOME}><button>Home</button></Link>
      <Link to={ROUTES.COUNTER_PAGE}><button>Counter</button></Link>
    </div>
  );
};

export default Header;