import logo from './logo.svg';
import styles from './App.module.css';

import ImageList from './components/ImageList/ImageList';

function App() {
  return (
    <div class={styles.App}>
      <div class={styles.NavigationBar}>
        <h1>randmgur</h1>
      </div>
      <ImageList />
    </div>
  );
}

export default App;
