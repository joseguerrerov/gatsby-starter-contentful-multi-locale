import React from 'react';
import { PageBlocksFragment } from '../../../gatsby-graphql';
import Blocks from './Blocks';

interface IPageContentProps {
  blocks?: PageBlocksFragment['blocks'] | null;
}

const PageBlocks: React.FC<IPageContentProps> = ({ blocks }) => (
  <>
    {blocks?.map((contentBlock, index) => {
      const ComponentName = contentBlock?.__typename.replace('Contentful', '');
      if (!ComponentName || !Blocks[ComponentName]) return null;
      const Component = Blocks[ComponentName];
      return (
        <Component
          key={`${contentBlock?.__typename}-${index}`}
          {...contentBlock}
        />
      );
    })}
  </>
);

export default PageBlocks;
