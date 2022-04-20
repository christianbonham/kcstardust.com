import NextHead from 'next/head';

interface IHtmlHeadProps {
  title: string;
}

function Head(props: IHtmlHeadProps) {
  const { title } = props;
  return (
    <NextHead>
      <title>KC Stardust - {title}</title>
      <link rel="icon" href="/favicon.ico" />
    </NextHead>
  );
}

export default Head;
