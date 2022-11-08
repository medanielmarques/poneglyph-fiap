import '@prismicio/client';

import { Lesson } from '../components/lesson';

export default function TagHeadLesson01() {
  return (
    <Lesson
      progress={25}
      title='A Tag <head>'
      texts={[
        `Imediatamente após a abertura da tag HTML, você encontrará o cabeçalho
        do documento, que é identificada através da abertura e fechamento das
        tags de cabeçalho.`,
        `O cabeçalho de um arquivo HTML contém todos os elementos que ajudam a
        fazer a página funcionar.`,
      ]}
      next='lesson-02'
    />
  );
}
