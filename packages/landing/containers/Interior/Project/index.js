import React, { Fragment } from 'react';
import Fade from 'react-reveal/Fade';
import Text from 'reusecore/src/elements/Text';
import Heading from 'reusecore/src/elements/Heading';
import Image from 'reusecore/src/elements/Image';
import Container from 'common/src/components/UI/Container';
import GlideCarousel from 'common/src/components/GlideCarousel';
import GlideSlide from 'common/src/components/GlideCarousel/glideSlide';
import { SectionHeader } from '../interior.style';
import SectionWrapper, {
  ProjectWrapper,
  TextWrapper,
  ImageWrapper,
} from './project.style';

import { projectData } from 'common/src/data/Interior';

const Project = () => {
  const { title, slogan, thumb_url, projects } = projectData;
  const glideOptions = {
    type: 'carousel',
    perView: 1,
    gap: 0,
  };

  return (
    <SectionWrapper id="project">
      <Container width="1360px">
        <Fade bottom>
          <SectionHeader>
            <Heading as="h5" content={title} />
            <Heading content={slogan} />
          </SectionHeader>
        </Fade>

        <ProjectWrapper>
          <GlideCarousel
            carouselSelector="project_carousel"
            options={glideOptions}
            nextButton={<span className="next_arrow" />}
            prevButton={<span className="prev_arrow" />}
          >
            <Fragment>
              {projects.map(project => (
                <GlideSlide key={`project_key${project.id}`}>
                  <TextWrapper>
                    <Text content={project.text} />
                    <Text content={project.text2} />
                  </TextWrapper>
                </GlideSlide>
              ))}
            </Fragment>
          </GlideCarousel>

          <ImageWrapper>
            <Image src={thumb_url} alt="Interiro landing by RedQ" />
          </ImageWrapper>
        </ProjectWrapper>
      </Container>
    </SectionWrapper>
  );
};

export default Project;
