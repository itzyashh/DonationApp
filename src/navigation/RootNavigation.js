import {Authenticated, NonAuthenticated} from './MainNavigation';

const {useSelector} = require('react-redux');

const RootNavigation = () => {
  const user = useSelector(state => state.user);
  return user.isLoggedIn ? <Authenticated /> : <NonAuthenticated />;
};

export default RootNavigation;
