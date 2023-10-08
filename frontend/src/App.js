import './App.css';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import AddBook from './component/Books/AddBook';
import Navbar from './component/Navbar/Navbar';
import RegisterUser from './component/users/RegisterUser';
import LoginUser from './component/users/LoginUser';
import Home from './component/Home/Home';
import Profile from './component/Profile/Profile';
import Books from './component/Books/Books';

function App() {
  return (
    <>
      <BrowserRouter>
        <Home/>
        <AddBook/>
        <Navbar />
        
        
        <Routes>
           <Route exact path='/' component={Home} />
          <Route exact path='/login' component={LoginUser} />
          <Route exact path='/profile' component={Profile} />
          <Route exact path ='/books' component={Books}/>
          <Route exact path ='/addbook' component={AddBook}/>
          <Route exact path ='/register' component={RegisterUser}/>
        </Routes>
      </BrowserRouter>
        
    </>
  );
}

export default App;
