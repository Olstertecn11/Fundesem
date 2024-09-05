
import React from 'react';
import { Box, Flex, Link, IconButton, HStack, Text, Stack, Divider } from '@chakra-ui/react';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <Box bg="gray.900" color="white" py={8}>
      <Flex maxW="1200px" mx="auto" direction="column" align="center">

        {/* Íconos de redes sociales */}
        <HStack spacing={4} mb={4}>
          <IconButton
            aria-label="Facebook"
            icon={<FaFacebookF />}
            variant="outline"
            colorScheme="green"
            isRound
            size="sm"
            as={Link}
            href="https://www.facebook.com/fundesemgt"
            isExternal
          />
          <IconButton
            aria-label="Twitter"
            icon={<FaTwitter />}
            variant="outline"
            colorScheme="green"
            isRound
            size="sm"
            as={Link}
            href="https://twitter.com/fundesem_gt"
            isExternal
          />
          <IconButton
            aria-label="Instagram"
            icon={<FaInstagram />}
            variant="outline"
            colorScheme="green"
            isRound
            size="sm"
            as={Link}
            href="https://instagram.com/fundesemgt"
            isExternal
          />
        </HStack>

        {/* Enlaces de navegación */}
        <HStack spacing={6} fontSize="sm" mb={4} textAlign="center">
          <Link href="#" _hover={{ textDecoration: 'underline' }}>Inicio</Link>
          <Text>/</Text>
          <Link href="#" _hover={{ textDecoration: 'underline' }}>Acerca de nosotros</Link>
          <Text>/</Text>
          <Link href="#" _hover={{ textDecoration: 'underline' }}>Áreas de trabajo</Link>
          <Text>/</Text>
          <Link href="#" _hover={{ textDecoration: 'underline' }}>Noticias</Link>
          <Text>/</Text>
          <Link href="#" _hover={{ textDecoration: 'underline' }}>Proyectos</Link>
        </HStack>

        <Divider borderColor="gray.600" mb={4} />

        {/* Texto de copyright */}
        <Stack align="center" spacing={1}>
          <Text fontSize="sm" color="gray.400">
            Copyright ©2024 FUNDESEM. Todos los derechos reservados.
          </Text>
          <Text fontSize="sm" color="gray.400">
            Desarrollado por <Link href="#" color="white" _hover={{ textDecoration: 'underline' }}>WebSolutionsGT</Link>
          </Text>
        </Stack>
      </Flex>
    </Box>
  );
};

export default Footer;
