import { styleSheet, style } from './react-style-elements/style';
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

export default styleSheet([
  style('app', [contentTypeface, Font.size(16)]),

  // page
  style('navBar', [Border.rounded(4)]),
  style('navBarBrand', [
    brandTypeface,
    Font.size(fontScale(1.5)),
    Color.text(brandColor),
  ]),
  style('footer', [Color.background(Color.rgb(243, 243, 243))]),
  style('footerLink', [Color.text(brandColor)]),
  style('footerAttribution', [Color.text(Color.rgb(187, 187, 187))]),

  // home
  style('bannerTitle', [
    brandTypeface,
    Font.size(fontScale(3.5)),
    Font.center(),
    Font.weight(700),
  ]),
  style('bannerText', [Font.size(fontScale(1.5)), Font.center()]),
]);
