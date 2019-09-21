import React from 'react';
import Fade from 'react-reveal/Fade';
import Heading from 'reusecore/src/elements/Heading';
import BlogPost from 'common/src/components/BlogPost';
import Container from 'common/src/components/UI/Container';
import { SectionHeader } from '../interior.style';
import SectionWrapper, { FeatureWrapper } from './feature.style';

import { featureData } from 'common/src/data/Interior/';

const Feature = () => {
  const { title, slogan, features } = featureData;

  return (
    <SectionWrapper id="feature">
      <Fade bottom>
        <SectionHeader>
          <Heading as="h5" content={title} />
          <Heading content={slogan} />
        </SectionHeader>
      </Fade>
      <Container width="1360px">
        <Fade bottom delay={30}>
          <FeatureWrapper>
            {features.map(item => (
              <BlogPost
                key={`feature_key${item.id}`}
                thumbUrl={item.icon}
                title={item.title}
                excerpt={item.description}
              />
            ))}
          </FeatureWrapper>
        </Fade>
      </Container>
    </SectionWrapper>
  );
};

export default Feature;
