import { Box} from '@chakra-ui/react'
import Dualslider from './dualslider'
import Topslide from './Topslide'

const Home = () => {

 
 
  return (
    <div>
      <Box mt={"20px"} >
        <Box>
        <Topslide/>
        </Box>
        <Box>
        <Dualslider/>
        </Box>
      </Box>
    </div>
  )
}

export default Home