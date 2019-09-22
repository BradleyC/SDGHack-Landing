import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Text from 'reusecore/src/elements/Text';
import Image from 'reusecore/src/elements/Image';
import CustomerWrapper, { ImageWrapper } from './customer.style';

const Customer = () => {
  const data = useStaticQuery(graphql`
    query {
      appClassicJson {
        client {
          id
          title
          image {
            publicURL
          }
        }
      }
    }
  `);
  const { client } = data.appClassicJson;

  return (
    <CustomerWrapper>
      <Text content="Trusted by companies like:" />
      <ImageWrapper>
        {client.map(item => (
          <Image
            key={`client-key${item.id}`}
            src={item.image.publicURL}
            alt={item.title}
          />
        ))}
      </ImageWrapper>
    </CustomerWrapper>
  );
};

export default Customer;
