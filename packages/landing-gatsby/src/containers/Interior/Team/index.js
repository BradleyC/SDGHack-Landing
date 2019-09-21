import React, { Fragment, useState, useEffect } from 'react';
import Fade from 'react-reveal/Fade';
import { useStaticQuery, graphql } from 'gatsby';
import Image from 'reusecore/src/elements/Image';
import Text from 'reusecore/src/elements/Text';
import Heading from 'reusecore/src/elements/Heading';
import Container from 'common/src/components/UI/Container';
import GlideCarousel from 'common/src/components/GlideCarousel';
import GlideSlide from 'common/src/components/GlideCarousel/glideSlide';
import { SectionHeader, CircleLoader } from '../interior.style';
import SectionWrapper, {
  TeamCard,
  ImageWrapper,
  TextWrapper,
  CarouselWrapper,
} from './team.style';

const Team = () => {
  const data = useStaticQuery(graphql`
    query {
      interiorJson {
        teamData {
          title
          slogan
          members {
            avatar {
              publicURL
            }
            id
            name
            designation
            social_links {
              id
              url
              icon
            }
          }
        }
      }
    }
  `);
  const { title, slogan, members } = data.interiorJson.teamData;

  const [loading, setLoading] = useState(false);

  const glideOptions = {
    type: 'carousel',
    perView: 3,
    gap: 50,
    breakpoints: {
      1200: {
        perView: 3,
        gap: 30,
      },
      767: {
        perView: 2,
        gap: 30,
      },
      480: {
        perView: 1,
      },
    },
  };

  useEffect(() => {
    setLoading(true);
  }, []);

  return (
    <SectionWrapper id="team">
      <Container width="1360px">
        <Fade bottom>
          <SectionHeader>
            <Heading as="h5" content={title} />
            <Heading content={slogan} />
          </SectionHeader>
        </Fade>
        <Fade bottom delay={30}>
          <CarouselWrapper>
            {loading ? (
              <GlideCarousel
                carouselSelector="team_carousel"
                options={glideOptions}
                nextButton={<span className="next_arrow" />}
                prevButton={<span className="prev_arrow" />}
              >
                <Fragment>
                  {members.map(member => (
                    <GlideSlide key={`team_key${member.id}`}>
                      <TeamCard className="team_card">
                        <ImageWrapper className="image_wrapper">
                          <Image
                            src={member.avatar.publicURL}
                            alt={member.name}
                            className="carousel_img"
                          />
                        </ImageWrapper>
                        <TextWrapper className="text_wrapper">
                          <div className="name_plate">
                            <Heading as="h3" content={member.name} />
                            <Text content={member.designation} />
                          </div>
                          <ul className="social_links">
                            {member.social_links.map(item => {
                              const icon = () => {
                                return { __html: item.icon };
                              };
                              return (
                                <li key={`social_link__key${item.id}`}>
                                  <a
                                    href={item.url}
                                    aria-label="Check out our team member profile"
                                    dangerouslySetInnerHTML={icon()}
                                  ></a>
                                </li>
                              );
                            })}
                          </ul>
                        </TextWrapper>
                      </TeamCard>
                    </GlideSlide>
                  ))}
                </Fragment>
              </GlideCarousel>
            ) : (
              <CircleLoader className="alt">
                <div className="circle"></div>
                <div className="circle"></div>
              </CircleLoader>
            )}
          </CarouselWrapper>
        </Fade>
      </Container>
    </SectionWrapper>
  );
};

export default Team;
