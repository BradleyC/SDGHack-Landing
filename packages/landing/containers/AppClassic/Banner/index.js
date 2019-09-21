import React from 'react';
import Fade from 'react-reveal/Fade';
import { Icon } from 'react-icons-kit';
import { playCircle } from 'react-icons-kit/fa/playCircle';
import Text from 'reusecore/src/elements/Text';
import Image from 'reusecore/src/elements/Image';
import Button from 'reusecore/src/elements/Button';
import Heading from 'reusecore/src/elements/Heading';
import Rating from 'common/src/components/Rating';
import Container from 'common/src/components/UI/Container';
import BannerWrapper, {
  BannerContent,
  RatingInfo,
  BannerImage,
  ButtonGroup,
} from './banner.style';

import microsoft from 'common/src/assets/image/appClassic/microsoft.svg';
import bannerImg from 'common/src/assets/image/appClassic/bannerImg.png';

const Banner = () => {
  return (
    <BannerWrapper id="home">
      <Container>
        <BannerContent>
          <Fade up>
            <RatingInfo>
              <Rating rating={4} />
              4.9 of 5 By <img src={microsoft} alt="Microsoft" />
            </RatingInfo>
          </Fade>
          <Fade up delay={100}>
            <Heading
              as="h1"
              content="The Revolution of
          Ultimate Platform to 
          monitor your task"
            />
          </Fade>
          <Fade up delay={200}>
            <Text
              content="Lorem ipsum dolor sit amet consectetur adipisicing elit sed eiusmod tempor incididunt labore dolore magna
          ipsum dolor sit amet consectetur."
            />
          </Fade>
          <Fade up delay={300}>
            <ButtonGroup>
              <Button className="primary" title="Start Free trail" />
              <Button
                className="text"
                variant="textButton"
                icon={<Icon icon={playCircle} />}
                iconPosition="left"
                title="Watch Video"
              />
            </ButtonGroup>
          </Fade>
        </BannerContent>
        <BannerImage>
          <Fade up delay={100}>
            <Image src={bannerImg} alt="Banner" />
          </Fade>
        </BannerImage>
      </Container>
    </BannerWrapper>
  );
};

export default Banner;
