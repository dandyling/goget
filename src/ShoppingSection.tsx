import { Box, Flex, Heading, Link, Badge, Text, Image } from "@chakra-ui/react";
import React from "react";
import { locationBanners } from "./stubs/ShoppingLocations";
import { shoppingTags } from "./stubs/ShoppingTags";
import { ReactComponent as ClockSVG } from "./assets/clock.svg";
import { ReactComponent as PinSVG } from "./assets/pin.svg";
import { ReactComponent as ShoppingSVG } from "./assets/shopping.svg";
import { ReactComponent as TickSVG } from "./assets/tick.svg";
import { ElementDetail } from "./components/TabButtons";
import styled from "@emotion/styled";
import { ComponentIcon } from "./components/ComponentIcon";

export const ShoppingSection = () => {
  return (
    <Box as="section" backgroundColor="white" p={4}>
      <Flex mb={2} justifyContent="space-between" alignItems="center">
        <Flex alignItems="center">
          <ComponentIcon icon={<ShoppingSVG />} w={7} />
          <Heading as="h2" ml={1} fontWeight="semibold" fontSize="lg">
            Shop with GoGet
          </Heading>
        </Flex>
        <Link mr={2} fontWeight="normal" color="brand">
          SEE ALL
        </Link>
      </Flex>
      <Text mb={4}>Buy items with personal shoppers.</Text>
      <NoScrollBar mb={4} overflowX="scroll">
        {shoppingTags.map((s, i) => (
          <Badge
            as="button"
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
      </NoScrollBar>
      <NoScrollBar mb={2} overflowX="scroll">
        {locationBanners.map((l, i) => (
          <Flex
            as="button"
            border="2px"
            borderColor="gray.200"
            borderRadius="xl"
            minWidth={`calc(100% + 2rem)`}
            key={`${i} - ${l.name}`}
            mr={4}
          >
            <Flex flex={2}>
              <Image src={l.imageUrl} alt={l.name} />
            </Flex>
            <Flex
              direction="column"
              alignItems="flex-start"
              flex={3}
              padding={2}
            >
              <Text fontWeight="semibold" fontSize="medium">
                {l.name}
              </Text>
              <Text mb={2} fontSize="small">
                {l.category}
              </Text>
              <Flex mb={1} flexWrap="wrap">
                {l.deliveryTime && (
                  <BannerBadge element={<ClockSVG />} name={l.deliveryTime} />
                )}
                {l.driveThrough && (
                  <BannerBadge element={<TickSVG />} name="Drive-Thru" />
                )}
                {l.delivery && (
                  <BannerBadge element={<TickSVG />} name="Delivery" />
                )}
              </Flex>
              <Flex alignItems="center">
                <ComponentIcon w={4} fill="black" icon={<PinSVG />} />
                <Text fontSize="small">{l.location}</Text>
              </Flex>
            </Flex>
          </Flex>
        ))}
      </NoScrollBar>
    </Box>
  );
};

const BannerBadge = (props: ElementDetail) => {
  const { element, name } = props;
  return (
    <Badge
      py={0.5}
      pl={1}
      pr={3}
      backgroundColor="gray.200"
      textTransform="none"
      borderRadius="1rem"
      display="flex"
      justifyContent="center"
      alignItems="center"
      mr={2}
      mb={2}
    >
      <ComponentIcon mr={0.5} fill="gray.400" w={3} icon={element} />
      <Text color="gray.400" fontSize="xx-small">
        {name}
      </Text>
    </Badge>
  );
};

const NoScrollBar = styled(Flex)`
  ::-webkit-scrollbar {
    display: none;
  }
`;
