import React from 'react';
import Hero from '../Hero';
import EmbeddedRif from '../EmbeddedRif';

interface IContentBlocks {
  [key: string]: React.FC;
}

const Blocks: IContentBlocks = {
  Hero: Hero,
  EmbeddedRif: EmbeddedRif,
};

export default Blocks;
