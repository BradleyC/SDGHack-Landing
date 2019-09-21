import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Text from 'reusecore/src/elements/Text';
import Heading from 'reusecore/src/elements/Heading';
import Button from 'reusecore/src/elements/Button';
import Image from 'reusecore/src/elements/Image';
import Container from 'common/src/components/UI/Container';
import SectionWrapper, { ContentWrapper } from './designedAndBuilt.style';

const DesignedAndBuilt = () => {
  const data = useStaticQuery(graphql`
    query {
      appClassicJson {
        designAndBuilt {
          image {
            publicURL
          }
          title
          description
        }
      }
    }
  `);
  const { image, title, description } = data.appClassicJson.designAndBuilt;

  return (
    <SectionWrapper>
      <Container>
        <ContentWrapper>
          <div className="image">
            <Image src={image.publicURL} alt="Built Logo" />
          </div>
          <div className="content">
            <Heading content={title} />
            <Text content={description} />
            <Button title="Learn More" />
          </div>
        </ContentWrapper>
      </Container>
    </SectionWrapper>
  );
};

export default DesignedAndBuilt;
