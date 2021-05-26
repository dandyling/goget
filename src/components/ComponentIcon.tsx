import { Box } from "@chakra-ui/react";
import React, { ReactElement } from "react";

interface Props extends Record<string, any> {
  icon: ReactElement;
}

export const ComponentIcon = (props: Props) => {
  const { icon, ...rest } = props;
  return (
    <Box w={5} fill="brand" {...rest}>
      {icon}
    </Box>
  );
};
