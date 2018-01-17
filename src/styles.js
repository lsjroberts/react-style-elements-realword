import { styleSheet, style, classes } from './react-style-elements/style';
import * as Border from './react-style-elements/style/border';
import * as Color from './react-style-elements/style/color';
import * as Font from './react-style-elements/style/font';

import { fontScale } from './scales';

const brandColor = Color.rgb(92, 184, 92);
const brandTypeface = Font.typeface([
  Font.font('Titillium Web'),
  Font.font('sans-serif'),
]);
const contentTypeface = Font.typeface([
  Font.font('Source Sans Pro'),
  Font.font('sans-serif'),
]);

export const Styles = classes([
  'app',

  // page
  'navBar',
  'navBarBrand',
  'footer',
  'footerLink',
  'footerAttribution',

  // home
  'bannerTitle',
  'bannerText',
]);

export default styleSheet(Styles, [
  style(Styles.app, [contentTypeface, Font.size(16)]),

  // page
  style(Styles.navBar, [Border.rounded(4)]),
  style(Styles.navBarBrand, [
    brandTypeface,
    Font.size(fontScale(1.5)),
    Color.text(brandColor),
  ]),
  style(Styles.footer, [Color.background(Color.rgb(243, 243, 243))]),
  style(Styles.footerLink, [Color.text(brandColor)]),
  style(Styles.footerAttribution, [Color.text(Color.rgb(187, 187, 187))]),

  // home
  style(Styles.bannerTitle, [
    brandTypeface,
    Font.size(fontScale(3.5)),
    Font.center(),
    Font.weight(700),
  ]),
  style(Styles.bannerText, [Font.size(fontScale(1.5)), Font.center()]),
]);
