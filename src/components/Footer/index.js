import React from "react";
import { FaFacebook, FaInstagram, FaTwitch, FaYoutube } from "react-icons/fa";
import { animateScroll as scroll } from "react-scroll";
import {
    FooterContainer,
    FooterWrap,
    FooterLinksContainer,
    FooterLinksWrapper,
    FooterLinkItems,
    FooterLinkTitle,
    FooterLink,
    SocialMedia,
    SocialMediaWrap,
    SocialLogo,
    WebsiteRights,
    SocialIcon,
    SocialIconLink,
} from "./FooterElements";

const Footer = () => {

    const toggleHome = () => {
        scroll.scrollToTop();
    }

    return (
        <FooterContainer>
            <FooterWrap>
                <FooterLinksContainer>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle>About Us</FooterLinkTitle>
                            <FooterLink to="">How it works</FooterLink>
                            <FooterLink to="">Testimonials</FooterLink>
                            <FooterLink to="">Careers</FooterLink>
                            <FooterLink to="">Investors</FooterLink>
                            <FooterLink to="">Terms of Services</FooterLink>
                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FooterLinkTitle>Contact us</FooterLinkTitle>
                            <FooterLink to="">Contact</FooterLink>
                            <FooterLink to="">Support</FooterLink>
                            <FooterLink to="">Destinations</FooterLink>
                            <FooterLink to="">Sponsarship</FooterLink>
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle>Videos</FooterLinkTitle>
                            <FooterLink to="">Submit Videos</FooterLink>
                            <FooterLink to="">Ambassadors</FooterLink>
                            <FooterLink to="">Agency</FooterLink>
                            <FooterLink to="">Influencer</FooterLink>
                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FooterLinkTitle>Social Media</FooterLinkTitle>
                            <FooterLink to="">Instagram</FooterLink>
                            <FooterLink to="">Facebook</FooterLink>
                            <FooterLink to="">Youtube</FooterLink>
                            <FooterLink to="">Twitter</FooterLink>
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                </FooterLinksContainer>

                <SocialMedia>
                    <SocialMediaWrap>
                        <SocialLogo to="/" onClick={toggleHome}>Doll</SocialLogo>
                        <WebsiteRights>Dolla © {new Date().getFullYear()} All Rights Reserved.</WebsiteRights>
                        <SocialIcon>
                            <SocialIconLink href="/" target="_blank" >
                                <FaFacebook />
                            </SocialIconLink>
                            <SocialIconLink href="/" target="_blank" >
                                <FaInstagram />
                            </SocialIconLink>
                            <SocialIconLink href="/" target="_blank" >
                                <FaTwitch />
                            </SocialIconLink>
                            <SocialIconLink href="/" target="_blank" >
                                <FaYoutube />
                            </SocialIconLink>
                        </SocialIcon>
                    </SocialMediaWrap>
                </SocialMedia>
            </FooterWrap>
        </FooterContainer>
    );
};

export default Footer;
