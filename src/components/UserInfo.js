import { useDispatch } from 'react-redux';
import { logoutUser } from '../slices/userSlice';

function UserInfo({ user }) {
  const dispatch = useDispatch();
  return (
    <>
      <div className="user-info">This is the <span className="user-info-name">{user.value.email}</span > page</div>
      <button className="submit-btn" onClick={() => { dispatch(logoutUser()) }}>Logout</button>
    </>
  );
}

export default UserInfo;