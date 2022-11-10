import { Box, Flex, SimpleGrid, useColorModeValue, Stack, Link, Tag, Heading,Image,Text } from "@chakra-ui/react"
import { Container } from "@chakra-ui/react"
import instagram from "../instagram.png"
import facebook from "../facebook.png"
import youtube from "../youtube.png"
import twitter from "../twitter.png"
import googlepay from "../googlepay.png"
import paytm from "../paytm.png"
import visa from "../visa.png"
import amazon from "../amazon.png"
import paypal from "../paypal.png"




function Footer(){

    
    return(
        <Box 
           bg={useColorModeValue('gray.50', 'gray.900')}
      color={useColorModeValue('gray.700', 'gray.200')} w={"95%"} m={"auto"}>
      <Container as={Stack} maxW={'6xl'} py={14}>
        <SimpleGrid columns={{ base: 1, sm: 2, md: 4 }} spacing={29} >
          <Stack align={'flex-start'}>
          <Heading as='h4' size='md'>Product</Heading>
            <Link href={'#'}>About Us</Link>
            <Stack direction={'row'} align={'center'} spacing={10}>
              <Link href={'#'}>Carrers</Link>
              
            </Stack>
            <Link href={'#'}>Blog</Link>
            <Link href={'#'}>Partnerwith PharmEasy</Link>
            <Link href={'#'}>Sell in PharmaEasy</Link>
            <br></br>
            <Heading as='h4' size='md'>Our Services</Heading>
            <Link href={'#'}>Order Medicines</Link>
            <Stack direction={'row'} align={'center'} spacing={2}>
              <Link href={'#'}>Health Care Products</Link>
              
            </Stack>
            <Link href={'#'}>Lab Tests</Link>
            <Link href={'#'}>Find Nearest Collection Center</Link>
           {/* first row */}
          </Stack>
          <Stack align={'flex-start'}>
            <Heading as='h4' size='md'>Featured Categories</Heading>
            <Link href={'#'}>Pet Care</Link>
            <Link href={'#'}>Personal Care</Link>
            <Link href={'#'}>HealthCare</Link>
            <Link href={'#'}>Health Food And Drinks</Link>
            <Link href={'#'}>Beauty</Link>
            <Link href={'#'}>Elderly Care</Link>
            <Link href={'#'}>Home Care</Link>
            <Link href={'#'}>Mother and Baby Care</Link>
            <Link href={'#'}>Skin Care</Link>
            <Link href={'#'}>Fitness Supplements</Link>
            <Link href={'#'}>Diebetics Care Care</Link>
            <Link href={'#'}>Sexual Wellness</Link>
            <Link href={'#'}>Ayurvedic</Link>
            <Link href={'#'}>Accessories</Link>
            <Link href={'#'}>Top Products</Link>
          </Stack>
          <Stack align={'flex-start'} >
            <Heading as='h4' size='md'>Need help</Heading>
            <Link href={'#'}>Browse All Medicines</Link>
            <Link href={'#'}>Browse All Modules</Link>
            <Link href={'#'}>Browse All Cities</Link>
            <Link href={'#'}>Browse All Areas</Link>
            <Link href={'#'}>Browse All Stores</Link>
            <Link href={'#'}>FAQs</Link>
            <br></br>
            <Heading as='h4' size='md'>Policy Info</Heading>
            <Link href={'#'}>Editorial Info</Link>
            <Stack direction={'row'} align={'center'} spacing={2}>
              <Link href={'#'}>Vulnerability Disclouser Policy</Link>
              
            </Stack>
            <Link href={'#'}>Terms And Condition </Link>
            <Link href={'#'}>Customer Support Policy</Link>
            <Link href={'#'}>Return Policy</Link>
          </Stack>
          
          <Stack align={'flex-start'} >
            <Heading as='h4' size='md'>Follow Us</Heading>
            <SimpleGrid columns={[2, 2, 2, 4]} gap={6}>
                <Image  boxSize='25px'src={instagram}></Image>
                <Image  boxSize='25px'src={facebook}></Image>
                <Image  boxSize='25px'src={youtube}></Image>
                <Image  boxSize='25px'src={twitter}></Image>
            </SimpleGrid>
            </Stack>
          </SimpleGrid>
          </Container>
          <Flex align={"flex-start"} marginLeft={"160px"}>
          <Heading as='h4' size='md'>Our Payment Partners</Heading>
          </Flex>
          <Box
      bg={useColorModeValue('gray.50', 'gray.900')}
      color={useColorModeValue('gray.700', 'gray.200')}>
       
      <Container
        as={Stack}
        maxW={'6xl'}
        py={4}
        direction={{ base: 'column', md: 'row' }}
        spacing={4}
        justify={{ base: 'center', md: 'space-between' }}
        align={{ base: 'center', md: 'center' }}
        >
         <Stack direction={'row'} spacing={10}>
         
          <Image  boxSize='59px'src={googlepay}/>
          <Image  boxSize='59px'src={paytm}/>
          <Image  boxSize='59px'src={visa}/>
          <Image  boxSize='69px'src={amazon}/>
          <Image  boxSize='69px'src={paypal}/>
          
        </Stack>
        <Text>© 2022 PharmEasy. All Rights Reserved</Text>
            </Container>
        </Box>
        </Box>
    )
}

export default Footer

















