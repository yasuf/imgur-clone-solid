const images = [
  { url: TEST_URL, title: 'Lorem ipsum' },
  { url: TEST_URL, title: 'Lorem ipsum' },
  { url: TEST_URL, title: 'Lorem ipsum' },
  { url: TEST_URL, title: 'Lorem ipsum' },
  { url: TEST_URL, title: 'Lorem ipsum' },
  { url: TEST_URL, title: 'Lorem ipsum' },
  { url: TEST_URL, title: 'Lorem ipsum' },
  { url: TEST_URL, title: 'Lorem ipsum' },
]

export const fetchImages = () => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(images);
    }, 500);
  })
}
