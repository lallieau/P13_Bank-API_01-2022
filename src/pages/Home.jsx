import {Layout} from '../components/Layout';
import {Features} from '../components/Features';
import {Hero} from '../components/Hero';

/**
 * Renders Home page
 * @returns {JSX}
 */
export const Home = () => {
  return (
    <>
      <Layout
        isDarkTheme={false}
        title="Argent Bank - Home Page"
        description={'Bienvenue sur Argent Bank'}>
        <Hero />
        <Features />
      </Layout>
    </>
  );
};
