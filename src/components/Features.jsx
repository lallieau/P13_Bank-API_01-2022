import styled from 'styled-components';

import ChatIcon from '../assets/icon-chat.png';
import MoneyIcon from '../assets/icon-money.png';
import SecurityIcon from '../assets/icon-security.png';

const FeaturesContent = styled.section`
  display: flex;
  flex-direction: column;

  @media (min-width: 920px) {
    flex-direction: row;
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
const FeatureItem = styled.div`
  flex: 1;
  padding: 2.5rem;
`;
const FeatureIcon = styled.img`
  width: 100px;
  border: 10px solid #00bc77;
  border-radius: 50%;
  padding: 1rem;
`;

const FeatureTitle = styled.h3`
  color: #222;
  font-size: 1.25rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
`;

const FeatureText = styled.p``;

export const Features = () => {
  return (
    <FeaturesContent>
      <Title>Features</Title>
      <FeatureItem>
        <FeatureIcon alt="Chat Icon" src={ChatIcon}></FeatureIcon>
        <FeatureTitle>You are our #1 priority</FeatureTitle>
        <FeatureText>
          Need to talk to a representative? You can get in touch through our
          24/7 chat or through a phone call in less than 5 minutes.
        </FeatureText>
      </FeatureItem>
      <FeatureItem>
        <FeatureIcon alt="Money Icon" src={MoneyIcon}></FeatureIcon>
        <FeatureTitle>More savings means higher rates</FeatureTitle>
        <FeatureText>
          The more you save with us, the higher your interest rate will be!
        </FeatureText>
      </FeatureItem>
      <FeatureItem>
        <FeatureIcon alt="Security Icon" src={SecurityIcon}></FeatureIcon>
        <FeatureTitle>Security you can trust</FeatureTitle>
        <FeatureText>
          We use top of the line encryption to make sure your data and money is
          always safe.
        </FeatureText>
      </FeatureItem>
    </FeaturesContent>
  );
};
