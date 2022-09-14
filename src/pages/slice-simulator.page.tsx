import { SliceZone } from '@prismicio/react';
import { SliceSimulator } from '@prismicio/slice-simulator-react';
import { GetStaticProps } from 'next';

import state from '../../.slicemachine/libraries-state.json';
import { components } from '../../slices';

export default function SliceSimulatorPage() {
  return (
    <SliceSimulator
      // The "sliceZone" prop should be a function receiving slices and rendering them using your "SliceZone" component.
      sliceZone={(props) => <SliceZone {...props} components={components} />}
      state={state}
    />
  );
}

export const getStaticProps: GetStaticProps = () => {
  if (process.env.NODE_ENV === 'production') {
    return {
      notFound: true,
    };
  }
  return { props: {} };
};
