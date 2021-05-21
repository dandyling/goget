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
          key={`${i} - ${t.name}`}
          variant="outline"
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
  box-shadow: ${theme.shadows.md};
  border-radius: ${theme.radii.lg};
`;

export type ElementDetail = {
  element: ReactElement;
  name: string;
};
