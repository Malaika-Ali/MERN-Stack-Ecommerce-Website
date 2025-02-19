import { Suspense } from 'react';
import FullPageLoader from './FullPageLoader';

// ==============================|| LOADABLE - LAZY LOADING ||============================== //

const Loadable = (Component) => (props) =>
  (
    <Suspense fallback={<FullPageLoader />}>
      <Component {...props} />
    </Suspense>
  );

export default Loadable;