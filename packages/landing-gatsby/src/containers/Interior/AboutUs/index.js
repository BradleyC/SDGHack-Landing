import React from 'react';
import Fade from 'react-reveal/Fade';
import { useStaticQuery, graphql } from 'gatsby';
import Image from 'gatsby-image';
import Heading from 'reusecore/src/elements/Heading';
import Text from 'reusecore/src/elements/Text';
import SectionWrapper, {
  Container,
  ImageWrapper,
  TextWrapper,
} from './aboutUs.style';

const AboutUs = () => {
  const data = useStaticQuery(graphql`
    query {
      interiorJson {
        aboutData {
          thumb_url {
            childImageSharp {
              fluid(quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          title
          text
          text2
        }
      }
    }
  `);
  const { thumb_url, title, text, text2 } = data.interiorJson.aboutData;

  const setTitle = title => {
    return { __html: title };
  };

  return (
    <SectionWrapper id="aboutUs">
      <Container>
        <ImageWrapper>
          <Fade left>
            <Image
              fluid={
                (thumb_url !== null) | undefined
                  ? thumb_url.childImageSharp.fluid
                  : {}
              }
              alt={`Interior Landing by RedQ`}
              className="carousel_img"
            />
          </Fade>
        </ImageWrapper>
        <TextWrapper>
          <Fade right>
            <Heading dangerouslySetInnerHTML={setTitle(title)} />
            <Text content={text} />
            <Text content={text2} />
            <a href="#1" className="learn__more-btn">
              <span className="btn_text">VISITE SITE</span>
              <span className="next_arrow"></span>
            </a>
          </Fade>
        </TextWrapper>
      </Container>
    </SectionWrapper>
  );
};

export default AboutUs;
