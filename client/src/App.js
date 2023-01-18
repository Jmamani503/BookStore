import './App.css';
import {Routes, Route} from 'react-router-dom'

import Nav from './components/Nav'
import BookCreate from './components/book/BookCreate'
import BookIndex from './components/book/BookIndex'

function App() {
  return (
    <div className="">
      <Nav/>
      <div className='container p-4'> 
        <Routes>
          <Route path='/' element={<BookIndex/>} />
          <Route path='/BookCreate' element={<BookCreate/>} />
          <Route path='/edit/:id' element={<BookIndex/>} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
