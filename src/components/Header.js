import classes from './Header.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { counterActions } from '../store';

const Header = () => {
  const dispatch = useDispatch();
  const auth = useSelector(state => state.auth.isAuthenticated)

  const loginHandler = () => {
    dispatch(counterActions.login())
  }

  const logoutHandler = () => {
    dispatch(counterActions.logout());
  }

  return (
    <header className={classes.header}>
      <h1>Redux Auth</h1>
      <nav>
        <ul>
          <li>
            <a href='/'>My Products</a>
          </li>
          <li>
            <a href='/'>My Sales</a>
          </li>
          {auth ?
            <li>
              <button>Logout</button>
            </li>
            :
            <li>
            <button>Login</button>
          </li>
          }
        </ul>
      </nav>
    </header>
  );
};

export default Header;
