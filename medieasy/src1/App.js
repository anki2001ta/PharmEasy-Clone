
import './App.css';
import Footer from './Pages/footer';
import Home from './Pages/Home';
import Nav from './Pages/Nav';

import AllRoutes from './Component/AllRoutes';

function App() {
  return (
    <div className="App" style={{height:"2000px"}}>
      <Nav/>
      
      
       

    
      <Home/>
      <AllRoutes/>
      <Footer/> 
    </div>
  );
}

export default App;
