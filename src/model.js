import image from './assets/leroy.jpg';
import {
  TitleBlock,
  TextBlock,
  ImageBlock,
  TextColumnsBlock,
} from './classes/blocks';

export const model = [
  new TitleBlock('Конструктор сайтов', {
    tag: 'h2',
    styles: 'background: darkred; color: $fff; text-align:center',
  }),
  new ImageBlock(image, {
    styles: 'padding: 2rem 0; display: flex; justify-content: center;',
    alt: 'my image',
    imageStyles: 'width: 500px; height: auto',
  }),
];
