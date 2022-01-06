import { createResource } from 'solid-js';
import ImageElement from '../ImageElement/ImageElement';
import style from 'src/components/ImageList/ImageList.module.css';
import { fetchImages } from 'src/api/images';

function ImageList() {
  const [images] = createResource(1, fetchImages);

  return <div class={style.ImageList}>
    <span>{images.loading && "Loading.."}</span>
    <For each={images()}>{(image) => <ImageElement url={image.url} title={image.title} />}</For>
  </div>
}

export default ImageList;
