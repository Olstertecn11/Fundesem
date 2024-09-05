import React from 'react';
import {
  Box,
  Flex,
  Text,
  Link,
  IconButton,
  Img,
  Spacer,
  HStack,
  Icon,
} from '@chakra-ui/react';
import { FaFacebookF, FaTwitter, FaInstagram, FaSearch } from 'react-icons/fa';
import { MdEmail, MdLocationOn, MdPhone } from 'react-icons/md';
import NavbarLinks from './NavbarLinks';

const Navbar = () => {
  return (
    <>
      <Box bg="green.500" w="100%" p={2} color="white">
        <Flex maxW="1200px" mx="auto" justify="space-between" align="center">
          <HStack spacing={4} paddingInline={1}>
            <Flex justifyContent='center' alignItems='center' alignContent='center'>
              <Icon as={MdPhone} h={'100%'} mr={1} />
              <Text fontSize="sm" textAlign={'center'}>
                +502 1234-5678
              </Text>
            </Flex>

            <Flex justifyContent='center' alignItems='center' alignContent='center'>
              <Icon as={MdEmail} h={'100%'} mr={1} />
              <Text fontSize="sm" textAlign='center'>
                contact@fundesemgt.org
              </Text>
            </Flex>

            <Flex justifyContent='center' alignItems='center' alignContent='center'>
              <Icon as={MdLocationOn} mr={1} />
              <Text fontSize="sm">Ciudad de Guatemala</Text>
            </Flex>
          </HStack>
          <HStack spacing={4}>
            <Link href="https://www.facebook.com/fundesemgt" _hover={{ background: 'green.400' }} isExternal>
              <IconButton
                aria-label="Facebook"
                icon={<FaFacebookF />}
                colorScheme="whiteAlpha"
                size="sm"
                variant="ghost"
              />
            </Link>
            <Link href="https://twitter.com/fundesem_gt" _hover={{ background: 'green.400' }} isExternal>
              <IconButton
                aria-label="Twitter"
                icon={<FaTwitter />}
                colorScheme="whiteAlpha"
                size="sm"
                variant="ghost"
              />
            </Link>
            <Link href="https://instagram.com/fundesemgt" _hover={{ background: 'green.400' }} isExternal>
              <IconButton
                aria-label="Instagram"
                icon={<FaInstagram />}
                colorScheme="whiteAlpha"
                size="sm"
                variant="ghost"
              />
            </Link>
          </HStack>
        </Flex>
      </Box>

      <Box bg="white" w="100%" boxShadow="md" py={4}>
        <Flex maxW="1200px" mx="auto" align="center" paddingInline={24} >
          <Img
            objectFit="cover"
            src="https://fundesemgt.org/wp-content/uploads/2023/04/cropped-Logotipo-FUNDESEM-PNG-FullColor-1.png"
            width={140}
          />

          <NavbarLinks />
        </Flex>
      </Box>
    </>
  );
};

export default Navbar;

