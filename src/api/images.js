const TEST_URL = "https://www.ancarevet.com/sites/default/files/styles/large/public/labrador-retriever-dog-breed-info.jpg?itok=-Z_ky5J6";

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
  { url: TEST_URL, title: 'Lorem ipsum' },
  { url: TEST_URL, title: 'Lorem ipsum' },
  { url: TEST_URL, title: 'Lorem ipsum' },
]

export const fetchImages = (page) => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(images);
    }, 1000);
  })
}
