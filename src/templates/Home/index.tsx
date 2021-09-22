/* eslint-disable react/forbid-prop-types */
import Head from 'next/head';
import { useContext } from 'react';
import { Base } from '../Base';

import { GridTwoColumns, GridTwoColumnsProps } from '../../components/GridTwoColumns';
import { GridContent, GridContentProps } from '../../components/GridContent';
import { GridText, GridTextProps } from '../../components/GridText';
import { GridImage, GridImageProps } from '../../components/GridImage';

import { PageNotFound } from '../PageNotFound';
import { SwitchContext } from '../../context/SwitchContext';
import { LogoLinkProps } from '../../components/LogoLink';
import { MenuLinkProps } from '../../components/MenuLink';

export type PageData = {
  slug: string;
  title: string;
  footerHtml: string;
  menu: LogoLinkProps & { links: MenuLinkProps[] };
  sections: SectionProps[];
}

export type SectionProps = (
  | GridImageProps
  | GridTextProps
  | GridTwoColumnsProps
  | GridContentProps
) & { component: string };

export type HomeProps = {
  data: PageData[];
};

function Home({ data }: HomeProps) {
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
            return <GridTwoColumns key={key} {...section as GridTwoColumnsProps} />;
          }

          if (component === 'section.section-content') {
            return <GridContent key={key} {...section as GridContentProps} />;
          }

          if (component === 'section.section-grid-text') {
            return <GridText key={key} {...section as GridTextProps} />;
          }

          if (component === 'section.section-grid-image') {
            return <GridImage key={key} {...section as GridImageProps} />;
          }

          return 1;
        })}
      </Base>
    </>
  );
}

export default Home;
