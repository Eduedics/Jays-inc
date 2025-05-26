import { useNavigate } from 'react-router-dom';

function Logout() {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Clear tokens from localStorage
    localStorage.removeItem('access');
    localStorage.removeItem('refresh');
    alert('Logged out');
    navigate('/login'); 
  };

  return (
    <div className="logoutContainer">
      <button onClick={handleLogout} className="logoutButton">
        Logout
      </button>
    </div>
  );
}

export default Logout;
