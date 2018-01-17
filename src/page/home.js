import { column, h1, paragraph } from '../react-style-elements/elements';

import styles from '../styles';
import page from '../views/page';

export function view() {
  return page(column(null, [], [viewBanner()]));
}

function viewBanner() {
  return column(
    null,
    [],
    [
      h1(styles.bannerTitle, [], 'conduit'),
      paragraph(styles.bannerText, [], 'A place to share your knowledge.'),
    ],
  );
}
