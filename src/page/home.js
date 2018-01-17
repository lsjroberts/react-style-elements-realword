import { column, h1, paragraph } from '../react-style-elements/elements';

import { Styles } from '../styles';
import page from '../views/page';

export function view() {
  return page(column(null, [], [viewBanner()]));
}

function viewBanner() {
  return column(
    null,
    [],
    [
      h1(Styles.bannerTitle, [], 'conduit'),
      paragraph(Styles.bannerText, [], 'A place to share your knowledge.'),
    ],
  );
}
