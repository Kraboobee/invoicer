import { createTheme, MantineProvider, MantineColorsTuple, rem } from '@mantine/core';
import './Metrify/Metrify.css';

const uiViolet: MantineColorsTuple = [
  '#f2edff',
  '#ded8fb',
  '#baacef',
  '#937fe5',
  '#7258dc',
  '#5e3fd7',
  '#5333d5',
  '#4426bd',
  '#3c21aa',
  '#311a97',
];

const uiCyan: MantineColorsTuple = [
  '#e2fdfb',
  '#d3f6f0',
  '#aee9e0',
  '#86dbce',
  '#64d1bf',
  '#4dcab6',
  '#3ec6b1',
  '#2bb09b',
  '#1a9c8a',
  '#008877',
];

export const theme = createTheme({
  /** Put your mantine theme override here */

  colors: {
    uiViolet,
    uiCyan,
  },

  fontFamily: 'Metrify C',
});
