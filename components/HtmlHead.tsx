import NextHead from 'next/head';

interface IHtmlHeadProps {
  title: string;
}

export default function Head(props: IHtmlHeadProps) {
  const { title } = props;
  return (
    <NextHead>
      <title>KC Stardust - {title}</title>
      <link rel="icon" href="/favicon.svg" />
    </NextHead>
  );
}
