import type { Schema, Struct } from '@strapi/strapi';

export interface ComponentsCard extends Struct.ComponentSchema {
  collectionName: 'components_components_cards';
  info: {
    description: '';
    displayName: 'Card';
  };
  attributes: {
    CardSubtext: Schema.Attribute.Text;
    CardTitle: Schema.Attribute.String;
    ServiceImage: Schema.Attribute.Media<'images'>;
  };
}

export interface ComponentsCta extends Struct.ComponentSchema {
  collectionName: 'components_components_cta_s';
  info: {
    description: '';
    displayName: 'CTA ';
  };
  attributes: {
    CTAHref: Schema.Attribute.String;
    CTAText: Schema.Attribute.String;
  };
}

export interface ComponentsLinks extends Struct.ComponentSchema {
  collectionName: 'components_components_links';
  info: {
    displayName: 'Links';
  };
  attributes: {
    href: Schema.Attribute.String;
    linktext: Schema.Attribute.String;
  };
}

export interface ComponentsWorkcard extends Struct.ComponentSchema {
  collectionName: 'components_components_workcards';
  info: {
    description: '';
    displayName: 'workcard';
  };
  attributes: {
    ClientName: Schema.Attribute.String;
    WebsiteLink: Schema.Attribute.Component<'components.links', false>;
    WorkDescription: Schema.Attribute.Text;
  };
}

export interface LayoutCtaSection extends Struct.ComponentSchema {
  collectionName: 'components_layout_cta_sections';
  info: {
    displayName: 'CTASection';
  };
  attributes: {
    CTAButton: Schema.Attribute.Component<'components.cta', false>;
    CTAImage: Schema.Attribute.Media<'images' | 'files'>;
    CTASubtext: Schema.Attribute.String;
    CTAText: Schema.Attribute.String;
  };
}

export interface LayoutFooter extends Struct.ComponentSchema {
  collectionName: 'components_layout_footers';
  info: {
    displayName: 'Footer';
  };
  attributes: {
    BgCover: Schema.Attribute.Media<'images'>;
    CName: Schema.Attribute.String;
    Email: Schema.Attribute.Email;
    PhoneNumber: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 12;
      }>;
    ShortCName: Schema.Attribute.String;
  };
}

export interface LayoutHeader extends Struct.ComponentSchema {
  collectionName: 'components_layout_headers';
  info: {
    description: '';
    displayName: 'Header';
  };
  attributes: {
    BusinessHref: Schema.Attribute.String;
    BusinessName: Schema.Attribute.String;
    ContactCTA: Schema.Attribute.Component<'components.cta', false>;
    NavLinks: Schema.Attribute.Component<'components.links', true>;
  };
}

export interface LayoutHero extends Struct.ComponentSchema {
  collectionName: 'components_layout_heroes';
  info: {
    description: '';
    displayName: 'Hero';
  };
  attributes: {
    HeroImage: Schema.Attribute.Media<'images'>;
    HeroSubtitle: Schema.Attribute.Text;
    HeroTitle: Schema.Attribute.String;
    LearnMoreCTA: Schema.Attribute.Component<'components.cta', false>;
  };
}

export interface LayoutOurStory extends Struct.ComponentSchema {
  collectionName: 'components_layout_our_stories';
  info: {
    description: '';
    displayName: 'OurStory';
  };
  attributes: {
    BlueText1: Schema.Attribute.Text;
    ContactCTA: Schema.Attribute.Component<'components.cta', false>;
    OurStoryImage: Schema.Attribute.Media<'images'>;
    Text2: Schema.Attribute.Text;
    text3: Schema.Attribute.Text;
  };
}

export interface LayoutServices extends Struct.ComponentSchema {
  collectionName: 'components_layout_services';
  info: {
    description: '';
    displayName: 'Services';
  };
  attributes: {
    Nocard: Schema.Attribute.Component<'components.card', true>;
    ServiceCards: Schema.Attribute.Component<'components.card', true>;
    ServiceSectionName: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Services'>;
    ServiceSectionText: Schema.Attribute.String;
  };
}

export interface LayoutWorks extends Struct.ComponentSchema {
  collectionName: 'components_layout_works';
  info: {
    displayName: 'works';
  };
  attributes: {
    ourWorks: Schema.Attribute.Component<'components.workcard', true>;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'components.card': ComponentsCard;
      'components.cta': ComponentsCta;
      'components.links': ComponentsLinks;
      'components.workcard': ComponentsWorkcard;
      'layout.cta-section': LayoutCtaSection;
      'layout.footer': LayoutFooter;
      'layout.header': LayoutHeader;
      'layout.hero': LayoutHero;
      'layout.our-story': LayoutOurStory;
      'layout.services': LayoutServices;
      'layout.works': LayoutWorks;
    }
  }
}
