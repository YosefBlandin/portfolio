import React from 'react';
import { Anchor, Link } from './styles';

const AnchorOrLink = ({
  isAnchor, href, to, isLink, children,buttoncolor
}) => (
  <>
    {isAnchor && <Anchor buttoncolor={buttoncolor} href={href}>{children}</Anchor>}
    {isLink && <Link buttoncolor={buttoncolor} to={to}>{children}</Link>}
  </>
);

export default AnchorOrLink;
