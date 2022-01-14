import {Layout} from '../components/Layout';
import {Features} from '../components/Features';
import {Hero} from '../components/Hero';

export const Home = () => {
  return (
    <>
      <Layout isDarkTheme={false}>
        <Hero />
        <Features />
      </Layout>
    </>
  );
};
