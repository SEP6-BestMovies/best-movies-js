import { Fragment } from 'react';
import CardComponent from '../components/UI/CardComponent';
import SmallCardComponent from '../components/UI/SmallCardComponent';

export default function Home() {
  return (
    <Fragment>
      <CardComponent />
      <SmallCardComponent />
    </Fragment>
  );
}
