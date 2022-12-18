import Layout from '../components/layout/layout';
import '../styles/globals.css';

function MyApp ( { Component, pageProps } ) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;

//    https://nextjs-project-pre-rendering-default-rtdb.asia-southeast1.firebasedatabase.app/events