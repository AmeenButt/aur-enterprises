import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from 'components/header'
import routes from 'routes'
import AppState from 'state/appState';
import Signup from 'views/signUp'
import Login from 'views/login'
import CartPopup from 'views/cartPopup'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function App() {
  return (
    <>
      <AppState>
        <CartPopup />
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
        {/* Same as */}
        <ToastContainer />
        <Router>
          <Signup />
          <Login />
          <Navbar />
          <Routes>
            {routes.map((item, index) => <Route exact path={item.path} key={index} element={item.component} />)}
          </Routes>
        </Router>
      </AppState>
    </>
  );
}

export default App;
