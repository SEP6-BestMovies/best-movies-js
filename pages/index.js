import { Fragment } from 'react';
import Head from "next/head";
import CardComponent from '../components/UI/CardComponent';
import SmallCardComponent from '../components/UI/SmallCardComponent';
import ReviewsFrontPageSection from '../components/UI/ReviewsFrontPageSection';
import SmallCardComponentReplace from '../components/UI/SmallCardComponentReplace';

export default function Home() {
  return (
    <Fragment>
      <Head>
        <title>Home - Best Movies</title>
        <meta
          name="description"
        />
        <link rel="icon" href="/logo.ico" />
      </Head>
      <SmallCardComponentReplace />
      <CardComponent />
      <SmallCardComponent />
    </Fragment>
  );
}
