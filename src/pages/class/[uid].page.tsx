import { PrismicRichText } from '@prismicio/react';

export default function ClassContent({ slice }) {
  return <PrismicRichText field={slice.primary.textContent} />;
}

// export const
