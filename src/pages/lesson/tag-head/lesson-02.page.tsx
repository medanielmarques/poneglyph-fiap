import '@prismicio/client';

import { Lesson } from '../components/lesson';

export default function TagHeadLesson02() {
  return (
    <Lesson
      lesson='Estrutura de um documento HTML'
      progress={20}
      title='A qdwwd <head>'
      texts={[
        `Imediatamente após a abertura da tag HTML, você encontrará o cabeçalho
        do documento, que é identificada através da abertura e fechamento das
        tags de cabeçalho.`,
        `O cabeçalho de um arquivo HTML contém todos os elementos que ajudam a
        fazer a página funcionar.`,
      ]}
      previous='lesson-01'
      next='lesson-03'
    />
  );
}
