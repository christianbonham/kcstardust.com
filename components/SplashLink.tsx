/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';

interface ISplashLinkProps {
  alt: string;
  link: string;
  icon: string;
  style?: React.CSSProperties;
}

export default function SplashLink(props: ISplashLinkProps) {
  const { alt, link, icon, style } = props;
  console.log('splashlink:', style);
  return (
    <Link href={link} passHref={true}>
      <a style={style}>
        <img src={icon} alt={alt} />
      </a>
    </Link>
  );
}
