import {Routes, Route} from 'react-router-dom';
import {Home} from './pages/Home';
import {SignIn} from './pages/SignIn';
import {User} from './pages/User';

function App() {
  return (
    <Routes>
      {/* <Route path="*" element={<Error />} /> */}
      <Route path="/" index element={<Home />} />
      <Route path="/login" element={<SignIn />} />
      <Route path="/user" element={<User />} />
    </Routes>
  );
}

export default App;
