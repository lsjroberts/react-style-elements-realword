import { el, column, h1 } from '../react-style-elements/elements';

export default function view(article) {
  return el(
    null,
    [],
    column(
      null,
      [],
      [article.author, h1(null, [], article.title), article.body],
    ),
  );
}
