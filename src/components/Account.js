import { useDispatch, useSelector } from 'react-redux';
import Login from "./Login";
import UserInfo from './UserInfo';


function Account() {
  const user = useSelector((state) => state.user);
  let accountRenderer;

  if (user.value.email) {
    accountRenderer = <UserInfo user={user} />
  } else {
    accountRenderer = <Login />
  }

  return (
    <div className={`login-wrapper${user.status === 'loading' ? ' loading-border' : ''}`}>
      {accountRenderer}
    </div>
  );
}

export default Account;