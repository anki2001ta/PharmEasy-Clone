
import './App.css';
import Footer from './Pages/footer';
import Home from './Pages/Home';
import Nav from './Pages/Nav';
import { Fab } from '@mui/material'
import { AddIcon } from '@chakra-ui/icons';

function App() {
  return (
    <div className="App" style={{height:"2000px"}}>
      <Nav/>
      {/* <Fab
      >
        <AddIcon/>
      </Fab>
      <Footer/> */}
      <Home/>
    </div>
  );
}

export default App;
