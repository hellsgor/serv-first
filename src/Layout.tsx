import { ROUTES } from './config/routes';
import { Link, Outlet } from 'react-router';

export default function Layout() {
  return (
    <>
    <header>
      <nav>
        <ul>
          {Object.entries(ROUTES).map(([key, value]) => 
            <li key={key}>
              <Link to={value}>{key}</Link>
            </li>)}
        </ul>
      </nav>
    </header>
    <main>
      <Outlet/>
    </main>
    </>
  )
}
