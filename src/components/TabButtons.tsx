import { Button, ButtonGroup, theme } from "@chakra-ui/react";
import styled from "@emotion/styled";
import React, { ReactElement } from "react";

type TabButtonsProps = {
  buttons: ElementDetail[];
};

export const TabButtons = (props: TabButtonsProps) => {
  const { buttons } = props;
  return (
    <ButtonGroup width="100%" isAttached>
      {buttons.map((t, i) => (
        <TabButton
          borderRadius="lg"
          shadow="md"
          variant="outline"
          key={`${i} - ${t.name}`}
          width="100%"
          leftIcon={t.element}
        >
          {t.name}
        </TabButton>
      ))}
    </ButtonGroup>
  );
};

export const TabButton = styled(Button)`
  font-size: ${theme.fontSizes.xs};
  background-color: ${theme.colors.white};
  font-weight: ${theme.fontWeights.normal};
`;

export type ElementDetail = {
  element: ReactElement;
  name: string;
};
