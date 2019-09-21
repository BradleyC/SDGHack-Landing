import React, { Fragment } from 'react';
import Fade from 'react-reveal/Fade';
import { Icon } from 'react-icons-kit';
import { mediaRecordOutline } from 'react-icons-kit/typicons/mediaRecordOutline';
import { plus } from 'react-icons-kit/typicons/plus';
import { starOutline } from 'react-icons-kit/typicons/starOutline';
import Text from 'reusecore/src/elements/Text';
import Image from 'reusecore/src/elements/Image';
import Heading from 'reusecore/src/elements/Heading';
import Tab, { Panel } from 'common/src/components/Tabs';
import Container from 'common/src/components/UI/Container';
import FeatureBlock from 'common/src/components/FeatureBlock';
import { SectionHeader } from '../appClassic.style';
import SectionWrapper, { TabArea } from './featureTab.style';

import { featuresTab } from 'common/src/data/AppClassic';

const FeatureTab = () => {
  const { slogan, title, tab } = featuresTab;
  return (
    <SectionWrapper>
      <Container>
        <SectionHeader>
          <Fade up>
            <Heading as="h5" content={slogan} />
            <Heading content={title} />
          </Fade>
        </SectionHeader>
        <Fade up delay={100}>
          <TabArea>
            <Tab active={0}>
              {tab.map(item => (
                <Panel
                  title={
                    <FeatureBlock
                      style={{ '--color': `${item.color}` }}
                      iconPosition="left"
                      icon={
                        <Fragment>
                          <Icon className="plus" icon={plus} />
                          <Icon className="circle" icon={mediaRecordOutline} />
                          <Image src={item.icon} alt={item.title} />
                          <Icon className="star" icon={starOutline} />
                        </Fragment>
                      }
                      title={<Heading as="h3" content={item.title} />}
                      description={<Text content={item.description} />}
                    />
                  }
                  key={`app-tab--key${item.id}`}
                >
                  <Fade>
                    <Image src={item.image} alt={item.title} />
                  </Fade>
                </Panel>
              ))}
            </Tab>
          </TabArea>
        </Fade>
      </Container>
    </SectionWrapper>
  );
};

export default FeatureTab;
