import styles from './ImageElement.module.css';

function ImageElement(props) {
  return <div class={styles.ImageElementRoot}>
    <img class={styles.ImageElementImg} src={props.url} />
    <div class={styles.ImageElementControls}>
      <p class={styles.ImageElementTitle}>{props.title}</p>
      <div class={styles.ImageElementButtons}>
        <p><i class="fas fa-arrow-up"></i> 666</p>
        <p><i class="fas fa-comments"></i> 50</p>
        <p><i class="fas fa-eye"></i> 33k</p>
      </div>
    </div>
  </div>
}

export default ImageElement;
