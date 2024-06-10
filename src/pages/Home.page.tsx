import { Welcome } from '../components/Welcome/Welcome';
import { ColorSchemeToggle } from '../components/ColorSchemeToggle/ColorSchemeToggle';
import { Invoice } from '../components/Invoice/Invoice';
import { theme } from '@/theme';
import { useMantineTheme } from '@mantine/core';

export function HomePage() {
  const theme = useMantineTheme();

  return (
    <>
      <Invoice />
      <ColorSchemeToggle />
    </>
  );
}
