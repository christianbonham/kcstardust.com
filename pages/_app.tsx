import '@/styles/global.css';
import '@/styles/header.css';
import '@/styles/footer.css';
import '@/styles/color.css';
import '@/styles/kcs.css';
import '@/styles/Row.css';

import LayoutOneColumn from '@/components/LayoutOneColumn';

import type { ReactElement, ReactNode } from 'react';
import type { NextPage } from 'next';
import type { AppProps } from 'next/app';

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export default function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  return (
    <LayoutOneColumn>
      <Component {...pageProps} />
    </LayoutOneColumn>
  );
}
