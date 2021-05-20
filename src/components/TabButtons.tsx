import { Button, ButtonGroup } from "@chakra-ui/react";
import React, { ReactElement } from "react";

type TabButtons = {
  buttons: ElementDetail[];
};

export const TabButtons = (props: TabButtons) => {
  const { buttons } = props;
  return (
    <ButtonGroup width="100%" isAttached>
      {buttons.map((t) => (
        <TabButton width="100%" leftIcon={t.element}>
          {t.name}
        </TabButton>
      ))}
    </ButtonGroup>
  );
};

export const TabButton = ({ children, ...rest }: any) => {
  return (
    <Button
      variant="outline"
      borderRadius="lg"
      fontSize="xs"
      backgroundColor="white"
      fontWeight="normal"
      shadow="md"
      {...rest}
    >
      {children}
    </Button>
  );
};

export type ElementDetail = {
  element: ReactElement;
  name: string;
};
