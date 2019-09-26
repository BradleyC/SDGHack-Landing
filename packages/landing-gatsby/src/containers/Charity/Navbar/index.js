import React from 'react';
import { Link } from 'gatsby';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import Image from 'reusecore/src/elements/Image';
import Container from 'common/src/components/UI/Container';
import NavbarWrapper, { MenuWrapper, Button } from './navbar.style';

import logoImage from 'common/src/assets/image/charity/_logo.png';
// import logoImage from 'common/src/assets/image/charity/logo.svg';
import heartImage from 'common/src/assets/image/charity/1F4A7.svg';

const Navbar = () => {
  return (
    <NavbarWrapper className="navbar">
      <Container fullWidth={true}>
        <Link className="logo" to="/">
          <Image style={{height:"60px"}} src={logoImage} alt="Charity React Next Landing" />
        </Link>
        <MenuWrapper>
          <AnchorLink className="smooth_scroll" href="#branch" offset={81}>
            Redeem
          </AnchorLink>
          <Button>
            <a href="http://cirrus.com.s3-website-us-east-1.amazonaws.com/#/dashboard"><span className="text">EARN</span></a>
            <Image style={{height:"25px"}} src={heartImage} alt="Charity Landing" />
          </Button>
        </MenuWrapper>
      </Container>
    </NavbarWrapper>
  );
};

export default Navbar;
