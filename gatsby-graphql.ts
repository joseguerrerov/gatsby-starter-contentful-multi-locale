export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: any }> = { [K in keyof T]: T[K] };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /**
   * A date string, such as 2007-12-03, compliant with the ISO 8601 standard for
   * representation of dates and times using the Gregorian calendar.
   */
  Date: any;
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any;
};











export type BooleanQueryOperatorInput = {
  eq?: Maybe<Scalars['Boolean']>;
  ne?: Maybe<Scalars['Boolean']>;
  in?: Maybe<Array<Maybe<Scalars['Boolean']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Boolean']>>>;
};

export type ContentfulAsset = Node & {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  contentful_id?: Maybe<Scalars['String']>;
  file?: Maybe<ContentfulAssetFile>;
  title?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  node_locale?: Maybe<Scalars['String']>;
  fixed?: Maybe<ContentfulFixed>;
  /** @deprecated Resolutions was deprecated in Gatsby v2. It's been renamed to "fixed" https://example.com/write-docs-and-fix-this-example-link */
  resolutions?: Maybe<ContentfulResolutions>;
  fluid?: Maybe<ContentfulFluid>;
  /** @deprecated Sizes was deprecated in Gatsby v2. It's been renamed to "fluid" https://example.com/write-docs-and-fix-this-example-link */
  sizes?: Maybe<ContentfulSizes>;
  resize?: Maybe<ContentfulResize>;
};


export type ContentfulAssetFixedArgs = {
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  quality?: Maybe<Scalars['Int']>;
  toFormat?: Maybe<ContentfulImageFormat>;
  resizingBehavior?: Maybe<ImageResizingBehavior>;
  cropFocus?: Maybe<ContentfulImageCropFocus>;
  background?: Maybe<Scalars['String']>;
};


export type ContentfulAssetResolutionsArgs = {
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  quality?: Maybe<Scalars['Int']>;
  toFormat?: Maybe<ContentfulImageFormat>;
  resizingBehavior?: Maybe<ImageResizingBehavior>;
  cropFocus?: Maybe<ContentfulImageCropFocus>;
  background?: Maybe<Scalars['String']>;
};


export type ContentfulAssetFluidArgs = {
  maxWidth?: Maybe<Scalars['Int']>;
  maxHeight?: Maybe<Scalars['Int']>;
  quality?: Maybe<Scalars['Int']>;
  toFormat?: Maybe<ContentfulImageFormat>;
  resizingBehavior?: Maybe<ImageResizingBehavior>;
  cropFocus?: Maybe<ContentfulImageCropFocus>;
  background?: Maybe<Scalars['String']>;
  sizes?: Maybe<Scalars['String']>;
};


export type ContentfulAssetSizesArgs = {
  maxWidth?: Maybe<Scalars['Int']>;
  maxHeight?: Maybe<Scalars['Int']>;
  quality?: Maybe<Scalars['Int']>;
  toFormat?: Maybe<ContentfulImageFormat>;
  resizingBehavior?: Maybe<ImageResizingBehavior>;
  cropFocus?: Maybe<ContentfulImageCropFocus>;
  background?: Maybe<Scalars['String']>;
  sizes?: Maybe<Scalars['String']>;
};


export type ContentfulAssetResizeArgs = {
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  quality?: Maybe<Scalars['Int']>;
  jpegProgressive?: Maybe<Scalars['Boolean']>;
  resizingBehavior?: Maybe<ImageResizingBehavior>;
  toFormat?: Maybe<ContentfulImageFormat>;
  cropFocus?: Maybe<ContentfulImageCropFocus>;
  background?: Maybe<Scalars['String']>;
};

export type ContentfulAssetConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulAssetEdge>;
  nodes: Array<ContentfulAsset>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<ContentfulAssetGroupConnection>;
};


export type ContentfulAssetConnectionDistinctArgs = {
  field: ContentfulAssetFieldsEnum;
};


export type ContentfulAssetConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: ContentfulAssetFieldsEnum;
};

export type ContentfulAssetEdge = {
  next?: Maybe<ContentfulAsset>;
  node: ContentfulAsset;
  previous?: Maybe<ContentfulAsset>;
};

export type ContentfulAssetFieldsEnum = 
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'contentful_id'
  | 'file___url'
  | 'file___details___size'
  | 'file___details___image___width'
  | 'file___details___image___height'
  | 'file___fileName'
  | 'file___contentType'
  | 'title'
  | 'description'
  | 'node_locale'
  | 'fixed___base64'
  | 'fixed___tracedSVG'
  | 'fixed___aspectRatio'
  | 'fixed___width'
  | 'fixed___height'
  | 'fixed___src'
  | 'fixed___srcSet'
  | 'fixed___srcWebp'
  | 'fixed___srcSetWebp'
  | 'resolutions___base64'
  | 'resolutions___tracedSVG'
  | 'resolutions___aspectRatio'
  | 'resolutions___width'
  | 'resolutions___height'
  | 'resolutions___src'
  | 'resolutions___srcSet'
  | 'resolutions___srcWebp'
  | 'resolutions___srcSetWebp'
  | 'fluid___base64'
  | 'fluid___tracedSVG'
  | 'fluid___aspectRatio'
  | 'fluid___src'
  | 'fluid___srcSet'
  | 'fluid___srcWebp'
  | 'fluid___srcSetWebp'
  | 'fluid___sizes'
  | 'sizes___base64'
  | 'sizes___tracedSVG'
  | 'sizes___aspectRatio'
  | 'sizes___src'
  | 'sizes___srcSet'
  | 'sizes___srcWebp'
  | 'sizes___srcSetWebp'
  | 'sizes___sizes'
  | 'resize___base64'
  | 'resize___tracedSVG'
  | 'resize___src'
  | 'resize___width'
  | 'resize___height'
  | 'resize___aspectRatio';

export type ContentfulAssetFile = {
  url?: Maybe<Scalars['String']>;
  details?: Maybe<ContentfulAssetFileDetails>;
  fileName?: Maybe<Scalars['String']>;
  contentType?: Maybe<Scalars['String']>;
};

export type ContentfulAssetFileDetails = {
  size?: Maybe<Scalars['Int']>;
  image?: Maybe<ContentfulAssetFileDetailsImage>;
};

export type ContentfulAssetFileDetailsFilterInput = {
  size?: Maybe<IntQueryOperatorInput>;
  image?: Maybe<ContentfulAssetFileDetailsImageFilterInput>;
};

export type ContentfulAssetFileDetailsImage = {
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
};

export type ContentfulAssetFileDetailsImageFilterInput = {
  width?: Maybe<IntQueryOperatorInput>;
  height?: Maybe<IntQueryOperatorInput>;
};

export type ContentfulAssetFileFilterInput = {
  url?: Maybe<StringQueryOperatorInput>;
  details?: Maybe<ContentfulAssetFileDetailsFilterInput>;
  fileName?: Maybe<StringQueryOperatorInput>;
  contentType?: Maybe<StringQueryOperatorInput>;
};

export type ContentfulAssetFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  contentful_id?: Maybe<StringQueryOperatorInput>;
  file?: Maybe<ContentfulAssetFileFilterInput>;
  title?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  node_locale?: Maybe<StringQueryOperatorInput>;
  fixed?: Maybe<ContentfulFixedFilterInput>;
  resolutions?: Maybe<ContentfulResolutionsFilterInput>;
  fluid?: Maybe<ContentfulFluidFilterInput>;
  sizes?: Maybe<ContentfulSizesFilterInput>;
  resize?: Maybe<ContentfulResizeFilterInput>;
};

export type ContentfulAssetGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulAssetEdge>;
  nodes: Array<ContentfulAsset>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type ContentfulAssetSortInput = {
  fields?: Maybe<Array<Maybe<ContentfulAssetFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type ContentfulBlogPost = Node & {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  title?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  image?: Maybe<ContentfulAsset>;
  seo?: Maybe<ContentfulSeo>;
  body?: Maybe<ContentfulBlogPostBodyRichTextNode>;
  spaceId?: Maybe<Scalars['String']>;
  contentful_id?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['Date']>;
  updatedAt?: Maybe<Scalars['Date']>;
  sys?: Maybe<ContentfulBlogPostSys>;
  node_locale?: Maybe<Scalars['String']>;
  childContentfulBlogPostBodyRichTextNode?: Maybe<ContentfulBlogPostBodyRichTextNode>;
};


export type ContentfulBlogPostCreatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type ContentfulBlogPostUpdatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type ContentfulBlogPostBodyRichTextNode = Node & {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  content?: Maybe<Array<Maybe<ContentfulBlogPostBodyRichTextNodeContent>>>;
  /** @deprecated This field is deprecated, please use 'json' instead. */
  nodeType?: Maybe<Scalars['String']>;
  body?: Maybe<Scalars['String']>;
  json?: Maybe<Scalars['JSON']>;
};

export type ContentfulBlogPostBodyRichTextNodeConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulBlogPostBodyRichTextNodeEdge>;
  nodes: Array<ContentfulBlogPostBodyRichTextNode>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<ContentfulBlogPostBodyRichTextNodeGroupConnection>;
};


export type ContentfulBlogPostBodyRichTextNodeConnectionDistinctArgs = {
  field: ContentfulBlogPostBodyRichTextNodeFieldsEnum;
};


export type ContentfulBlogPostBodyRichTextNodeConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: ContentfulBlogPostBodyRichTextNodeFieldsEnum;
};

export type ContentfulBlogPostBodyRichTextNodeContent = {
  content?: Maybe<Array<Maybe<ContentfulBlogPostBodyRichTextNodeContentContent>>>;
  nodeType?: Maybe<Scalars['String']>;
};

export type ContentfulBlogPostBodyRichTextNodeContentContent = {
  value?: Maybe<Scalars['String']>;
  nodeType?: Maybe<Scalars['String']>;
};

export type ContentfulBlogPostBodyRichTextNodeContentContentFilterInput = {
  value?: Maybe<StringQueryOperatorInput>;
  nodeType?: Maybe<StringQueryOperatorInput>;
};

export type ContentfulBlogPostBodyRichTextNodeContentContentFilterListInput = {
  elemMatch?: Maybe<ContentfulBlogPostBodyRichTextNodeContentContentFilterInput>;
};

export type ContentfulBlogPostBodyRichTextNodeContentFilterInput = {
  content?: Maybe<ContentfulBlogPostBodyRichTextNodeContentContentFilterListInput>;
  nodeType?: Maybe<StringQueryOperatorInput>;
};

export type ContentfulBlogPostBodyRichTextNodeContentFilterListInput = {
  elemMatch?: Maybe<ContentfulBlogPostBodyRichTextNodeContentFilterInput>;
};

export type ContentfulBlogPostBodyRichTextNodeEdge = {
  next?: Maybe<ContentfulBlogPostBodyRichTextNode>;
  node: ContentfulBlogPostBodyRichTextNode;
  previous?: Maybe<ContentfulBlogPostBodyRichTextNode>;
};

export type ContentfulBlogPostBodyRichTextNodeFieldsEnum = 
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'content'
  | 'content___content'
  | 'content___content___value'
  | 'content___content___nodeType'
  | 'content___nodeType'
  | 'nodeType'
  | 'body'
  | 'json';

export type ContentfulBlogPostBodyRichTextNodeFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  content?: Maybe<ContentfulBlogPostBodyRichTextNodeContentFilterListInput>;
  nodeType?: Maybe<StringQueryOperatorInput>;
  body?: Maybe<StringQueryOperatorInput>;
  json?: Maybe<JsonQueryOperatorInput>;
};

export type ContentfulBlogPostBodyRichTextNodeGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulBlogPostBodyRichTextNodeEdge>;
  nodes: Array<ContentfulBlogPostBodyRichTextNode>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type ContentfulBlogPostBodyRichTextNodeSortInput = {
  fields?: Maybe<Array<Maybe<ContentfulBlogPostBodyRichTextNodeFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type ContentfulBlogPostConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulBlogPostEdge>;
  nodes: Array<ContentfulBlogPost>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<ContentfulBlogPostGroupConnection>;
};


export type ContentfulBlogPostConnectionDistinctArgs = {
  field: ContentfulBlogPostFieldsEnum;
};


export type ContentfulBlogPostConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: ContentfulBlogPostFieldsEnum;
};

export type ContentfulBlogPostEdge = {
  next?: Maybe<ContentfulBlogPost>;
  node: ContentfulBlogPost;
  previous?: Maybe<ContentfulBlogPost>;
};

export type ContentfulBlogPostFieldsEnum = 
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'title'
  | 'slug'
  | 'description'
  | 'image___id'
  | 'image___parent___id'
  | 'image___parent___parent___id'
  | 'image___parent___parent___children'
  | 'image___parent___children'
  | 'image___parent___children___id'
  | 'image___parent___children___children'
  | 'image___parent___internal___content'
  | 'image___parent___internal___contentDigest'
  | 'image___parent___internal___description'
  | 'image___parent___internal___fieldOwners'
  | 'image___parent___internal___ignoreType'
  | 'image___parent___internal___mediaType'
  | 'image___parent___internal___owner'
  | 'image___parent___internal___type'
  | 'image___children'
  | 'image___children___id'
  | 'image___children___parent___id'
  | 'image___children___parent___children'
  | 'image___children___children'
  | 'image___children___children___id'
  | 'image___children___children___children'
  | 'image___children___internal___content'
  | 'image___children___internal___contentDigest'
  | 'image___children___internal___description'
  | 'image___children___internal___fieldOwners'
  | 'image___children___internal___ignoreType'
  | 'image___children___internal___mediaType'
  | 'image___children___internal___owner'
  | 'image___children___internal___type'
  | 'image___internal___content'
  | 'image___internal___contentDigest'
  | 'image___internal___description'
  | 'image___internal___fieldOwners'
  | 'image___internal___ignoreType'
  | 'image___internal___mediaType'
  | 'image___internal___owner'
  | 'image___internal___type'
  | 'image___contentful_id'
  | 'image___file___url'
  | 'image___file___details___size'
  | 'image___file___fileName'
  | 'image___file___contentType'
  | 'image___title'
  | 'image___description'
  | 'image___node_locale'
  | 'image___fixed___base64'
  | 'image___fixed___tracedSVG'
  | 'image___fixed___aspectRatio'
  | 'image___fixed___width'
  | 'image___fixed___height'
  | 'image___fixed___src'
  | 'image___fixed___srcSet'
  | 'image___fixed___srcWebp'
  | 'image___fixed___srcSetWebp'
  | 'image___resolutions___base64'
  | 'image___resolutions___tracedSVG'
  | 'image___resolutions___aspectRatio'
  | 'image___resolutions___width'
  | 'image___resolutions___height'
  | 'image___resolutions___src'
  | 'image___resolutions___srcSet'
  | 'image___resolutions___srcWebp'
  | 'image___resolutions___srcSetWebp'
  | 'image___fluid___base64'
  | 'image___fluid___tracedSVG'
  | 'image___fluid___aspectRatio'
  | 'image___fluid___src'
  | 'image___fluid___srcSet'
  | 'image___fluid___srcWebp'
  | 'image___fluid___srcSetWebp'
  | 'image___fluid___sizes'
  | 'image___sizes___base64'
  | 'image___sizes___tracedSVG'
  | 'image___sizes___aspectRatio'
  | 'image___sizes___src'
  | 'image___sizes___srcSet'
  | 'image___sizes___srcWebp'
  | 'image___sizes___srcSetWebp'
  | 'image___sizes___sizes'
  | 'image___resize___base64'
  | 'image___resize___tracedSVG'
  | 'image___resize___src'
  | 'image___resize___width'
  | 'image___resize___height'
  | 'image___resize___aspectRatio'
  | 'seo___id'
  | 'seo___parent___id'
  | 'seo___parent___parent___id'
  | 'seo___parent___parent___children'
  | 'seo___parent___children'
  | 'seo___parent___children___id'
  | 'seo___parent___children___children'
  | 'seo___parent___internal___content'
  | 'seo___parent___internal___contentDigest'
  | 'seo___parent___internal___description'
  | 'seo___parent___internal___fieldOwners'
  | 'seo___parent___internal___ignoreType'
  | 'seo___parent___internal___mediaType'
  | 'seo___parent___internal___owner'
  | 'seo___parent___internal___type'
  | 'seo___children'
  | 'seo___children___id'
  | 'seo___children___parent___id'
  | 'seo___children___parent___children'
  | 'seo___children___children'
  | 'seo___children___children___id'
  | 'seo___children___children___children'
  | 'seo___children___internal___content'
  | 'seo___children___internal___contentDigest'
  | 'seo___children___internal___description'
  | 'seo___children___internal___fieldOwners'
  | 'seo___children___internal___ignoreType'
  | 'seo___children___internal___mediaType'
  | 'seo___children___internal___owner'
  | 'seo___children___internal___type'
  | 'seo___internal___content'
  | 'seo___internal___contentDigest'
  | 'seo___internal___description'
  | 'seo___internal___fieldOwners'
  | 'seo___internal___ignoreType'
  | 'seo___internal___mediaType'
  | 'seo___internal___owner'
  | 'seo___internal___type'
  | 'seo___name'
  | 'seo___title'
  | 'seo___description'
  | 'seo___image___id'
  | 'seo___image___parent___id'
  | 'seo___image___parent___children'
  | 'seo___image___children'
  | 'seo___image___children___id'
  | 'seo___image___children___children'
  | 'seo___image___internal___content'
  | 'seo___image___internal___contentDigest'
  | 'seo___image___internal___description'
  | 'seo___image___internal___fieldOwners'
  | 'seo___image___internal___ignoreType'
  | 'seo___image___internal___mediaType'
  | 'seo___image___internal___owner'
  | 'seo___image___internal___type'
  | 'seo___image___contentful_id'
  | 'seo___image___file___url'
  | 'seo___image___file___fileName'
  | 'seo___image___file___contentType'
  | 'seo___image___title'
  | 'seo___image___description'
  | 'seo___image___node_locale'
  | 'seo___image___fixed___base64'
  | 'seo___image___fixed___tracedSVG'
  | 'seo___image___fixed___aspectRatio'
  | 'seo___image___fixed___width'
  | 'seo___image___fixed___height'
  | 'seo___image___fixed___src'
  | 'seo___image___fixed___srcSet'
  | 'seo___image___fixed___srcWebp'
  | 'seo___image___fixed___srcSetWebp'
  | 'seo___image___resolutions___base64'
  | 'seo___image___resolutions___tracedSVG'
  | 'seo___image___resolutions___aspectRatio'
  | 'seo___image___resolutions___width'
  | 'seo___image___resolutions___height'
  | 'seo___image___resolutions___src'
  | 'seo___image___resolutions___srcSet'
  | 'seo___image___resolutions___srcWebp'
  | 'seo___image___resolutions___srcSetWebp'
  | 'seo___image___fluid___base64'
  | 'seo___image___fluid___tracedSVG'
  | 'seo___image___fluid___aspectRatio'
  | 'seo___image___fluid___src'
  | 'seo___image___fluid___srcSet'
  | 'seo___image___fluid___srcWebp'
  | 'seo___image___fluid___srcSetWebp'
  | 'seo___image___fluid___sizes'
  | 'seo___image___sizes___base64'
  | 'seo___image___sizes___tracedSVG'
  | 'seo___image___sizes___aspectRatio'
  | 'seo___image___sizes___src'
  | 'seo___image___sizes___srcSet'
  | 'seo___image___sizes___srcWebp'
  | 'seo___image___sizes___srcSetWebp'
  | 'seo___image___sizes___sizes'
  | 'seo___image___resize___base64'
  | 'seo___image___resize___tracedSVG'
  | 'seo___image___resize___src'
  | 'seo___image___resize___width'
  | 'seo___image___resize___height'
  | 'seo___image___resize___aspectRatio'
  | 'seo___blog_post'
  | 'seo___blog_post___id'
  | 'seo___blog_post___parent___id'
  | 'seo___blog_post___parent___children'
  | 'seo___blog_post___children'
  | 'seo___blog_post___children___id'
  | 'seo___blog_post___children___children'
  | 'seo___blog_post___internal___content'
  | 'seo___blog_post___internal___contentDigest'
  | 'seo___blog_post___internal___description'
  | 'seo___blog_post___internal___fieldOwners'
  | 'seo___blog_post___internal___ignoreType'
  | 'seo___blog_post___internal___mediaType'
  | 'seo___blog_post___internal___owner'
  | 'seo___blog_post___internal___type'
  | 'seo___blog_post___title'
  | 'seo___blog_post___slug'
  | 'seo___blog_post___description'
  | 'seo___blog_post___image___id'
  | 'seo___blog_post___image___children'
  | 'seo___blog_post___image___contentful_id'
  | 'seo___blog_post___image___title'
  | 'seo___blog_post___image___description'
  | 'seo___blog_post___image___node_locale'
  | 'seo___blog_post___seo___id'
  | 'seo___blog_post___seo___children'
  | 'seo___blog_post___seo___name'
  | 'seo___blog_post___seo___title'
  | 'seo___blog_post___seo___description'
  | 'seo___blog_post___seo___blog_post'
  | 'seo___blog_post___seo___spaceId'
  | 'seo___blog_post___seo___contentful_id'
  | 'seo___blog_post___seo___createdAt'
  | 'seo___blog_post___seo___updatedAt'
  | 'seo___blog_post___seo___node_locale'
  | 'seo___blog_post___seo___page'
  | 'seo___blog_post___body___id'
  | 'seo___blog_post___body___children'
  | 'seo___blog_post___body___content'
  | 'seo___blog_post___body___nodeType'
  | 'seo___blog_post___body___body'
  | 'seo___blog_post___body___json'
  | 'seo___blog_post___spaceId'
  | 'seo___blog_post___contentful_id'
  | 'seo___blog_post___createdAt'
  | 'seo___blog_post___updatedAt'
  | 'seo___blog_post___sys___revision'
  | 'seo___blog_post___node_locale'
  | 'seo___blog_post___childContentfulBlogPostBodyRichTextNode___id'
  | 'seo___blog_post___childContentfulBlogPostBodyRichTextNode___children'
  | 'seo___blog_post___childContentfulBlogPostBodyRichTextNode___content'
  | 'seo___blog_post___childContentfulBlogPostBodyRichTextNode___nodeType'
  | 'seo___blog_post___childContentfulBlogPostBodyRichTextNode___body'
  | 'seo___blog_post___childContentfulBlogPostBodyRichTextNode___json'
  | 'seo___spaceId'
  | 'seo___contentful_id'
  | 'seo___createdAt'
  | 'seo___updatedAt'
  | 'seo___sys___revision'
  | 'seo___node_locale'
  | 'seo___page'
  | 'seo___page___id'
  | 'seo___page___parent___id'
  | 'seo___page___parent___children'
  | 'seo___page___children'
  | 'seo___page___children___id'
  | 'seo___page___children___children'
  | 'seo___page___internal___content'
  | 'seo___page___internal___contentDigest'
  | 'seo___page___internal___description'
  | 'seo___page___internal___fieldOwners'
  | 'seo___page___internal___ignoreType'
  | 'seo___page___internal___mediaType'
  | 'seo___page___internal___owner'
  | 'seo___page___internal___type'
  | 'seo___page___name'
  | 'seo___page___slug'
  | 'seo___page___genericPage'
  | 'seo___page___path'
  | 'seo___page___pageSeo___id'
  | 'seo___page___pageSeo___children'
  | 'seo___page___pageSeo___name'
  | 'seo___page___pageSeo___title'
  | 'seo___page___pageSeo___description'
  | 'seo___page___pageSeo___blog_post'
  | 'seo___page___pageSeo___spaceId'
  | 'seo___page___pageSeo___contentful_id'
  | 'seo___page___pageSeo___createdAt'
  | 'seo___page___pageSeo___updatedAt'
  | 'seo___page___pageSeo___node_locale'
  | 'seo___page___pageSeo___page'
  | 'seo___page___navigation'
  | 'seo___page___navigation___id'
  | 'seo___page___navigation___children'
  | 'seo___page___navigation___name'
  | 'seo___page___navigation___slug'
  | 'seo___page___navigation___sideNavigation'
  | 'seo___page___navigation___spaceId'
  | 'seo___page___navigation___contentful_id'
  | 'seo___page___navigation___createdAt'
  | 'seo___page___navigation___updatedAt'
  | 'seo___page___navigation___node_locale'
  | 'seo___page___spaceId'
  | 'seo___page___contentful_id'
  | 'seo___page___createdAt'
  | 'seo___page___updatedAt'
  | 'seo___page___sys___revision'
  | 'seo___page___node_locale'
  | 'body___id'
  | 'body___parent___id'
  | 'body___parent___parent___id'
  | 'body___parent___parent___children'
  | 'body___parent___children'
  | 'body___parent___children___id'
  | 'body___parent___children___children'
  | 'body___parent___internal___content'
  | 'body___parent___internal___contentDigest'
  | 'body___parent___internal___description'
  | 'body___parent___internal___fieldOwners'
  | 'body___parent___internal___ignoreType'
  | 'body___parent___internal___mediaType'
  | 'body___parent___internal___owner'
  | 'body___parent___internal___type'
  | 'body___children'
  | 'body___children___id'
  | 'body___children___parent___id'
  | 'body___children___parent___children'
  | 'body___children___children'
  | 'body___children___children___id'
  | 'body___children___children___children'
  | 'body___children___internal___content'
  | 'body___children___internal___contentDigest'
  | 'body___children___internal___description'
  | 'body___children___internal___fieldOwners'
  | 'body___children___internal___ignoreType'
  | 'body___children___internal___mediaType'
  | 'body___children___internal___owner'
  | 'body___children___internal___type'
  | 'body___internal___content'
  | 'body___internal___contentDigest'
  | 'body___internal___description'
  | 'body___internal___fieldOwners'
  | 'body___internal___ignoreType'
  | 'body___internal___mediaType'
  | 'body___internal___owner'
  | 'body___internal___type'
  | 'body___content'
  | 'body___content___content'
  | 'body___content___content___value'
  | 'body___content___content___nodeType'
  | 'body___content___nodeType'
  | 'body___nodeType'
  | 'body___body'
  | 'body___json'
  | 'spaceId'
  | 'contentful_id'
  | 'createdAt'
  | 'updatedAt'
  | 'sys___revision'
  | 'sys___contentType___sys___type'
  | 'sys___contentType___sys___linkType'
  | 'sys___contentType___sys___id'
  | 'sys___contentType___sys___contentful_id'
  | 'node_locale'
  | 'childContentfulBlogPostBodyRichTextNode___id'
  | 'childContentfulBlogPostBodyRichTextNode___parent___id'
  | 'childContentfulBlogPostBodyRichTextNode___parent___parent___id'
  | 'childContentfulBlogPostBodyRichTextNode___parent___parent___children'
  | 'childContentfulBlogPostBodyRichTextNode___parent___children'
  | 'childContentfulBlogPostBodyRichTextNode___parent___children___id'
  | 'childContentfulBlogPostBodyRichTextNode___parent___children___children'
  | 'childContentfulBlogPostBodyRichTextNode___parent___internal___content'
  | 'childContentfulBlogPostBodyRichTextNode___parent___internal___contentDigest'
  | 'childContentfulBlogPostBodyRichTextNode___parent___internal___description'
  | 'childContentfulBlogPostBodyRichTextNode___parent___internal___fieldOwners'
  | 'childContentfulBlogPostBodyRichTextNode___parent___internal___ignoreType'
  | 'childContentfulBlogPostBodyRichTextNode___parent___internal___mediaType'
  | 'childContentfulBlogPostBodyRichTextNode___parent___internal___owner'
  | 'childContentfulBlogPostBodyRichTextNode___parent___internal___type'
  | 'childContentfulBlogPostBodyRichTextNode___children'
  | 'childContentfulBlogPostBodyRichTextNode___children___id'
  | 'childContentfulBlogPostBodyRichTextNode___children___parent___id'
  | 'childContentfulBlogPostBodyRichTextNode___children___parent___children'
  | 'childContentfulBlogPostBodyRichTextNode___children___children'
  | 'childContentfulBlogPostBodyRichTextNode___children___children___id'
  | 'childContentfulBlogPostBodyRichTextNode___children___children___children'
  | 'childContentfulBlogPostBodyRichTextNode___children___internal___content'
  | 'childContentfulBlogPostBodyRichTextNode___children___internal___contentDigest'
  | 'childContentfulBlogPostBodyRichTextNode___children___internal___description'
  | 'childContentfulBlogPostBodyRichTextNode___children___internal___fieldOwners'
  | 'childContentfulBlogPostBodyRichTextNode___children___internal___ignoreType'
  | 'childContentfulBlogPostBodyRichTextNode___children___internal___mediaType'
  | 'childContentfulBlogPostBodyRichTextNode___children___internal___owner'
  | 'childContentfulBlogPostBodyRichTextNode___children___internal___type'
  | 'childContentfulBlogPostBodyRichTextNode___internal___content'
  | 'childContentfulBlogPostBodyRichTextNode___internal___contentDigest'
  | 'childContentfulBlogPostBodyRichTextNode___internal___description'
  | 'childContentfulBlogPostBodyRichTextNode___internal___fieldOwners'
  | 'childContentfulBlogPostBodyRichTextNode___internal___ignoreType'
  | 'childContentfulBlogPostBodyRichTextNode___internal___mediaType'
  | 'childContentfulBlogPostBodyRichTextNode___internal___owner'
  | 'childContentfulBlogPostBodyRichTextNode___internal___type'
  | 'childContentfulBlogPostBodyRichTextNode___content'
  | 'childContentfulBlogPostBodyRichTextNode___content___content'
  | 'childContentfulBlogPostBodyRichTextNode___content___content___value'
  | 'childContentfulBlogPostBodyRichTextNode___content___content___nodeType'
  | 'childContentfulBlogPostBodyRichTextNode___content___nodeType'
  | 'childContentfulBlogPostBodyRichTextNode___nodeType'
  | 'childContentfulBlogPostBodyRichTextNode___body'
  | 'childContentfulBlogPostBodyRichTextNode___json';

export type ContentfulBlogPostFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  title?: Maybe<StringQueryOperatorInput>;
  slug?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  image?: Maybe<ContentfulAssetFilterInput>;
  seo?: Maybe<ContentfulSeoFilterInput>;
  body?: Maybe<ContentfulBlogPostBodyRichTextNodeFilterInput>;
  spaceId?: Maybe<StringQueryOperatorInput>;
  contentful_id?: Maybe<StringQueryOperatorInput>;
  createdAt?: Maybe<DateQueryOperatorInput>;
  updatedAt?: Maybe<DateQueryOperatorInput>;
  sys?: Maybe<ContentfulBlogPostSysFilterInput>;
  node_locale?: Maybe<StringQueryOperatorInput>;
  childContentfulBlogPostBodyRichTextNode?: Maybe<ContentfulBlogPostBodyRichTextNodeFilterInput>;
};

export type ContentfulBlogPostFilterListInput = {
  elemMatch?: Maybe<ContentfulBlogPostFilterInput>;
};

export type ContentfulBlogPostGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulBlogPostEdge>;
  nodes: Array<ContentfulBlogPost>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type ContentfulBlogPostSortInput = {
  fields?: Maybe<Array<Maybe<ContentfulBlogPostFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type ContentfulBlogPostSys = {
  revision?: Maybe<Scalars['Int']>;
  contentType?: Maybe<ContentfulBlogPostSysContentType>;
};

export type ContentfulBlogPostSysContentType = {
  sys?: Maybe<ContentfulBlogPostSysContentTypeSys>;
};

export type ContentfulBlogPostSysContentTypeFilterInput = {
  sys?: Maybe<ContentfulBlogPostSysContentTypeSysFilterInput>;
};

export type ContentfulBlogPostSysContentTypeSys = {
  type?: Maybe<Scalars['String']>;
  linkType?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  contentful_id?: Maybe<Scalars['String']>;
};

export type ContentfulBlogPostSysContentTypeSysFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  linkType?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  contentful_id?: Maybe<StringQueryOperatorInput>;
};

export type ContentfulBlogPostSysFilterInput = {
  revision?: Maybe<IntQueryOperatorInput>;
  contentType?: Maybe<ContentfulBlogPostSysContentTypeFilterInput>;
};

export type ContentfulContentType = Node & {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  name?: Maybe<Scalars['String']>;
  displayField?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
};

export type ContentfulContentTypeConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulContentTypeEdge>;
  nodes: Array<ContentfulContentType>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<ContentfulContentTypeGroupConnection>;
};


export type ContentfulContentTypeConnectionDistinctArgs = {
  field: ContentfulContentTypeFieldsEnum;
};


export type ContentfulContentTypeConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: ContentfulContentTypeFieldsEnum;
};

export type ContentfulContentTypeEdge = {
  next?: Maybe<ContentfulContentType>;
  node: ContentfulContentType;
  previous?: Maybe<ContentfulContentType>;
};

export type ContentfulContentTypeFieldsEnum = 
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'name'
  | 'displayField'
  | 'description';

export type ContentfulContentTypeFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  name?: Maybe<StringQueryOperatorInput>;
  displayField?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
};

export type ContentfulContentTypeGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulContentTypeEdge>;
  nodes: Array<ContentfulContentType>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type ContentfulContentTypeSortInput = {
  fields?: Maybe<Array<Maybe<ContentfulContentTypeFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type ContentfulEmbeddedRif = Node & {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  name?: Maybe<Scalars['String']>;
  page?: Maybe<Array<Maybe<ContentfulPage>>>;
  body?: Maybe<ContentfulEmbeddedRifBodyRichTextNode>;
  spaceId?: Maybe<Scalars['String']>;
  contentful_id?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['Date']>;
  updatedAt?: Maybe<Scalars['Date']>;
  sys?: Maybe<ContentfulEmbeddedRifSys>;
  node_locale?: Maybe<Scalars['String']>;
  childContentfulEmbeddedRifBodyRichTextNode?: Maybe<ContentfulEmbeddedRifBodyRichTextNode>;
};


export type ContentfulEmbeddedRifCreatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type ContentfulEmbeddedRifUpdatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type ContentfulEmbeddedRifBodyRichTextNode = Node & {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  /** @deprecated This field is deprecated, please use 'json' instead. */
  nodeType?: Maybe<Scalars['String']>;
  content?: Maybe<Array<Maybe<ContentfulEmbeddedRifBodyRichTextNodeContent>>>;
  body?: Maybe<Scalars['String']>;
  json?: Maybe<Scalars['JSON']>;
};

export type ContentfulEmbeddedRifBodyRichTextNodeConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulEmbeddedRifBodyRichTextNodeEdge>;
  nodes: Array<ContentfulEmbeddedRifBodyRichTextNode>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<ContentfulEmbeddedRifBodyRichTextNodeGroupConnection>;
};


export type ContentfulEmbeddedRifBodyRichTextNodeConnectionDistinctArgs = {
  field: ContentfulEmbeddedRifBodyRichTextNodeFieldsEnum;
};


export type ContentfulEmbeddedRifBodyRichTextNodeConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: ContentfulEmbeddedRifBodyRichTextNodeFieldsEnum;
};

export type ContentfulEmbeddedRifBodyRichTextNodeContent = {
  nodeType?: Maybe<Scalars['String']>;
  content?: Maybe<Array<Maybe<ContentfulEmbeddedRifBodyRichTextNodeContentContent>>>;
};

export type ContentfulEmbeddedRifBodyRichTextNodeContentContent = {
  nodeType?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
  marks?: Maybe<Array<Maybe<ContentfulEmbeddedRifBodyRichTextNodeContentContentMarks>>>;
};

export type ContentfulEmbeddedRifBodyRichTextNodeContentContentFilterInput = {
  nodeType?: Maybe<StringQueryOperatorInput>;
  value?: Maybe<StringQueryOperatorInput>;
  marks?: Maybe<ContentfulEmbeddedRifBodyRichTextNodeContentContentMarksFilterListInput>;
};

export type ContentfulEmbeddedRifBodyRichTextNodeContentContentFilterListInput = {
  elemMatch?: Maybe<ContentfulEmbeddedRifBodyRichTextNodeContentContentFilterInput>;
};

export type ContentfulEmbeddedRifBodyRichTextNodeContentContentMarks = {
  type?: Maybe<Scalars['String']>;
};

export type ContentfulEmbeddedRifBodyRichTextNodeContentContentMarksFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
};

export type ContentfulEmbeddedRifBodyRichTextNodeContentContentMarksFilterListInput = {
  elemMatch?: Maybe<ContentfulEmbeddedRifBodyRichTextNodeContentContentMarksFilterInput>;
};

export type ContentfulEmbeddedRifBodyRichTextNodeContentFilterInput = {
  nodeType?: Maybe<StringQueryOperatorInput>;
  content?: Maybe<ContentfulEmbeddedRifBodyRichTextNodeContentContentFilterListInput>;
};

export type ContentfulEmbeddedRifBodyRichTextNodeContentFilterListInput = {
  elemMatch?: Maybe<ContentfulEmbeddedRifBodyRichTextNodeContentFilterInput>;
};

export type ContentfulEmbeddedRifBodyRichTextNodeEdge = {
  next?: Maybe<ContentfulEmbeddedRifBodyRichTextNode>;
  node: ContentfulEmbeddedRifBodyRichTextNode;
  previous?: Maybe<ContentfulEmbeddedRifBodyRichTextNode>;
};

export type ContentfulEmbeddedRifBodyRichTextNodeFieldsEnum = 
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'nodeType'
  | 'content'
  | 'content___nodeType'
  | 'content___content'
  | 'content___content___nodeType'
  | 'content___content___value'
  | 'content___content___marks'
  | 'content___content___marks___type'
  | 'body'
  | 'json';

export type ContentfulEmbeddedRifBodyRichTextNodeFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  nodeType?: Maybe<StringQueryOperatorInput>;
  content?: Maybe<ContentfulEmbeddedRifBodyRichTextNodeContentFilterListInput>;
  body?: Maybe<StringQueryOperatorInput>;
  json?: Maybe<JsonQueryOperatorInput>;
};

export type ContentfulEmbeddedRifBodyRichTextNodeGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulEmbeddedRifBodyRichTextNodeEdge>;
  nodes: Array<ContentfulEmbeddedRifBodyRichTextNode>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type ContentfulEmbeddedRifBodyRichTextNodeSortInput = {
  fields?: Maybe<Array<Maybe<ContentfulEmbeddedRifBodyRichTextNodeFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type ContentfulEmbeddedRifConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulEmbeddedRifEdge>;
  nodes: Array<ContentfulEmbeddedRif>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<ContentfulEmbeddedRifGroupConnection>;
};


export type ContentfulEmbeddedRifConnectionDistinctArgs = {
  field: ContentfulEmbeddedRifFieldsEnum;
};


export type ContentfulEmbeddedRifConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: ContentfulEmbeddedRifFieldsEnum;
};

export type ContentfulEmbeddedRifContentfulHeroUnion = ContentfulEmbeddedRif | ContentfulHero;

export type ContentfulEmbeddedRifEdge = {
  next?: Maybe<ContentfulEmbeddedRif>;
  node: ContentfulEmbeddedRif;
  previous?: Maybe<ContentfulEmbeddedRif>;
};

export type ContentfulEmbeddedRifFieldsEnum = 
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'name'
  | 'page'
  | 'page___id'
  | 'page___parent___id'
  | 'page___parent___parent___id'
  | 'page___parent___parent___children'
  | 'page___parent___children'
  | 'page___parent___children___id'
  | 'page___parent___children___children'
  | 'page___parent___internal___content'
  | 'page___parent___internal___contentDigest'
  | 'page___parent___internal___description'
  | 'page___parent___internal___fieldOwners'
  | 'page___parent___internal___ignoreType'
  | 'page___parent___internal___mediaType'
  | 'page___parent___internal___owner'
  | 'page___parent___internal___type'
  | 'page___children'
  | 'page___children___id'
  | 'page___children___parent___id'
  | 'page___children___parent___children'
  | 'page___children___children'
  | 'page___children___children___id'
  | 'page___children___children___children'
  | 'page___children___internal___content'
  | 'page___children___internal___contentDigest'
  | 'page___children___internal___description'
  | 'page___children___internal___fieldOwners'
  | 'page___children___internal___ignoreType'
  | 'page___children___internal___mediaType'
  | 'page___children___internal___owner'
  | 'page___children___internal___type'
  | 'page___internal___content'
  | 'page___internal___contentDigest'
  | 'page___internal___description'
  | 'page___internal___fieldOwners'
  | 'page___internal___ignoreType'
  | 'page___internal___mediaType'
  | 'page___internal___owner'
  | 'page___internal___type'
  | 'page___name'
  | 'page___slug'
  | 'page___genericPage'
  | 'page___path'
  | 'page___pageSeo___id'
  | 'page___pageSeo___parent___id'
  | 'page___pageSeo___parent___children'
  | 'page___pageSeo___children'
  | 'page___pageSeo___children___id'
  | 'page___pageSeo___children___children'
  | 'page___pageSeo___internal___content'
  | 'page___pageSeo___internal___contentDigest'
  | 'page___pageSeo___internal___description'
  | 'page___pageSeo___internal___fieldOwners'
  | 'page___pageSeo___internal___ignoreType'
  | 'page___pageSeo___internal___mediaType'
  | 'page___pageSeo___internal___owner'
  | 'page___pageSeo___internal___type'
  | 'page___pageSeo___name'
  | 'page___pageSeo___title'
  | 'page___pageSeo___description'
  | 'page___pageSeo___image___id'
  | 'page___pageSeo___image___children'
  | 'page___pageSeo___image___contentful_id'
  | 'page___pageSeo___image___title'
  | 'page___pageSeo___image___description'
  | 'page___pageSeo___image___node_locale'
  | 'page___pageSeo___blog_post'
  | 'page___pageSeo___blog_post___id'
  | 'page___pageSeo___blog_post___children'
  | 'page___pageSeo___blog_post___title'
  | 'page___pageSeo___blog_post___slug'
  | 'page___pageSeo___blog_post___description'
  | 'page___pageSeo___blog_post___spaceId'
  | 'page___pageSeo___blog_post___contentful_id'
  | 'page___pageSeo___blog_post___createdAt'
  | 'page___pageSeo___blog_post___updatedAt'
  | 'page___pageSeo___blog_post___node_locale'
  | 'page___pageSeo___spaceId'
  | 'page___pageSeo___contentful_id'
  | 'page___pageSeo___createdAt'
  | 'page___pageSeo___updatedAt'
  | 'page___pageSeo___sys___revision'
  | 'page___pageSeo___node_locale'
  | 'page___pageSeo___page'
  | 'page___pageSeo___page___id'
  | 'page___pageSeo___page___children'
  | 'page___pageSeo___page___name'
  | 'page___pageSeo___page___slug'
  | 'page___pageSeo___page___genericPage'
  | 'page___pageSeo___page___path'
  | 'page___pageSeo___page___navigation'
  | 'page___pageSeo___page___spaceId'
  | 'page___pageSeo___page___contentful_id'
  | 'page___pageSeo___page___createdAt'
  | 'page___pageSeo___page___updatedAt'
  | 'page___pageSeo___page___node_locale'
  | 'page___navigation'
  | 'page___navigation___id'
  | 'page___navigation___parent___id'
  | 'page___navigation___parent___children'
  | 'page___navigation___children'
  | 'page___navigation___children___id'
  | 'page___navigation___children___children'
  | 'page___navigation___internal___content'
  | 'page___navigation___internal___contentDigest'
  | 'page___navigation___internal___description'
  | 'page___navigation___internal___fieldOwners'
  | 'page___navigation___internal___ignoreType'
  | 'page___navigation___internal___mediaType'
  | 'page___navigation___internal___owner'
  | 'page___navigation___internal___type'
  | 'page___navigation___name'
  | 'page___navigation___slug'
  | 'page___navigation___logo___id'
  | 'page___navigation___logo___children'
  | 'page___navigation___logo___contentful_id'
  | 'page___navigation___logo___title'
  | 'page___navigation___logo___description'
  | 'page___navigation___logo___node_locale'
  | 'page___navigation___homePage___id'
  | 'page___navigation___homePage___children'
  | 'page___navigation___homePage___name'
  | 'page___navigation___homePage___slug'
  | 'page___navigation___homePage___genericPage'
  | 'page___navigation___homePage___path'
  | 'page___navigation___homePage___navigation'
  | 'page___navigation___homePage___spaceId'
  | 'page___navigation___homePage___contentful_id'
  | 'page___navigation___homePage___createdAt'
  | 'page___navigation___homePage___updatedAt'
  | 'page___navigation___homePage___node_locale'
  | 'page___navigation___sideNavigation'
  | 'page___navigation___sideNavigation___id'
  | 'page___navigation___sideNavigation___children'
  | 'page___navigation___sideNavigation___name'
  | 'page___navigation___sideNavigation___slug'
  | 'page___navigation___sideNavigation___genericPage'
  | 'page___navigation___sideNavigation___path'
  | 'page___navigation___sideNavigation___navigation'
  | 'page___navigation___sideNavigation___spaceId'
  | 'page___navigation___sideNavigation___contentful_id'
  | 'page___navigation___sideNavigation___createdAt'
  | 'page___navigation___sideNavigation___updatedAt'
  | 'page___navigation___sideNavigation___node_locale'
  | 'page___navigation___spaceId'
  | 'page___navigation___contentful_id'
  | 'page___navigation___createdAt'
  | 'page___navigation___updatedAt'
  | 'page___navigation___sys___revision'
  | 'page___navigation___node_locale'
  | 'page___spaceId'
  | 'page___contentful_id'
  | 'page___createdAt'
  | 'page___updatedAt'
  | 'page___sys___revision'
  | 'page___node_locale'
  | 'body___id'
  | 'body___parent___id'
  | 'body___parent___parent___id'
  | 'body___parent___parent___children'
  | 'body___parent___children'
  | 'body___parent___children___id'
  | 'body___parent___children___children'
  | 'body___parent___internal___content'
  | 'body___parent___internal___contentDigest'
  | 'body___parent___internal___description'
  | 'body___parent___internal___fieldOwners'
  | 'body___parent___internal___ignoreType'
  | 'body___parent___internal___mediaType'
  | 'body___parent___internal___owner'
  | 'body___parent___internal___type'
  | 'body___children'
  | 'body___children___id'
  | 'body___children___parent___id'
  | 'body___children___parent___children'
  | 'body___children___children'
  | 'body___children___children___id'
  | 'body___children___children___children'
  | 'body___children___internal___content'
  | 'body___children___internal___contentDigest'
  | 'body___children___internal___description'
  | 'body___children___internal___fieldOwners'
  | 'body___children___internal___ignoreType'
  | 'body___children___internal___mediaType'
  | 'body___children___internal___owner'
  | 'body___children___internal___type'
  | 'body___internal___content'
  | 'body___internal___contentDigest'
  | 'body___internal___description'
  | 'body___internal___fieldOwners'
  | 'body___internal___ignoreType'
  | 'body___internal___mediaType'
  | 'body___internal___owner'
  | 'body___internal___type'
  | 'body___nodeType'
  | 'body___content'
  | 'body___content___nodeType'
  | 'body___content___content'
  | 'body___content___content___nodeType'
  | 'body___content___content___value'
  | 'body___content___content___marks'
  | 'body___body'
  | 'body___json'
  | 'spaceId'
  | 'contentful_id'
  | 'createdAt'
  | 'updatedAt'
  | 'sys___revision'
  | 'sys___contentType___sys___type'
  | 'sys___contentType___sys___linkType'
  | 'sys___contentType___sys___id'
  | 'sys___contentType___sys___contentful_id'
  | 'node_locale'
  | 'childContentfulEmbeddedRifBodyRichTextNode___id'
  | 'childContentfulEmbeddedRifBodyRichTextNode___parent___id'
  | 'childContentfulEmbeddedRifBodyRichTextNode___parent___parent___id'
  | 'childContentfulEmbeddedRifBodyRichTextNode___parent___parent___children'
  | 'childContentfulEmbeddedRifBodyRichTextNode___parent___children'
  | 'childContentfulEmbeddedRifBodyRichTextNode___parent___children___id'
  | 'childContentfulEmbeddedRifBodyRichTextNode___parent___children___children'
  | 'childContentfulEmbeddedRifBodyRichTextNode___parent___internal___content'
  | 'childContentfulEmbeddedRifBodyRichTextNode___parent___internal___contentDigest'
  | 'childContentfulEmbeddedRifBodyRichTextNode___parent___internal___description'
  | 'childContentfulEmbeddedRifBodyRichTextNode___parent___internal___fieldOwners'
  | 'childContentfulEmbeddedRifBodyRichTextNode___parent___internal___ignoreType'
  | 'childContentfulEmbeddedRifBodyRichTextNode___parent___internal___mediaType'
  | 'childContentfulEmbeddedRifBodyRichTextNode___parent___internal___owner'
  | 'childContentfulEmbeddedRifBodyRichTextNode___parent___internal___type'
  | 'childContentfulEmbeddedRifBodyRichTextNode___children'
  | 'childContentfulEmbeddedRifBodyRichTextNode___children___id'
  | 'childContentfulEmbeddedRifBodyRichTextNode___children___parent___id'
  | 'childContentfulEmbeddedRifBodyRichTextNode___children___parent___children'
  | 'childContentfulEmbeddedRifBodyRichTextNode___children___children'
  | 'childContentfulEmbeddedRifBodyRichTextNode___children___children___id'
  | 'childContentfulEmbeddedRifBodyRichTextNode___children___children___children'
  | 'childContentfulEmbeddedRifBodyRichTextNode___children___internal___content'
  | 'childContentfulEmbeddedRifBodyRichTextNode___children___internal___contentDigest'
  | 'childContentfulEmbeddedRifBodyRichTextNode___children___internal___description'
  | 'childContentfulEmbeddedRifBodyRichTextNode___children___internal___fieldOwners'
  | 'childContentfulEmbeddedRifBodyRichTextNode___children___internal___ignoreType'
  | 'childContentfulEmbeddedRifBodyRichTextNode___children___internal___mediaType'
  | 'childContentfulEmbeddedRifBodyRichTextNode___children___internal___owner'
  | 'childContentfulEmbeddedRifBodyRichTextNode___children___internal___type'
  | 'childContentfulEmbeddedRifBodyRichTextNode___internal___content'
  | 'childContentfulEmbeddedRifBodyRichTextNode___internal___contentDigest'
  | 'childContentfulEmbeddedRifBodyRichTextNode___internal___description'
  | 'childContentfulEmbeddedRifBodyRichTextNode___internal___fieldOwners'
  | 'childContentfulEmbeddedRifBodyRichTextNode___internal___ignoreType'
  | 'childContentfulEmbeddedRifBodyRichTextNode___internal___mediaType'
  | 'childContentfulEmbeddedRifBodyRichTextNode___internal___owner'
  | 'childContentfulEmbeddedRifBodyRichTextNode___internal___type'
  | 'childContentfulEmbeddedRifBodyRichTextNode___nodeType'
  | 'childContentfulEmbeddedRifBodyRichTextNode___content'
  | 'childContentfulEmbeddedRifBodyRichTextNode___content___nodeType'
  | 'childContentfulEmbeddedRifBodyRichTextNode___content___content'
  | 'childContentfulEmbeddedRifBodyRichTextNode___content___content___nodeType'
  | 'childContentfulEmbeddedRifBodyRichTextNode___content___content___value'
  | 'childContentfulEmbeddedRifBodyRichTextNode___content___content___marks'
  | 'childContentfulEmbeddedRifBodyRichTextNode___body'
  | 'childContentfulEmbeddedRifBodyRichTextNode___json';

export type ContentfulEmbeddedRifFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  name?: Maybe<StringQueryOperatorInput>;
  page?: Maybe<ContentfulPageFilterListInput>;
  body?: Maybe<ContentfulEmbeddedRifBodyRichTextNodeFilterInput>;
  spaceId?: Maybe<StringQueryOperatorInput>;
  contentful_id?: Maybe<StringQueryOperatorInput>;
  createdAt?: Maybe<DateQueryOperatorInput>;
  updatedAt?: Maybe<DateQueryOperatorInput>;
  sys?: Maybe<ContentfulEmbeddedRifSysFilterInput>;
  node_locale?: Maybe<StringQueryOperatorInput>;
  childContentfulEmbeddedRifBodyRichTextNode?: Maybe<ContentfulEmbeddedRifBodyRichTextNodeFilterInput>;
};

export type ContentfulEmbeddedRifGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulEmbeddedRifEdge>;
  nodes: Array<ContentfulEmbeddedRif>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type ContentfulEmbeddedRifSortInput = {
  fields?: Maybe<Array<Maybe<ContentfulEmbeddedRifFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type ContentfulEmbeddedRifSys = {
  revision?: Maybe<Scalars['Int']>;
  contentType?: Maybe<ContentfulEmbeddedRifSysContentType>;
};

export type ContentfulEmbeddedRifSysContentType = {
  sys?: Maybe<ContentfulEmbeddedRifSysContentTypeSys>;
};

export type ContentfulEmbeddedRifSysContentTypeFilterInput = {
  sys?: Maybe<ContentfulEmbeddedRifSysContentTypeSysFilterInput>;
};

export type ContentfulEmbeddedRifSysContentTypeSys = {
  type?: Maybe<Scalars['String']>;
  linkType?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  contentful_id?: Maybe<Scalars['String']>;
};

export type ContentfulEmbeddedRifSysContentTypeSysFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  linkType?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  contentful_id?: Maybe<StringQueryOperatorInput>;
};

export type ContentfulEmbeddedRifSysFilterInput = {
  revision?: Maybe<IntQueryOperatorInput>;
  contentType?: Maybe<ContentfulEmbeddedRifSysContentTypeFilterInput>;
};

export type ContentfulFixed = {
  base64?: Maybe<Scalars['String']>;
  tracedSVG?: Maybe<Scalars['String']>;
  aspectRatio?: Maybe<Scalars['Float']>;
  width: Scalars['Float'];
  height: Scalars['Float'];
  src: Scalars['String'];
  srcSet: Scalars['String'];
  srcWebp?: Maybe<Scalars['String']>;
  srcSetWebp?: Maybe<Scalars['String']>;
};

export type ContentfulFixedFilterInput = {
  base64?: Maybe<StringQueryOperatorInput>;
  tracedSVG?: Maybe<StringQueryOperatorInput>;
  aspectRatio?: Maybe<FloatQueryOperatorInput>;
  width?: Maybe<FloatQueryOperatorInput>;
  height?: Maybe<FloatQueryOperatorInput>;
  src?: Maybe<StringQueryOperatorInput>;
  srcSet?: Maybe<StringQueryOperatorInput>;
  srcWebp?: Maybe<StringQueryOperatorInput>;
  srcSetWebp?: Maybe<StringQueryOperatorInput>;
};

export type ContentfulFluid = {
  base64?: Maybe<Scalars['String']>;
  tracedSVG?: Maybe<Scalars['String']>;
  aspectRatio: Scalars['Float'];
  src: Scalars['String'];
  srcSet: Scalars['String'];
  srcWebp?: Maybe<Scalars['String']>;
  srcSetWebp?: Maybe<Scalars['String']>;
  sizes: Scalars['String'];
};

export type ContentfulFluidFilterInput = {
  base64?: Maybe<StringQueryOperatorInput>;
  tracedSVG?: Maybe<StringQueryOperatorInput>;
  aspectRatio?: Maybe<FloatQueryOperatorInput>;
  src?: Maybe<StringQueryOperatorInput>;
  srcSet?: Maybe<StringQueryOperatorInput>;
  srcWebp?: Maybe<StringQueryOperatorInput>;
  srcSetWebp?: Maybe<StringQueryOperatorInput>;
  sizes?: Maybe<StringQueryOperatorInput>;
};

export type ContentfulHero = Node & {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  name?: Maybe<Scalars['String']>;
  background?: Maybe<ContentfulAsset>;
  page?: Maybe<Array<Maybe<ContentfulPage>>>;
  body?: Maybe<ContentfulHeroBodyRichTextNode>;
  spaceId?: Maybe<Scalars['String']>;
  contentful_id?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['Date']>;
  updatedAt?: Maybe<Scalars['Date']>;
  sys?: Maybe<ContentfulHeroSys>;
  node_locale?: Maybe<Scalars['String']>;
  childContentfulHeroBodyRichTextNode?: Maybe<ContentfulHeroBodyRichTextNode>;
};


export type ContentfulHeroCreatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type ContentfulHeroUpdatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type ContentfulHeroBodyRichTextNode = Node & {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  content?: Maybe<Array<Maybe<ContentfulHeroBodyRichTextNodeContent>>>;
  /** @deprecated This field is deprecated, please use 'json' instead. */
  nodeType?: Maybe<Scalars['String']>;
  body?: Maybe<Scalars['String']>;
  json?: Maybe<Scalars['JSON']>;
};

export type ContentfulHeroBodyRichTextNodeConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulHeroBodyRichTextNodeEdge>;
  nodes: Array<ContentfulHeroBodyRichTextNode>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<ContentfulHeroBodyRichTextNodeGroupConnection>;
};


export type ContentfulHeroBodyRichTextNodeConnectionDistinctArgs = {
  field: ContentfulHeroBodyRichTextNodeFieldsEnum;
};


export type ContentfulHeroBodyRichTextNodeConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: ContentfulHeroBodyRichTextNodeFieldsEnum;
};

export type ContentfulHeroBodyRichTextNodeContent = {
  content?: Maybe<Array<Maybe<ContentfulHeroBodyRichTextNodeContentContent>>>;
  nodeType?: Maybe<Scalars['String']>;
};

export type ContentfulHeroBodyRichTextNodeContentContent = {
  value?: Maybe<Scalars['String']>;
  nodeType?: Maybe<Scalars['String']>;
};

export type ContentfulHeroBodyRichTextNodeContentContentFilterInput = {
  value?: Maybe<StringQueryOperatorInput>;
  nodeType?: Maybe<StringQueryOperatorInput>;
};

export type ContentfulHeroBodyRichTextNodeContentContentFilterListInput = {
  elemMatch?: Maybe<ContentfulHeroBodyRichTextNodeContentContentFilterInput>;
};

export type ContentfulHeroBodyRichTextNodeContentFilterInput = {
  content?: Maybe<ContentfulHeroBodyRichTextNodeContentContentFilterListInput>;
  nodeType?: Maybe<StringQueryOperatorInput>;
};

export type ContentfulHeroBodyRichTextNodeContentFilterListInput = {
  elemMatch?: Maybe<ContentfulHeroBodyRichTextNodeContentFilterInput>;
};

export type ContentfulHeroBodyRichTextNodeEdge = {
  next?: Maybe<ContentfulHeroBodyRichTextNode>;
  node: ContentfulHeroBodyRichTextNode;
  previous?: Maybe<ContentfulHeroBodyRichTextNode>;
};

export type ContentfulHeroBodyRichTextNodeFieldsEnum = 
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'content'
  | 'content___content'
  | 'content___content___value'
  | 'content___content___nodeType'
  | 'content___nodeType'
  | 'nodeType'
  | 'body'
  | 'json';

export type ContentfulHeroBodyRichTextNodeFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  content?: Maybe<ContentfulHeroBodyRichTextNodeContentFilterListInput>;
  nodeType?: Maybe<StringQueryOperatorInput>;
  body?: Maybe<StringQueryOperatorInput>;
  json?: Maybe<JsonQueryOperatorInput>;
};

export type ContentfulHeroBodyRichTextNodeGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulHeroBodyRichTextNodeEdge>;
  nodes: Array<ContentfulHeroBodyRichTextNode>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type ContentfulHeroBodyRichTextNodeSortInput = {
  fields?: Maybe<Array<Maybe<ContentfulHeroBodyRichTextNodeFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type ContentfulHeroConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulHeroEdge>;
  nodes: Array<ContentfulHero>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<ContentfulHeroGroupConnection>;
};


export type ContentfulHeroConnectionDistinctArgs = {
  field: ContentfulHeroFieldsEnum;
};


export type ContentfulHeroConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: ContentfulHeroFieldsEnum;
};

export type ContentfulHeroEdge = {
  next?: Maybe<ContentfulHero>;
  node: ContentfulHero;
  previous?: Maybe<ContentfulHero>;
};

export type ContentfulHeroFieldsEnum = 
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'name'
  | 'background___id'
  | 'background___parent___id'
  | 'background___parent___parent___id'
  | 'background___parent___parent___children'
  | 'background___parent___children'
  | 'background___parent___children___id'
  | 'background___parent___children___children'
  | 'background___parent___internal___content'
  | 'background___parent___internal___contentDigest'
  | 'background___parent___internal___description'
  | 'background___parent___internal___fieldOwners'
  | 'background___parent___internal___ignoreType'
  | 'background___parent___internal___mediaType'
  | 'background___parent___internal___owner'
  | 'background___parent___internal___type'
  | 'background___children'
  | 'background___children___id'
  | 'background___children___parent___id'
  | 'background___children___parent___children'
  | 'background___children___children'
  | 'background___children___children___id'
  | 'background___children___children___children'
  | 'background___children___internal___content'
  | 'background___children___internal___contentDigest'
  | 'background___children___internal___description'
  | 'background___children___internal___fieldOwners'
  | 'background___children___internal___ignoreType'
  | 'background___children___internal___mediaType'
  | 'background___children___internal___owner'
  | 'background___children___internal___type'
  | 'background___internal___content'
  | 'background___internal___contentDigest'
  | 'background___internal___description'
  | 'background___internal___fieldOwners'
  | 'background___internal___ignoreType'
  | 'background___internal___mediaType'
  | 'background___internal___owner'
  | 'background___internal___type'
  | 'background___contentful_id'
  | 'background___file___url'
  | 'background___file___details___size'
  | 'background___file___fileName'
  | 'background___file___contentType'
  | 'background___title'
  | 'background___description'
  | 'background___node_locale'
  | 'background___fixed___base64'
  | 'background___fixed___tracedSVG'
  | 'background___fixed___aspectRatio'
  | 'background___fixed___width'
  | 'background___fixed___height'
  | 'background___fixed___src'
  | 'background___fixed___srcSet'
  | 'background___fixed___srcWebp'
  | 'background___fixed___srcSetWebp'
  | 'background___resolutions___base64'
  | 'background___resolutions___tracedSVG'
  | 'background___resolutions___aspectRatio'
  | 'background___resolutions___width'
  | 'background___resolutions___height'
  | 'background___resolutions___src'
  | 'background___resolutions___srcSet'
  | 'background___resolutions___srcWebp'
  | 'background___resolutions___srcSetWebp'
  | 'background___fluid___base64'
  | 'background___fluid___tracedSVG'
  | 'background___fluid___aspectRatio'
  | 'background___fluid___src'
  | 'background___fluid___srcSet'
  | 'background___fluid___srcWebp'
  | 'background___fluid___srcSetWebp'
  | 'background___fluid___sizes'
  | 'background___sizes___base64'
  | 'background___sizes___tracedSVG'
  | 'background___sizes___aspectRatio'
  | 'background___sizes___src'
  | 'background___sizes___srcSet'
  | 'background___sizes___srcWebp'
  | 'background___sizes___srcSetWebp'
  | 'background___sizes___sizes'
  | 'background___resize___base64'
  | 'background___resize___tracedSVG'
  | 'background___resize___src'
  | 'background___resize___width'
  | 'background___resize___height'
  | 'background___resize___aspectRatio'
  | 'page'
  | 'page___id'
  | 'page___parent___id'
  | 'page___parent___parent___id'
  | 'page___parent___parent___children'
  | 'page___parent___children'
  | 'page___parent___children___id'
  | 'page___parent___children___children'
  | 'page___parent___internal___content'
  | 'page___parent___internal___contentDigest'
  | 'page___parent___internal___description'
  | 'page___parent___internal___fieldOwners'
  | 'page___parent___internal___ignoreType'
  | 'page___parent___internal___mediaType'
  | 'page___parent___internal___owner'
  | 'page___parent___internal___type'
  | 'page___children'
  | 'page___children___id'
  | 'page___children___parent___id'
  | 'page___children___parent___children'
  | 'page___children___children'
  | 'page___children___children___id'
  | 'page___children___children___children'
  | 'page___children___internal___content'
  | 'page___children___internal___contentDigest'
  | 'page___children___internal___description'
  | 'page___children___internal___fieldOwners'
  | 'page___children___internal___ignoreType'
  | 'page___children___internal___mediaType'
  | 'page___children___internal___owner'
  | 'page___children___internal___type'
  | 'page___internal___content'
  | 'page___internal___contentDigest'
  | 'page___internal___description'
  | 'page___internal___fieldOwners'
  | 'page___internal___ignoreType'
  | 'page___internal___mediaType'
  | 'page___internal___owner'
  | 'page___internal___type'
  | 'page___name'
  | 'page___slug'
  | 'page___genericPage'
  | 'page___path'
  | 'page___pageSeo___id'
  | 'page___pageSeo___parent___id'
  | 'page___pageSeo___parent___children'
  | 'page___pageSeo___children'
  | 'page___pageSeo___children___id'
  | 'page___pageSeo___children___children'
  | 'page___pageSeo___internal___content'
  | 'page___pageSeo___internal___contentDigest'
  | 'page___pageSeo___internal___description'
  | 'page___pageSeo___internal___fieldOwners'
  | 'page___pageSeo___internal___ignoreType'
  | 'page___pageSeo___internal___mediaType'
  | 'page___pageSeo___internal___owner'
  | 'page___pageSeo___internal___type'
  | 'page___pageSeo___name'
  | 'page___pageSeo___title'
  | 'page___pageSeo___description'
  | 'page___pageSeo___image___id'
  | 'page___pageSeo___image___children'
  | 'page___pageSeo___image___contentful_id'
  | 'page___pageSeo___image___title'
  | 'page___pageSeo___image___description'
  | 'page___pageSeo___image___node_locale'
  | 'page___pageSeo___blog_post'
  | 'page___pageSeo___blog_post___id'
  | 'page___pageSeo___blog_post___children'
  | 'page___pageSeo___blog_post___title'
  | 'page___pageSeo___blog_post___slug'
  | 'page___pageSeo___blog_post___description'
  | 'page___pageSeo___blog_post___spaceId'
  | 'page___pageSeo___blog_post___contentful_id'
  | 'page___pageSeo___blog_post___createdAt'
  | 'page___pageSeo___blog_post___updatedAt'
  | 'page___pageSeo___blog_post___node_locale'
  | 'page___pageSeo___spaceId'
  | 'page___pageSeo___contentful_id'
  | 'page___pageSeo___createdAt'
  | 'page___pageSeo___updatedAt'
  | 'page___pageSeo___sys___revision'
  | 'page___pageSeo___node_locale'
  | 'page___pageSeo___page'
  | 'page___pageSeo___page___id'
  | 'page___pageSeo___page___children'
  | 'page___pageSeo___page___name'
  | 'page___pageSeo___page___slug'
  | 'page___pageSeo___page___genericPage'
  | 'page___pageSeo___page___path'
  | 'page___pageSeo___page___navigation'
  | 'page___pageSeo___page___spaceId'
  | 'page___pageSeo___page___contentful_id'
  | 'page___pageSeo___page___createdAt'
  | 'page___pageSeo___page___updatedAt'
  | 'page___pageSeo___page___node_locale'
  | 'page___navigation'
  | 'page___navigation___id'
  | 'page___navigation___parent___id'
  | 'page___navigation___parent___children'
  | 'page___navigation___children'
  | 'page___navigation___children___id'
  | 'page___navigation___children___children'
  | 'page___navigation___internal___content'
  | 'page___navigation___internal___contentDigest'
  | 'page___navigation___internal___description'
  | 'page___navigation___internal___fieldOwners'
  | 'page___navigation___internal___ignoreType'
  | 'page___navigation___internal___mediaType'
  | 'page___navigation___internal___owner'
  | 'page___navigation___internal___type'
  | 'page___navigation___name'
  | 'page___navigation___slug'
  | 'page___navigation___logo___id'
  | 'page___navigation___logo___children'
  | 'page___navigation___logo___contentful_id'
  | 'page___navigation___logo___title'
  | 'page___navigation___logo___description'
  | 'page___navigation___logo___node_locale'
  | 'page___navigation___homePage___id'
  | 'page___navigation___homePage___children'
  | 'page___navigation___homePage___name'
  | 'page___navigation___homePage___slug'
  | 'page___navigation___homePage___genericPage'
  | 'page___navigation___homePage___path'
  | 'page___navigation___homePage___navigation'
  | 'page___navigation___homePage___spaceId'
  | 'page___navigation___homePage___contentful_id'
  | 'page___navigation___homePage___createdAt'
  | 'page___navigation___homePage___updatedAt'
  | 'page___navigation___homePage___node_locale'
  | 'page___navigation___sideNavigation'
  | 'page___navigation___sideNavigation___id'
  | 'page___navigation___sideNavigation___children'
  | 'page___navigation___sideNavigation___name'
  | 'page___navigation___sideNavigation___slug'
  | 'page___navigation___sideNavigation___genericPage'
  | 'page___navigation___sideNavigation___path'
  | 'page___navigation___sideNavigation___navigation'
  | 'page___navigation___sideNavigation___spaceId'
  | 'page___navigation___sideNavigation___contentful_id'
  | 'page___navigation___sideNavigation___createdAt'
  | 'page___navigation___sideNavigation___updatedAt'
  | 'page___navigation___sideNavigation___node_locale'
  | 'page___navigation___spaceId'
  | 'page___navigation___contentful_id'
  | 'page___navigation___createdAt'
  | 'page___navigation___updatedAt'
  | 'page___navigation___sys___revision'
  | 'page___navigation___node_locale'
  | 'page___spaceId'
  | 'page___contentful_id'
  | 'page___createdAt'
  | 'page___updatedAt'
  | 'page___sys___revision'
  | 'page___node_locale'
  | 'body___id'
  | 'body___parent___id'
  | 'body___parent___parent___id'
  | 'body___parent___parent___children'
  | 'body___parent___children'
  | 'body___parent___children___id'
  | 'body___parent___children___children'
  | 'body___parent___internal___content'
  | 'body___parent___internal___contentDigest'
  | 'body___parent___internal___description'
  | 'body___parent___internal___fieldOwners'
  | 'body___parent___internal___ignoreType'
  | 'body___parent___internal___mediaType'
  | 'body___parent___internal___owner'
  | 'body___parent___internal___type'
  | 'body___children'
  | 'body___children___id'
  | 'body___children___parent___id'
  | 'body___children___parent___children'
  | 'body___children___children'
  | 'body___children___children___id'
  | 'body___children___children___children'
  | 'body___children___internal___content'
  | 'body___children___internal___contentDigest'
  | 'body___children___internal___description'
  | 'body___children___internal___fieldOwners'
  | 'body___children___internal___ignoreType'
  | 'body___children___internal___mediaType'
  | 'body___children___internal___owner'
  | 'body___children___internal___type'
  | 'body___internal___content'
  | 'body___internal___contentDigest'
  | 'body___internal___description'
  | 'body___internal___fieldOwners'
  | 'body___internal___ignoreType'
  | 'body___internal___mediaType'
  | 'body___internal___owner'
  | 'body___internal___type'
  | 'body___content'
  | 'body___content___content'
  | 'body___content___content___value'
  | 'body___content___content___nodeType'
  | 'body___content___nodeType'
  | 'body___nodeType'
  | 'body___body'
  | 'body___json'
  | 'spaceId'
  | 'contentful_id'
  | 'createdAt'
  | 'updatedAt'
  | 'sys___revision'
  | 'sys___contentType___sys___type'
  | 'sys___contentType___sys___linkType'
  | 'sys___contentType___sys___id'
  | 'sys___contentType___sys___contentful_id'
  | 'node_locale'
  | 'childContentfulHeroBodyRichTextNode___id'
  | 'childContentfulHeroBodyRichTextNode___parent___id'
  | 'childContentfulHeroBodyRichTextNode___parent___parent___id'
  | 'childContentfulHeroBodyRichTextNode___parent___parent___children'
  | 'childContentfulHeroBodyRichTextNode___parent___children'
  | 'childContentfulHeroBodyRichTextNode___parent___children___id'
  | 'childContentfulHeroBodyRichTextNode___parent___children___children'
  | 'childContentfulHeroBodyRichTextNode___parent___internal___content'
  | 'childContentfulHeroBodyRichTextNode___parent___internal___contentDigest'
  | 'childContentfulHeroBodyRichTextNode___parent___internal___description'
  | 'childContentfulHeroBodyRichTextNode___parent___internal___fieldOwners'
  | 'childContentfulHeroBodyRichTextNode___parent___internal___ignoreType'
  | 'childContentfulHeroBodyRichTextNode___parent___internal___mediaType'
  | 'childContentfulHeroBodyRichTextNode___parent___internal___owner'
  | 'childContentfulHeroBodyRichTextNode___parent___internal___type'
  | 'childContentfulHeroBodyRichTextNode___children'
  | 'childContentfulHeroBodyRichTextNode___children___id'
  | 'childContentfulHeroBodyRichTextNode___children___parent___id'
  | 'childContentfulHeroBodyRichTextNode___children___parent___children'
  | 'childContentfulHeroBodyRichTextNode___children___children'
  | 'childContentfulHeroBodyRichTextNode___children___children___id'
  | 'childContentfulHeroBodyRichTextNode___children___children___children'
  | 'childContentfulHeroBodyRichTextNode___children___internal___content'
  | 'childContentfulHeroBodyRichTextNode___children___internal___contentDigest'
  | 'childContentfulHeroBodyRichTextNode___children___internal___description'
  | 'childContentfulHeroBodyRichTextNode___children___internal___fieldOwners'
  | 'childContentfulHeroBodyRichTextNode___children___internal___ignoreType'
  | 'childContentfulHeroBodyRichTextNode___children___internal___mediaType'
  | 'childContentfulHeroBodyRichTextNode___children___internal___owner'
  | 'childContentfulHeroBodyRichTextNode___children___internal___type'
  | 'childContentfulHeroBodyRichTextNode___internal___content'
  | 'childContentfulHeroBodyRichTextNode___internal___contentDigest'
  | 'childContentfulHeroBodyRichTextNode___internal___description'
  | 'childContentfulHeroBodyRichTextNode___internal___fieldOwners'
  | 'childContentfulHeroBodyRichTextNode___internal___ignoreType'
  | 'childContentfulHeroBodyRichTextNode___internal___mediaType'
  | 'childContentfulHeroBodyRichTextNode___internal___owner'
  | 'childContentfulHeroBodyRichTextNode___internal___type'
  | 'childContentfulHeroBodyRichTextNode___content'
  | 'childContentfulHeroBodyRichTextNode___content___content'
  | 'childContentfulHeroBodyRichTextNode___content___content___value'
  | 'childContentfulHeroBodyRichTextNode___content___content___nodeType'
  | 'childContentfulHeroBodyRichTextNode___content___nodeType'
  | 'childContentfulHeroBodyRichTextNode___nodeType'
  | 'childContentfulHeroBodyRichTextNode___body'
  | 'childContentfulHeroBodyRichTextNode___json';

export type ContentfulHeroFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  name?: Maybe<StringQueryOperatorInput>;
  background?: Maybe<ContentfulAssetFilterInput>;
  page?: Maybe<ContentfulPageFilterListInput>;
  body?: Maybe<ContentfulHeroBodyRichTextNodeFilterInput>;
  spaceId?: Maybe<StringQueryOperatorInput>;
  contentful_id?: Maybe<StringQueryOperatorInput>;
  createdAt?: Maybe<DateQueryOperatorInput>;
  updatedAt?: Maybe<DateQueryOperatorInput>;
  sys?: Maybe<ContentfulHeroSysFilterInput>;
  node_locale?: Maybe<StringQueryOperatorInput>;
  childContentfulHeroBodyRichTextNode?: Maybe<ContentfulHeroBodyRichTextNodeFilterInput>;
};

export type ContentfulHeroGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulHeroEdge>;
  nodes: Array<ContentfulHero>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type ContentfulHeroSortInput = {
  fields?: Maybe<Array<Maybe<ContentfulHeroFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type ContentfulHeroSys = {
  revision?: Maybe<Scalars['Int']>;
  contentType?: Maybe<ContentfulHeroSysContentType>;
};

export type ContentfulHeroSysContentType = {
  sys?: Maybe<ContentfulHeroSysContentTypeSys>;
};

export type ContentfulHeroSysContentTypeFilterInput = {
  sys?: Maybe<ContentfulHeroSysContentTypeSysFilterInput>;
};

export type ContentfulHeroSysContentTypeSys = {
  type?: Maybe<Scalars['String']>;
  linkType?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  contentful_id?: Maybe<Scalars['String']>;
};

export type ContentfulHeroSysContentTypeSysFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  linkType?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  contentful_id?: Maybe<StringQueryOperatorInput>;
};

export type ContentfulHeroSysFilterInput = {
  revision?: Maybe<IntQueryOperatorInput>;
  contentType?: Maybe<ContentfulHeroSysContentTypeFilterInput>;
};

export type ContentfulImageCropFocus = 
  | 'TOP'
  | 'TOP_LEFT'
  | 'TOP_RIGHT'
  | 'BOTTOM'
  | 'BOTTOM_RIGHT'
  | 'BOTTOM_LEFT'
  | 'RIGHT'
  | 'LEFT'
  | 'FACE'
  | 'FACES'
  | 'CENTER';

export type ContentfulImageFormat = 
  | 'NO_CHANGE'
  | 'JPG'
  | 'PNG'
  | 'WEBP';

export type ContentfulLocale = Node & {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  code?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  default?: Maybe<Scalars['Boolean']>;
  fallbackCode?: Maybe<Scalars['String']>;
  sys?: Maybe<ContentfulLocaleSys>;
};

export type ContentfulLocaleConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulLocaleEdge>;
  nodes: Array<ContentfulLocale>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<ContentfulLocaleGroupConnection>;
};


export type ContentfulLocaleConnectionDistinctArgs = {
  field: ContentfulLocaleFieldsEnum;
};


export type ContentfulLocaleConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: ContentfulLocaleFieldsEnum;
};

export type ContentfulLocaleEdge = {
  next?: Maybe<ContentfulLocale>;
  node: ContentfulLocale;
  previous?: Maybe<ContentfulLocale>;
};

export type ContentfulLocaleFieldsEnum = 
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'code'
  | 'name'
  | 'default'
  | 'fallbackCode'
  | 'sys___id'
  | 'sys___type'
  | 'sys___version';

export type ContentfulLocaleFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  code?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  default?: Maybe<BooleanQueryOperatorInput>;
  fallbackCode?: Maybe<StringQueryOperatorInput>;
  sys?: Maybe<ContentfulLocaleSysFilterInput>;
};

export type ContentfulLocaleGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulLocaleEdge>;
  nodes: Array<ContentfulLocale>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type ContentfulLocaleSortInput = {
  fields?: Maybe<Array<Maybe<ContentfulLocaleFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type ContentfulLocaleSys = {
  id?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['Int']>;
};

export type ContentfulLocaleSysFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  type?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<IntQueryOperatorInput>;
};

export type ContentfulNavigation = Node & {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  name?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  logo?: Maybe<ContentfulAsset>;
  homePage?: Maybe<ContentfulPage>;
  sideNavigation?: Maybe<Array<Maybe<ContentfulPage>>>;
  spaceId?: Maybe<Scalars['String']>;
  contentful_id?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['Date']>;
  updatedAt?: Maybe<Scalars['Date']>;
  sys?: Maybe<ContentfulNavigationSys>;
  node_locale?: Maybe<Scalars['String']>;
};


export type ContentfulNavigationCreatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type ContentfulNavigationUpdatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type ContentfulNavigationConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulNavigationEdge>;
  nodes: Array<ContentfulNavigation>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<ContentfulNavigationGroupConnection>;
};


export type ContentfulNavigationConnectionDistinctArgs = {
  field: ContentfulNavigationFieldsEnum;
};


export type ContentfulNavigationConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: ContentfulNavigationFieldsEnum;
};

export type ContentfulNavigationEdge = {
  next?: Maybe<ContentfulNavigation>;
  node: ContentfulNavigation;
  previous?: Maybe<ContentfulNavigation>;
};

export type ContentfulNavigationFieldsEnum = 
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'name'
  | 'slug'
  | 'logo___id'
  | 'logo___parent___id'
  | 'logo___parent___parent___id'
  | 'logo___parent___parent___children'
  | 'logo___parent___children'
  | 'logo___parent___children___id'
  | 'logo___parent___children___children'
  | 'logo___parent___internal___content'
  | 'logo___parent___internal___contentDigest'
  | 'logo___parent___internal___description'
  | 'logo___parent___internal___fieldOwners'
  | 'logo___parent___internal___ignoreType'
  | 'logo___parent___internal___mediaType'
  | 'logo___parent___internal___owner'
  | 'logo___parent___internal___type'
  | 'logo___children'
  | 'logo___children___id'
  | 'logo___children___parent___id'
  | 'logo___children___parent___children'
  | 'logo___children___children'
  | 'logo___children___children___id'
  | 'logo___children___children___children'
  | 'logo___children___internal___content'
  | 'logo___children___internal___contentDigest'
  | 'logo___children___internal___description'
  | 'logo___children___internal___fieldOwners'
  | 'logo___children___internal___ignoreType'
  | 'logo___children___internal___mediaType'
  | 'logo___children___internal___owner'
  | 'logo___children___internal___type'
  | 'logo___internal___content'
  | 'logo___internal___contentDigest'
  | 'logo___internal___description'
  | 'logo___internal___fieldOwners'
  | 'logo___internal___ignoreType'
  | 'logo___internal___mediaType'
  | 'logo___internal___owner'
  | 'logo___internal___type'
  | 'logo___contentful_id'
  | 'logo___file___url'
  | 'logo___file___details___size'
  | 'logo___file___fileName'
  | 'logo___file___contentType'
  | 'logo___title'
  | 'logo___description'
  | 'logo___node_locale'
  | 'logo___fixed___base64'
  | 'logo___fixed___tracedSVG'
  | 'logo___fixed___aspectRatio'
  | 'logo___fixed___width'
  | 'logo___fixed___height'
  | 'logo___fixed___src'
  | 'logo___fixed___srcSet'
  | 'logo___fixed___srcWebp'
  | 'logo___fixed___srcSetWebp'
  | 'logo___resolutions___base64'
  | 'logo___resolutions___tracedSVG'
  | 'logo___resolutions___aspectRatio'
  | 'logo___resolutions___width'
  | 'logo___resolutions___height'
  | 'logo___resolutions___src'
  | 'logo___resolutions___srcSet'
  | 'logo___resolutions___srcWebp'
  | 'logo___resolutions___srcSetWebp'
  | 'logo___fluid___base64'
  | 'logo___fluid___tracedSVG'
  | 'logo___fluid___aspectRatio'
  | 'logo___fluid___src'
  | 'logo___fluid___srcSet'
  | 'logo___fluid___srcWebp'
  | 'logo___fluid___srcSetWebp'
  | 'logo___fluid___sizes'
  | 'logo___sizes___base64'
  | 'logo___sizes___tracedSVG'
  | 'logo___sizes___aspectRatio'
  | 'logo___sizes___src'
  | 'logo___sizes___srcSet'
  | 'logo___sizes___srcWebp'
  | 'logo___sizes___srcSetWebp'
  | 'logo___sizes___sizes'
  | 'logo___resize___base64'
  | 'logo___resize___tracedSVG'
  | 'logo___resize___src'
  | 'logo___resize___width'
  | 'logo___resize___height'
  | 'logo___resize___aspectRatio'
  | 'homePage___id'
  | 'homePage___parent___id'
  | 'homePage___parent___parent___id'
  | 'homePage___parent___parent___children'
  | 'homePage___parent___children'
  | 'homePage___parent___children___id'
  | 'homePage___parent___children___children'
  | 'homePage___parent___internal___content'
  | 'homePage___parent___internal___contentDigest'
  | 'homePage___parent___internal___description'
  | 'homePage___parent___internal___fieldOwners'
  | 'homePage___parent___internal___ignoreType'
  | 'homePage___parent___internal___mediaType'
  | 'homePage___parent___internal___owner'
  | 'homePage___parent___internal___type'
  | 'homePage___children'
  | 'homePage___children___id'
  | 'homePage___children___parent___id'
  | 'homePage___children___parent___children'
  | 'homePage___children___children'
  | 'homePage___children___children___id'
  | 'homePage___children___children___children'
  | 'homePage___children___internal___content'
  | 'homePage___children___internal___contentDigest'
  | 'homePage___children___internal___description'
  | 'homePage___children___internal___fieldOwners'
  | 'homePage___children___internal___ignoreType'
  | 'homePage___children___internal___mediaType'
  | 'homePage___children___internal___owner'
  | 'homePage___children___internal___type'
  | 'homePage___internal___content'
  | 'homePage___internal___contentDigest'
  | 'homePage___internal___description'
  | 'homePage___internal___fieldOwners'
  | 'homePage___internal___ignoreType'
  | 'homePage___internal___mediaType'
  | 'homePage___internal___owner'
  | 'homePage___internal___type'
  | 'homePage___name'
  | 'homePage___slug'
  | 'homePage___genericPage'
  | 'homePage___path'
  | 'homePage___pageSeo___id'
  | 'homePage___pageSeo___parent___id'
  | 'homePage___pageSeo___parent___children'
  | 'homePage___pageSeo___children'
  | 'homePage___pageSeo___children___id'
  | 'homePage___pageSeo___children___children'
  | 'homePage___pageSeo___internal___content'
  | 'homePage___pageSeo___internal___contentDigest'
  | 'homePage___pageSeo___internal___description'
  | 'homePage___pageSeo___internal___fieldOwners'
  | 'homePage___pageSeo___internal___ignoreType'
  | 'homePage___pageSeo___internal___mediaType'
  | 'homePage___pageSeo___internal___owner'
  | 'homePage___pageSeo___internal___type'
  | 'homePage___pageSeo___name'
  | 'homePage___pageSeo___title'
  | 'homePage___pageSeo___description'
  | 'homePage___pageSeo___image___id'
  | 'homePage___pageSeo___image___children'
  | 'homePage___pageSeo___image___contentful_id'
  | 'homePage___pageSeo___image___title'
  | 'homePage___pageSeo___image___description'
  | 'homePage___pageSeo___image___node_locale'
  | 'homePage___pageSeo___blog_post'
  | 'homePage___pageSeo___blog_post___id'
  | 'homePage___pageSeo___blog_post___children'
  | 'homePage___pageSeo___blog_post___title'
  | 'homePage___pageSeo___blog_post___slug'
  | 'homePage___pageSeo___blog_post___description'
  | 'homePage___pageSeo___blog_post___spaceId'
  | 'homePage___pageSeo___blog_post___contentful_id'
  | 'homePage___pageSeo___blog_post___createdAt'
  | 'homePage___pageSeo___blog_post___updatedAt'
  | 'homePage___pageSeo___blog_post___node_locale'
  | 'homePage___pageSeo___spaceId'
  | 'homePage___pageSeo___contentful_id'
  | 'homePage___pageSeo___createdAt'
  | 'homePage___pageSeo___updatedAt'
  | 'homePage___pageSeo___sys___revision'
  | 'homePage___pageSeo___node_locale'
  | 'homePage___pageSeo___page'
  | 'homePage___pageSeo___page___id'
  | 'homePage___pageSeo___page___children'
  | 'homePage___pageSeo___page___name'
  | 'homePage___pageSeo___page___slug'
  | 'homePage___pageSeo___page___genericPage'
  | 'homePage___pageSeo___page___path'
  | 'homePage___pageSeo___page___navigation'
  | 'homePage___pageSeo___page___spaceId'
  | 'homePage___pageSeo___page___contentful_id'
  | 'homePage___pageSeo___page___createdAt'
  | 'homePage___pageSeo___page___updatedAt'
  | 'homePage___pageSeo___page___node_locale'
  | 'homePage___navigation'
  | 'homePage___navigation___id'
  | 'homePage___navigation___parent___id'
  | 'homePage___navigation___parent___children'
  | 'homePage___navigation___children'
  | 'homePage___navigation___children___id'
  | 'homePage___navigation___children___children'
  | 'homePage___navigation___internal___content'
  | 'homePage___navigation___internal___contentDigest'
  | 'homePage___navigation___internal___description'
  | 'homePage___navigation___internal___fieldOwners'
  | 'homePage___navigation___internal___ignoreType'
  | 'homePage___navigation___internal___mediaType'
  | 'homePage___navigation___internal___owner'
  | 'homePage___navigation___internal___type'
  | 'homePage___navigation___name'
  | 'homePage___navigation___slug'
  | 'homePage___navigation___logo___id'
  | 'homePage___navigation___logo___children'
  | 'homePage___navigation___logo___contentful_id'
  | 'homePage___navigation___logo___title'
  | 'homePage___navigation___logo___description'
  | 'homePage___navigation___logo___node_locale'
  | 'homePage___navigation___homePage___id'
  | 'homePage___navigation___homePage___children'
  | 'homePage___navigation___homePage___name'
  | 'homePage___navigation___homePage___slug'
  | 'homePage___navigation___homePage___genericPage'
  | 'homePage___navigation___homePage___path'
  | 'homePage___navigation___homePage___navigation'
  | 'homePage___navigation___homePage___spaceId'
  | 'homePage___navigation___homePage___contentful_id'
  | 'homePage___navigation___homePage___createdAt'
  | 'homePage___navigation___homePage___updatedAt'
  | 'homePage___navigation___homePage___node_locale'
  | 'homePage___navigation___sideNavigation'
  | 'homePage___navigation___sideNavigation___id'
  | 'homePage___navigation___sideNavigation___children'
  | 'homePage___navigation___sideNavigation___name'
  | 'homePage___navigation___sideNavigation___slug'
  | 'homePage___navigation___sideNavigation___genericPage'
  | 'homePage___navigation___sideNavigation___path'
  | 'homePage___navigation___sideNavigation___navigation'
  | 'homePage___navigation___sideNavigation___spaceId'
  | 'homePage___navigation___sideNavigation___contentful_id'
  | 'homePage___navigation___sideNavigation___createdAt'
  | 'homePage___navigation___sideNavigation___updatedAt'
  | 'homePage___navigation___sideNavigation___node_locale'
  | 'homePage___navigation___spaceId'
  | 'homePage___navigation___contentful_id'
  | 'homePage___navigation___createdAt'
  | 'homePage___navigation___updatedAt'
  | 'homePage___navigation___sys___revision'
  | 'homePage___navigation___node_locale'
  | 'homePage___spaceId'
  | 'homePage___contentful_id'
  | 'homePage___createdAt'
  | 'homePage___updatedAt'
  | 'homePage___sys___revision'
  | 'homePage___node_locale'
  | 'sideNavigation'
  | 'sideNavigation___id'
  | 'sideNavigation___parent___id'
  | 'sideNavigation___parent___parent___id'
  | 'sideNavigation___parent___parent___children'
  | 'sideNavigation___parent___children'
  | 'sideNavigation___parent___children___id'
  | 'sideNavigation___parent___children___children'
  | 'sideNavigation___parent___internal___content'
  | 'sideNavigation___parent___internal___contentDigest'
  | 'sideNavigation___parent___internal___description'
  | 'sideNavigation___parent___internal___fieldOwners'
  | 'sideNavigation___parent___internal___ignoreType'
  | 'sideNavigation___parent___internal___mediaType'
  | 'sideNavigation___parent___internal___owner'
  | 'sideNavigation___parent___internal___type'
  | 'sideNavigation___children'
  | 'sideNavigation___children___id'
  | 'sideNavigation___children___parent___id'
  | 'sideNavigation___children___parent___children'
  | 'sideNavigation___children___children'
  | 'sideNavigation___children___children___id'
  | 'sideNavigation___children___children___children'
  | 'sideNavigation___children___internal___content'
  | 'sideNavigation___children___internal___contentDigest'
  | 'sideNavigation___children___internal___description'
  | 'sideNavigation___children___internal___fieldOwners'
  | 'sideNavigation___children___internal___ignoreType'
  | 'sideNavigation___children___internal___mediaType'
  | 'sideNavigation___children___internal___owner'
  | 'sideNavigation___children___internal___type'
  | 'sideNavigation___internal___content'
  | 'sideNavigation___internal___contentDigest'
  | 'sideNavigation___internal___description'
  | 'sideNavigation___internal___fieldOwners'
  | 'sideNavigation___internal___ignoreType'
  | 'sideNavigation___internal___mediaType'
  | 'sideNavigation___internal___owner'
  | 'sideNavigation___internal___type'
  | 'sideNavigation___name'
  | 'sideNavigation___slug'
  | 'sideNavigation___genericPage'
  | 'sideNavigation___path'
  | 'sideNavigation___pageSeo___id'
  | 'sideNavigation___pageSeo___parent___id'
  | 'sideNavigation___pageSeo___parent___children'
  | 'sideNavigation___pageSeo___children'
  | 'sideNavigation___pageSeo___children___id'
  | 'sideNavigation___pageSeo___children___children'
  | 'sideNavigation___pageSeo___internal___content'
  | 'sideNavigation___pageSeo___internal___contentDigest'
  | 'sideNavigation___pageSeo___internal___description'
  | 'sideNavigation___pageSeo___internal___fieldOwners'
  | 'sideNavigation___pageSeo___internal___ignoreType'
  | 'sideNavigation___pageSeo___internal___mediaType'
  | 'sideNavigation___pageSeo___internal___owner'
  | 'sideNavigation___pageSeo___internal___type'
  | 'sideNavigation___pageSeo___name'
  | 'sideNavigation___pageSeo___title'
  | 'sideNavigation___pageSeo___description'
  | 'sideNavigation___pageSeo___image___id'
  | 'sideNavigation___pageSeo___image___children'
  | 'sideNavigation___pageSeo___image___contentful_id'
  | 'sideNavigation___pageSeo___image___title'
  | 'sideNavigation___pageSeo___image___description'
  | 'sideNavigation___pageSeo___image___node_locale'
  | 'sideNavigation___pageSeo___blog_post'
  | 'sideNavigation___pageSeo___blog_post___id'
  | 'sideNavigation___pageSeo___blog_post___children'
  | 'sideNavigation___pageSeo___blog_post___title'
  | 'sideNavigation___pageSeo___blog_post___slug'
  | 'sideNavigation___pageSeo___blog_post___description'
  | 'sideNavigation___pageSeo___blog_post___spaceId'
  | 'sideNavigation___pageSeo___blog_post___contentful_id'
  | 'sideNavigation___pageSeo___blog_post___createdAt'
  | 'sideNavigation___pageSeo___blog_post___updatedAt'
  | 'sideNavigation___pageSeo___blog_post___node_locale'
  | 'sideNavigation___pageSeo___spaceId'
  | 'sideNavigation___pageSeo___contentful_id'
  | 'sideNavigation___pageSeo___createdAt'
  | 'sideNavigation___pageSeo___updatedAt'
  | 'sideNavigation___pageSeo___sys___revision'
  | 'sideNavigation___pageSeo___node_locale'
  | 'sideNavigation___pageSeo___page'
  | 'sideNavigation___pageSeo___page___id'
  | 'sideNavigation___pageSeo___page___children'
  | 'sideNavigation___pageSeo___page___name'
  | 'sideNavigation___pageSeo___page___slug'
  | 'sideNavigation___pageSeo___page___genericPage'
  | 'sideNavigation___pageSeo___page___path'
  | 'sideNavigation___pageSeo___page___navigation'
  | 'sideNavigation___pageSeo___page___spaceId'
  | 'sideNavigation___pageSeo___page___contentful_id'
  | 'sideNavigation___pageSeo___page___createdAt'
  | 'sideNavigation___pageSeo___page___updatedAt'
  | 'sideNavigation___pageSeo___page___node_locale'
  | 'sideNavigation___navigation'
  | 'sideNavigation___navigation___id'
  | 'sideNavigation___navigation___parent___id'
  | 'sideNavigation___navigation___parent___children'
  | 'sideNavigation___navigation___children'
  | 'sideNavigation___navigation___children___id'
  | 'sideNavigation___navigation___children___children'
  | 'sideNavigation___navigation___internal___content'
  | 'sideNavigation___navigation___internal___contentDigest'
  | 'sideNavigation___navigation___internal___description'
  | 'sideNavigation___navigation___internal___fieldOwners'
  | 'sideNavigation___navigation___internal___ignoreType'
  | 'sideNavigation___navigation___internal___mediaType'
  | 'sideNavigation___navigation___internal___owner'
  | 'sideNavigation___navigation___internal___type'
  | 'sideNavigation___navigation___name'
  | 'sideNavigation___navigation___slug'
  | 'sideNavigation___navigation___logo___id'
  | 'sideNavigation___navigation___logo___children'
  | 'sideNavigation___navigation___logo___contentful_id'
  | 'sideNavigation___navigation___logo___title'
  | 'sideNavigation___navigation___logo___description'
  | 'sideNavigation___navigation___logo___node_locale'
  | 'sideNavigation___navigation___homePage___id'
  | 'sideNavigation___navigation___homePage___children'
  | 'sideNavigation___navigation___homePage___name'
  | 'sideNavigation___navigation___homePage___slug'
  | 'sideNavigation___navigation___homePage___genericPage'
  | 'sideNavigation___navigation___homePage___path'
  | 'sideNavigation___navigation___homePage___navigation'
  | 'sideNavigation___navigation___homePage___spaceId'
  | 'sideNavigation___navigation___homePage___contentful_id'
  | 'sideNavigation___navigation___homePage___createdAt'
  | 'sideNavigation___navigation___homePage___updatedAt'
  | 'sideNavigation___navigation___homePage___node_locale'
  | 'sideNavigation___navigation___sideNavigation'
  | 'sideNavigation___navigation___sideNavigation___id'
  | 'sideNavigation___navigation___sideNavigation___children'
  | 'sideNavigation___navigation___sideNavigation___name'
  | 'sideNavigation___navigation___sideNavigation___slug'
  | 'sideNavigation___navigation___sideNavigation___genericPage'
  | 'sideNavigation___navigation___sideNavigation___path'
  | 'sideNavigation___navigation___sideNavigation___navigation'
  | 'sideNavigation___navigation___sideNavigation___spaceId'
  | 'sideNavigation___navigation___sideNavigation___contentful_id'
  | 'sideNavigation___navigation___sideNavigation___createdAt'
  | 'sideNavigation___navigation___sideNavigation___updatedAt'
  | 'sideNavigation___navigation___sideNavigation___node_locale'
  | 'sideNavigation___navigation___spaceId'
  | 'sideNavigation___navigation___contentful_id'
  | 'sideNavigation___navigation___createdAt'
  | 'sideNavigation___navigation___updatedAt'
  | 'sideNavigation___navigation___sys___revision'
  | 'sideNavigation___navigation___node_locale'
  | 'sideNavigation___spaceId'
  | 'sideNavigation___contentful_id'
  | 'sideNavigation___createdAt'
  | 'sideNavigation___updatedAt'
  | 'sideNavigation___sys___revision'
  | 'sideNavigation___node_locale'
  | 'spaceId'
  | 'contentful_id'
  | 'createdAt'
  | 'updatedAt'
  | 'sys___revision'
  | 'sys___contentType___sys___type'
  | 'sys___contentType___sys___linkType'
  | 'sys___contentType___sys___id'
  | 'sys___contentType___sys___contentful_id'
  | 'node_locale';

export type ContentfulNavigationFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  name?: Maybe<StringQueryOperatorInput>;
  slug?: Maybe<StringQueryOperatorInput>;
  logo?: Maybe<ContentfulAssetFilterInput>;
  homePage?: Maybe<ContentfulPageFilterInput>;
  sideNavigation?: Maybe<ContentfulPageFilterListInput>;
  spaceId?: Maybe<StringQueryOperatorInput>;
  contentful_id?: Maybe<StringQueryOperatorInput>;
  createdAt?: Maybe<DateQueryOperatorInput>;
  updatedAt?: Maybe<DateQueryOperatorInput>;
  sys?: Maybe<ContentfulNavigationSysFilterInput>;
  node_locale?: Maybe<StringQueryOperatorInput>;
};

export type ContentfulNavigationFilterListInput = {
  elemMatch?: Maybe<ContentfulNavigationFilterInput>;
};

export type ContentfulNavigationGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulNavigationEdge>;
  nodes: Array<ContentfulNavigation>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type ContentfulNavigationSortInput = {
  fields?: Maybe<Array<Maybe<ContentfulNavigationFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type ContentfulNavigationSys = {
  revision?: Maybe<Scalars['Int']>;
  contentType?: Maybe<ContentfulNavigationSysContentType>;
};

export type ContentfulNavigationSysContentType = {
  sys?: Maybe<ContentfulNavigationSysContentTypeSys>;
};

export type ContentfulNavigationSysContentTypeFilterInput = {
  sys?: Maybe<ContentfulNavigationSysContentTypeSysFilterInput>;
};

export type ContentfulNavigationSysContentTypeSys = {
  type?: Maybe<Scalars['String']>;
  linkType?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  contentful_id?: Maybe<Scalars['String']>;
};

export type ContentfulNavigationSysContentTypeSysFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  linkType?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  contentful_id?: Maybe<StringQueryOperatorInput>;
};

export type ContentfulNavigationSysFilterInput = {
  revision?: Maybe<IntQueryOperatorInput>;
  contentType?: Maybe<ContentfulNavigationSysContentTypeFilterInput>;
};

export type ContentfulPage = Node & {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  name?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  genericPage?: Maybe<Scalars['Boolean']>;
  path?: Maybe<Scalars['String']>;
  blocks?: Maybe<Array<Maybe<ContentfulEmbeddedRifContentfulHeroUnion>>>;
  pageSeo?: Maybe<ContentfulSeo>;
  navigation?: Maybe<Array<Maybe<ContentfulNavigation>>>;
  spaceId?: Maybe<Scalars['String']>;
  contentful_id?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['Date']>;
  updatedAt?: Maybe<Scalars['Date']>;
  sys?: Maybe<ContentfulPageSys>;
  node_locale?: Maybe<Scalars['String']>;
};


export type ContentfulPageCreatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type ContentfulPageUpdatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type ContentfulPageConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulPageEdge>;
  nodes: Array<ContentfulPage>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<ContentfulPageGroupConnection>;
};


export type ContentfulPageConnectionDistinctArgs = {
  field: ContentfulPageFieldsEnum;
};


export type ContentfulPageConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: ContentfulPageFieldsEnum;
};

export type ContentfulPageEdge = {
  next?: Maybe<ContentfulPage>;
  node: ContentfulPage;
  previous?: Maybe<ContentfulPage>;
};

export type ContentfulPageFieldsEnum = 
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'name'
  | 'slug'
  | 'genericPage'
  | 'path'
  | 'pageSeo___id'
  | 'pageSeo___parent___id'
  | 'pageSeo___parent___parent___id'
  | 'pageSeo___parent___parent___children'
  | 'pageSeo___parent___children'
  | 'pageSeo___parent___children___id'
  | 'pageSeo___parent___children___children'
  | 'pageSeo___parent___internal___content'
  | 'pageSeo___parent___internal___contentDigest'
  | 'pageSeo___parent___internal___description'
  | 'pageSeo___parent___internal___fieldOwners'
  | 'pageSeo___parent___internal___ignoreType'
  | 'pageSeo___parent___internal___mediaType'
  | 'pageSeo___parent___internal___owner'
  | 'pageSeo___parent___internal___type'
  | 'pageSeo___children'
  | 'pageSeo___children___id'
  | 'pageSeo___children___parent___id'
  | 'pageSeo___children___parent___children'
  | 'pageSeo___children___children'
  | 'pageSeo___children___children___id'
  | 'pageSeo___children___children___children'
  | 'pageSeo___children___internal___content'
  | 'pageSeo___children___internal___contentDigest'
  | 'pageSeo___children___internal___description'
  | 'pageSeo___children___internal___fieldOwners'
  | 'pageSeo___children___internal___ignoreType'
  | 'pageSeo___children___internal___mediaType'
  | 'pageSeo___children___internal___owner'
  | 'pageSeo___children___internal___type'
  | 'pageSeo___internal___content'
  | 'pageSeo___internal___contentDigest'
  | 'pageSeo___internal___description'
  | 'pageSeo___internal___fieldOwners'
  | 'pageSeo___internal___ignoreType'
  | 'pageSeo___internal___mediaType'
  | 'pageSeo___internal___owner'
  | 'pageSeo___internal___type'
  | 'pageSeo___name'
  | 'pageSeo___title'
  | 'pageSeo___description'
  | 'pageSeo___image___id'
  | 'pageSeo___image___parent___id'
  | 'pageSeo___image___parent___children'
  | 'pageSeo___image___children'
  | 'pageSeo___image___children___id'
  | 'pageSeo___image___children___children'
  | 'pageSeo___image___internal___content'
  | 'pageSeo___image___internal___contentDigest'
  | 'pageSeo___image___internal___description'
  | 'pageSeo___image___internal___fieldOwners'
  | 'pageSeo___image___internal___ignoreType'
  | 'pageSeo___image___internal___mediaType'
  | 'pageSeo___image___internal___owner'
  | 'pageSeo___image___internal___type'
  | 'pageSeo___image___contentful_id'
  | 'pageSeo___image___file___url'
  | 'pageSeo___image___file___fileName'
  | 'pageSeo___image___file___contentType'
  | 'pageSeo___image___title'
  | 'pageSeo___image___description'
  | 'pageSeo___image___node_locale'
  | 'pageSeo___image___fixed___base64'
  | 'pageSeo___image___fixed___tracedSVG'
  | 'pageSeo___image___fixed___aspectRatio'
  | 'pageSeo___image___fixed___width'
  | 'pageSeo___image___fixed___height'
  | 'pageSeo___image___fixed___src'
  | 'pageSeo___image___fixed___srcSet'
  | 'pageSeo___image___fixed___srcWebp'
  | 'pageSeo___image___fixed___srcSetWebp'
  | 'pageSeo___image___resolutions___base64'
  | 'pageSeo___image___resolutions___tracedSVG'
  | 'pageSeo___image___resolutions___aspectRatio'
  | 'pageSeo___image___resolutions___width'
  | 'pageSeo___image___resolutions___height'
  | 'pageSeo___image___resolutions___src'
  | 'pageSeo___image___resolutions___srcSet'
  | 'pageSeo___image___resolutions___srcWebp'
  | 'pageSeo___image___resolutions___srcSetWebp'
  | 'pageSeo___image___fluid___base64'
  | 'pageSeo___image___fluid___tracedSVG'
  | 'pageSeo___image___fluid___aspectRatio'
  | 'pageSeo___image___fluid___src'
  | 'pageSeo___image___fluid___srcSet'
  | 'pageSeo___image___fluid___srcWebp'
  | 'pageSeo___image___fluid___srcSetWebp'
  | 'pageSeo___image___fluid___sizes'
  | 'pageSeo___image___sizes___base64'
  | 'pageSeo___image___sizes___tracedSVG'
  | 'pageSeo___image___sizes___aspectRatio'
  | 'pageSeo___image___sizes___src'
  | 'pageSeo___image___sizes___srcSet'
  | 'pageSeo___image___sizes___srcWebp'
  | 'pageSeo___image___sizes___srcSetWebp'
  | 'pageSeo___image___sizes___sizes'
  | 'pageSeo___image___resize___base64'
  | 'pageSeo___image___resize___tracedSVG'
  | 'pageSeo___image___resize___src'
  | 'pageSeo___image___resize___width'
  | 'pageSeo___image___resize___height'
  | 'pageSeo___image___resize___aspectRatio'
  | 'pageSeo___blog_post'
  | 'pageSeo___blog_post___id'
  | 'pageSeo___blog_post___parent___id'
  | 'pageSeo___blog_post___parent___children'
  | 'pageSeo___blog_post___children'
  | 'pageSeo___blog_post___children___id'
  | 'pageSeo___blog_post___children___children'
  | 'pageSeo___blog_post___internal___content'
  | 'pageSeo___blog_post___internal___contentDigest'
  | 'pageSeo___blog_post___internal___description'
  | 'pageSeo___blog_post___internal___fieldOwners'
  | 'pageSeo___blog_post___internal___ignoreType'
  | 'pageSeo___blog_post___internal___mediaType'
  | 'pageSeo___blog_post___internal___owner'
  | 'pageSeo___blog_post___internal___type'
  | 'pageSeo___blog_post___title'
  | 'pageSeo___blog_post___slug'
  | 'pageSeo___blog_post___description'
  | 'pageSeo___blog_post___image___id'
  | 'pageSeo___blog_post___image___children'
  | 'pageSeo___blog_post___image___contentful_id'
  | 'pageSeo___blog_post___image___title'
  | 'pageSeo___blog_post___image___description'
  | 'pageSeo___blog_post___image___node_locale'
  | 'pageSeo___blog_post___seo___id'
  | 'pageSeo___blog_post___seo___children'
  | 'pageSeo___blog_post___seo___name'
  | 'pageSeo___blog_post___seo___title'
  | 'pageSeo___blog_post___seo___description'
  | 'pageSeo___blog_post___seo___blog_post'
  | 'pageSeo___blog_post___seo___spaceId'
  | 'pageSeo___blog_post___seo___contentful_id'
  | 'pageSeo___blog_post___seo___createdAt'
  | 'pageSeo___blog_post___seo___updatedAt'
  | 'pageSeo___blog_post___seo___node_locale'
  | 'pageSeo___blog_post___seo___page'
  | 'pageSeo___blog_post___body___id'
  | 'pageSeo___blog_post___body___children'
  | 'pageSeo___blog_post___body___content'
  | 'pageSeo___blog_post___body___nodeType'
  | 'pageSeo___blog_post___body___body'
  | 'pageSeo___blog_post___body___json'
  | 'pageSeo___blog_post___spaceId'
  | 'pageSeo___blog_post___contentful_id'
  | 'pageSeo___blog_post___createdAt'
  | 'pageSeo___blog_post___updatedAt'
  | 'pageSeo___blog_post___sys___revision'
  | 'pageSeo___blog_post___node_locale'
  | 'pageSeo___blog_post___childContentfulBlogPostBodyRichTextNode___id'
  | 'pageSeo___blog_post___childContentfulBlogPostBodyRichTextNode___children'
  | 'pageSeo___blog_post___childContentfulBlogPostBodyRichTextNode___content'
  | 'pageSeo___blog_post___childContentfulBlogPostBodyRichTextNode___nodeType'
  | 'pageSeo___blog_post___childContentfulBlogPostBodyRichTextNode___body'
  | 'pageSeo___blog_post___childContentfulBlogPostBodyRichTextNode___json'
  | 'pageSeo___spaceId'
  | 'pageSeo___contentful_id'
  | 'pageSeo___createdAt'
  | 'pageSeo___updatedAt'
  | 'pageSeo___sys___revision'
  | 'pageSeo___node_locale'
  | 'pageSeo___page'
  | 'pageSeo___page___id'
  | 'pageSeo___page___parent___id'
  | 'pageSeo___page___parent___children'
  | 'pageSeo___page___children'
  | 'pageSeo___page___children___id'
  | 'pageSeo___page___children___children'
  | 'pageSeo___page___internal___content'
  | 'pageSeo___page___internal___contentDigest'
  | 'pageSeo___page___internal___description'
  | 'pageSeo___page___internal___fieldOwners'
  | 'pageSeo___page___internal___ignoreType'
  | 'pageSeo___page___internal___mediaType'
  | 'pageSeo___page___internal___owner'
  | 'pageSeo___page___internal___type'
  | 'pageSeo___page___name'
  | 'pageSeo___page___slug'
  | 'pageSeo___page___genericPage'
  | 'pageSeo___page___path'
  | 'pageSeo___page___pageSeo___id'
  | 'pageSeo___page___pageSeo___children'
  | 'pageSeo___page___pageSeo___name'
  | 'pageSeo___page___pageSeo___title'
  | 'pageSeo___page___pageSeo___description'
  | 'pageSeo___page___pageSeo___blog_post'
  | 'pageSeo___page___pageSeo___spaceId'
  | 'pageSeo___page___pageSeo___contentful_id'
  | 'pageSeo___page___pageSeo___createdAt'
  | 'pageSeo___page___pageSeo___updatedAt'
  | 'pageSeo___page___pageSeo___node_locale'
  | 'pageSeo___page___pageSeo___page'
  | 'pageSeo___page___navigation'
  | 'pageSeo___page___navigation___id'
  | 'pageSeo___page___navigation___children'
  | 'pageSeo___page___navigation___name'
  | 'pageSeo___page___navigation___slug'
  | 'pageSeo___page___navigation___sideNavigation'
  | 'pageSeo___page___navigation___spaceId'
  | 'pageSeo___page___navigation___contentful_id'
  | 'pageSeo___page___navigation___createdAt'
  | 'pageSeo___page___navigation___updatedAt'
  | 'pageSeo___page___navigation___node_locale'
  | 'pageSeo___page___spaceId'
  | 'pageSeo___page___contentful_id'
  | 'pageSeo___page___createdAt'
  | 'pageSeo___page___updatedAt'
  | 'pageSeo___page___sys___revision'
  | 'pageSeo___page___node_locale'
  | 'navigation'
  | 'navigation___id'
  | 'navigation___parent___id'
  | 'navigation___parent___parent___id'
  | 'navigation___parent___parent___children'
  | 'navigation___parent___children'
  | 'navigation___parent___children___id'
  | 'navigation___parent___children___children'
  | 'navigation___parent___internal___content'
  | 'navigation___parent___internal___contentDigest'
  | 'navigation___parent___internal___description'
  | 'navigation___parent___internal___fieldOwners'
  | 'navigation___parent___internal___ignoreType'
  | 'navigation___parent___internal___mediaType'
  | 'navigation___parent___internal___owner'
  | 'navigation___parent___internal___type'
  | 'navigation___children'
  | 'navigation___children___id'
  | 'navigation___children___parent___id'
  | 'navigation___children___parent___children'
  | 'navigation___children___children'
  | 'navigation___children___children___id'
  | 'navigation___children___children___children'
  | 'navigation___children___internal___content'
  | 'navigation___children___internal___contentDigest'
  | 'navigation___children___internal___description'
  | 'navigation___children___internal___fieldOwners'
  | 'navigation___children___internal___ignoreType'
  | 'navigation___children___internal___mediaType'
  | 'navigation___children___internal___owner'
  | 'navigation___children___internal___type'
  | 'navigation___internal___content'
  | 'navigation___internal___contentDigest'
  | 'navigation___internal___description'
  | 'navigation___internal___fieldOwners'
  | 'navigation___internal___ignoreType'
  | 'navigation___internal___mediaType'
  | 'navigation___internal___owner'
  | 'navigation___internal___type'
  | 'navigation___name'
  | 'navigation___slug'
  | 'navigation___logo___id'
  | 'navigation___logo___parent___id'
  | 'navigation___logo___parent___children'
  | 'navigation___logo___children'
  | 'navigation___logo___children___id'
  | 'navigation___logo___children___children'
  | 'navigation___logo___internal___content'
  | 'navigation___logo___internal___contentDigest'
  | 'navigation___logo___internal___description'
  | 'navigation___logo___internal___fieldOwners'
  | 'navigation___logo___internal___ignoreType'
  | 'navigation___logo___internal___mediaType'
  | 'navigation___logo___internal___owner'
  | 'navigation___logo___internal___type'
  | 'navigation___logo___contentful_id'
  | 'navigation___logo___file___url'
  | 'navigation___logo___file___fileName'
  | 'navigation___logo___file___contentType'
  | 'navigation___logo___title'
  | 'navigation___logo___description'
  | 'navigation___logo___node_locale'
  | 'navigation___logo___fixed___base64'
  | 'navigation___logo___fixed___tracedSVG'
  | 'navigation___logo___fixed___aspectRatio'
  | 'navigation___logo___fixed___width'
  | 'navigation___logo___fixed___height'
  | 'navigation___logo___fixed___src'
  | 'navigation___logo___fixed___srcSet'
  | 'navigation___logo___fixed___srcWebp'
  | 'navigation___logo___fixed___srcSetWebp'
  | 'navigation___logo___resolutions___base64'
  | 'navigation___logo___resolutions___tracedSVG'
  | 'navigation___logo___resolutions___aspectRatio'
  | 'navigation___logo___resolutions___width'
  | 'navigation___logo___resolutions___height'
  | 'navigation___logo___resolutions___src'
  | 'navigation___logo___resolutions___srcSet'
  | 'navigation___logo___resolutions___srcWebp'
  | 'navigation___logo___resolutions___srcSetWebp'
  | 'navigation___logo___fluid___base64'
  | 'navigation___logo___fluid___tracedSVG'
  | 'navigation___logo___fluid___aspectRatio'
  | 'navigation___logo___fluid___src'
  | 'navigation___logo___fluid___srcSet'
  | 'navigation___logo___fluid___srcWebp'
  | 'navigation___logo___fluid___srcSetWebp'
  | 'navigation___logo___fluid___sizes'
  | 'navigation___logo___sizes___base64'
  | 'navigation___logo___sizes___tracedSVG'
  | 'navigation___logo___sizes___aspectRatio'
  | 'navigation___logo___sizes___src'
  | 'navigation___logo___sizes___srcSet'
  | 'navigation___logo___sizes___srcWebp'
  | 'navigation___logo___sizes___srcSetWebp'
  | 'navigation___logo___sizes___sizes'
  | 'navigation___logo___resize___base64'
  | 'navigation___logo___resize___tracedSVG'
  | 'navigation___logo___resize___src'
  | 'navigation___logo___resize___width'
  | 'navigation___logo___resize___height'
  | 'navigation___logo___resize___aspectRatio'
  | 'navigation___homePage___id'
  | 'navigation___homePage___parent___id'
  | 'navigation___homePage___parent___children'
  | 'navigation___homePage___children'
  | 'navigation___homePage___children___id'
  | 'navigation___homePage___children___children'
  | 'navigation___homePage___internal___content'
  | 'navigation___homePage___internal___contentDigest'
  | 'navigation___homePage___internal___description'
  | 'navigation___homePage___internal___fieldOwners'
  | 'navigation___homePage___internal___ignoreType'
  | 'navigation___homePage___internal___mediaType'
  | 'navigation___homePage___internal___owner'
  | 'navigation___homePage___internal___type'
  | 'navigation___homePage___name'
  | 'navigation___homePage___slug'
  | 'navigation___homePage___genericPage'
  | 'navigation___homePage___path'
  | 'navigation___homePage___pageSeo___id'
  | 'navigation___homePage___pageSeo___children'
  | 'navigation___homePage___pageSeo___name'
  | 'navigation___homePage___pageSeo___title'
  | 'navigation___homePage___pageSeo___description'
  | 'navigation___homePage___pageSeo___blog_post'
  | 'navigation___homePage___pageSeo___spaceId'
  | 'navigation___homePage___pageSeo___contentful_id'
  | 'navigation___homePage___pageSeo___createdAt'
  | 'navigation___homePage___pageSeo___updatedAt'
  | 'navigation___homePage___pageSeo___node_locale'
  | 'navigation___homePage___pageSeo___page'
  | 'navigation___homePage___navigation'
  | 'navigation___homePage___navigation___id'
  | 'navigation___homePage___navigation___children'
  | 'navigation___homePage___navigation___name'
  | 'navigation___homePage___navigation___slug'
  | 'navigation___homePage___navigation___sideNavigation'
  | 'navigation___homePage___navigation___spaceId'
  | 'navigation___homePage___navigation___contentful_id'
  | 'navigation___homePage___navigation___createdAt'
  | 'navigation___homePage___navigation___updatedAt'
  | 'navigation___homePage___navigation___node_locale'
  | 'navigation___homePage___spaceId'
  | 'navigation___homePage___contentful_id'
  | 'navigation___homePage___createdAt'
  | 'navigation___homePage___updatedAt'
  | 'navigation___homePage___sys___revision'
  | 'navigation___homePage___node_locale'
  | 'navigation___sideNavigation'
  | 'navigation___sideNavigation___id'
  | 'navigation___sideNavigation___parent___id'
  | 'navigation___sideNavigation___parent___children'
  | 'navigation___sideNavigation___children'
  | 'navigation___sideNavigation___children___id'
  | 'navigation___sideNavigation___children___children'
  | 'navigation___sideNavigation___internal___content'
  | 'navigation___sideNavigation___internal___contentDigest'
  | 'navigation___sideNavigation___internal___description'
  | 'navigation___sideNavigation___internal___fieldOwners'
  | 'navigation___sideNavigation___internal___ignoreType'
  | 'navigation___sideNavigation___internal___mediaType'
  | 'navigation___sideNavigation___internal___owner'
  | 'navigation___sideNavigation___internal___type'
  | 'navigation___sideNavigation___name'
  | 'navigation___sideNavigation___slug'
  | 'navigation___sideNavigation___genericPage'
  | 'navigation___sideNavigation___path'
  | 'navigation___sideNavigation___pageSeo___id'
  | 'navigation___sideNavigation___pageSeo___children'
  | 'navigation___sideNavigation___pageSeo___name'
  | 'navigation___sideNavigation___pageSeo___title'
  | 'navigation___sideNavigation___pageSeo___description'
  | 'navigation___sideNavigation___pageSeo___blog_post'
  | 'navigation___sideNavigation___pageSeo___spaceId'
  | 'navigation___sideNavigation___pageSeo___contentful_id'
  | 'navigation___sideNavigation___pageSeo___createdAt'
  | 'navigation___sideNavigation___pageSeo___updatedAt'
  | 'navigation___sideNavigation___pageSeo___node_locale'
  | 'navigation___sideNavigation___pageSeo___page'
  | 'navigation___sideNavigation___navigation'
  | 'navigation___sideNavigation___navigation___id'
  | 'navigation___sideNavigation___navigation___children'
  | 'navigation___sideNavigation___navigation___name'
  | 'navigation___sideNavigation___navigation___slug'
  | 'navigation___sideNavigation___navigation___sideNavigation'
  | 'navigation___sideNavigation___navigation___spaceId'
  | 'navigation___sideNavigation___navigation___contentful_id'
  | 'navigation___sideNavigation___navigation___createdAt'
  | 'navigation___sideNavigation___navigation___updatedAt'
  | 'navigation___sideNavigation___navigation___node_locale'
  | 'navigation___sideNavigation___spaceId'
  | 'navigation___sideNavigation___contentful_id'
  | 'navigation___sideNavigation___createdAt'
  | 'navigation___sideNavigation___updatedAt'
  | 'navigation___sideNavigation___sys___revision'
  | 'navigation___sideNavigation___node_locale'
  | 'navigation___spaceId'
  | 'navigation___contentful_id'
  | 'navigation___createdAt'
  | 'navigation___updatedAt'
  | 'navigation___sys___revision'
  | 'navigation___node_locale'
  | 'spaceId'
  | 'contentful_id'
  | 'createdAt'
  | 'updatedAt'
  | 'sys___revision'
  | 'sys___contentType___sys___type'
  | 'sys___contentType___sys___linkType'
  | 'sys___contentType___sys___id'
  | 'sys___contentType___sys___contentful_id'
  | 'node_locale';

export type ContentfulPageFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  name?: Maybe<StringQueryOperatorInput>;
  slug?: Maybe<StringQueryOperatorInput>;
  genericPage?: Maybe<BooleanQueryOperatorInput>;
  path?: Maybe<StringQueryOperatorInput>;
  pageSeo?: Maybe<ContentfulSeoFilterInput>;
  navigation?: Maybe<ContentfulNavigationFilterListInput>;
  spaceId?: Maybe<StringQueryOperatorInput>;
  contentful_id?: Maybe<StringQueryOperatorInput>;
  createdAt?: Maybe<DateQueryOperatorInput>;
  updatedAt?: Maybe<DateQueryOperatorInput>;
  sys?: Maybe<ContentfulPageSysFilterInput>;
  node_locale?: Maybe<StringQueryOperatorInput>;
};

export type ContentfulPageFilterListInput = {
  elemMatch?: Maybe<ContentfulPageFilterInput>;
};

export type ContentfulPageGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulPageEdge>;
  nodes: Array<ContentfulPage>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type ContentfulPageSortInput = {
  fields?: Maybe<Array<Maybe<ContentfulPageFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type ContentfulPageSys = {
  revision?: Maybe<Scalars['Int']>;
  contentType?: Maybe<ContentfulPageSysContentType>;
};

export type ContentfulPageSysContentType = {
  sys?: Maybe<ContentfulPageSysContentTypeSys>;
};

export type ContentfulPageSysContentTypeFilterInput = {
  sys?: Maybe<ContentfulPageSysContentTypeSysFilterInput>;
};

export type ContentfulPageSysContentTypeSys = {
  type?: Maybe<Scalars['String']>;
  linkType?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  contentful_id?: Maybe<Scalars['String']>;
};

export type ContentfulPageSysContentTypeSysFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  linkType?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  contentful_id?: Maybe<StringQueryOperatorInput>;
};

export type ContentfulPageSysFilterInput = {
  revision?: Maybe<IntQueryOperatorInput>;
  contentType?: Maybe<ContentfulPageSysContentTypeFilterInput>;
};

export type ContentfulResize = {
  base64?: Maybe<Scalars['String']>;
  tracedSVG?: Maybe<Scalars['String']>;
  src?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  aspectRatio?: Maybe<Scalars['Float']>;
};

export type ContentfulResizeFilterInput = {
  base64?: Maybe<StringQueryOperatorInput>;
  tracedSVG?: Maybe<StringQueryOperatorInput>;
  src?: Maybe<StringQueryOperatorInput>;
  width?: Maybe<IntQueryOperatorInput>;
  height?: Maybe<IntQueryOperatorInput>;
  aspectRatio?: Maybe<FloatQueryOperatorInput>;
};

export type ContentfulResolutions = {
  base64?: Maybe<Scalars['String']>;
  tracedSVG?: Maybe<Scalars['String']>;
  aspectRatio?: Maybe<Scalars['Float']>;
  width: Scalars['Float'];
  height: Scalars['Float'];
  src: Scalars['String'];
  srcSet: Scalars['String'];
  srcWebp?: Maybe<Scalars['String']>;
  srcSetWebp?: Maybe<Scalars['String']>;
};

export type ContentfulResolutionsFilterInput = {
  base64?: Maybe<StringQueryOperatorInput>;
  tracedSVG?: Maybe<StringQueryOperatorInput>;
  aspectRatio?: Maybe<FloatQueryOperatorInput>;
  width?: Maybe<FloatQueryOperatorInput>;
  height?: Maybe<FloatQueryOperatorInput>;
  src?: Maybe<StringQueryOperatorInput>;
  srcSet?: Maybe<StringQueryOperatorInput>;
  srcWebp?: Maybe<StringQueryOperatorInput>;
  srcSetWebp?: Maybe<StringQueryOperatorInput>;
};

export type ContentfulSeo = Node & {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  name?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  image?: Maybe<ContentfulAsset>;
  blog_post?: Maybe<Array<Maybe<ContentfulBlogPost>>>;
  spaceId?: Maybe<Scalars['String']>;
  contentful_id?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['Date']>;
  updatedAt?: Maybe<Scalars['Date']>;
  sys?: Maybe<ContentfulSeoSys>;
  node_locale?: Maybe<Scalars['String']>;
  page?: Maybe<Array<Maybe<ContentfulPage>>>;
};


export type ContentfulSeoCreatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type ContentfulSeoUpdatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type ContentfulSeoConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulSeoEdge>;
  nodes: Array<ContentfulSeo>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<ContentfulSeoGroupConnection>;
};


export type ContentfulSeoConnectionDistinctArgs = {
  field: ContentfulSeoFieldsEnum;
};


export type ContentfulSeoConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: ContentfulSeoFieldsEnum;
};

export type ContentfulSeoEdge = {
  next?: Maybe<ContentfulSeo>;
  node: ContentfulSeo;
  previous?: Maybe<ContentfulSeo>;
};

export type ContentfulSeoFieldsEnum = 
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'name'
  | 'title'
  | 'description'
  | 'image___id'
  | 'image___parent___id'
  | 'image___parent___parent___id'
  | 'image___parent___parent___children'
  | 'image___parent___children'
  | 'image___parent___children___id'
  | 'image___parent___children___children'
  | 'image___parent___internal___content'
  | 'image___parent___internal___contentDigest'
  | 'image___parent___internal___description'
  | 'image___parent___internal___fieldOwners'
  | 'image___parent___internal___ignoreType'
  | 'image___parent___internal___mediaType'
  | 'image___parent___internal___owner'
  | 'image___parent___internal___type'
  | 'image___children'
  | 'image___children___id'
  | 'image___children___parent___id'
  | 'image___children___parent___children'
  | 'image___children___children'
  | 'image___children___children___id'
  | 'image___children___children___children'
  | 'image___children___internal___content'
  | 'image___children___internal___contentDigest'
  | 'image___children___internal___description'
  | 'image___children___internal___fieldOwners'
  | 'image___children___internal___ignoreType'
  | 'image___children___internal___mediaType'
  | 'image___children___internal___owner'
  | 'image___children___internal___type'
  | 'image___internal___content'
  | 'image___internal___contentDigest'
  | 'image___internal___description'
  | 'image___internal___fieldOwners'
  | 'image___internal___ignoreType'
  | 'image___internal___mediaType'
  | 'image___internal___owner'
  | 'image___internal___type'
  | 'image___contentful_id'
  | 'image___file___url'
  | 'image___file___details___size'
  | 'image___file___fileName'
  | 'image___file___contentType'
  | 'image___title'
  | 'image___description'
  | 'image___node_locale'
  | 'image___fixed___base64'
  | 'image___fixed___tracedSVG'
  | 'image___fixed___aspectRatio'
  | 'image___fixed___width'
  | 'image___fixed___height'
  | 'image___fixed___src'
  | 'image___fixed___srcSet'
  | 'image___fixed___srcWebp'
  | 'image___fixed___srcSetWebp'
  | 'image___resolutions___base64'
  | 'image___resolutions___tracedSVG'
  | 'image___resolutions___aspectRatio'
  | 'image___resolutions___width'
  | 'image___resolutions___height'
  | 'image___resolutions___src'
  | 'image___resolutions___srcSet'
  | 'image___resolutions___srcWebp'
  | 'image___resolutions___srcSetWebp'
  | 'image___fluid___base64'
  | 'image___fluid___tracedSVG'
  | 'image___fluid___aspectRatio'
  | 'image___fluid___src'
  | 'image___fluid___srcSet'
  | 'image___fluid___srcWebp'
  | 'image___fluid___srcSetWebp'
  | 'image___fluid___sizes'
  | 'image___sizes___base64'
  | 'image___sizes___tracedSVG'
  | 'image___sizes___aspectRatio'
  | 'image___sizes___src'
  | 'image___sizes___srcSet'
  | 'image___sizes___srcWebp'
  | 'image___sizes___srcSetWebp'
  | 'image___sizes___sizes'
  | 'image___resize___base64'
  | 'image___resize___tracedSVG'
  | 'image___resize___src'
  | 'image___resize___width'
  | 'image___resize___height'
  | 'image___resize___aspectRatio'
  | 'blog_post'
  | 'blog_post___id'
  | 'blog_post___parent___id'
  | 'blog_post___parent___parent___id'
  | 'blog_post___parent___parent___children'
  | 'blog_post___parent___children'
  | 'blog_post___parent___children___id'
  | 'blog_post___parent___children___children'
  | 'blog_post___parent___internal___content'
  | 'blog_post___parent___internal___contentDigest'
  | 'blog_post___parent___internal___description'
  | 'blog_post___parent___internal___fieldOwners'
  | 'blog_post___parent___internal___ignoreType'
  | 'blog_post___parent___internal___mediaType'
  | 'blog_post___parent___internal___owner'
  | 'blog_post___parent___internal___type'
  | 'blog_post___children'
  | 'blog_post___children___id'
  | 'blog_post___children___parent___id'
  | 'blog_post___children___parent___children'
  | 'blog_post___children___children'
  | 'blog_post___children___children___id'
  | 'blog_post___children___children___children'
  | 'blog_post___children___internal___content'
  | 'blog_post___children___internal___contentDigest'
  | 'blog_post___children___internal___description'
  | 'blog_post___children___internal___fieldOwners'
  | 'blog_post___children___internal___ignoreType'
  | 'blog_post___children___internal___mediaType'
  | 'blog_post___children___internal___owner'
  | 'blog_post___children___internal___type'
  | 'blog_post___internal___content'
  | 'blog_post___internal___contentDigest'
  | 'blog_post___internal___description'
  | 'blog_post___internal___fieldOwners'
  | 'blog_post___internal___ignoreType'
  | 'blog_post___internal___mediaType'
  | 'blog_post___internal___owner'
  | 'blog_post___internal___type'
  | 'blog_post___title'
  | 'blog_post___slug'
  | 'blog_post___description'
  | 'blog_post___image___id'
  | 'blog_post___image___parent___id'
  | 'blog_post___image___parent___children'
  | 'blog_post___image___children'
  | 'blog_post___image___children___id'
  | 'blog_post___image___children___children'
  | 'blog_post___image___internal___content'
  | 'blog_post___image___internal___contentDigest'
  | 'blog_post___image___internal___description'
  | 'blog_post___image___internal___fieldOwners'
  | 'blog_post___image___internal___ignoreType'
  | 'blog_post___image___internal___mediaType'
  | 'blog_post___image___internal___owner'
  | 'blog_post___image___internal___type'
  | 'blog_post___image___contentful_id'
  | 'blog_post___image___file___url'
  | 'blog_post___image___file___fileName'
  | 'blog_post___image___file___contentType'
  | 'blog_post___image___title'
  | 'blog_post___image___description'
  | 'blog_post___image___node_locale'
  | 'blog_post___image___fixed___base64'
  | 'blog_post___image___fixed___tracedSVG'
  | 'blog_post___image___fixed___aspectRatio'
  | 'blog_post___image___fixed___width'
  | 'blog_post___image___fixed___height'
  | 'blog_post___image___fixed___src'
  | 'blog_post___image___fixed___srcSet'
  | 'blog_post___image___fixed___srcWebp'
  | 'blog_post___image___fixed___srcSetWebp'
  | 'blog_post___image___resolutions___base64'
  | 'blog_post___image___resolutions___tracedSVG'
  | 'blog_post___image___resolutions___aspectRatio'
  | 'blog_post___image___resolutions___width'
  | 'blog_post___image___resolutions___height'
  | 'blog_post___image___resolutions___src'
  | 'blog_post___image___resolutions___srcSet'
  | 'blog_post___image___resolutions___srcWebp'
  | 'blog_post___image___resolutions___srcSetWebp'
  | 'blog_post___image___fluid___base64'
  | 'blog_post___image___fluid___tracedSVG'
  | 'blog_post___image___fluid___aspectRatio'
  | 'blog_post___image___fluid___src'
  | 'blog_post___image___fluid___srcSet'
  | 'blog_post___image___fluid___srcWebp'
  | 'blog_post___image___fluid___srcSetWebp'
  | 'blog_post___image___fluid___sizes'
  | 'blog_post___image___sizes___base64'
  | 'blog_post___image___sizes___tracedSVG'
  | 'blog_post___image___sizes___aspectRatio'
  | 'blog_post___image___sizes___src'
  | 'blog_post___image___sizes___srcSet'
  | 'blog_post___image___sizes___srcWebp'
  | 'blog_post___image___sizes___srcSetWebp'
  | 'blog_post___image___sizes___sizes'
  | 'blog_post___image___resize___base64'
  | 'blog_post___image___resize___tracedSVG'
  | 'blog_post___image___resize___src'
  | 'blog_post___image___resize___width'
  | 'blog_post___image___resize___height'
  | 'blog_post___image___resize___aspectRatio'
  | 'blog_post___seo___id'
  | 'blog_post___seo___parent___id'
  | 'blog_post___seo___parent___children'
  | 'blog_post___seo___children'
  | 'blog_post___seo___children___id'
  | 'blog_post___seo___children___children'
  | 'blog_post___seo___internal___content'
  | 'blog_post___seo___internal___contentDigest'
  | 'blog_post___seo___internal___description'
  | 'blog_post___seo___internal___fieldOwners'
  | 'blog_post___seo___internal___ignoreType'
  | 'blog_post___seo___internal___mediaType'
  | 'blog_post___seo___internal___owner'
  | 'blog_post___seo___internal___type'
  | 'blog_post___seo___name'
  | 'blog_post___seo___title'
  | 'blog_post___seo___description'
  | 'blog_post___seo___image___id'
  | 'blog_post___seo___image___children'
  | 'blog_post___seo___image___contentful_id'
  | 'blog_post___seo___image___title'
  | 'blog_post___seo___image___description'
  | 'blog_post___seo___image___node_locale'
  | 'blog_post___seo___blog_post'
  | 'blog_post___seo___blog_post___id'
  | 'blog_post___seo___blog_post___children'
  | 'blog_post___seo___blog_post___title'
  | 'blog_post___seo___blog_post___slug'
  | 'blog_post___seo___blog_post___description'
  | 'blog_post___seo___blog_post___spaceId'
  | 'blog_post___seo___blog_post___contentful_id'
  | 'blog_post___seo___blog_post___createdAt'
  | 'blog_post___seo___blog_post___updatedAt'
  | 'blog_post___seo___blog_post___node_locale'
  | 'blog_post___seo___spaceId'
  | 'blog_post___seo___contentful_id'
  | 'blog_post___seo___createdAt'
  | 'blog_post___seo___updatedAt'
  | 'blog_post___seo___sys___revision'
  | 'blog_post___seo___node_locale'
  | 'blog_post___seo___page'
  | 'blog_post___seo___page___id'
  | 'blog_post___seo___page___children'
  | 'blog_post___seo___page___name'
  | 'blog_post___seo___page___slug'
  | 'blog_post___seo___page___genericPage'
  | 'blog_post___seo___page___path'
  | 'blog_post___seo___page___navigation'
  | 'blog_post___seo___page___spaceId'
  | 'blog_post___seo___page___contentful_id'
  | 'blog_post___seo___page___createdAt'
  | 'blog_post___seo___page___updatedAt'
  | 'blog_post___seo___page___node_locale'
  | 'blog_post___body___id'
  | 'blog_post___body___parent___id'
  | 'blog_post___body___parent___children'
  | 'blog_post___body___children'
  | 'blog_post___body___children___id'
  | 'blog_post___body___children___children'
  | 'blog_post___body___internal___content'
  | 'blog_post___body___internal___contentDigest'
  | 'blog_post___body___internal___description'
  | 'blog_post___body___internal___fieldOwners'
  | 'blog_post___body___internal___ignoreType'
  | 'blog_post___body___internal___mediaType'
  | 'blog_post___body___internal___owner'
  | 'blog_post___body___internal___type'
  | 'blog_post___body___content'
  | 'blog_post___body___content___content'
  | 'blog_post___body___content___nodeType'
  | 'blog_post___body___nodeType'
  | 'blog_post___body___body'
  | 'blog_post___body___json'
  | 'blog_post___spaceId'
  | 'blog_post___contentful_id'
  | 'blog_post___createdAt'
  | 'blog_post___updatedAt'
  | 'blog_post___sys___revision'
  | 'blog_post___node_locale'
  | 'blog_post___childContentfulBlogPostBodyRichTextNode___id'
  | 'blog_post___childContentfulBlogPostBodyRichTextNode___parent___id'
  | 'blog_post___childContentfulBlogPostBodyRichTextNode___parent___children'
  | 'blog_post___childContentfulBlogPostBodyRichTextNode___children'
  | 'blog_post___childContentfulBlogPostBodyRichTextNode___children___id'
  | 'blog_post___childContentfulBlogPostBodyRichTextNode___children___children'
  | 'blog_post___childContentfulBlogPostBodyRichTextNode___internal___content'
  | 'blog_post___childContentfulBlogPostBodyRichTextNode___internal___contentDigest'
  | 'blog_post___childContentfulBlogPostBodyRichTextNode___internal___description'
  | 'blog_post___childContentfulBlogPostBodyRichTextNode___internal___fieldOwners'
  | 'blog_post___childContentfulBlogPostBodyRichTextNode___internal___ignoreType'
  | 'blog_post___childContentfulBlogPostBodyRichTextNode___internal___mediaType'
  | 'blog_post___childContentfulBlogPostBodyRichTextNode___internal___owner'
  | 'blog_post___childContentfulBlogPostBodyRichTextNode___internal___type'
  | 'blog_post___childContentfulBlogPostBodyRichTextNode___content'
  | 'blog_post___childContentfulBlogPostBodyRichTextNode___content___content'
  | 'blog_post___childContentfulBlogPostBodyRichTextNode___content___nodeType'
  | 'blog_post___childContentfulBlogPostBodyRichTextNode___nodeType'
  | 'blog_post___childContentfulBlogPostBodyRichTextNode___body'
  | 'blog_post___childContentfulBlogPostBodyRichTextNode___json'
  | 'spaceId'
  | 'contentful_id'
  | 'createdAt'
  | 'updatedAt'
  | 'sys___revision'
  | 'sys___contentType___sys___type'
  | 'sys___contentType___sys___linkType'
  | 'sys___contentType___sys___id'
  | 'sys___contentType___sys___contentful_id'
  | 'node_locale'
  | 'page'
  | 'page___id'
  | 'page___parent___id'
  | 'page___parent___parent___id'
  | 'page___parent___parent___children'
  | 'page___parent___children'
  | 'page___parent___children___id'
  | 'page___parent___children___children'
  | 'page___parent___internal___content'
  | 'page___parent___internal___contentDigest'
  | 'page___parent___internal___description'
  | 'page___parent___internal___fieldOwners'
  | 'page___parent___internal___ignoreType'
  | 'page___parent___internal___mediaType'
  | 'page___parent___internal___owner'
  | 'page___parent___internal___type'
  | 'page___children'
  | 'page___children___id'
  | 'page___children___parent___id'
  | 'page___children___parent___children'
  | 'page___children___children'
  | 'page___children___children___id'
  | 'page___children___children___children'
  | 'page___children___internal___content'
  | 'page___children___internal___contentDigest'
  | 'page___children___internal___description'
  | 'page___children___internal___fieldOwners'
  | 'page___children___internal___ignoreType'
  | 'page___children___internal___mediaType'
  | 'page___children___internal___owner'
  | 'page___children___internal___type'
  | 'page___internal___content'
  | 'page___internal___contentDigest'
  | 'page___internal___description'
  | 'page___internal___fieldOwners'
  | 'page___internal___ignoreType'
  | 'page___internal___mediaType'
  | 'page___internal___owner'
  | 'page___internal___type'
  | 'page___name'
  | 'page___slug'
  | 'page___genericPage'
  | 'page___path'
  | 'page___pageSeo___id'
  | 'page___pageSeo___parent___id'
  | 'page___pageSeo___parent___children'
  | 'page___pageSeo___children'
  | 'page___pageSeo___children___id'
  | 'page___pageSeo___children___children'
  | 'page___pageSeo___internal___content'
  | 'page___pageSeo___internal___contentDigest'
  | 'page___pageSeo___internal___description'
  | 'page___pageSeo___internal___fieldOwners'
  | 'page___pageSeo___internal___ignoreType'
  | 'page___pageSeo___internal___mediaType'
  | 'page___pageSeo___internal___owner'
  | 'page___pageSeo___internal___type'
  | 'page___pageSeo___name'
  | 'page___pageSeo___title'
  | 'page___pageSeo___description'
  | 'page___pageSeo___image___id'
  | 'page___pageSeo___image___children'
  | 'page___pageSeo___image___contentful_id'
  | 'page___pageSeo___image___title'
  | 'page___pageSeo___image___description'
  | 'page___pageSeo___image___node_locale'
  | 'page___pageSeo___blog_post'
  | 'page___pageSeo___blog_post___id'
  | 'page___pageSeo___blog_post___children'
  | 'page___pageSeo___blog_post___title'
  | 'page___pageSeo___blog_post___slug'
  | 'page___pageSeo___blog_post___description'
  | 'page___pageSeo___blog_post___spaceId'
  | 'page___pageSeo___blog_post___contentful_id'
  | 'page___pageSeo___blog_post___createdAt'
  | 'page___pageSeo___blog_post___updatedAt'
  | 'page___pageSeo___blog_post___node_locale'
  | 'page___pageSeo___spaceId'
  | 'page___pageSeo___contentful_id'
  | 'page___pageSeo___createdAt'
  | 'page___pageSeo___updatedAt'
  | 'page___pageSeo___sys___revision'
  | 'page___pageSeo___node_locale'
  | 'page___pageSeo___page'
  | 'page___pageSeo___page___id'
  | 'page___pageSeo___page___children'
  | 'page___pageSeo___page___name'
  | 'page___pageSeo___page___slug'
  | 'page___pageSeo___page___genericPage'
  | 'page___pageSeo___page___path'
  | 'page___pageSeo___page___navigation'
  | 'page___pageSeo___page___spaceId'
  | 'page___pageSeo___page___contentful_id'
  | 'page___pageSeo___page___createdAt'
  | 'page___pageSeo___page___updatedAt'
  | 'page___pageSeo___page___node_locale'
  | 'page___navigation'
  | 'page___navigation___id'
  | 'page___navigation___parent___id'
  | 'page___navigation___parent___children'
  | 'page___navigation___children'
  | 'page___navigation___children___id'
  | 'page___navigation___children___children'
  | 'page___navigation___internal___content'
  | 'page___navigation___internal___contentDigest'
  | 'page___navigation___internal___description'
  | 'page___navigation___internal___fieldOwners'
  | 'page___navigation___internal___ignoreType'
  | 'page___navigation___internal___mediaType'
  | 'page___navigation___internal___owner'
  | 'page___navigation___internal___type'
  | 'page___navigation___name'
  | 'page___navigation___slug'
  | 'page___navigation___logo___id'
  | 'page___navigation___logo___children'
  | 'page___navigation___logo___contentful_id'
  | 'page___navigation___logo___title'
  | 'page___navigation___logo___description'
  | 'page___navigation___logo___node_locale'
  | 'page___navigation___homePage___id'
  | 'page___navigation___homePage___children'
  | 'page___navigation___homePage___name'
  | 'page___navigation___homePage___slug'
  | 'page___navigation___homePage___genericPage'
  | 'page___navigation___homePage___path'
  | 'page___navigation___homePage___navigation'
  | 'page___navigation___homePage___spaceId'
  | 'page___navigation___homePage___contentful_id'
  | 'page___navigation___homePage___createdAt'
  | 'page___navigation___homePage___updatedAt'
  | 'page___navigation___homePage___node_locale'
  | 'page___navigation___sideNavigation'
  | 'page___navigation___sideNavigation___id'
  | 'page___navigation___sideNavigation___children'
  | 'page___navigation___sideNavigation___name'
  | 'page___navigation___sideNavigation___slug'
  | 'page___navigation___sideNavigation___genericPage'
  | 'page___navigation___sideNavigation___path'
  | 'page___navigation___sideNavigation___navigation'
  | 'page___navigation___sideNavigation___spaceId'
  | 'page___navigation___sideNavigation___contentful_id'
  | 'page___navigation___sideNavigation___createdAt'
  | 'page___navigation___sideNavigation___updatedAt'
  | 'page___navigation___sideNavigation___node_locale'
  | 'page___navigation___spaceId'
  | 'page___navigation___contentful_id'
  | 'page___navigation___createdAt'
  | 'page___navigation___updatedAt'
  | 'page___navigation___sys___revision'
  | 'page___navigation___node_locale'
  | 'page___spaceId'
  | 'page___contentful_id'
  | 'page___createdAt'
  | 'page___updatedAt'
  | 'page___sys___revision'
  | 'page___node_locale';

export type ContentfulSeoFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  name?: Maybe<StringQueryOperatorInput>;
  title?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  image?: Maybe<ContentfulAssetFilterInput>;
  blog_post?: Maybe<ContentfulBlogPostFilterListInput>;
  spaceId?: Maybe<StringQueryOperatorInput>;
  contentful_id?: Maybe<StringQueryOperatorInput>;
  createdAt?: Maybe<DateQueryOperatorInput>;
  updatedAt?: Maybe<DateQueryOperatorInput>;
  sys?: Maybe<ContentfulSeoSysFilterInput>;
  node_locale?: Maybe<StringQueryOperatorInput>;
  page?: Maybe<ContentfulPageFilterListInput>;
};

export type ContentfulSeoGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulSeoEdge>;
  nodes: Array<ContentfulSeo>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type ContentfulSeoSortInput = {
  fields?: Maybe<Array<Maybe<ContentfulSeoFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type ContentfulSeoSys = {
  revision?: Maybe<Scalars['Int']>;
  contentType?: Maybe<ContentfulSeoSysContentType>;
};

export type ContentfulSeoSysContentType = {
  sys?: Maybe<ContentfulSeoSysContentTypeSys>;
};

export type ContentfulSeoSysContentTypeFilterInput = {
  sys?: Maybe<ContentfulSeoSysContentTypeSysFilterInput>;
};

export type ContentfulSeoSysContentTypeSys = {
  type?: Maybe<Scalars['String']>;
  linkType?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  contentful_id?: Maybe<Scalars['String']>;
};

export type ContentfulSeoSysContentTypeSysFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  linkType?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  contentful_id?: Maybe<StringQueryOperatorInput>;
};

export type ContentfulSeoSysFilterInput = {
  revision?: Maybe<IntQueryOperatorInput>;
  contentType?: Maybe<ContentfulSeoSysContentTypeFilterInput>;
};

export type ContentfulSizes = {
  base64?: Maybe<Scalars['String']>;
  tracedSVG?: Maybe<Scalars['String']>;
  aspectRatio: Scalars['Float'];
  src: Scalars['String'];
  srcSet: Scalars['String'];
  srcWebp?: Maybe<Scalars['String']>;
  srcSetWebp?: Maybe<Scalars['String']>;
  sizes: Scalars['String'];
};

export type ContentfulSizesFilterInput = {
  base64?: Maybe<StringQueryOperatorInput>;
  tracedSVG?: Maybe<StringQueryOperatorInput>;
  aspectRatio?: Maybe<FloatQueryOperatorInput>;
  src?: Maybe<StringQueryOperatorInput>;
  srcSet?: Maybe<StringQueryOperatorInput>;
  srcWebp?: Maybe<StringQueryOperatorInput>;
  srcSetWebp?: Maybe<StringQueryOperatorInput>;
  sizes?: Maybe<StringQueryOperatorInput>;
};


export type DateQueryOperatorInput = {
  eq?: Maybe<Scalars['Date']>;
  ne?: Maybe<Scalars['Date']>;
  gt?: Maybe<Scalars['Date']>;
  gte?: Maybe<Scalars['Date']>;
  lt?: Maybe<Scalars['Date']>;
  lte?: Maybe<Scalars['Date']>;
  in?: Maybe<Array<Maybe<Scalars['Date']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Date']>>>;
};

export type Directory = Node & {
  sourceInstanceName: Scalars['String'];
  absolutePath: Scalars['String'];
  relativePath: Scalars['String'];
  extension: Scalars['String'];
  size: Scalars['Int'];
  prettySize: Scalars['String'];
  modifiedTime: Scalars['Date'];
  accessTime: Scalars['Date'];
  changeTime: Scalars['Date'];
  birthTime: Scalars['Date'];
  root: Scalars['String'];
  dir: Scalars['String'];
  base: Scalars['String'];
  ext: Scalars['String'];
  name: Scalars['String'];
  relativeDirectory: Scalars['String'];
  dev: Scalars['Int'];
  mode: Scalars['Int'];
  nlink: Scalars['Int'];
  uid: Scalars['Int'];
  gid: Scalars['Int'];
  rdev: Scalars['Int'];
  ino: Scalars['Float'];
  atimeMs: Scalars['Float'];
  mtimeMs: Scalars['Float'];
  ctimeMs: Scalars['Float'];
  atime: Scalars['Date'];
  mtime: Scalars['Date'];
  ctime: Scalars['Date'];
  /** @deprecated Use `birthTime` instead */
  birthtime?: Maybe<Scalars['Date']>;
  /** @deprecated Use `birthTime` instead */
  birthtimeMs?: Maybe<Scalars['Float']>;
  blksize?: Maybe<Scalars['Int']>;
  blocks?: Maybe<Scalars['Int']>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type DirectoryModifiedTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type DirectoryAccessTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type DirectoryChangeTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type DirectoryBirthTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type DirectoryAtimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type DirectoryMtimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type DirectoryCtimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type DirectoryConnection = {
  totalCount: Scalars['Int'];
  edges: Array<DirectoryEdge>;
  nodes: Array<Directory>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<DirectoryGroupConnection>;
};


export type DirectoryConnectionDistinctArgs = {
  field: DirectoryFieldsEnum;
};


export type DirectoryConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: DirectoryFieldsEnum;
};

export type DirectoryEdge = {
  next?: Maybe<Directory>;
  node: Directory;
  previous?: Maybe<Directory>;
};

export type DirectoryFieldsEnum = 
  | 'sourceInstanceName'
  | 'absolutePath'
  | 'relativePath'
  | 'extension'
  | 'size'
  | 'prettySize'
  | 'modifiedTime'
  | 'accessTime'
  | 'changeTime'
  | 'birthTime'
  | 'root'
  | 'dir'
  | 'base'
  | 'ext'
  | 'name'
  | 'relativeDirectory'
  | 'dev'
  | 'mode'
  | 'nlink'
  | 'uid'
  | 'gid'
  | 'rdev'
  | 'ino'
  | 'atimeMs'
  | 'mtimeMs'
  | 'ctimeMs'
  | 'atime'
  | 'mtime'
  | 'ctime'
  | 'birthtime'
  | 'birthtimeMs'
  | 'blksize'
  | 'blocks'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type DirectoryFilterInput = {
  sourceInstanceName?: Maybe<StringQueryOperatorInput>;
  absolutePath?: Maybe<StringQueryOperatorInput>;
  relativePath?: Maybe<StringQueryOperatorInput>;
  extension?: Maybe<StringQueryOperatorInput>;
  size?: Maybe<IntQueryOperatorInput>;
  prettySize?: Maybe<StringQueryOperatorInput>;
  modifiedTime?: Maybe<DateQueryOperatorInput>;
  accessTime?: Maybe<DateQueryOperatorInput>;
  changeTime?: Maybe<DateQueryOperatorInput>;
  birthTime?: Maybe<DateQueryOperatorInput>;
  root?: Maybe<StringQueryOperatorInput>;
  dir?: Maybe<StringQueryOperatorInput>;
  base?: Maybe<StringQueryOperatorInput>;
  ext?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  relativeDirectory?: Maybe<StringQueryOperatorInput>;
  dev?: Maybe<IntQueryOperatorInput>;
  mode?: Maybe<IntQueryOperatorInput>;
  nlink?: Maybe<IntQueryOperatorInput>;
  uid?: Maybe<IntQueryOperatorInput>;
  gid?: Maybe<IntQueryOperatorInput>;
  rdev?: Maybe<IntQueryOperatorInput>;
  ino?: Maybe<FloatQueryOperatorInput>;
  atimeMs?: Maybe<FloatQueryOperatorInput>;
  mtimeMs?: Maybe<FloatQueryOperatorInput>;
  ctimeMs?: Maybe<FloatQueryOperatorInput>;
  atime?: Maybe<DateQueryOperatorInput>;
  mtime?: Maybe<DateQueryOperatorInput>;
  ctime?: Maybe<DateQueryOperatorInput>;
  birthtime?: Maybe<DateQueryOperatorInput>;
  birthtimeMs?: Maybe<FloatQueryOperatorInput>;
  blksize?: Maybe<IntQueryOperatorInput>;
  blocks?: Maybe<IntQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type DirectoryGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<DirectoryEdge>;
  nodes: Array<Directory>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type DirectorySortInput = {
  fields?: Maybe<Array<Maybe<DirectoryFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type DuotoneGradient = {
  highlight: Scalars['String'];
  shadow: Scalars['String'];
  opacity?: Maybe<Scalars['Int']>;
};

export type File = Node & {
  sourceInstanceName: Scalars['String'];
  absolutePath: Scalars['String'];
  relativePath: Scalars['String'];
  extension: Scalars['String'];
  size: Scalars['Int'];
  prettySize: Scalars['String'];
  modifiedTime: Scalars['Date'];
  accessTime: Scalars['Date'];
  changeTime: Scalars['Date'];
  birthTime: Scalars['Date'];
  root: Scalars['String'];
  dir: Scalars['String'];
  base: Scalars['String'];
  ext: Scalars['String'];
  name: Scalars['String'];
  relativeDirectory: Scalars['String'];
  dev: Scalars['Int'];
  mode: Scalars['Int'];
  nlink: Scalars['Int'];
  uid: Scalars['Int'];
  gid: Scalars['Int'];
  rdev: Scalars['Int'];
  ino: Scalars['Float'];
  atimeMs: Scalars['Float'];
  mtimeMs: Scalars['Float'];
  ctimeMs: Scalars['Float'];
  atime: Scalars['Date'];
  mtime: Scalars['Date'];
  ctime: Scalars['Date'];
  /** @deprecated Use `birthTime` instead */
  birthtime?: Maybe<Scalars['Date']>;
  /** @deprecated Use `birthTime` instead */
  birthtimeMs?: Maybe<Scalars['Float']>;
  blksize?: Maybe<Scalars['Int']>;
  blocks?: Maybe<Scalars['Int']>;
  /** Copy file to static directory and return public url to it */
  publicURL?: Maybe<Scalars['String']>;
  childImageSharp?: Maybe<ImageSharp>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type FileModifiedTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type FileAccessTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type FileChangeTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type FileBirthTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type FileAtimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type FileMtimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type FileCtimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type FileConnection = {
  totalCount: Scalars['Int'];
  edges: Array<FileEdge>;
  nodes: Array<File>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<FileGroupConnection>;
};


export type FileConnectionDistinctArgs = {
  field: FileFieldsEnum;
};


export type FileConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: FileFieldsEnum;
};

export type FileEdge = {
  next?: Maybe<File>;
  node: File;
  previous?: Maybe<File>;
};

export type FileFieldsEnum = 
  | 'sourceInstanceName'
  | 'absolutePath'
  | 'relativePath'
  | 'extension'
  | 'size'
  | 'prettySize'
  | 'modifiedTime'
  | 'accessTime'
  | 'changeTime'
  | 'birthTime'
  | 'root'
  | 'dir'
  | 'base'
  | 'ext'
  | 'name'
  | 'relativeDirectory'
  | 'dev'
  | 'mode'
  | 'nlink'
  | 'uid'
  | 'gid'
  | 'rdev'
  | 'ino'
  | 'atimeMs'
  | 'mtimeMs'
  | 'ctimeMs'
  | 'atime'
  | 'mtime'
  | 'ctime'
  | 'birthtime'
  | 'birthtimeMs'
  | 'blksize'
  | 'blocks'
  | 'publicURL'
  | 'childImageSharp___fixed___base64'
  | 'childImageSharp___fixed___tracedSVG'
  | 'childImageSharp___fixed___aspectRatio'
  | 'childImageSharp___fixed___width'
  | 'childImageSharp___fixed___height'
  | 'childImageSharp___fixed___src'
  | 'childImageSharp___fixed___srcSet'
  | 'childImageSharp___fixed___srcWebp'
  | 'childImageSharp___fixed___srcSetWebp'
  | 'childImageSharp___fixed___originalName'
  | 'childImageSharp___resolutions___base64'
  | 'childImageSharp___resolutions___tracedSVG'
  | 'childImageSharp___resolutions___aspectRatio'
  | 'childImageSharp___resolutions___width'
  | 'childImageSharp___resolutions___height'
  | 'childImageSharp___resolutions___src'
  | 'childImageSharp___resolutions___srcSet'
  | 'childImageSharp___resolutions___srcWebp'
  | 'childImageSharp___resolutions___srcSetWebp'
  | 'childImageSharp___resolutions___originalName'
  | 'childImageSharp___fluid___base64'
  | 'childImageSharp___fluid___tracedSVG'
  | 'childImageSharp___fluid___aspectRatio'
  | 'childImageSharp___fluid___src'
  | 'childImageSharp___fluid___srcSet'
  | 'childImageSharp___fluid___srcWebp'
  | 'childImageSharp___fluid___srcSetWebp'
  | 'childImageSharp___fluid___sizes'
  | 'childImageSharp___fluid___originalImg'
  | 'childImageSharp___fluid___originalName'
  | 'childImageSharp___fluid___presentationWidth'
  | 'childImageSharp___fluid___presentationHeight'
  | 'childImageSharp___sizes___base64'
  | 'childImageSharp___sizes___tracedSVG'
  | 'childImageSharp___sizes___aspectRatio'
  | 'childImageSharp___sizes___src'
  | 'childImageSharp___sizes___srcSet'
  | 'childImageSharp___sizes___srcWebp'
  | 'childImageSharp___sizes___srcSetWebp'
  | 'childImageSharp___sizes___sizes'
  | 'childImageSharp___sizes___originalImg'
  | 'childImageSharp___sizes___originalName'
  | 'childImageSharp___sizes___presentationWidth'
  | 'childImageSharp___sizes___presentationHeight'
  | 'childImageSharp___original___width'
  | 'childImageSharp___original___height'
  | 'childImageSharp___original___src'
  | 'childImageSharp___resize___src'
  | 'childImageSharp___resize___tracedSVG'
  | 'childImageSharp___resize___width'
  | 'childImageSharp___resize___height'
  | 'childImageSharp___resize___aspectRatio'
  | 'childImageSharp___resize___originalName'
  | 'childImageSharp___id'
  | 'childImageSharp___parent___id'
  | 'childImageSharp___parent___parent___id'
  | 'childImageSharp___parent___parent___children'
  | 'childImageSharp___parent___children'
  | 'childImageSharp___parent___children___id'
  | 'childImageSharp___parent___children___children'
  | 'childImageSharp___parent___internal___content'
  | 'childImageSharp___parent___internal___contentDigest'
  | 'childImageSharp___parent___internal___description'
  | 'childImageSharp___parent___internal___fieldOwners'
  | 'childImageSharp___parent___internal___ignoreType'
  | 'childImageSharp___parent___internal___mediaType'
  | 'childImageSharp___parent___internal___owner'
  | 'childImageSharp___parent___internal___type'
  | 'childImageSharp___children'
  | 'childImageSharp___children___id'
  | 'childImageSharp___children___parent___id'
  | 'childImageSharp___children___parent___children'
  | 'childImageSharp___children___children'
  | 'childImageSharp___children___children___id'
  | 'childImageSharp___children___children___children'
  | 'childImageSharp___children___internal___content'
  | 'childImageSharp___children___internal___contentDigest'
  | 'childImageSharp___children___internal___description'
  | 'childImageSharp___children___internal___fieldOwners'
  | 'childImageSharp___children___internal___ignoreType'
  | 'childImageSharp___children___internal___mediaType'
  | 'childImageSharp___children___internal___owner'
  | 'childImageSharp___children___internal___type'
  | 'childImageSharp___internal___content'
  | 'childImageSharp___internal___contentDigest'
  | 'childImageSharp___internal___description'
  | 'childImageSharp___internal___fieldOwners'
  | 'childImageSharp___internal___ignoreType'
  | 'childImageSharp___internal___mediaType'
  | 'childImageSharp___internal___owner'
  | 'childImageSharp___internal___type'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type FileFilterInput = {
  sourceInstanceName?: Maybe<StringQueryOperatorInput>;
  absolutePath?: Maybe<StringQueryOperatorInput>;
  relativePath?: Maybe<StringQueryOperatorInput>;
  extension?: Maybe<StringQueryOperatorInput>;
  size?: Maybe<IntQueryOperatorInput>;
  prettySize?: Maybe<StringQueryOperatorInput>;
  modifiedTime?: Maybe<DateQueryOperatorInput>;
  accessTime?: Maybe<DateQueryOperatorInput>;
  changeTime?: Maybe<DateQueryOperatorInput>;
  birthTime?: Maybe<DateQueryOperatorInput>;
  root?: Maybe<StringQueryOperatorInput>;
  dir?: Maybe<StringQueryOperatorInput>;
  base?: Maybe<StringQueryOperatorInput>;
  ext?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  relativeDirectory?: Maybe<StringQueryOperatorInput>;
  dev?: Maybe<IntQueryOperatorInput>;
  mode?: Maybe<IntQueryOperatorInput>;
  nlink?: Maybe<IntQueryOperatorInput>;
  uid?: Maybe<IntQueryOperatorInput>;
  gid?: Maybe<IntQueryOperatorInput>;
  rdev?: Maybe<IntQueryOperatorInput>;
  ino?: Maybe<FloatQueryOperatorInput>;
  atimeMs?: Maybe<FloatQueryOperatorInput>;
  mtimeMs?: Maybe<FloatQueryOperatorInput>;
  ctimeMs?: Maybe<FloatQueryOperatorInput>;
  atime?: Maybe<DateQueryOperatorInput>;
  mtime?: Maybe<DateQueryOperatorInput>;
  ctime?: Maybe<DateQueryOperatorInput>;
  birthtime?: Maybe<DateQueryOperatorInput>;
  birthtimeMs?: Maybe<FloatQueryOperatorInput>;
  blksize?: Maybe<IntQueryOperatorInput>;
  blocks?: Maybe<IntQueryOperatorInput>;
  publicURL?: Maybe<StringQueryOperatorInput>;
  childImageSharp?: Maybe<ImageSharpFilterInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type FileGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<FileEdge>;
  nodes: Array<File>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type FileSortInput = {
  fields?: Maybe<Array<Maybe<FileFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type FloatQueryOperatorInput = {
  eq?: Maybe<Scalars['Float']>;
  ne?: Maybe<Scalars['Float']>;
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>;
};

export type ImageCropFocus = 
  | 'CENTER'
  | 'NORTH'
  | 'NORTHEAST'
  | 'EAST'
  | 'SOUTHEAST'
  | 'SOUTH'
  | 'SOUTHWEST'
  | 'WEST'
  | 'NORTHWEST'
  | 'ENTROPY'
  | 'ATTENTION';

export type ImageFit = 
  | 'COVER'
  | 'CONTAIN'
  | 'FILL'
  | 'INSIDE'
  | 'OUTSIDE';

export type ImageFormat = 
  | 'NO_CHANGE'
  | 'JPG'
  | 'PNG'
  | 'WEBP';

export type ImageResizingBehavior = 
  | 'NO_CHANGE'
  /** Same as the default resizing, but adds padding so that the generated image has the specified dimensions. */
  | 'PAD'
  /** Crop a part of the original image to match the specified size. */
  | 'CROP'
  /**
   * Crop the image to the specified dimensions, if the original image is smaller
   * than these dimensions, then the image will be upscaled.
   */
  | 'FILL'
  /** When used in association with the f parameter below, creates a thumbnail from the image based on a focus area. */
  | 'THUMB'
  /** Scale the image regardless of the original aspect ratio. */
  | 'SCALE';

export type ImageSharp = Node & {
  fixed?: Maybe<ImageSharpFixed>;
  /** @deprecated Resolutions was deprecated in Gatsby v2. It's been renamed to "fixed" https://example.com/write-docs-and-fix-this-example-link */
  resolutions?: Maybe<ImageSharpResolutions>;
  fluid?: Maybe<ImageSharpFluid>;
  /** @deprecated Sizes was deprecated in Gatsby v2. It's been renamed to "fluid" https://example.com/write-docs-and-fix-this-example-link */
  sizes?: Maybe<ImageSharpSizes>;
  original?: Maybe<ImageSharpOriginal>;
  resize?: Maybe<ImageSharpResize>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type ImageSharpFixedArgs = {
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  base64Width?: Maybe<Scalars['Int']>;
  jpegProgressive?: Maybe<Scalars['Boolean']>;
  pngCompressionSpeed?: Maybe<Scalars['Int']>;
  grayscale?: Maybe<Scalars['Boolean']>;
  duotone?: Maybe<DuotoneGradient>;
  traceSVG?: Maybe<Potrace>;
  quality?: Maybe<Scalars['Int']>;
  jpegQuality?: Maybe<Scalars['Int']>;
  pngQuality?: Maybe<Scalars['Int']>;
  webpQuality?: Maybe<Scalars['Int']>;
  toFormat?: Maybe<ImageFormat>;
  toFormatBase64?: Maybe<ImageFormat>;
  cropFocus?: Maybe<ImageCropFocus>;
  fit?: Maybe<ImageFit>;
  background?: Maybe<Scalars['String']>;
  rotate?: Maybe<Scalars['Int']>;
  trim?: Maybe<Scalars['Float']>;
};


export type ImageSharpResolutionsArgs = {
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  base64Width?: Maybe<Scalars['Int']>;
  jpegProgressive?: Maybe<Scalars['Boolean']>;
  pngCompressionSpeed?: Maybe<Scalars['Int']>;
  grayscale?: Maybe<Scalars['Boolean']>;
  duotone?: Maybe<DuotoneGradient>;
  traceSVG?: Maybe<Potrace>;
  quality?: Maybe<Scalars['Int']>;
  jpegQuality?: Maybe<Scalars['Int']>;
  pngQuality?: Maybe<Scalars['Int']>;
  webpQuality?: Maybe<Scalars['Int']>;
  toFormat?: Maybe<ImageFormat>;
  toFormatBase64?: Maybe<ImageFormat>;
  cropFocus?: Maybe<ImageCropFocus>;
  fit?: Maybe<ImageFit>;
  background?: Maybe<Scalars['String']>;
  rotate?: Maybe<Scalars['Int']>;
  trim?: Maybe<Scalars['Float']>;
};


export type ImageSharpFluidArgs = {
  maxWidth?: Maybe<Scalars['Int']>;
  maxHeight?: Maybe<Scalars['Int']>;
  base64Width?: Maybe<Scalars['Int']>;
  grayscale?: Maybe<Scalars['Boolean']>;
  jpegProgressive?: Maybe<Scalars['Boolean']>;
  pngCompressionSpeed?: Maybe<Scalars['Int']>;
  duotone?: Maybe<DuotoneGradient>;
  traceSVG?: Maybe<Potrace>;
  quality?: Maybe<Scalars['Int']>;
  jpegQuality?: Maybe<Scalars['Int']>;
  pngQuality?: Maybe<Scalars['Int']>;
  webpQuality?: Maybe<Scalars['Int']>;
  toFormat?: Maybe<ImageFormat>;
  toFormatBase64?: Maybe<ImageFormat>;
  cropFocus?: Maybe<ImageCropFocus>;
  fit?: Maybe<ImageFit>;
  background?: Maybe<Scalars['String']>;
  rotate?: Maybe<Scalars['Int']>;
  trim?: Maybe<Scalars['Float']>;
  sizes?: Maybe<Scalars['String']>;
  srcSetBreakpoints?: Maybe<Array<Maybe<Scalars['Int']>>>;
};


export type ImageSharpSizesArgs = {
  maxWidth?: Maybe<Scalars['Int']>;
  maxHeight?: Maybe<Scalars['Int']>;
  base64Width?: Maybe<Scalars['Int']>;
  grayscale?: Maybe<Scalars['Boolean']>;
  jpegProgressive?: Maybe<Scalars['Boolean']>;
  pngCompressionSpeed?: Maybe<Scalars['Int']>;
  duotone?: Maybe<DuotoneGradient>;
  traceSVG?: Maybe<Potrace>;
  quality?: Maybe<Scalars['Int']>;
  jpegQuality?: Maybe<Scalars['Int']>;
  pngQuality?: Maybe<Scalars['Int']>;
  webpQuality?: Maybe<Scalars['Int']>;
  toFormat?: Maybe<ImageFormat>;
  toFormatBase64?: Maybe<ImageFormat>;
  cropFocus?: Maybe<ImageCropFocus>;
  fit?: Maybe<ImageFit>;
  background?: Maybe<Scalars['String']>;
  rotate?: Maybe<Scalars['Int']>;
  trim?: Maybe<Scalars['Float']>;
  sizes?: Maybe<Scalars['String']>;
  srcSetBreakpoints?: Maybe<Array<Maybe<Scalars['Int']>>>;
};


export type ImageSharpResizeArgs = {
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  quality?: Maybe<Scalars['Int']>;
  jpegQuality?: Maybe<Scalars['Int']>;
  pngQuality?: Maybe<Scalars['Int']>;
  webpQuality?: Maybe<Scalars['Int']>;
  jpegProgressive?: Maybe<Scalars['Boolean']>;
  pngCompressionLevel?: Maybe<Scalars['Int']>;
  pngCompressionSpeed?: Maybe<Scalars['Int']>;
  grayscale?: Maybe<Scalars['Boolean']>;
  duotone?: Maybe<DuotoneGradient>;
  base64?: Maybe<Scalars['Boolean']>;
  traceSVG?: Maybe<Potrace>;
  toFormat?: Maybe<ImageFormat>;
  cropFocus?: Maybe<ImageCropFocus>;
  fit?: Maybe<ImageFit>;
  background?: Maybe<Scalars['String']>;
  rotate?: Maybe<Scalars['Int']>;
  trim?: Maybe<Scalars['Float']>;
};

export type ImageSharpConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ImageSharpEdge>;
  nodes: Array<ImageSharp>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<ImageSharpGroupConnection>;
};


export type ImageSharpConnectionDistinctArgs = {
  field: ImageSharpFieldsEnum;
};


export type ImageSharpConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: ImageSharpFieldsEnum;
};

export type ImageSharpEdge = {
  next?: Maybe<ImageSharp>;
  node: ImageSharp;
  previous?: Maybe<ImageSharp>;
};

export type ImageSharpFieldsEnum = 
  | 'fixed___base64'
  | 'fixed___tracedSVG'
  | 'fixed___aspectRatio'
  | 'fixed___width'
  | 'fixed___height'
  | 'fixed___src'
  | 'fixed___srcSet'
  | 'fixed___srcWebp'
  | 'fixed___srcSetWebp'
  | 'fixed___originalName'
  | 'resolutions___base64'
  | 'resolutions___tracedSVG'
  | 'resolutions___aspectRatio'
  | 'resolutions___width'
  | 'resolutions___height'
  | 'resolutions___src'
  | 'resolutions___srcSet'
  | 'resolutions___srcWebp'
  | 'resolutions___srcSetWebp'
  | 'resolutions___originalName'
  | 'fluid___base64'
  | 'fluid___tracedSVG'
  | 'fluid___aspectRatio'
  | 'fluid___src'
  | 'fluid___srcSet'
  | 'fluid___srcWebp'
  | 'fluid___srcSetWebp'
  | 'fluid___sizes'
  | 'fluid___originalImg'
  | 'fluid___originalName'
  | 'fluid___presentationWidth'
  | 'fluid___presentationHeight'
  | 'sizes___base64'
  | 'sizes___tracedSVG'
  | 'sizes___aspectRatio'
  | 'sizes___src'
  | 'sizes___srcSet'
  | 'sizes___srcWebp'
  | 'sizes___srcSetWebp'
  | 'sizes___sizes'
  | 'sizes___originalImg'
  | 'sizes___originalName'
  | 'sizes___presentationWidth'
  | 'sizes___presentationHeight'
  | 'original___width'
  | 'original___height'
  | 'original___src'
  | 'resize___src'
  | 'resize___tracedSVG'
  | 'resize___width'
  | 'resize___height'
  | 'resize___aspectRatio'
  | 'resize___originalName'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type ImageSharpFilterInput = {
  fixed?: Maybe<ImageSharpFixedFilterInput>;
  resolutions?: Maybe<ImageSharpResolutionsFilterInput>;
  fluid?: Maybe<ImageSharpFluidFilterInput>;
  sizes?: Maybe<ImageSharpSizesFilterInput>;
  original?: Maybe<ImageSharpOriginalFilterInput>;
  resize?: Maybe<ImageSharpResizeFilterInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type ImageSharpFixed = {
  base64?: Maybe<Scalars['String']>;
  tracedSVG?: Maybe<Scalars['String']>;
  aspectRatio?: Maybe<Scalars['Float']>;
  width: Scalars['Float'];
  height: Scalars['Float'];
  src: Scalars['String'];
  srcSet: Scalars['String'];
  srcWebp?: Maybe<Scalars['String']>;
  srcSetWebp?: Maybe<Scalars['String']>;
  originalName?: Maybe<Scalars['String']>;
};

export type ImageSharpFixedFilterInput = {
  base64?: Maybe<StringQueryOperatorInput>;
  tracedSVG?: Maybe<StringQueryOperatorInput>;
  aspectRatio?: Maybe<FloatQueryOperatorInput>;
  width?: Maybe<FloatQueryOperatorInput>;
  height?: Maybe<FloatQueryOperatorInput>;
  src?: Maybe<StringQueryOperatorInput>;
  srcSet?: Maybe<StringQueryOperatorInput>;
  srcWebp?: Maybe<StringQueryOperatorInput>;
  srcSetWebp?: Maybe<StringQueryOperatorInput>;
  originalName?: Maybe<StringQueryOperatorInput>;
};

export type ImageSharpFluid = {
  base64?: Maybe<Scalars['String']>;
  tracedSVG?: Maybe<Scalars['String']>;
  aspectRatio: Scalars['Float'];
  src: Scalars['String'];
  srcSet: Scalars['String'];
  srcWebp?: Maybe<Scalars['String']>;
  srcSetWebp?: Maybe<Scalars['String']>;
  sizes: Scalars['String'];
  originalImg?: Maybe<Scalars['String']>;
  originalName?: Maybe<Scalars['String']>;
  presentationWidth: Scalars['Int'];
  presentationHeight: Scalars['Int'];
};

export type ImageSharpFluidFilterInput = {
  base64?: Maybe<StringQueryOperatorInput>;
  tracedSVG?: Maybe<StringQueryOperatorInput>;
  aspectRatio?: Maybe<FloatQueryOperatorInput>;
  src?: Maybe<StringQueryOperatorInput>;
  srcSet?: Maybe<StringQueryOperatorInput>;
  srcWebp?: Maybe<StringQueryOperatorInput>;
  srcSetWebp?: Maybe<StringQueryOperatorInput>;
  sizes?: Maybe<StringQueryOperatorInput>;
  originalImg?: Maybe<StringQueryOperatorInput>;
  originalName?: Maybe<StringQueryOperatorInput>;
  presentationWidth?: Maybe<IntQueryOperatorInput>;
  presentationHeight?: Maybe<IntQueryOperatorInput>;
};

export type ImageSharpGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ImageSharpEdge>;
  nodes: Array<ImageSharp>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type ImageSharpOriginal = {
  width?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
  src?: Maybe<Scalars['String']>;
};

export type ImageSharpOriginalFilterInput = {
  width?: Maybe<FloatQueryOperatorInput>;
  height?: Maybe<FloatQueryOperatorInput>;
  src?: Maybe<StringQueryOperatorInput>;
};

export type ImageSharpResize = {
  src?: Maybe<Scalars['String']>;
  tracedSVG?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  aspectRatio?: Maybe<Scalars['Float']>;
  originalName?: Maybe<Scalars['String']>;
};

export type ImageSharpResizeFilterInput = {
  src?: Maybe<StringQueryOperatorInput>;
  tracedSVG?: Maybe<StringQueryOperatorInput>;
  width?: Maybe<IntQueryOperatorInput>;
  height?: Maybe<IntQueryOperatorInput>;
  aspectRatio?: Maybe<FloatQueryOperatorInput>;
  originalName?: Maybe<StringQueryOperatorInput>;
};

export type ImageSharpResolutions = {
  base64?: Maybe<Scalars['String']>;
  tracedSVG?: Maybe<Scalars['String']>;
  aspectRatio?: Maybe<Scalars['Float']>;
  width: Scalars['Float'];
  height: Scalars['Float'];
  src: Scalars['String'];
  srcSet: Scalars['String'];
  srcWebp?: Maybe<Scalars['String']>;
  srcSetWebp?: Maybe<Scalars['String']>;
  originalName?: Maybe<Scalars['String']>;
};

export type ImageSharpResolutionsFilterInput = {
  base64?: Maybe<StringQueryOperatorInput>;
  tracedSVG?: Maybe<StringQueryOperatorInput>;
  aspectRatio?: Maybe<FloatQueryOperatorInput>;
  width?: Maybe<FloatQueryOperatorInput>;
  height?: Maybe<FloatQueryOperatorInput>;
  src?: Maybe<StringQueryOperatorInput>;
  srcSet?: Maybe<StringQueryOperatorInput>;
  srcWebp?: Maybe<StringQueryOperatorInput>;
  srcSetWebp?: Maybe<StringQueryOperatorInput>;
  originalName?: Maybe<StringQueryOperatorInput>;
};

export type ImageSharpSizes = {
  base64?: Maybe<Scalars['String']>;
  tracedSVG?: Maybe<Scalars['String']>;
  aspectRatio: Scalars['Float'];
  src: Scalars['String'];
  srcSet: Scalars['String'];
  srcWebp?: Maybe<Scalars['String']>;
  srcSetWebp?: Maybe<Scalars['String']>;
  sizes: Scalars['String'];
  originalImg?: Maybe<Scalars['String']>;
  originalName?: Maybe<Scalars['String']>;
  presentationWidth: Scalars['Int'];
  presentationHeight: Scalars['Int'];
};

export type ImageSharpSizesFilterInput = {
  base64?: Maybe<StringQueryOperatorInput>;
  tracedSVG?: Maybe<StringQueryOperatorInput>;
  aspectRatio?: Maybe<FloatQueryOperatorInput>;
  src?: Maybe<StringQueryOperatorInput>;
  srcSet?: Maybe<StringQueryOperatorInput>;
  srcWebp?: Maybe<StringQueryOperatorInput>;
  srcSetWebp?: Maybe<StringQueryOperatorInput>;
  sizes?: Maybe<StringQueryOperatorInput>;
  originalImg?: Maybe<StringQueryOperatorInput>;
  originalName?: Maybe<StringQueryOperatorInput>;
  presentationWidth?: Maybe<IntQueryOperatorInput>;
  presentationHeight?: Maybe<IntQueryOperatorInput>;
};

export type ImageSharpSortInput = {
  fields?: Maybe<Array<Maybe<ImageSharpFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type Internal = {
  content?: Maybe<Scalars['String']>;
  contentDigest: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  fieldOwners?: Maybe<Array<Maybe<Scalars['String']>>>;
  ignoreType?: Maybe<Scalars['Boolean']>;
  mediaType?: Maybe<Scalars['String']>;
  owner: Scalars['String'];
  type: Scalars['String'];
};

export type InternalFilterInput = {
  content?: Maybe<StringQueryOperatorInput>;
  contentDigest?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  fieldOwners?: Maybe<StringQueryOperatorInput>;
  ignoreType?: Maybe<BooleanQueryOperatorInput>;
  mediaType?: Maybe<StringQueryOperatorInput>;
  owner?: Maybe<StringQueryOperatorInput>;
  type?: Maybe<StringQueryOperatorInput>;
};

export type IntQueryOperatorInput = {
  eq?: Maybe<Scalars['Int']>;
  ne?: Maybe<Scalars['Int']>;
  gt?: Maybe<Scalars['Int']>;
  gte?: Maybe<Scalars['Int']>;
  lt?: Maybe<Scalars['Int']>;
  lte?: Maybe<Scalars['Int']>;
  in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Int']>>>;
};


export type JsonQueryOperatorInput = {
  eq?: Maybe<Scalars['JSON']>;
  ne?: Maybe<Scalars['JSON']>;
  in?: Maybe<Array<Maybe<Scalars['JSON']>>>;
  nin?: Maybe<Array<Maybe<Scalars['JSON']>>>;
  regex?: Maybe<Scalars['JSON']>;
  glob?: Maybe<Scalars['JSON']>;
};

/** Node Interface */
export type Node = {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};

export type NodeFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type NodeFilterListInput = {
  elemMatch?: Maybe<NodeFilterInput>;
};

export type PageInfo = {
  currentPage: Scalars['Int'];
  hasPreviousPage: Scalars['Boolean'];
  hasNextPage: Scalars['Boolean'];
  itemCount: Scalars['Int'];
  pageCount: Scalars['Int'];
  perPage?: Maybe<Scalars['Int']>;
  totalCount: Scalars['Int'];
};

export type Potrace = {
  turnPolicy?: Maybe<PotraceTurnPolicy>;
  turdSize?: Maybe<Scalars['Float']>;
  alphaMax?: Maybe<Scalars['Float']>;
  optCurve?: Maybe<Scalars['Boolean']>;
  optTolerance?: Maybe<Scalars['Float']>;
  threshold?: Maybe<Scalars['Int']>;
  blackOnWhite?: Maybe<Scalars['Boolean']>;
  color?: Maybe<Scalars['String']>;
  background?: Maybe<Scalars['String']>;
};

export type PotraceTurnPolicy = 
  | 'TURNPOLICY_BLACK'
  | 'TURNPOLICY_WHITE'
  | 'TURNPOLICY_LEFT'
  | 'TURNPOLICY_RIGHT'
  | 'TURNPOLICY_MINORITY'
  | 'TURNPOLICY_MAJORITY';

export type Query = {
  file?: Maybe<File>;
  allFile: FileConnection;
  directory?: Maybe<Directory>;
  allDirectory: DirectoryConnection;
  sitePage?: Maybe<SitePage>;
  allSitePage: SitePageConnection;
  site?: Maybe<Site>;
  allSite: SiteConnection;
  imageSharp?: Maybe<ImageSharp>;
  allImageSharp: ImageSharpConnection;
  contentfulLocale?: Maybe<ContentfulLocale>;
  allContentfulLocale: ContentfulLocaleConnection;
  contentfulAsset?: Maybe<ContentfulAsset>;
  allContentfulAsset: ContentfulAssetConnection;
  contentfulBlogPostBodyRichTextNode?: Maybe<ContentfulBlogPostBodyRichTextNode>;
  allContentfulBlogPostBodyRichTextNode: ContentfulBlogPostBodyRichTextNodeConnection;
  contentfulBlogPost?: Maybe<ContentfulBlogPost>;
  allContentfulBlogPost: ContentfulBlogPostConnection;
  contentfulEmbeddedRifBodyRichTextNode?: Maybe<ContentfulEmbeddedRifBodyRichTextNode>;
  allContentfulEmbeddedRifBodyRichTextNode: ContentfulEmbeddedRifBodyRichTextNodeConnection;
  contentfulEmbeddedRif?: Maybe<ContentfulEmbeddedRif>;
  allContentfulEmbeddedRif: ContentfulEmbeddedRifConnection;
  contentfulHeroBodyRichTextNode?: Maybe<ContentfulHeroBodyRichTextNode>;
  allContentfulHeroBodyRichTextNode: ContentfulHeroBodyRichTextNodeConnection;
  contentfulHero?: Maybe<ContentfulHero>;
  allContentfulHero: ContentfulHeroConnection;
  contentfulNavigation?: Maybe<ContentfulNavigation>;
  allContentfulNavigation: ContentfulNavigationConnection;
  contentfulPage?: Maybe<ContentfulPage>;
  allContentfulPage: ContentfulPageConnection;
  contentfulSeo?: Maybe<ContentfulSeo>;
  allContentfulSeo: ContentfulSeoConnection;
  contentfulContentType?: Maybe<ContentfulContentType>;
  allContentfulContentType: ContentfulContentTypeConnection;
  siteBuildMetadata?: Maybe<SiteBuildMetadata>;
  allSiteBuildMetadata: SiteBuildMetadataConnection;
  sitePlugin?: Maybe<SitePlugin>;
  allSitePlugin: SitePluginConnection;
};


export type QueryFileArgs = {
  sourceInstanceName?: Maybe<StringQueryOperatorInput>;
  absolutePath?: Maybe<StringQueryOperatorInput>;
  relativePath?: Maybe<StringQueryOperatorInput>;
  extension?: Maybe<StringQueryOperatorInput>;
  size?: Maybe<IntQueryOperatorInput>;
  prettySize?: Maybe<StringQueryOperatorInput>;
  modifiedTime?: Maybe<DateQueryOperatorInput>;
  accessTime?: Maybe<DateQueryOperatorInput>;
  changeTime?: Maybe<DateQueryOperatorInput>;
  birthTime?: Maybe<DateQueryOperatorInput>;
  root?: Maybe<StringQueryOperatorInput>;
  dir?: Maybe<StringQueryOperatorInput>;
  base?: Maybe<StringQueryOperatorInput>;
  ext?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  relativeDirectory?: Maybe<StringQueryOperatorInput>;
  dev?: Maybe<IntQueryOperatorInput>;
  mode?: Maybe<IntQueryOperatorInput>;
  nlink?: Maybe<IntQueryOperatorInput>;
  uid?: Maybe<IntQueryOperatorInput>;
  gid?: Maybe<IntQueryOperatorInput>;
  rdev?: Maybe<IntQueryOperatorInput>;
  ino?: Maybe<FloatQueryOperatorInput>;
  atimeMs?: Maybe<FloatQueryOperatorInput>;
  mtimeMs?: Maybe<FloatQueryOperatorInput>;
  ctimeMs?: Maybe<FloatQueryOperatorInput>;
  atime?: Maybe<DateQueryOperatorInput>;
  mtime?: Maybe<DateQueryOperatorInput>;
  ctime?: Maybe<DateQueryOperatorInput>;
  birthtime?: Maybe<DateQueryOperatorInput>;
  birthtimeMs?: Maybe<FloatQueryOperatorInput>;
  blksize?: Maybe<IntQueryOperatorInput>;
  blocks?: Maybe<IntQueryOperatorInput>;
  publicURL?: Maybe<StringQueryOperatorInput>;
  childImageSharp?: Maybe<ImageSharpFilterInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllFileArgs = {
  filter?: Maybe<FileFilterInput>;
  sort?: Maybe<FileSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryDirectoryArgs = {
  sourceInstanceName?: Maybe<StringQueryOperatorInput>;
  absolutePath?: Maybe<StringQueryOperatorInput>;
  relativePath?: Maybe<StringQueryOperatorInput>;
  extension?: Maybe<StringQueryOperatorInput>;
  size?: Maybe<IntQueryOperatorInput>;
  prettySize?: Maybe<StringQueryOperatorInput>;
  modifiedTime?: Maybe<DateQueryOperatorInput>;
  accessTime?: Maybe<DateQueryOperatorInput>;
  changeTime?: Maybe<DateQueryOperatorInput>;
  birthTime?: Maybe<DateQueryOperatorInput>;
  root?: Maybe<StringQueryOperatorInput>;
  dir?: Maybe<StringQueryOperatorInput>;
  base?: Maybe<StringQueryOperatorInput>;
  ext?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  relativeDirectory?: Maybe<StringQueryOperatorInput>;
  dev?: Maybe<IntQueryOperatorInput>;
  mode?: Maybe<IntQueryOperatorInput>;
  nlink?: Maybe<IntQueryOperatorInput>;
  uid?: Maybe<IntQueryOperatorInput>;
  gid?: Maybe<IntQueryOperatorInput>;
  rdev?: Maybe<IntQueryOperatorInput>;
  ino?: Maybe<FloatQueryOperatorInput>;
  atimeMs?: Maybe<FloatQueryOperatorInput>;
  mtimeMs?: Maybe<FloatQueryOperatorInput>;
  ctimeMs?: Maybe<FloatQueryOperatorInput>;
  atime?: Maybe<DateQueryOperatorInput>;
  mtime?: Maybe<DateQueryOperatorInput>;
  ctime?: Maybe<DateQueryOperatorInput>;
  birthtime?: Maybe<DateQueryOperatorInput>;
  birthtimeMs?: Maybe<FloatQueryOperatorInput>;
  blksize?: Maybe<IntQueryOperatorInput>;
  blocks?: Maybe<IntQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllDirectoryArgs = {
  filter?: Maybe<DirectoryFilterInput>;
  sort?: Maybe<DirectorySortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QuerySitePageArgs = {
  path?: Maybe<StringQueryOperatorInput>;
  component?: Maybe<StringQueryOperatorInput>;
  internalComponentName?: Maybe<StringQueryOperatorInput>;
  componentChunkName?: Maybe<StringQueryOperatorInput>;
  matchPath?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  isCreatedByStatefulCreatePages?: Maybe<BooleanQueryOperatorInput>;
  context?: Maybe<SitePageContextFilterInput>;
  pluginCreator?: Maybe<SitePluginFilterInput>;
  pluginCreatorId?: Maybe<StringQueryOperatorInput>;
  componentPath?: Maybe<StringQueryOperatorInput>;
};


export type QueryAllSitePageArgs = {
  filter?: Maybe<SitePageFilterInput>;
  sort?: Maybe<SitePageSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QuerySiteArgs = {
  buildTime?: Maybe<DateQueryOperatorInput>;
  siteMetadata?: Maybe<SiteSiteMetadataFilterInput>;
  port?: Maybe<DateQueryOperatorInput>;
  host?: Maybe<StringQueryOperatorInput>;
  polyfill?: Maybe<BooleanQueryOperatorInput>;
  pathPrefix?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllSiteArgs = {
  filter?: Maybe<SiteFilterInput>;
  sort?: Maybe<SiteSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryImageSharpArgs = {
  fixed?: Maybe<ImageSharpFixedFilterInput>;
  resolutions?: Maybe<ImageSharpResolutionsFilterInput>;
  fluid?: Maybe<ImageSharpFluidFilterInput>;
  sizes?: Maybe<ImageSharpSizesFilterInput>;
  original?: Maybe<ImageSharpOriginalFilterInput>;
  resize?: Maybe<ImageSharpResizeFilterInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllImageSharpArgs = {
  filter?: Maybe<ImageSharpFilterInput>;
  sort?: Maybe<ImageSharpSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryContentfulLocaleArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  code?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  default?: Maybe<BooleanQueryOperatorInput>;
  fallbackCode?: Maybe<StringQueryOperatorInput>;
  sys?: Maybe<ContentfulLocaleSysFilterInput>;
};


export type QueryAllContentfulLocaleArgs = {
  filter?: Maybe<ContentfulLocaleFilterInput>;
  sort?: Maybe<ContentfulLocaleSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryContentfulAssetArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  contentful_id?: Maybe<StringQueryOperatorInput>;
  file?: Maybe<ContentfulAssetFileFilterInput>;
  title?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  node_locale?: Maybe<StringQueryOperatorInput>;
  fixed?: Maybe<ContentfulFixedFilterInput>;
  resolutions?: Maybe<ContentfulResolutionsFilterInput>;
  fluid?: Maybe<ContentfulFluidFilterInput>;
  sizes?: Maybe<ContentfulSizesFilterInput>;
  resize?: Maybe<ContentfulResizeFilterInput>;
};


export type QueryAllContentfulAssetArgs = {
  filter?: Maybe<ContentfulAssetFilterInput>;
  sort?: Maybe<ContentfulAssetSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryContentfulBlogPostBodyRichTextNodeArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  content?: Maybe<ContentfulBlogPostBodyRichTextNodeContentFilterListInput>;
  nodeType?: Maybe<StringQueryOperatorInput>;
  body?: Maybe<StringQueryOperatorInput>;
  json?: Maybe<JsonQueryOperatorInput>;
};


export type QueryAllContentfulBlogPostBodyRichTextNodeArgs = {
  filter?: Maybe<ContentfulBlogPostBodyRichTextNodeFilterInput>;
  sort?: Maybe<ContentfulBlogPostBodyRichTextNodeSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryContentfulBlogPostArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  title?: Maybe<StringQueryOperatorInput>;
  slug?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  image?: Maybe<ContentfulAssetFilterInput>;
  seo?: Maybe<ContentfulSeoFilterInput>;
  body?: Maybe<ContentfulBlogPostBodyRichTextNodeFilterInput>;
  spaceId?: Maybe<StringQueryOperatorInput>;
  contentful_id?: Maybe<StringQueryOperatorInput>;
  createdAt?: Maybe<DateQueryOperatorInput>;
  updatedAt?: Maybe<DateQueryOperatorInput>;
  sys?: Maybe<ContentfulBlogPostSysFilterInput>;
  node_locale?: Maybe<StringQueryOperatorInput>;
  childContentfulBlogPostBodyRichTextNode?: Maybe<ContentfulBlogPostBodyRichTextNodeFilterInput>;
};


export type QueryAllContentfulBlogPostArgs = {
  filter?: Maybe<ContentfulBlogPostFilterInput>;
  sort?: Maybe<ContentfulBlogPostSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryContentfulEmbeddedRifBodyRichTextNodeArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  nodeType?: Maybe<StringQueryOperatorInput>;
  content?: Maybe<ContentfulEmbeddedRifBodyRichTextNodeContentFilterListInput>;
  body?: Maybe<StringQueryOperatorInput>;
  json?: Maybe<JsonQueryOperatorInput>;
};


export type QueryAllContentfulEmbeddedRifBodyRichTextNodeArgs = {
  filter?: Maybe<ContentfulEmbeddedRifBodyRichTextNodeFilterInput>;
  sort?: Maybe<ContentfulEmbeddedRifBodyRichTextNodeSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryContentfulEmbeddedRifArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  name?: Maybe<StringQueryOperatorInput>;
  page?: Maybe<ContentfulPageFilterListInput>;
  body?: Maybe<ContentfulEmbeddedRifBodyRichTextNodeFilterInput>;
  spaceId?: Maybe<StringQueryOperatorInput>;
  contentful_id?: Maybe<StringQueryOperatorInput>;
  createdAt?: Maybe<DateQueryOperatorInput>;
  updatedAt?: Maybe<DateQueryOperatorInput>;
  sys?: Maybe<ContentfulEmbeddedRifSysFilterInput>;
  node_locale?: Maybe<StringQueryOperatorInput>;
  childContentfulEmbeddedRifBodyRichTextNode?: Maybe<ContentfulEmbeddedRifBodyRichTextNodeFilterInput>;
};


export type QueryAllContentfulEmbeddedRifArgs = {
  filter?: Maybe<ContentfulEmbeddedRifFilterInput>;
  sort?: Maybe<ContentfulEmbeddedRifSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryContentfulHeroBodyRichTextNodeArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  content?: Maybe<ContentfulHeroBodyRichTextNodeContentFilterListInput>;
  nodeType?: Maybe<StringQueryOperatorInput>;
  body?: Maybe<StringQueryOperatorInput>;
  json?: Maybe<JsonQueryOperatorInput>;
};


export type QueryAllContentfulHeroBodyRichTextNodeArgs = {
  filter?: Maybe<ContentfulHeroBodyRichTextNodeFilterInput>;
  sort?: Maybe<ContentfulHeroBodyRichTextNodeSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryContentfulHeroArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  name?: Maybe<StringQueryOperatorInput>;
  background?: Maybe<ContentfulAssetFilterInput>;
  page?: Maybe<ContentfulPageFilterListInput>;
  body?: Maybe<ContentfulHeroBodyRichTextNodeFilterInput>;
  spaceId?: Maybe<StringQueryOperatorInput>;
  contentful_id?: Maybe<StringQueryOperatorInput>;
  createdAt?: Maybe<DateQueryOperatorInput>;
  updatedAt?: Maybe<DateQueryOperatorInput>;
  sys?: Maybe<ContentfulHeroSysFilterInput>;
  node_locale?: Maybe<StringQueryOperatorInput>;
  childContentfulHeroBodyRichTextNode?: Maybe<ContentfulHeroBodyRichTextNodeFilterInput>;
};


export type QueryAllContentfulHeroArgs = {
  filter?: Maybe<ContentfulHeroFilterInput>;
  sort?: Maybe<ContentfulHeroSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryContentfulNavigationArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  name?: Maybe<StringQueryOperatorInput>;
  slug?: Maybe<StringQueryOperatorInput>;
  logo?: Maybe<ContentfulAssetFilterInput>;
  homePage?: Maybe<ContentfulPageFilterInput>;
  sideNavigation?: Maybe<ContentfulPageFilterListInput>;
  spaceId?: Maybe<StringQueryOperatorInput>;
  contentful_id?: Maybe<StringQueryOperatorInput>;
  createdAt?: Maybe<DateQueryOperatorInput>;
  updatedAt?: Maybe<DateQueryOperatorInput>;
  sys?: Maybe<ContentfulNavigationSysFilterInput>;
  node_locale?: Maybe<StringQueryOperatorInput>;
};


export type QueryAllContentfulNavigationArgs = {
  filter?: Maybe<ContentfulNavigationFilterInput>;
  sort?: Maybe<ContentfulNavigationSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryContentfulPageArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  name?: Maybe<StringQueryOperatorInput>;
  slug?: Maybe<StringQueryOperatorInput>;
  genericPage?: Maybe<BooleanQueryOperatorInput>;
  path?: Maybe<StringQueryOperatorInput>;
  pageSeo?: Maybe<ContentfulSeoFilterInput>;
  navigation?: Maybe<ContentfulNavigationFilterListInput>;
  spaceId?: Maybe<StringQueryOperatorInput>;
  contentful_id?: Maybe<StringQueryOperatorInput>;
  createdAt?: Maybe<DateQueryOperatorInput>;
  updatedAt?: Maybe<DateQueryOperatorInput>;
  sys?: Maybe<ContentfulPageSysFilterInput>;
  node_locale?: Maybe<StringQueryOperatorInput>;
};


export type QueryAllContentfulPageArgs = {
  filter?: Maybe<ContentfulPageFilterInput>;
  sort?: Maybe<ContentfulPageSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryContentfulSeoArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  name?: Maybe<StringQueryOperatorInput>;
  title?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  image?: Maybe<ContentfulAssetFilterInput>;
  blog_post?: Maybe<ContentfulBlogPostFilterListInput>;
  spaceId?: Maybe<StringQueryOperatorInput>;
  contentful_id?: Maybe<StringQueryOperatorInput>;
  createdAt?: Maybe<DateQueryOperatorInput>;
  updatedAt?: Maybe<DateQueryOperatorInput>;
  sys?: Maybe<ContentfulSeoSysFilterInput>;
  node_locale?: Maybe<StringQueryOperatorInput>;
  page?: Maybe<ContentfulPageFilterListInput>;
};


export type QueryAllContentfulSeoArgs = {
  filter?: Maybe<ContentfulSeoFilterInput>;
  sort?: Maybe<ContentfulSeoSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryContentfulContentTypeArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  name?: Maybe<StringQueryOperatorInput>;
  displayField?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
};


export type QueryAllContentfulContentTypeArgs = {
  filter?: Maybe<ContentfulContentTypeFilterInput>;
  sort?: Maybe<ContentfulContentTypeSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QuerySiteBuildMetadataArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  buildTime?: Maybe<DateQueryOperatorInput>;
};


export type QueryAllSiteBuildMetadataArgs = {
  filter?: Maybe<SiteBuildMetadataFilterInput>;
  sort?: Maybe<SiteBuildMetadataSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QuerySitePluginArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  resolve?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
  pluginOptions?: Maybe<SitePluginPluginOptionsFilterInput>;
  nodeAPIs?: Maybe<StringQueryOperatorInput>;
  browserAPIs?: Maybe<StringQueryOperatorInput>;
  ssrAPIs?: Maybe<StringQueryOperatorInput>;
  pluginFilepath?: Maybe<StringQueryOperatorInput>;
  packageJson?: Maybe<SitePluginPackageJsonFilterInput>;
};


export type QueryAllSitePluginArgs = {
  filter?: Maybe<SitePluginFilterInput>;
  sort?: Maybe<SitePluginSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};

export type Site = Node & {
  buildTime?: Maybe<Scalars['Date']>;
  siteMetadata?: Maybe<SiteSiteMetadata>;
  port?: Maybe<Scalars['Date']>;
  host?: Maybe<Scalars['String']>;
  polyfill?: Maybe<Scalars['Boolean']>;
  pathPrefix?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type SiteBuildTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type SitePortArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type SiteBuildMetadata = Node & {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  buildTime?: Maybe<Scalars['Date']>;
};


export type SiteBuildMetadataBuildTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type SiteBuildMetadataConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SiteBuildMetadataEdge>;
  nodes: Array<SiteBuildMetadata>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<SiteBuildMetadataGroupConnection>;
};


export type SiteBuildMetadataConnectionDistinctArgs = {
  field: SiteBuildMetadataFieldsEnum;
};


export type SiteBuildMetadataConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: SiteBuildMetadataFieldsEnum;
};

export type SiteBuildMetadataEdge = {
  next?: Maybe<SiteBuildMetadata>;
  node: SiteBuildMetadata;
  previous?: Maybe<SiteBuildMetadata>;
};

export type SiteBuildMetadataFieldsEnum = 
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'buildTime';

export type SiteBuildMetadataFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  buildTime?: Maybe<DateQueryOperatorInput>;
};

export type SiteBuildMetadataGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SiteBuildMetadataEdge>;
  nodes: Array<SiteBuildMetadata>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type SiteBuildMetadataSortInput = {
  fields?: Maybe<Array<Maybe<SiteBuildMetadataFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type SiteConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SiteEdge>;
  nodes: Array<Site>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<SiteGroupConnection>;
};


export type SiteConnectionDistinctArgs = {
  field: SiteFieldsEnum;
};


export type SiteConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: SiteFieldsEnum;
};

export type SiteEdge = {
  next?: Maybe<Site>;
  node: Site;
  previous?: Maybe<Site>;
};

export type SiteFieldsEnum = 
  | 'buildTime'
  | 'siteMetadata___title'
  | 'siteMetadata___author'
  | 'port'
  | 'host'
  | 'polyfill'
  | 'pathPrefix'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type SiteFilterInput = {
  buildTime?: Maybe<DateQueryOperatorInput>;
  siteMetadata?: Maybe<SiteSiteMetadataFilterInput>;
  port?: Maybe<DateQueryOperatorInput>;
  host?: Maybe<StringQueryOperatorInput>;
  polyfill?: Maybe<BooleanQueryOperatorInput>;
  pathPrefix?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type SiteGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SiteEdge>;
  nodes: Array<Site>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type SitePage = Node & {
  path: Scalars['String'];
  component: Scalars['String'];
  internalComponentName: Scalars['String'];
  componentChunkName: Scalars['String'];
  matchPath?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  isCreatedByStatefulCreatePages?: Maybe<Scalars['Boolean']>;
  context?: Maybe<SitePageContext>;
  pluginCreator?: Maybe<SitePlugin>;
  pluginCreatorId?: Maybe<Scalars['String']>;
  componentPath?: Maybe<Scalars['String']>;
};

export type SitePageConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SitePageEdge>;
  nodes: Array<SitePage>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<SitePageGroupConnection>;
};


export type SitePageConnectionDistinctArgs = {
  field: SitePageFieldsEnum;
};


export type SitePageConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: SitePageFieldsEnum;
};

export type SitePageContext = {
  locale?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
};

export type SitePageContextFilterInput = {
  locale?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
};

export type SitePageEdge = {
  next?: Maybe<SitePage>;
  node: SitePage;
  previous?: Maybe<SitePage>;
};

export type SitePageFieldsEnum = 
  | 'path'
  | 'component'
  | 'internalComponentName'
  | 'componentChunkName'
  | 'matchPath'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'isCreatedByStatefulCreatePages'
  | 'context___locale'
  | 'context___id'
  | 'pluginCreator___id'
  | 'pluginCreator___parent___id'
  | 'pluginCreator___parent___parent___id'
  | 'pluginCreator___parent___parent___children'
  | 'pluginCreator___parent___children'
  | 'pluginCreator___parent___children___id'
  | 'pluginCreator___parent___children___children'
  | 'pluginCreator___parent___internal___content'
  | 'pluginCreator___parent___internal___contentDigest'
  | 'pluginCreator___parent___internal___description'
  | 'pluginCreator___parent___internal___fieldOwners'
  | 'pluginCreator___parent___internal___ignoreType'
  | 'pluginCreator___parent___internal___mediaType'
  | 'pluginCreator___parent___internal___owner'
  | 'pluginCreator___parent___internal___type'
  | 'pluginCreator___children'
  | 'pluginCreator___children___id'
  | 'pluginCreator___children___parent___id'
  | 'pluginCreator___children___parent___children'
  | 'pluginCreator___children___children'
  | 'pluginCreator___children___children___id'
  | 'pluginCreator___children___children___children'
  | 'pluginCreator___children___internal___content'
  | 'pluginCreator___children___internal___contentDigest'
  | 'pluginCreator___children___internal___description'
  | 'pluginCreator___children___internal___fieldOwners'
  | 'pluginCreator___children___internal___ignoreType'
  | 'pluginCreator___children___internal___mediaType'
  | 'pluginCreator___children___internal___owner'
  | 'pluginCreator___children___internal___type'
  | 'pluginCreator___internal___content'
  | 'pluginCreator___internal___contentDigest'
  | 'pluginCreator___internal___description'
  | 'pluginCreator___internal___fieldOwners'
  | 'pluginCreator___internal___ignoreType'
  | 'pluginCreator___internal___mediaType'
  | 'pluginCreator___internal___owner'
  | 'pluginCreator___internal___type'
  | 'pluginCreator___resolve'
  | 'pluginCreator___name'
  | 'pluginCreator___version'
  | 'pluginCreator___pluginOptions___displayName'
  | 'pluginCreator___pluginOptions___name'
  | 'pluginCreator___pluginOptions___path'
  | 'pluginCreator___pluginOptions___spaceId'
  | 'pluginCreator___pluginOptions___accessToken'
  | 'pluginCreator___pluginOptions___richText___resolveFieldLocales'
  | 'pluginCreator___pluginOptions___fileName'
  | 'pluginCreator___pluginOptions___short_name'
  | 'pluginCreator___pluginOptions___start_url'
  | 'pluginCreator___pluginOptions___background_color'
  | 'pluginCreator___pluginOptions___theme_color'
  | 'pluginCreator___pluginOptions___display'
  | 'pluginCreator___pluginOptions___icon'
  | 'pluginCreator___pluginOptions___cache_busting_mode'
  | 'pluginCreator___pluginOptions___include_favicon'
  | 'pluginCreator___pluginOptions___legacy'
  | 'pluginCreator___pluginOptions___theme_color_in_head'
  | 'pluginCreator___pluginOptions___cacheDigest'
  | 'pluginCreator___pluginOptions___pathCheck'
  | 'pluginCreator___nodeAPIs'
  | 'pluginCreator___browserAPIs'
  | 'pluginCreator___ssrAPIs'
  | 'pluginCreator___pluginFilepath'
  | 'pluginCreator___packageJson___name'
  | 'pluginCreator___packageJson___description'
  | 'pluginCreator___packageJson___version'
  | 'pluginCreator___packageJson___main'
  | 'pluginCreator___packageJson___author'
  | 'pluginCreator___packageJson___license'
  | 'pluginCreator___packageJson___dependencies'
  | 'pluginCreator___packageJson___dependencies___name'
  | 'pluginCreator___packageJson___dependencies___version'
  | 'pluginCreator___packageJson___devDependencies'
  | 'pluginCreator___packageJson___devDependencies___name'
  | 'pluginCreator___packageJson___devDependencies___version'
  | 'pluginCreator___packageJson___peerDependencies'
  | 'pluginCreator___packageJson___peerDependencies___name'
  | 'pluginCreator___packageJson___peerDependencies___version'
  | 'pluginCreator___packageJson___keywords'
  | 'pluginCreatorId'
  | 'componentPath';

export type SitePageFilterInput = {
  path?: Maybe<StringQueryOperatorInput>;
  component?: Maybe<StringQueryOperatorInput>;
  internalComponentName?: Maybe<StringQueryOperatorInput>;
  componentChunkName?: Maybe<StringQueryOperatorInput>;
  matchPath?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  isCreatedByStatefulCreatePages?: Maybe<BooleanQueryOperatorInput>;
  context?: Maybe<SitePageContextFilterInput>;
  pluginCreator?: Maybe<SitePluginFilterInput>;
  pluginCreatorId?: Maybe<StringQueryOperatorInput>;
  componentPath?: Maybe<StringQueryOperatorInput>;
};

export type SitePageGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SitePageEdge>;
  nodes: Array<SitePage>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type SitePageSortInput = {
  fields?: Maybe<Array<Maybe<SitePageFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type SitePlugin = Node & {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  resolve?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
  pluginOptions?: Maybe<SitePluginPluginOptions>;
  nodeAPIs?: Maybe<Array<Maybe<Scalars['String']>>>;
  browserAPIs?: Maybe<Array<Maybe<Scalars['String']>>>;
  ssrAPIs?: Maybe<Array<Maybe<Scalars['String']>>>;
  pluginFilepath?: Maybe<Scalars['String']>;
  packageJson?: Maybe<SitePluginPackageJson>;
};

export type SitePluginConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SitePluginEdge>;
  nodes: Array<SitePlugin>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<SitePluginGroupConnection>;
};


export type SitePluginConnectionDistinctArgs = {
  field: SitePluginFieldsEnum;
};


export type SitePluginConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: SitePluginFieldsEnum;
};

export type SitePluginEdge = {
  next?: Maybe<SitePlugin>;
  node: SitePlugin;
  previous?: Maybe<SitePlugin>;
};

export type SitePluginFieldsEnum = 
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'resolve'
  | 'name'
  | 'version'
  | 'pluginOptions___displayName'
  | 'pluginOptions___name'
  | 'pluginOptions___path'
  | 'pluginOptions___spaceId'
  | 'pluginOptions___accessToken'
  | 'pluginOptions___richText___resolveFieldLocales'
  | 'pluginOptions___fileName'
  | 'pluginOptions___short_name'
  | 'pluginOptions___start_url'
  | 'pluginOptions___background_color'
  | 'pluginOptions___theme_color'
  | 'pluginOptions___display'
  | 'pluginOptions___icon'
  | 'pluginOptions___cache_busting_mode'
  | 'pluginOptions___include_favicon'
  | 'pluginOptions___legacy'
  | 'pluginOptions___theme_color_in_head'
  | 'pluginOptions___cacheDigest'
  | 'pluginOptions___pathCheck'
  | 'nodeAPIs'
  | 'browserAPIs'
  | 'ssrAPIs'
  | 'pluginFilepath'
  | 'packageJson___name'
  | 'packageJson___description'
  | 'packageJson___version'
  | 'packageJson___main'
  | 'packageJson___author'
  | 'packageJson___license'
  | 'packageJson___dependencies'
  | 'packageJson___dependencies___name'
  | 'packageJson___dependencies___version'
  | 'packageJson___devDependencies'
  | 'packageJson___devDependencies___name'
  | 'packageJson___devDependencies___version'
  | 'packageJson___peerDependencies'
  | 'packageJson___peerDependencies___name'
  | 'packageJson___peerDependencies___version'
  | 'packageJson___keywords';

export type SitePluginFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  resolve?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
  pluginOptions?: Maybe<SitePluginPluginOptionsFilterInput>;
  nodeAPIs?: Maybe<StringQueryOperatorInput>;
  browserAPIs?: Maybe<StringQueryOperatorInput>;
  ssrAPIs?: Maybe<StringQueryOperatorInput>;
  pluginFilepath?: Maybe<StringQueryOperatorInput>;
  packageJson?: Maybe<SitePluginPackageJsonFilterInput>;
};

export type SitePluginGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SitePluginEdge>;
  nodes: Array<SitePlugin>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type SitePluginPackageJson = {
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
  main?: Maybe<Scalars['String']>;
  author?: Maybe<Scalars['String']>;
  license?: Maybe<Scalars['String']>;
  dependencies?: Maybe<Array<Maybe<SitePluginPackageJsonDependencies>>>;
  devDependencies?: Maybe<Array<Maybe<SitePluginPackageJsonDevDependencies>>>;
  peerDependencies?: Maybe<Array<Maybe<SitePluginPackageJsonPeerDependencies>>>;
  keywords?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type SitePluginPackageJsonDependencies = {
  name?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
};

export type SitePluginPackageJsonDependenciesFilterInput = {
  name?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPackageJsonDependenciesFilterListInput = {
  elemMatch?: Maybe<SitePluginPackageJsonDependenciesFilterInput>;
};

export type SitePluginPackageJsonDevDependencies = {
  name?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
};

export type SitePluginPackageJsonDevDependenciesFilterInput = {
  name?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPackageJsonDevDependenciesFilterListInput = {
  elemMatch?: Maybe<SitePluginPackageJsonDevDependenciesFilterInput>;
};

export type SitePluginPackageJsonFilterInput = {
  name?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
  main?: Maybe<StringQueryOperatorInput>;
  author?: Maybe<StringQueryOperatorInput>;
  license?: Maybe<StringQueryOperatorInput>;
  dependencies?: Maybe<SitePluginPackageJsonDependenciesFilterListInput>;
  devDependencies?: Maybe<SitePluginPackageJsonDevDependenciesFilterListInput>;
  peerDependencies?: Maybe<SitePluginPackageJsonPeerDependenciesFilterListInput>;
  keywords?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPackageJsonPeerDependencies = {
  name?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
};

export type SitePluginPackageJsonPeerDependenciesFilterInput = {
  name?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPackageJsonPeerDependenciesFilterListInput = {
  elemMatch?: Maybe<SitePluginPackageJsonPeerDependenciesFilterInput>;
};

export type SitePluginPluginOptions = {
  displayName?: Maybe<Scalars['Boolean']>;
  name?: Maybe<Scalars['String']>;
  path?: Maybe<Scalars['String']>;
  spaceId?: Maybe<Scalars['String']>;
  accessToken?: Maybe<Scalars['String']>;
  richText?: Maybe<SitePluginPluginOptionsRichText>;
  fileName?: Maybe<Scalars['String']>;
  short_name?: Maybe<Scalars['String']>;
  start_url?: Maybe<Scalars['String']>;
  background_color?: Maybe<Scalars['String']>;
  theme_color?: Maybe<Scalars['String']>;
  display?: Maybe<Scalars['String']>;
  icon?: Maybe<Scalars['String']>;
  cache_busting_mode?: Maybe<Scalars['String']>;
  include_favicon?: Maybe<Scalars['Boolean']>;
  legacy?: Maybe<Scalars['Boolean']>;
  theme_color_in_head?: Maybe<Scalars['Boolean']>;
  cacheDigest?: Maybe<Scalars['String']>;
  pathCheck?: Maybe<Scalars['Boolean']>;
};

export type SitePluginPluginOptionsFilterInput = {
  displayName?: Maybe<BooleanQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  path?: Maybe<StringQueryOperatorInput>;
  spaceId?: Maybe<StringQueryOperatorInput>;
  accessToken?: Maybe<StringQueryOperatorInput>;
  richText?: Maybe<SitePluginPluginOptionsRichTextFilterInput>;
  fileName?: Maybe<StringQueryOperatorInput>;
  short_name?: Maybe<StringQueryOperatorInput>;
  start_url?: Maybe<StringQueryOperatorInput>;
  background_color?: Maybe<StringQueryOperatorInput>;
  theme_color?: Maybe<StringQueryOperatorInput>;
  display?: Maybe<StringQueryOperatorInput>;
  icon?: Maybe<StringQueryOperatorInput>;
  cache_busting_mode?: Maybe<StringQueryOperatorInput>;
  include_favicon?: Maybe<BooleanQueryOperatorInput>;
  legacy?: Maybe<BooleanQueryOperatorInput>;
  theme_color_in_head?: Maybe<BooleanQueryOperatorInput>;
  cacheDigest?: Maybe<StringQueryOperatorInput>;
  pathCheck?: Maybe<BooleanQueryOperatorInput>;
};

export type SitePluginPluginOptionsRichText = {
  resolveFieldLocales?: Maybe<Scalars['Boolean']>;
};

export type SitePluginPluginOptionsRichTextFilterInput = {
  resolveFieldLocales?: Maybe<BooleanQueryOperatorInput>;
};

export type SitePluginSortInput = {
  fields?: Maybe<Array<Maybe<SitePluginFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type SiteSiteMetadata = {
  title?: Maybe<Scalars['String']>;
  author?: Maybe<Scalars['String']>;
};

export type SiteSiteMetadataFilterInput = {
  title?: Maybe<StringQueryOperatorInput>;
  author?: Maybe<StringQueryOperatorInput>;
};

export type SiteSortInput = {
  fields?: Maybe<Array<Maybe<SiteFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type SortOrderEnum = 
  | 'ASC'
  | 'DESC';

export type StringQueryOperatorInput = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
};

export type Unnamed_1_QueryVariables = Exact<{ [key: string]: never; }>;


export type Unnamed_1_Query = { site?: Maybe<{ siteMetadata?: Maybe<Pick<SiteSiteMetadata, 'title' | 'author'>> }> };

export type HeroBlockFragment = { body?: Maybe<Pick<ContentfulHeroBodyRichTextNode, 'json'>>, background?: Maybe<{ fluid?: Maybe<GatsbyContentfulFluid_WithWebpFragment> }> };

export type EmbeddedRifFragment = { body?: Maybe<Pick<ContentfulEmbeddedRifBodyRichTextNode, 'json'>> };

export type BlogPostListFragment = { blogPostList: (
    Pick<ContentfulBlogPostConnection, 'totalCount'>
    & { nodes: Array<(
      Pick<ContentfulBlogPost, 'id' | 'title' | 'createdAt' | 'slug' | 'description'>
      & { image?: Maybe<{ fluid?: Maybe<GatsbyContentfulFluid_WithWebpFragment> }> }
    )> }
  ) };

export type PageSeoFragment = { pageSeo?: Maybe<(
    Pick<ContentfulSeo, 'title' | 'description'>
    & { image?: Maybe<{ file?: Maybe<Pick<ContentfulAssetFile, 'url'>> }> }
  )> };

export type SiteNavigationFragment = { navigation?: Maybe<{ homePage?: Maybe<Pick<ContentfulPage, 'path' | 'name'>>, logo?: Maybe<{ fixed?: Maybe<GatsbyContentfulFixed_WithWebp_NoBase64Fragment> }>, sideNavigation?: Maybe<Array<Maybe<Pick<ContentfulPage, 'name' | 'path'>>>> }> };

export type PageBlocksFragment = { blocks?: Maybe<Array<Maybe<(
    { __typename: 'ContentfulEmbeddedRif' }
    & EmbeddedRifFragment
  ) | (
    { __typename: 'ContentfulHero' }
    & HeroBlockFragment
  )>>> };

export type AllContentfulLocaleQueryVariables = Exact<{ [key: string]: never; }>;


export type AllContentfulLocaleQuery = { allContentfulLocale: (
    Pick<ContentfulLocaleConnection, 'totalCount'>
    & { nodes: Array<Pick<ContentfulLocale, 'code' | 'name' | 'default' | 'fallbackCode'>> }
  ) };

export type BlogPageQueryVariables = Exact<{
  id: Scalars['String'];
  locale: Scalars['String'];
}>;


export type BlogPageQuery = (
  { page?: Maybe<PageSeoFragment> }
  & SiteNavigationFragment
  & BlogPostListFragment
);

export type BlogPostQueryVariables = Exact<{
  id: Scalars['String'];
  locale: Scalars['String'];
}>;


export type BlogPostQuery = (
  { post?: Maybe<(
    Pick<ContentfulBlogPost, 'id' | 'title' | 'createdAt' | 'slug'>
    & { seo?: Maybe<(
      Pick<ContentfulSeo, 'title' | 'description'>
      & { image?: Maybe<{ file?: Maybe<Pick<ContentfulAssetFile, 'url'>> }> }
    )>, image?: Maybe<{ fluid?: Maybe<GatsbyContentfulFluid_WithWebpFragment> }>, body?: Maybe<Pick<ContentfulBlogPostBodyRichTextNode, 'json'>> }
  )> }
  & SiteNavigationFragment
);

export type GenericPageQueryVariables = Exact<{
  id: Scalars['String'];
  locale: Scalars['String'];
}>;


export type GenericPageQuery = (
  { page?: Maybe<(
    PageSeoFragment
    & PageBlocksFragment
  )> }
  & SiteNavigationFragment
);

export type GatsbyContentfulFixedFragment = Pick<ContentfulFixed, 'base64' | 'width' | 'height' | 'src' | 'srcSet'>;

export type GatsbyContentfulFixed_TracedSvgFragment = Pick<ContentfulFixed, 'tracedSVG' | 'width' | 'height' | 'src' | 'srcSet'>;

export type GatsbyContentfulFixed_NoBase64Fragment = Pick<ContentfulFixed, 'width' | 'height' | 'src' | 'srcSet'>;

export type GatsbyContentfulFixed_WithWebpFragment = Pick<ContentfulFixed, 'base64' | 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'>;

export type GatsbyContentfulFixed_WithWebp_NoBase64Fragment = Pick<ContentfulFixed, 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'>;

export type GatsbyContentfulFluidFragment = Pick<ContentfulFluid, 'base64' | 'aspectRatio' | 'src' | 'srcSet' | 'sizes'>;

export type GatsbyContentfulFluid_TracedSvgFragment = Pick<ContentfulFluid, 'tracedSVG' | 'aspectRatio' | 'src' | 'srcSet' | 'sizes'>;

export type GatsbyContentfulFluid_NoBase64Fragment = Pick<ContentfulFluid, 'aspectRatio' | 'src' | 'srcSet' | 'sizes'>;

export type GatsbyContentfulFluid_WithWebpFragment = Pick<ContentfulFluid, 'base64' | 'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'>;

export type GatsbyContentfulFluid_WithWebp_NoBase64Fragment = Pick<ContentfulFluid, 'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'>;

export type GatsbyContentfulResolutionsFragment = Pick<ContentfulResolutions, 'base64' | 'width' | 'height' | 'src' | 'srcSet'>;

export type GatsbyContentfulResolutions_TracedSvgFragment = Pick<ContentfulResolutions, 'tracedSVG' | 'width' | 'height' | 'src' | 'srcSet'>;

export type GatsbyContentfulResolutions_NoBase64Fragment = Pick<ContentfulResolutions, 'width' | 'height' | 'src' | 'srcSet'>;

export type GatsbyContentfulResolutions_WithWebpFragment = Pick<ContentfulResolutions, 'base64' | 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'>;

export type GatsbyContentfulResolutions_WithWebp_NoBase64Fragment = Pick<ContentfulResolutions, 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'>;

export type GatsbyContentfulSizesFragment = Pick<ContentfulSizes, 'base64' | 'aspectRatio' | 'src' | 'srcSet' | 'sizes'>;

export type GatsbyContentfulSizes_TracedSvgFragment = Pick<ContentfulSizes, 'tracedSVG' | 'aspectRatio' | 'src' | 'srcSet' | 'sizes'>;

export type GatsbyContentfulSizes_NoBase64Fragment = Pick<ContentfulSizes, 'aspectRatio' | 'src' | 'srcSet' | 'sizes'>;

export type GatsbyContentfulSizes_WithWebpFragment = Pick<ContentfulSizes, 'base64' | 'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'>;

export type GatsbyContentfulSizes_WithWebp_NoBase64Fragment = Pick<ContentfulSizes, 'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'>;

export type GatsbyImageSharpFixedFragment = Pick<ImageSharpFixed, 'base64' | 'width' | 'height' | 'src' | 'srcSet'>;

export type GatsbyImageSharpFixed_TracedSvgFragment = Pick<ImageSharpFixed, 'tracedSVG' | 'width' | 'height' | 'src' | 'srcSet'>;

export type GatsbyImageSharpFixed_WithWebpFragment = Pick<ImageSharpFixed, 'base64' | 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'>;

export type GatsbyImageSharpFixed_WithWebp_TracedSvgFragment = Pick<ImageSharpFixed, 'tracedSVG' | 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'>;

export type GatsbyImageSharpFixed_NoBase64Fragment = Pick<ImageSharpFixed, 'width' | 'height' | 'src' | 'srcSet'>;

export type GatsbyImageSharpFixed_WithWebp_NoBase64Fragment = Pick<ImageSharpFixed, 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'>;

export type GatsbyImageSharpFluidFragment = Pick<ImageSharpFluid, 'base64' | 'aspectRatio' | 'src' | 'srcSet' | 'sizes'>;

export type GatsbyImageSharpFluidLimitPresentationSizeFragment = { maxHeight: ImageSharpFluid['presentationHeight'], maxWidth: ImageSharpFluid['presentationWidth'] };

export type GatsbyImageSharpFluid_TracedSvgFragment = Pick<ImageSharpFluid, 'tracedSVG' | 'aspectRatio' | 'src' | 'srcSet' | 'sizes'>;

export type GatsbyImageSharpFluid_WithWebpFragment = Pick<ImageSharpFluid, 'base64' | 'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'>;

export type GatsbyImageSharpFluid_WithWebp_TracedSvgFragment = Pick<ImageSharpFluid, 'tracedSVG' | 'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'>;

export type GatsbyImageSharpFluid_NoBase64Fragment = Pick<ImageSharpFluid, 'aspectRatio' | 'src' | 'srcSet' | 'sizes'>;

export type GatsbyImageSharpFluid_WithWebp_NoBase64Fragment = Pick<ImageSharpFluid, 'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'>;

export type GatsbyImageSharpResolutionsFragment = Pick<ImageSharpResolutions, 'base64' | 'width' | 'height' | 'src' | 'srcSet'>;

export type GatsbyImageSharpResolutions_TracedSvgFragment = Pick<ImageSharpResolutions, 'tracedSVG' | 'width' | 'height' | 'src' | 'srcSet'>;

export type GatsbyImageSharpResolutions_WithWebpFragment = Pick<ImageSharpResolutions, 'base64' | 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'>;

export type GatsbyImageSharpResolutions_WithWebp_TracedSvgFragment = Pick<ImageSharpResolutions, 'tracedSVG' | 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'>;

export type GatsbyImageSharpResolutions_NoBase64Fragment = Pick<ImageSharpResolutions, 'width' | 'height' | 'src' | 'srcSet'>;

export type GatsbyImageSharpResolutions_WithWebp_NoBase64Fragment = Pick<ImageSharpResolutions, 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'>;

export type GatsbyImageSharpSizesFragment = Pick<ImageSharpSizes, 'base64' | 'aspectRatio' | 'src' | 'srcSet' | 'sizes'>;

export type GatsbyImageSharpSizes_TracedSvgFragment = Pick<ImageSharpSizes, 'tracedSVG' | 'aspectRatio' | 'src' | 'srcSet' | 'sizes'>;

export type GatsbyImageSharpSizes_WithWebpFragment = Pick<ImageSharpSizes, 'base64' | 'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'>;

export type GatsbyImageSharpSizes_WithWebp_TracedSvgFragment = Pick<ImageSharpSizes, 'tracedSVG' | 'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'>;

export type GatsbyImageSharpSizes_NoBase64Fragment = Pick<ImageSharpSizes, 'aspectRatio' | 'src' | 'srcSet' | 'sizes'>;

export type GatsbyImageSharpSizes_WithWebp_NoBase64Fragment = Pick<ImageSharpSizes, 'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'>;
