import {
  el,
  column,
  row,
  wrappedRow,
  navigation,
  footer,
  ul,
  li,
  link,
} from '../react-style-elements/elements';
import {
  center,
  href,
  maxWidth,
  paddingTop,
  paddingBottom,
  paddingXY,
  spacing,
} from '../react-style-elements/elements/attributes';

import styles from '../styles';
import { spacingScale } from '../scales';

export default function page(content) {
  return column(
    null,
    [],
    [
      viewHeader(),
      column(null, [spacing(spacingScale(3))], [content, viewFooter()]),
    ],
  );
}

function viewHeader() {
  return navigation(
    styles.navBar,
    [paddingXY(spacingScale(1), spacingScale(0.5))],
    el(
      null,
      [center(), maxWidth(1140)],
      row(
        null,
        [],
        [
          link(styles.navBarBrand, [href('/')], 'conduit'),
          // ul(
          //   Styles.NavBarNav,
          //   [],
          //   [
          //     li(Styles.NavItem, [], 'Home'),
          //     li(Styles.NavItem, [], 'Sign in'),
          //     li(Styles.NavItem, [], 'Sign up'),
          //   ],
          // ),
        ],
      ),
    ),
  );
}

function viewFooter() {
  return footer(
    styles.footer,
    [paddingXY(0, spacingScale(1))],
    row(
      null,
      [center(), maxWidth(1140), spacing(10)],
      [
        link(styles.footerLink, [href('/')], 'conduit'),
        row(
          styles.footerAttribution,
          [],
          [
            'An interactive learning project from ',
            link(null, [href('https://thinkster.io')], 'Thinkster'),
            '. Code & design licensed under MIT.',
          ],
        ),
      ],
    ),
  );
}
