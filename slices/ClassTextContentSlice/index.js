import { PrismicRichText } from '@prismicio/react';
import React from 'react';

const ClassTextContentSlice = ({ slice }) => (
  <PrismicRichText field={slice.primary.textContent} />
);

export default ClassTextContentSlice;
