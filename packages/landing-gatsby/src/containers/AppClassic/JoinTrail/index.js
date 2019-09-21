import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Fade from 'react-reveal/Fade';
import Image from 'reusecore/src/elements/Image';
import Text from 'reusecore/src/elements/Text';
import Heading from 'reusecore/src/elements/Heading';
import Button from 'reusecore/src/elements/Button';
import JoinTrailArea, { ContentWrapper, ButtonGroup } from './joinTrail.style';

const JoinTrail = () => {
  const data = useStaticQuery(graphql`
    query {
      appClassicJson {
        joinSlack {
          logo {
            publicURL
          }
          title
          description
        }
      }
    }
  `);
  const { logo, title, description } = data.appClassicJson.joinSlack;

  return (
    <JoinTrailArea id="trail">
      <ContentWrapper>
        <Fade up>
          <Image src={logo.publicURL} alt="Slack" />
        </Fade>
        <Fade up delay={100}>
          <Heading content={title} />
        </Fade>
        <Fade up delay={200}>
          <Text content={description} />
        </Fade>
        <Fade up delay={300}>
          <ButtonGroup>
            <Button title="Join with Slack" />
            <Button title="Login with Email" variant="textButton" />
          </ButtonGroup>
        </Fade>
      </ContentWrapper>
    </JoinTrailArea>
  );
};

export default JoinTrail;
