import { Link } from "react-router-dom";
import { ROUTES } from "../../routes/routeNames";
import styles from "./styles.module.scss";

const Header = () => {
  return (
    <div className={styles.wrapper}>
      <Link to={ROUTES.HOME}>
        <button>Home</button>
      </Link>
      <Link to={ROUTES.COUNTER_PAGE}>
        <button>Counter</button>
      </Link>
      <Link to={ROUTES.FUNCTIONAL_COUNTER}>
        <button>Functional Counter</button>
      </Link>
      <Link to={ROUTES.MAIN_COUNTER}>
        <button>Main Counter</button>
      </Link>
    </div>
  );
};

export default Header;
