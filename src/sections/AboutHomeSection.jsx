
import React from 'react';
import { Box, Flex, Heading, Text, SimpleGrid } from '@chakra-ui/react';
import HeroCard from '../components/HeroCard';

const AboutHomeSection = () => {
  const cardsData = [
    {
      imageSrc: "https://fundesemgt.org/wp-content/uploads/2023/04/WhatsApp-Image-2023-04-06-at-21.12.37-768x514.jpeg",
      title: "FUNDESEM recibe donación del BCIE",
      description: "En un esfuerzo significativo para fortalecer los proyectos de conservación...",
      link: "#"
    },
    {
      imageSrc: "https://fundesemgt.org/wp-content/uploads/2023/06/IMG-20230616-WA0012-768x518.jpg",
      title: "¿Qué es la desertificación?",
      description: "El impacto de la desertificación no solo se limita al...",
      link: "#"
    },
    {
      imageSrc: "https://fundesemgt.org/wp-content/uploads/2023/05/Acuerdo-768x576.jpeg",
      title: "FUNDESEM y CONAP firman acuerdo",
      description: "Con un esfuerzo en conjunto por promover el desarrollo sostenible...",
      link: "#"
    },
    {
      imageSrc: "https://fundesemgt.org/wp-content/uploads/2023/04/Green-and-Yellow-Modern-Climate-Change-Campaign-Twitter-Post-768x432.png",
      title: "Webinar: El papel de las...",
      description: "El cambio climático es un problema que está afectando a...",
      link: "#"
    }
  ];

  return (
    <Box bg="gray.100" py={16} px={8}>
      <Box textAlign="center" mb={10}>
        <Heading as="h2" size="xl" mb={4}>Nosotros</Heading>
        <Text fontSize="lg" maxW="800px" mx="auto">
          Regida por las disposiciones propias de su escritura pública y por los estatutos y
          reglamentos aprobados por su Junta Directiva y Asamblea General, buscamos fortalecer
          capacidades y resiliencia para facilitar acceso a bienes y servicios naturales en
          forma sostenida que les permitan una mejor calidad de vida.
        </Text>
      </Box>

      {/* Tarjetas */}
      <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={8}>
        {cardsData.map((card, index) => (
          <HeroCard
            key={index}
            imageSrc={card.imageSrc}
            title={card.title}
            description={card.description}
            link={card.link}
          />
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default AboutHomeSection;
