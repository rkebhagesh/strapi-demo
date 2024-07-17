import type { Schema, Attribute } from '@strapi/strapi';

export interface CardCardWithImage extends Schema.Component {
  collectionName: 'components_card_card_with_images';
  info: {
    displayName: 'CardWithImage';
  };
  attributes: {
    Heading: Attribute.String;
    Image: Attribute.Media;
    Descripton: Attribute.String;
  };
}

export interface CardProducTtabs extends Schema.Component {
  collectionName: 'components_card_produc_ttabs';
  info: {
    displayName: 'producTtabs';
    description: '';
  };
  attributes: {
    Name: Attribute.String;
  };
}

export interface MainNavigation extends Schema.Component {
  collectionName: 'components_main_navigations';
  info: {
    displayName: 'Navigation';
    description: '';
  };
  attributes: {
    ParentLinkLabel: Attribute.String;
    ChildLinkLabel: Attribute.String;
    ParentLink: Attribute.String;
    ChildLink: Attribute.String;
  };
}

export interface SectionGreyBoxContent extends Schema.Component {
  collectionName: 'components_section_grey_box_contents';
  info: {
    displayName: 'GreyBoxContent';
    description: '';
  };
  attributes: {
    Descripton: Attribute.Text;
    BtnLink: Attribute.String;
  };
}

export interface SectionImageGallery extends Schema.Component {
  collectionName: 'components_section_image_galleries';
  info: {
    displayName: 'ImageGalleryContent';
    description: '';
  };
  attributes: {
    GalleryLink: Attribute.String;
    GalleryImages: Attribute.Media;
    GalleryHeading: Attribute.String;
    GalleryDescription: Attribute.Text;
    GalleryThumb: Attribute.Media;
    GalleryID: Attribute.Integer;
  };
}

export interface SectionImageWithContent extends Schema.Component {
  collectionName: 'components_section_image_with_contents';
  info: {
    displayName: 'imageWithContent';
    description: '';
  };
  attributes: {
    sectionHeading: Attribute.String;
    sectionDescription: Attribute.String;
    sectionImage: Attribute.Media;
    ImgLeft: Attribute.Boolean;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'card.card-with-image': CardCardWithImage;
      'card.produc-ttabs': CardProducTtabs;
      'main.navigation': MainNavigation;
      'section.grey-box-content': SectionGreyBoxContent;
      'section.image-gallery': SectionImageGallery;
      'section.image-with-content': SectionImageWithContent;
    }
  }
}
