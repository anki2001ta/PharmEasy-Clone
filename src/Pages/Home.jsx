import { Box, Image} from '@chakra-ui/react'
import Categry from './categry'
import Dualslider from './dualslider'
import Topimg from './images1'
import Singleslider from './singleslider'
import Topslide from './Topslide'
import Trending from './Launch'
import {Tread,data} from './Tread'
import Single from './single'
import Care from './care'
import Footer from './footer'
import Pici from './pic'
import Health from './health'
import Written from './written'
import { Spotlight } from './spotlight'



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
        <Box><Single/>
        </Box>
        <Box><Care/>
        </Box>
        <Box>< Pici/>
        </Box>
        <Box><Spotlight/>
        </Box>
      
        <Box>< Health/>
        </Box>
        <Box>< Written/>
        </Box>
       
        <Footer/> 
      </Box>
    </div>
  )
}

export default Home