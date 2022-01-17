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

const Title = styled.h2``;
const FeatureText = styled.p``;

const FeatureItem = styled.div`
  flex: 1;
  padding: 2.5rem;
`;
const FeatureIcon = styled.img`
  width: 100px;
  border: 10px solid ${({theme}) => theme.colors.primary};
  border-radius: 50%;
  padding: 1rem;
`;

const FeatureTitle = styled.h3`
  color: ${({theme}) => theme.colors.itemTitle};
  font-size: ${({theme}) => theme.fontSize.sm};
  font-weight: bold;
  margin-bottom: 0.5rem;
`;

/**
 * Renders features informations on Home Page
 * @returns {JSX}
 */
export const Features = () => {
  const features = [
    {
      icon: ChatIcon,
      altIcon: 'Chat Icon',
      title: 'You are our #1 priority',
      text: 'Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes.',
    },
    {
      icon: MoneyIcon,
      altIcon: 'Money Icon',
      title: 'More savings means higher rates',
      text: 'The more you save with us, the higher your interest rate will be!',
    },
    {
      icon: SecurityIcon,
      altIcon: 'Security Icon',
      title: 'Security you can trust',
      text: 'We use top of the line encryption to make sure your data and money is always safe.',
    },
  ];

  return (
    <FeaturesContent>
      <Title className="sr-only">Features</Title>
      {features.map((feature, index) => {
        return (
          <FeatureItem key={index}>
            <FeatureIcon alt={feature.altIcon} src={feature.icon}></FeatureIcon>
            <FeatureTitle>{feature.title}</FeatureTitle>
            <FeatureText>{feature.text}</FeatureText>
          </FeatureItem>
        );
      })}
    </FeaturesContent>
  );
};
