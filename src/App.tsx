import { Box, ChakraProvider, extendTheme, Image } from "@chakra-ui/react";
import styled from "@emotion/styled";
import * as React from "react";
import Slider from "react-slick";
import { JobsSection } from "./JobsSection";
import { ShoppingSection } from "./ShoppingSection";
import { posters } from "./stubs/Posters";

const theme = extendTheme({
  colors: {
    brand: "rgb(0, 180, 173)",
  },
});

export const App = () => {
  return (
    <ChakraProvider theme={theme}>
      <Box as="main" backgroundColor="gray.200">
        <Box as="section">
          <Carousel
            accessibility
            autoplaySpeed={7000}
            autoplay
            dots
            infinite
            speed={500}
            slidesToShow={1}
            slidesToScroll={1}
          >
            {posters.map((image, i) => (
              <Image
                key={`${i} - ${image.name}`}
                src={image.imageUrl}
                alt={image.name}
              />
            ))}
          </Carousel>
        </Box>
        <JobsSection />
        <ShoppingSection />
      </Box>
    </ChakraProvider>
  );
};

export const Carousel = styled(Slider)`
  .slick-dots {
    margin-bottom: 1.5rem;
  }
`;
