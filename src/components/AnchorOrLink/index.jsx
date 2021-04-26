import React from 'react';
import { Anchor, Link } from './styles';

const AnchorOrLink = ({
  isAnchor, href, to, isLink, children,buttonColor
}) => (
  <>
    {isAnchor && <Anchor buttonColor={buttonColor} href={href}>{children}</Anchor>}
    {isLink && <Link buttonColor={buttonColor} to={to}>{children}</Link>}
  </>
);

export default AnchorOrLink;
