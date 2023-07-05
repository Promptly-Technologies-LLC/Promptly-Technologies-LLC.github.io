import Logo from '@/components/logos/Logo';
import TextLogo from '@/components/logos/TextLogo';
import s from './Navbar.module.css';

export default async function Navbar() {

  return (
    <nav className={s.navbar}>
      <a href="#skip" className="sr-only focus:not-sr-only">
        Skip to content
      </a>
        <div className={s.navbarcontainer}>
          <div className={s.navbarleftside}>
            <a href="/" className="nav-link h-full" aria-label="Logo">
              <Logo className="h-full" />
            </a>
            <a href="/" className="nav-link h-3/4" aria-label="Logo">
              <TextLogo className="h-full" />
            </a>  
          </div>
          <div className={s.navbarrightside}>
                <a href="/" className="nav-link">
                  Home
                </a>
                <a href="/AboutUs" className="nav-link">
                  About
                </a>
          </div>
        </div>
    </nav>
  );
}
