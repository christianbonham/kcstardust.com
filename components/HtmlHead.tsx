import NextHead from 'next/head';

interface IHtmlHeadProps {
  title: string;
  metaDescription: string;
}

export default function Head(props: IHtmlHeadProps) {
  const { title, metaDescription } = props;
  return (
    <NextHead>
      <title>KC Stardust - {title}</title>
      <meta key="description" name="description" content={metaDescription} />
      <link rel="icon" href="/favicon.svg" />
    </NextHead>
  );
}
