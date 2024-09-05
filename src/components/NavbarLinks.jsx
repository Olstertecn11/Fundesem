
import React from 'react';
import {
  HStack,
  Link,
  IconButton,
} from '@chakra-ui/react';
import { FaSearch } from 'react-icons/fa';

const NavbarLinks = () => {
  return (
    <HStack spacing={8} fontSize="sm" fontWeight="semibold" ml={'10rem'} className='nav-links-container' >
      <Link
        href="#"
        _hover={{
          textDecoration: 'none',
          borderBottom: '4px solid green',
          paddingBottom: '4px',
        }}
        transition="border-bottom 0.3s ease-in-out"
        borderBottom="4px solid transparent"
      >
        INICIO
      </Link>
      <Link
        href="#"
        _hover={{
          textDecoration: 'none',
          borderBottom: '4px solid green',
          paddingBottom: '4px',
        }}
        transition="border-bottom 0.3s ease-in-out"
        borderBottom="4px solid transparent"
      >
        ACERCA DE NOSOTROS
      </Link>
      <Link
        href="#"
        _hover={{
          textDecoration: 'none',
          borderBottom: '4px solid green',
          paddingBottom: '4px',
        }}
        transition="border-bottom 0.3s ease-in-out"
        borderBottom="4px solid transparent"
      >
        ÁREAS DE TRABAJO
      </Link>
      <Link
        href="#"
        _hover={{
          textDecoration: 'none',
          borderBottom: '4px solid green',
          paddingBottom: '4px',
        }}
        transition="border-bottom 0.3s ease-in-out"
        borderBottom="4px solid transparent"
      >
        NOTICIAS
      </Link>
      <Link
        href="#"
        _hover={{
          textDecoration: 'none',
          borderBottom: '4px solid green',
          paddingBottom: '4px',
        }}
        transition="border-bottom 0.3s ease-in-out"
        borderBottom="4px solid transparent"
      >
        PROYECTOS
      </Link>
      <IconButton
        aria-label="Buscar"
        icon={<FaSearch />}
        variant="ghost"
        color="gray.600"
        size="sm"
      />
    </HStack>
  );
};

export default NavbarLinks;
