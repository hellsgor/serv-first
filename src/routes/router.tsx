import { createBrowserRouter } from 'react-router';
import Layout from '../Layout';
import MainPage from '../pages/MainPage';
import { ROUTES } from '../config/routes';
import AboutPage from '../pages/AboutPage';
import ContactsPage from '../pages/ContactsPage';

export const router = createBrowserRouter([
  {
    path: ROUTES.MAIN,
    Component: Layout,
    children: [
      {index: true, Component: MainPage},
      {path: ROUTES.ABOUT, Component: AboutPage},
      {path: ROUTES.CONTACTS, Component: ContactsPage},
    ],
  }
])
