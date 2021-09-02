/* eslint-disable react/forbid-prop-types */
/* eslint-disable prefer-template */
/* eslint-disable no-unneeded-ternary */
import P from 'prop-types';
import { Base } from '../Base';

import { GridTwoColumns } from '../../components/GridTwoColumns';
import { GridContent } from '../../components/GridContent';
import { GridText } from '../../components/GridText';
import { GridImage } from '../../components/GridImage';

import { PageNotFound } from '../PageNotFound';

function Home({ data }) {
  if (!data) {
    document.title = 'Página não encontrada';
    return <PageNotFound />;
  }

  const { menu, sections, footerHtml } = data;

  const {
    links, text, link, srcImg, slug,
  } = menu;

  return (
      <Base
        links={links}
        footerHtml={footerHtml}
        logoData={{ text, link, srcImg }}
      >
        {sections.map((section, index) => {
          const { component } = section;
          const key = `${slug}-${index}`;

          if (component === 'section.section-two-columns') {
            return <GridTwoColumns key={key} {...section} />;
          }

          if (component === 'section.section-content') {
            return <GridContent key={key} {...section} />;
          }

          if (component === 'section.section-grid-text') {
            return <GridText key={key} {...section} />;
          }

          if (component === 'section.section-grid-image') {
            return <GridImage key={key} {...section} />;
          }

          return 1;
        })}
      </Base>
  );
}

export default Home;

Home.propTypes = {
  data: P.object,
};
