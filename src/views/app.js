import { el } from '../react-style-elements/elements';
import { connectedLayout } from '../react-style-elements/redux';

import styleSheet, { Styles } from '../styles';

import * as Home from '../page/home';

export default connectedLayout(styleSheet, ({ state, dispatch }) =>
  el(Styles.app, null, Home.view()),
);
