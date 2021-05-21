import { Box, Image } from "@chakra-ui/react";
import React, { ReactElement } from "react";
import { ElementDetail, TabButtons } from "./components/TabButtons";

export const ShortcutsBar = () => {
  return <TabButtons buttons={tabButtons} />;
};

type IconContainerProps = {
  children: ReactElement;
};

export const IconContainer = (props: IconContainerProps) => {
  const { children, ...rest } = props;
  return (
    <Box w={5} fill="brand" {...rest}>
      {children}
    </Box>
  );
};

const FavouriteIcon = () => {
  return (
    <IconContainer>
      <Image
        width="100%"
        src="https://app.goget.my/static/media/FavouriteIcon.ccb09da0.svg"
      />
    </IconContainer>
  );
};

const TemplatesIcon = () => {
  return (
    <IconContainer>
      <svg
        width="100%"
        focusable="false"
        viewBox="0 0 24 24"
        aria-hidden="true"
        role="presentation"
      >
        <path fill="none" d="M0 0h24v24H0z"></path>
        <path d="M4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6zm16-4H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-1 9H9V9h10v2zm-4 4H9v-2h6v2zm4-8H9V5h10v2z"></path>
      </svg>
    </IconContainer>
  );
};

const RewardsIcon = () => {
  return (
    <IconContainer>
      <svg
        width="100%"
        focusable="false"
        viewBox="0 0 24 24"
        aria-hidden="true"
        role="presentation"
      >
        <path fill="none" d="M0 0h24v24H0z"></path>
        <path d="M20 6h-2.18c.11-.31.18-.65.18-1 0-1.66-1.34-3-3-3-1.05 0-1.96.54-2.5 1.35l-.5.67-.5-.68C10.96 2.54 10.05 2 9 2 7.34 2 6 3.34 6 5c0 .35.07.69.18 1H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-5-2c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zM9 4c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm11 15H4v-2h16v2zm0-5H4V8h5.08L7 10.83 8.62 12 11 8.76l1-1.36 1 1.36L15.38 12 17 10.83 14.92 8H20v6z"></path>
      </svg>
    </IconContainer>
  );
};

const tabButtons: ElementDetail[] = [
  {
    name: "Favourite",
    element: <FavouriteIcon />,
  },
  {
    name: "Templates",
    element: <TemplatesIcon />,
  },
  {
    name: "Rewards",
    element: <RewardsIcon />,
  },
];
