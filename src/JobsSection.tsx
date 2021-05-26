import { Box, Grid, Image, Text } from "@chakra-ui/react";
import React from "react";
import { ShortcutsBar } from "./ShortcutsBar";
import { jobIcons } from "./stubs/Jobs";

export const JobsSection = () => {
  return (
    <Box as="section" backgroundColor="white" p={3} pb={0} mb={2}>
      <ShortcutsBar />
      <Grid
        gridTemplateColumns="repeat(4, 1fr)"
        gridAutoRows="auto"
        padding={4}
        gridGap={4}
      >
        {jobIcons.map((job, i) => (
          <Box key={`${i} - ${job.name}`} as="button" flexDirection="column">
            <Image width="100%" src={job.imageUrl} alt={job.name} />
            <Text fontSize="small">{job.name}</Text>
          </Box>
        ))}
      </Grid>
    </Box>
  );
};
