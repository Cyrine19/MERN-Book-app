import './App.css';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import AddBook from './component/Books/AddBook';
import Navbar from './component/Navbar/Navbar';
import Book from './component/Books/Book';

function App() {
  return (
    <>
      <BrowserRouter>
        <AddBook />
        <Navbar />
        <Routes>
          <Route exact path ='/books' component={Book}/>
          <Route exact path ='/addbook' component={AddBook}/>
        </Routes>
      </BrowserRouter>
        
    </>
  );
}

export default App;
