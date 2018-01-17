import { el } from '../react-style-elements/elements';
import { connectedLayout } from '../react-style-elements/redux';

import styles from '../styles';

import * as Home from '../page/home';

export default connectedLayout(styles(), ({ state, dispatch }) =>
  el(styles.app, null, Home.view()),
);
