import ImageElement from '../ImageElement/ImageElement';
import style from './ImageList.module.css';

const TEST_URL = "https://www.ancarevet.com/sites/default/files/styles/large/public/labrador-retriever-dog-breed-info.jpg?itok=-Z_ky5J6"

const images = [
  { url: TEST_URL, title: 'Lorem ipsum' },
  { url: TEST_URL, title: 'Lorem ipsum' },
  { url: TEST_URL, title: 'Lorem ipsum' },
  { url: TEST_URL, title: 'Lorem ipsum' },
  { url: TEST_URL, title: 'Lorem ipsum' },
  { url: TEST_URL, title: 'Lorem ipsum' },
  { url: TEST_URL, title: 'Lorem ipsum' },
  { url: TEST_URL, title: 'Lorem ipsum' },
  { url: TEST_URL, title: 'Lorem ipsum' },
  { url: TEST_URL, title: 'Lorem ipsum' },
  { url: TEST_URL, title: 'Lorem ipsum' },
  { url: TEST_URL, title: 'Lorem ipsum' },
  { url: TEST_URL, title: 'Lorem ipsum' },
  { url: TEST_URL, title: 'Lorem ipsum' },
]

function ImageList() {
  return <div class={style.ImageList}>
    <For each={images}>{(image) => <ImageElement url={image.url} title={image.title} />}</For>
  </div>
}

export default ImageList;
