import { Welcome } from '../components/Welcome/Welcome';
import { ColorSchemeToggle } from '../components/ColorSchemeToggle/ColorSchemeToggle';
import { Invoice } from '../components/Invoice/Invoice';

export function HomePage() {
  return (
    <>
      <Invoice />
      <ColorSchemeToggle />
    </>
  );
}
