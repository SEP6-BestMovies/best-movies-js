import { Fragment } from 'react';
import CardComponent from '../components/UI/CardComponent';
import SmallCardComponent from '../components/UI/SmallCardComponent';
import ReviewsFrontPageSection from '../components/UI/ReviewsFrontPageSection';
import SmallCardComponentReplace from '../components/UI/SmallCardComponentReplace';
import Banner from '../components/UI/Banner';

export default function Home() {
  return (
    <Fragment>
      <SmallCardComponentReplace />
      <CardComponent />
      <ReviewsFrontPageSection />
      <SmallCardComponent />
    </Fragment>
  );
}
