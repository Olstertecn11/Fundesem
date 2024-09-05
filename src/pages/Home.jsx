import React from 'react';
import { Box, Flex, Heading, Text, Image, Img, Link } from '@chakra-ui/react';
import AboutHomeSection from './../sections/AboutHomeSection';



const Home = () => {
  return (
    <div>
      <Box bg="white" w="100%" py={16} px={8}>
        <Flex
          maxW="1200px"
          mx="auto"
          direction={{ base: 'column', md: 'row' }}
          align="center"
          justify="space-between"
        >
          <Image
            src="https://fundesemgt.org/wp-content/uploads/2023/04/WhatsApp-Image-2023-04-06-at-21.12.37-768x514.jpeg"
            alt="Imagen de tortugas"
            borderRadius="full"
            boxSize={{ base: "200px", md: "300px" }} // Tamaño de la imagen
            objectFit="cover"
            mb={{ base: 8, md: 0 }} // Margen inferior para pantallas pequeñas
          />

          <Box
            height="38vh"
            background="#38a169"
            width="1vw"
            position="relative"
            display={{ base: 'none', md: 'inline-block' }} // Oculta en pantallas pequeñas
            ml="4rem"
          ></Box>
          <Box ml={{ base: 0, md: 12 }} textAlign={{ base: 'center', md: 'left' }}>
            <Heading as="h2" size="xl" mb={4} fontWeight="bold">
              Bienvenidos a <br />  <b style={{ fontSize: '2.5rem' }}>FUNDESEM</b>
            </Heading>
            <Text fontSize="lg" mb={4}>
              Somos una organización que contribuye al desarrollo económico, social, integral y
              sostenible de las poblaciones rurales de la{' '}
              <Link href="#" color="green.600" fontWeight="bold">
                región Mesoamericana
              </Link>, vulnerables a los efectos del cambio climático.
            </Text>
          </Box>
        </Flex>
      </Box>

      <Img src="https://fundesemgt.org/wp-content/uploads/2024/01/344915719_752955623036438_576020355446108010_n.jpg"></Img>
      <AboutHomeSection />
    </div>
  )
}

export default Home;
