import logo from '../../ui-together-logo.png';
import classes from './LogoBlock.module.css';

export function LogoBlock() {
  return (
    <div className={classes.logoGrid}>
      <img src={logo} width={110} className={classes.logo} />
      <h1 className={classes.title}>UI-Together</h1>
      <h2 className={classes.tagline}>Show the World Who You Are</h2>
      <h3 className={classes.url}>www.ui-together.com</h3>
    </div>
  );
}
