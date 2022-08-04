import {
    FooterContainer,
    Text
} from './styledFooter';

const Footer = () => {
    return ( 
        <FooterContainer>
            <Text>All Rights Reserved. Bart Tabusao {new Date().getFullYear()}</Text>
        </FooterContainer>
    );
}

export default Footer;