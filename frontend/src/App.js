import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Content from './components/Content';
import Login from './page/Login';
import Join from './page/Join';
import { useEffect, useState } from 'react';

function App() {

  const [nick, setNick] = useState(null)

  return (
    <div className="App">
      <Header nick={nick} setNick={setNick}/>

      <Routes>
        <Route path="/" element={<Content/>}/>
        <Route path="/login" element={<Login setNick={setNick}/>}/>
        <Route path="/join" element={<Join/>}/>  
      </Routes>  

      <Footer/>
    </div>
  );
}

export default App;
