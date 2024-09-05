
import React from 'react';
import { Box, Image, Heading, Text, Link, HStack, Avatar } from '@chakra-ui/react';

const HeroCard = ({ imageSrc, title, description, link }) => {
  return (
    <Box
      maxW="sm"
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      boxShadow="md"
      bg="white"
    >
      {/* Imagen */}
      <Image src={imageSrc} alt={title} w="100%" h="200px" objectFit="cover" />

      {/* Contenido */}
      <Box p={6}>
        <Heading as="h3" size="md" mb={2}>
          <Link href={link} _hover={{ textDecoration: 'none', color: 'green.600' }}>
            {title}
          </Link>
        </Heading>
        <HStack spacing={2} alignItems="center" mb={2}>
          <Avatar size="sm" />
          <Text fontSize="sm">{description}</Text>
        </HStack>
        <Link href={link} color="green.600" fontWeight="bold">
          Leer más
        </Link>
      </Box>
    </Box>
  );
};

export default HeroCard;
