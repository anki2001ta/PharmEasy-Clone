
import './App.css';
import Footer from './Pages/footer';
import Home from './Pages/Home';
import Nav from './Pages/Nav';

import AllRoutes from './Component/AllRoutes';
import Productt from './Pages/Productt';

function App() {
  return (
    <div className="App" style={{height:"2000px"}}>
      <Nav/>
      {/* <Productt/> */}
      
       

    

      <AllRoutes/>
      
    </div>
  );
}

export default App;
