import { createTheme, MantineProvider, rem } from '@mantine/core';
import './Metrify/Metrify.css';

export const theme = createTheme({
  /** Put your mantine theme override here */
  fontFamily: 'Metrify C',

  headings: {
    fontFamily: 'Metrify B',
    sizes: {
      h1: { fontSize: rem(36) },
    },
  },
});
