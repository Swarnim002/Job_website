
import './App.css';
import SplashScreen from './components/screens/SplashScreen';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import LoginScreen from './components/screens/LoginScreen';
import {BrowserRouter, Route, Routes } from 'react-router-dom';
import HomeScreen from './components/screens/HomeScreen/index';


function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path = '/' element = {<SplashScreen />} />
      <Route path = '/login' element = {<LoginScreen />} />  
      <Route path = '/home' element = {<HomeScreen />} />  
      </Routes>
      </BrowserRouter>
  );
}

export default App;
