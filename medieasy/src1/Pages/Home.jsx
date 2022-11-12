import { Box, Image} from '@chakra-ui/react'
import Categry from './categry'
import Dualslider from './dualslider'
import Topimg from './images1'
import Singleslider from './singleslider'
import Topslide from './Topslide'
import Trending from './Launch'
import Tread from './Tread'
import Single from './single'
import Care from './care'

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
        <Box>
        <Topimg/>
        </Box>
        <Box>
        <Singleslider/>
        </Box>
        <Box>
        <Categry/>
        </Box>
        <Box>
        <Trending/>
        </Box>
        <Box>
        <Tread/>
        </Box>
        <Box><Single/></Box>
        <Box><Care/></Box>
      </Box>
    </div>
  )
}

export default Home