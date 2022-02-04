import {Routes, Route, Navigate} from 'react-router-dom';
import {Home} from './pages/Home';
import {SignIn} from './pages/SignIn';
import {User} from './pages/User';
import {Error} from './pages/Error';
import {useSelector} from 'react-redux';
import {selectAuth} from './store/store';

function App() {
  function PrivateProfileRoute({children}) {
    const {isLoggedIn} = useSelector(selectAuth);
    return isLoggedIn ? children : <Navigate to="/login" />;
  }

  function LoginRoute({children}) {
    const {isLoggedIn} = useSelector(selectAuth);
    return !isLoggedIn ? children : <Navigate to="/user/profile" />;
  }

  return (
    <Routes>
      <Route path="*" element={<Error />} />
      <Route path="/" index element={<Home />} />
      <Route
        path="/login"
        element={
          <LoginRoute>
            <SignIn />
          </LoginRoute>
        }
      />
      <Route
        path="/user/profile"
        element={
          <PrivateProfileRoute>
            <User />
          </PrivateProfileRoute>
        }
      />
    </Routes>
  );
}

export default App;
