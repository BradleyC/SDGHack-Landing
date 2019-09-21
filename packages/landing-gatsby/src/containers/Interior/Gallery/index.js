import React, { Fragment } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Image from 'reusecore/src/elements/Image';
import GlideCarousel from 'common/src/components/GlideCarousel';
import GlideSlide from 'common/src/components/GlideCarousel/glideSlide';
import GalleryWrapper, { GalleryCard, Button } from './gallery.style';

const Gallery = () => {
  const data = useStaticQuery(graphql`
    query {
      interiorJson {
        galleryData {
          id
          thumb_url {
            publicURL
          }
          name
          link
        }
      }
    }
  `);

  const glideOptions = {
    type: 'carousel',
    perView: 5,
    gap: 0,
    breakpoints: {
      1200: {
        perView: 4,
      },
      991: {
        perView: 3,
      },
      480: {
        perView: 2,
      },
    },
  };
  return (
    <GalleryWrapper id="gallery">
      <GlideCarousel
        carouselSelector="gallery_carousel"
        options={glideOptions}
        nextButton={<i className="flaticon-next" />}
        prevButton={<i className="flaticon-left-arrow" />}
      >
        <Fragment>
          {data.interiorJson.galleryData.map(item => (
            <GlideSlide key={`gallery_key${item.id}`}>
              <GalleryCard>
                <a href={item.link}>
                  <Image src={item.thumb_url.publicURL} alt={item.name} />
                  <Button className="read_more__btn">
                    <span className="arrow"></span>
                    {item.name}
                  </Button>
                </a>
              </GalleryCard>
            </GlideSlide>
          ))}
        </Fragment>
      </GlideCarousel>
    </GalleryWrapper>
  );
};

export default Gallery;
