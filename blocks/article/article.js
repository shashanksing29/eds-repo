export default function decorate(block) {
  const imageContainer = block.querySelector('div:nth-child(1)');
  const contentContainer = block.querySelector('div:nth-child(2)');

  const image = imageContainer.querySelector('img');
  const featuredText = contentContainer.querySelector('h4');
  const title = contentContainer.querySelector('h2');
  const description = contentContainer.querySelector('p');
  const cta = contentContainer.querySelector('a');

  block.innerHTML = `
    <div class="article-image">
      ${image.outerHTML}
    </div>
    <div class="article-content">
      <div class="featured-text">${featuredText.outerHTML}</div>
      <h2 class="title">${title.innerHTML}</h2>
      <p class="description">${description.innerHTML}</p>
      <div class="cta-container">
        <a class="cta" href="${cta.href}">${cta.innerHTML}</a>
      </div>
    </div>
  `;
}
