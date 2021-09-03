/* eslint-disable react/forbid-prop-types */
import P from 'prop-types';
import Head from 'next/head';
import { useContext } from 'react';
import { Base } from '../Base';

import { GridTwoColumns } from '../../components/GridTwoColumns';
import { GridContent } from '../../components/GridContent';
import { GridText } from '../../components/GridText';
import { GridImage } from '../../components/GridImage';

import { PageNotFound } from '../PageNotFound';
import { SwitchContext } from '../../context/SwitchContext';

function Home({ data }) {
  if (!data || !data.length) {
    return <PageNotFound />;
  }

  const { menu, sections, footerHtml } = data[0];

  const {
    links, text, link, srcImg, slug,
  } = menu;

  const { theme } = useContext(SwitchContext);

  return (
    <>
      <Head>
        <meta name="theme-color" content={theme.colors.primaryColor} />
        <meta
          name="description"
          content="Um site criado para treinar next e ver o
        funcionamento" />
        <title>Next Nordics</title>
      </Head>
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
    </>
  );
}

export default Home;

Home.propTypes = {
  data: P.array,
};
