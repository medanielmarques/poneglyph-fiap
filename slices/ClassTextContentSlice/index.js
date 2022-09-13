import { PrismicRichText } from '@prismicio/react';
import React from 'react';

const ClassTextContentSlice = ({ slice }) => (
  <section>
    <PrismicRichText field={slice.primary.textContent} />
  </section>
);

export default ClassTextContentSlice;
