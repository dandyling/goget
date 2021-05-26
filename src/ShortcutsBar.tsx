import { Image } from "@chakra-ui/react";
import React from "react";
import { ElementDetail, TabButtons } from "./components/TabButtons";
import { ReactComponent as TemplateSVG } from "./assets/templates.svg";
import { ReactComponent as RewardSVG } from "./assets/templates.svg";
import { ComponentIcon } from "./components/ComponentIcon";

export const ShortcutsBar = () => {
  return <TabButtons buttons={tabButtons} />;
};

const tabButtons: ElementDetail[] = [
  {
    name: "Favourite",
    element: (
      <ComponentIcon
        icon={
          <Image
            width="100%"
            src="https://app.goget.my/static/media/FavouriteIcon.ccb09da0.svg"
          />
        }
      />
    ),
  },
  {
    name: "Templates",
    element: <ComponentIcon icon={<TemplateSVG />} />,
  },
  {
    name: "Rewards",
    element: <ComponentIcon icon={<RewardSVG />} />,
  },
];
