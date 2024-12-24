import type { Schema, Struct } from '@strapi/strapi';

export interface SharedMedia extends Struct.ComponentSchema {
  collectionName: 'components_shared_media';
  info: {
    displayName: 'Media';
    icon: 'file-video';
  };
  attributes: {
    file: Schema.Attribute.Media<'images' | 'files' | 'videos'>;
  };
}

export interface SharedOps extends Struct.ComponentSchema {
  collectionName: 'components_shared_ops';
  info: {
    displayName: 'Ops';
    icon: 'hashtag';
  };
  attributes: {
    category: Schema.Attribute.Enumeration<
      [
        'Other',
        'Debt',
        'Pay',
        'Food',
        'Ticket',
        'Airport',
        'Rapping',
        'Transport',
        'Taxi',
        'Uber',
      ]
    > &
      Schema.Attribute.DefaultTo<'Other'>;
    currency: Schema.Attribute.Enumeration<['USD', 'EUR', 'MLC', 'CUP']> &
      Schema.Attribute.DefaultTo<'USD'>;
    date: Schema.Attribute.DateTime;
    name: Schema.Attribute.String;
    note: Schema.Attribute.Text;
    rate: Schema.Attribute.Decimal &
      Schema.Attribute.SetMinMax<
        {
          min: 1;
        },
        number
      > &
      Schema.Attribute.DefaultTo<1>;
    type: Schema.Attribute.Enumeration<['Debit', 'Credit']> &
      Schema.Attribute.DefaultTo<'Debit'>;
    value: Schema.Attribute.Decimal &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      > &
      Schema.Attribute.DefaultTo<0>;
  };
}

export interface SharedQuote extends Struct.ComponentSchema {
  collectionName: 'components_shared_quotes';
  info: {
    displayName: 'Quote';
    icon: 'indent';
  };
  attributes: {
    body: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface SharedRichText extends Struct.ComponentSchema {
  collectionName: 'components_shared_rich_texts';
  info: {
    description: '';
    displayName: 'Rich text';
    icon: 'align-justify';
  };
  attributes: {
    body: Schema.Attribute.RichText;
  };
}

export interface SharedSeo extends Struct.ComponentSchema {
  collectionName: 'components_shared_seos';
  info: {
    description: '';
    displayName: 'Seo';
    icon: 'allergies';
    name: 'Seo';
  };
  attributes: {
    metaDescription: Schema.Attribute.Text & Schema.Attribute.Required;
    metaTitle: Schema.Attribute.String & Schema.Attribute.Required;
    shareImage: Schema.Attribute.Media<'images'>;
  };
}

export interface SharedSlider extends Struct.ComponentSchema {
  collectionName: 'components_shared_sliders';
  info: {
    description: '';
    displayName: 'Slider';
    icon: 'address-book';
  };
  attributes: {
    files: Schema.Attribute.Media<'images', true>;
  };
}

export interface SharedState extends Struct.ComponentSchema {
  collectionName: 'components_shared_states';
  info: {
    description: '';
    displayName: 'State';
    icon: 'bulletList';
  };
  attributes: {
    attachments: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    date: Schema.Attribute.DateTime;
    note: Schema.Attribute.Text;
    value: Schema.Attribute.Enumeration<
      [
        'Requested',
        'Negotiating',
        'Pending',
        'Blocked',
        'Prepared',
        'Processed',
        'Sent',
        'Received',
        'Ready',
        'Delivered',
      ]
    > &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'Requested'>;
  };
}

export interface SharedVirtual extends Struct.ComponentSchema {
  collectionName: 'components_shared_virtuals';
  info: {
    displayName: 'virtual';
    icon: 'collapse';
  };
  attributes: {
    description: Schema.Attribute.String;
    label: Schema.Attribute.String;
    value: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'shared.media': SharedMedia;
      'shared.ops': SharedOps;
      'shared.quote': SharedQuote;
      'shared.rich-text': SharedRichText;
      'shared.seo': SharedSeo;
      'shared.slider': SharedSlider;
      'shared.state': SharedState;
      'shared.virtual': SharedVirtual;
    }
  }
}
