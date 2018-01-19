import { layout, el } from '../react-style-elements/elements';
import { connect } from '../react-style-elements/redux';

import styles from '../styles';

import * as Home from '../page/home';

export default connect(({ theme, feed, dispatch }) =>
  layout(styles(theme), el(styles.app, null, Home.view({ feed, dispatch }))),
);
