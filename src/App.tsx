import {
  Badge,
  Box,
  ChakraProvider,
  extendTheme,
  Flex,
  Grid,
  Image,
  Link,
  Text,
} from "@chakra-ui/react";
import styled from "@emotion/styled";
import * as React from "react";
import { ReactElement } from "react";
import Slider from "react-slick";
import { IconContainer, ShortcutsBar } from "./ShortcutBar";
import { carouselImages } from "./stubs/Carousel";
import { jobIcons } from "./stubs/Jobs";
import { shoppingLocations } from "./stubs/ShoppingLocation";

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
            {carouselImages.map((image, i) => (
              <Image
                key={`${i} - ${image.name}`}
                src={image.imageUrl}
                alt={image.name}
              />
            ))}
          </Carousel>
        </Box>
        <Box
          as="section"
          backgroundColor="white"
          textAlign="center"
          p={3}
          pb={0}
          mb={2}
        >
          <ShortcutsBar />
          <Grid
            gridTemplateColumns="repeat(4, 1fr)"
            gridAutoRows="auto"
            padding={4}
            gridGap={4}
          >
            {jobIcons.map((job, i) => (
              <Box
                key={`${i} - ${job.name}`}
                as="button"
                flexDirection="column"
              >
                <Image width="100%" src={job.imageUrl} alt={job.name} />
                <Text fontSize="small">{job.name}</Text>
              </Box>
            ))}
          </Grid>
        </Box>
        <Box as="section" backgroundColor="white" p={4}>
          <Flex mb={2} justifyContent="space-between" alignItems="center">
            <Flex alignItems="center">
              <ShoppingIcon w={7} />
              <Text ml={1} fontWeight="semibold" fontSize="lg">
                Shop with GoGet
              </Text>
            </Flex>
            <Link mr={2} fontWeight="normal" color="brand">
              SEE ALL
            </Link>
          </Flex>
          <Text mb={4}>Buy items with personal shoppers.</Text>
          <NoScroll mb={2} overflowX="scroll">
            {shoppingLocations.map((s, i) => (
              <Badge
                key={`${i} - ${s}`}
                mr={4}
                p={2}
                textTransform="none"
                color="brand"
                fontWeight="normal"
                borderRadius="lg"
              >
                {s}
              </Badge>
            ))}
          </NoScroll>
        </Box>
      </Box>
    </ChakraProvider>
  );
};

export const Carousel = styled(Slider)`
  .slick-dots {
    margin-bottom: 1.5rem;
  }
`;

const NoScroll = styled(Flex)`
  ::-webkit-scrollbar {
    display: none;
  }
`;

const ShoppingIcon = (props: any) => (
  <IconContainer {...props}>
    <svg
      focusable="false"
      viewBox="0 0 24 24"
      aria-hidden="true"
      role="presentation"
    >
      <path fill="none" d="M0 0h24v24H0z"></path>
      <path d="M19 6h-2c0-2.76-2.24-5-5-5S7 3.24 7 6H5c-1.1 0-1.99.9-1.99 2L3 20c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm-7-3c1.66 0 3 1.34 3 3H9c0-1.66 1.34-3 3-3zm0 10c-2.76 0-5-2.24-5-5h2c0 1.66 1.34 3 3 3s3-1.34 3-3h2c0 2.76-2.24 5-5 5z"></path>
    </svg>
  </IconContainer>
);

export type Children = { children?: ReactElement };
