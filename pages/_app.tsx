import { AppProps } from 'next/app';
import Head from 'next/head';
import { MantineProvider } from '@mantine/core';

export default function App(props: AppProps) {
  const { Component, pageProps } = props;

  return (
    <>
      <Head>
        <title>Page title</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
      </Head>

      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        theme={{
          /** Put your mantine theme override here */
          colorScheme: 'dark',
          globalStyles: (theme) => ({
            body: {
              ...theme.fn.fontStyles(),
              backgroundColor: "#0d1117"
            },
          }),
          components: {
            Footer: {
              styles: {
                root: {
                  backgroundColor: "#0d1117"
                }
              }
            },
            Header: {
              styles: {
                root: {
                  backgroundColor: "#0d1117"
                }
              }
            }
          }
        }}
      >
        <Component {...pageProps} />
      </MantineProvider>
    </>
  );
}