import { Fragment } from 'react';
import CardComponent from '../components/UI/CardComponent';
import SmallCardComponent from '../components/UI/SmallCardComponent';
import ReviewsFrontPageSection from '../components/UI/ReviewsFrontPageSection';

export default function Home() {
  return (
    <Fragment>
      <CardComponent />
      <SmallCardComponent />
      <ReviewsFrontPageSection />
    </Fragment>
  );
}
