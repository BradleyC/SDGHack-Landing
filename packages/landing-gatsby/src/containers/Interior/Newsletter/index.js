import React, { useState } from 'react';
import { Icon } from 'react-icons-kit';
import { iosEmailOutline } from 'react-icons-kit/ionicons/iosEmailOutline';
import Fade from 'react-reveal/Fade';
import { useStaticQuery, graphql } from 'gatsby';
import Heading from 'reusecore/src/elements/Heading';
import Text from 'reusecore/src/elements/Text';
import Button from 'reusecore/src/elements/Button';
import Input from 'common/src/components/Input';
import { SectionHeader } from '../interior.style';
import SectionWrapper, { FormWrapper, FormGroup } from './newsletter.style';

const Newsletter = () => {
  const data = useStaticQuery(graphql`
    query {
      interiorJson {
        newsletterData {
          title
          slogan
          note
        }
      }
    }
  `);
  const { title, slogan, note } = data.interiorJson.newsletterData;

  const [state, setState] = useState({ email: '', valid: '' });
  const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/; //eslint-disable-line

  const handleOnChange = e => {
    let value = '';
    if (e.target.value.match(emailRegex)) {
      if (e.target.value.length > 0) {
        value = e.target.value;
        setState({ ...state, email: value, valid: 'valid' });
      }
    } else {
      if (e.target.value.length > 0) {
        setState({ ...state, valid: 'invalid' });
      } else {
        setState({ ...state, valid: '' });
      }
    }
  };

  const handleSubscriptionForm = e => {
    e.preventDefault();
    if (state.email.match(emailRegex)) {
      console.log(state.email);
      setState({ email: '', valid: '' });
    }
  };

  return (
    <SectionWrapper>
      <Fade bottom>
        <SectionHeader>
          <Heading as="h5" content={title} />
          <Heading content={slogan} />
        </SectionHeader>
      </Fade>
      <Fade bottom delay={30}>
        <FormWrapper onSubmit={handleSubscriptionForm}>
          <FormGroup>
            <Input
              className={state.valid}
              type="email"
              placeholder="Enter email address"
              icon={<Icon icon={iosEmailOutline} />}
              iconPosition="left"
              required={true}
              onChange={handleOnChange}
              aria-label="email"
            />
            <Button
              type="submit"
              colors="primaryWithBg"
              title="Join Us"
              aria-label="submit"
            />
          </FormGroup>
          <Text content={note} />
        </FormWrapper>
      </Fade>
    </SectionWrapper>
  );
};

export default Newsletter;
