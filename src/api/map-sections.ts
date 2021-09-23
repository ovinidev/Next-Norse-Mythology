import { GridContentProps } from '../components/GridContent';
import { gridElements, GridImageProps } from '../components/GridImage';
import { GridElements, GridTextProps } from '../components/GridText';
import { GridTwoColumnsProps } from '../components/GridTwoColumns';
import { SectionProps } from '../templates/Home';

/* eslint-disable */
export const mapSections = (sections = []): SectionProps[] => {
  return sections.map((section) => {
    if (section.__component === 'section.section-two-columns') {
      return mapSectionTwoColumns(section);
    }
    if (section.__component === 'section.section-content') {
      return mapSectionContent(section);
    }
    if (section.__component === 'section.section-grid') {
      const { Text_grid = [], Image_grid = [] } = section;
      if (Text_grid.length > 0) {
        return mapTextGrid(section);
      }

      if (Image_grid.length > 0) {
        return mapImageGrid(section);
      }
    }

    return section;
  });
};

export const mapSectionTwoColumns = (section = {} as any): GridTwoColumnsProps => {
  const {
    __component: component = '',
    title = '',
    description: text = '',
    image: { url: srcImg = '' } = '',
    metadata: { background = false, section_id: sectionId = '' } = false,
  } = section;

  return {
    component,
    title,
    text,
    srcImg,
    background,
    sectionId,
  };
};

export const mapSectionContent = (section = {} as any): GridContentProps => {
  const {
    __component: component = '',
    title = '',
    content: html = '',
    metadata: { background = false, section_id: sectionId = '' } = false,
  } = section;

  return {
    component,
    title,
    background,
    sectionId,
    html,
  };
};

export const mapTextGrid = (section = {} as any)
  : GridTextProps => {
  const {
    title = '',
    description = '',
    metadata: { background = false, section_id: sectionId = '' } = false,
    Text_grid: grid = [],
  } = section;

  return {
    component: 'section.section-grid-text',
    title,
    background,
    sectionId,
    description,
    grid: grid.map((text: any): GridElements => {
      const { title = '', description = '' } = text;
      return {
        title,
        description,
      };
    }),
  };
};

export const mapImageGrid = (section = {} as any): GridImageProps => {
  const {
    title = '',
    description = '',
    metadata: { background = false, section_id: sectionId = '' } = false,
    Image_grid: grid = [],
  } = section;

  return {
    component: 'section.section-grid-image',
    title,
    background,
    sectionId,
    description,
    grid: grid.map((img: any): gridElements => {
      const {
        image: { url: srcImg = '', alternativeText: altText = '' } = '',
      } = img;
      return {
        srcImg,
        altText,
      };
    }),
  };
};
