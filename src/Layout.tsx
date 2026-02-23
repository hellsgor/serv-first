import Counter from './components/Counter';
import { ROUTES } from './config/routes';
import { Link, Outlet } from 'react-router';

export default function Layout() {
  return (
    <>
      <header>
        <nav>
          <ul
            role="list"
            style={{
              display: 'flex',
              columnGap: '32px',
              justifyContent: 'center',
            }}
          >
            {Object.entries(ROUTES).map(([key, value]) => (
              <li key={key}>
                <Link to={value}>{key}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </header>
      <main>
        <Outlet />
        <Counter />
        <span>v.0.0.1</span>
      </main>
    </>
  );
}
