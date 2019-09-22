import React from 'react';
import Fade from 'react-reveal/Fade';
import { useStaticQuery, graphql } from 'gatsby';
import Heading from 'reusecore/src/elements/Heading';
import Text from 'reusecore/src/elements/Text';
import SectionWrapper, {
  ContentWrapper,
  NewsWrapper,
  NewsItem,
} from './news.style';

const News = () => {
  const data = useStaticQuery(graphql`
    query {
      interiorJson {
        newsData {
          id
          title
          excerpt
          link_url
          link_text
        }
      }
    }
  `);

  return (
    <SectionWrapper id="news">
      <ContentWrapper>
        <div className="row">
          <div className="col">
            <Fade delay={30}>N</Fade>
          </div>
          <div className="col">
            <Fade delay={60}>E</Fade>
          </div>
          <div className="col">
            <Fade delay={90}>W</Fade>
          </div>
          <div className="col">
            <Fade delay={90}>S</Fade>
          </div>
        </div>
        <NewsWrapper>
          {data.interiorJson.newsData.map(item => (
            <NewsItem key={`news_key${item.id}`}>
              <Fade bottom delay={60 * item.id}>
                <Heading as="h3" content={item.title} />
                <Text content={item.excerpt} />
                <a href={item.link_url} className="read_more__btn">
                  <span className="arrow"></span>
                  <span className="text">{item.link_text}</span>
                </a>
              </Fade>
            </NewsItem>
          ))}
        </NewsWrapper>
      </ContentWrapper>
    </SectionWrapper>
  );
};

export default News;
