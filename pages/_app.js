import '../styles/globals.css'
import Layout from '../components/layout/Layout'
import { UserProvider } from '@auth0/nextjs-auth0';
import 'react-calendar/dist/Calendar.css'
import Calendar from 'react-calendar'

function MyApp({ Component, pageProps }) {
  return (
    <UserProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </UserProvider>
  );
}

export default MyApp
