import React from 'react';
import Text from 'reusecore/src/elements/Text';
import Image from 'reusecore/src/elements/Image';
import CustomerWrapper, { ImageWrapper } from './customer.style';

import { client } from 'common/src/data/AppClassic';

const Customer = () => {
  return (
    <CustomerWrapper>
      <Text content="Trusted by companies like:" />
      <ImageWrapper>
        {client.map(item => (
          <Image
            key={`client-key${item.id}`}
            src={item.image}
            alt={item.title}
          />
        ))}
      </ImageWrapper>
    </CustomerWrapper>
  );
};

export default Customer;
