import {
  Box,
  ChakraProvider,
  extendTheme,
  Grid,
  Image,
  Text,
} from "@chakra-ui/react";
import * as React from "react";
import { ShortcutsBar } from "./ShortcutBar";
import { jobIcons } from "./stubs/Jobs";

const theme = extendTheme({
  colors: {
    brand: "rgb(0, 180, 173)",
  },
});

export const App = () => {
  return (
    <ChakraProvider theme={theme}>
      <Box textAlign="center" p={3} pb={0}>
        <ShortcutsBar />
        <Grid
          gridTemplateColumns="repeat(4, 1fr)"
          gridAutoRows="auto"
          padding={4}
          gridGap={4}
        >
          {jobIcons.map((job) => {
            return (
              <Box as="button" flexDirection="column">
                <Image width="100%" src={job.imageUrl} alt={job.name} />
                <Text fontSize="small">{job.name}</Text>
              </Box>
            );
          })}
        </Grid>
      </Box>
    </ChakraProvider>
  );
};
