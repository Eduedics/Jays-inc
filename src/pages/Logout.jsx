import { useNavigate } from 'react-router-dom';

function Logout() {
  const navigate = useNavigate();

  const handleLogout = () => {
    // crears state on localstorage
    localStorage.removeItem('access');
    localStorage.removeItem('refresh');
    alert('Logged out');
    // redirect
    navigate('/login'); 
  };

  return <button onClick={handleLogout}>Logout</button>;
}
export default Logout;