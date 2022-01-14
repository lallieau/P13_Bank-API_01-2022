import styled from 'styled-components';
import backgroundImage from '../assets/bank-tree.jpeg';

const HeroMain = styled.div`
  background-image: url(${backgroundImage});
  background-position: 0 -50px;
  background-size: cover;
  background-repeat: no-repeat;
  height: 300px;
  position: relative;

  @media (min-width: 920px) {
    height: 400px;
    background-position: 0% 33%;
  }
`;

const HeroContent = styled.section`
  position: relative;
  top: 2rem;
  width: 200px;
  background: white;
  padding: 2rem;
  text-align: left;
  margin: 0 auto;

  @media (min-width: 920px) {
    position: absolute;
    top: 50px;
    right: 50px;
    width: 300px;
    margin: 2rem;
  }
`;

const Title = styled.h2`
  border: 0 !important;
  clip: rect(1px, 1px, 1px, 1px) !important; /* 1 */
  -webkit-clip-path: inset(50%) !important;
  clip-path: inset(50%) !important; /* 2 */
  height: 1px !important;
  margin: -1px !important;
  overflow: hidden !important;
  padding: 0 !important;
  position: absolute !important;
  width: 1px !important;
  white-space: nowrap !important; /* 3 */
`;

const Subtitle = styled.p`
  font-weight: bold;
  font-size: 1rem;
  margin: 0;

  @media (min-width: 920px) {
    font-size: 1.5rem;
  }
`;

const Text = styled.p`
  margin-bottom: 0;
  font-size: 0.9rem;

  @media (min-width: 920px) {
    font-size: 1.2rem;
  }
`;

export const Hero = () => {
  return (
    <HeroMain>
      <HeroContent>
        <Title>Promoted Content</Title>
        <Subtitle>No fees.</Subtitle>
        <Subtitle>No minimum deposit.</Subtitle>
        <Subtitle>High interest rates.</Subtitle>
        <Text>Open a savings account with Argent Bank today!</Text>
      </HeroContent>
    </HeroMain>
  );
};

/*
  <div class="hero">
        <section class="hero-content">
          <h2 class="sr-only">Promoted Content</h2>
          <p class="subtitle">No fees.</p>
          <p class="subtitle">No minimum deposit.</p>
          <p class="subtitle">High interest rates.</p>
          <p class="text">Open a savings account with Argent Bank today!</p>
        </section>
      </div>
 */
