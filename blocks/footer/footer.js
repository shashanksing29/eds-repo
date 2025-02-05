import { getMetadata } from '../../scripts/aem.js';

/**
 * loads and decorates the footer
 * @param {Element} block The footer block element
 */
export default async function decorate(block) {
  // load footer as fragment
  const footerMeta = getMetadata('footer');
  const footerPath = footerMeta ? new URL(footerMeta, window.location).pathname : '/footer';

  // decorate footer DOM
  block.textContent = '';
  const footer = document.createElement('div');
  footer.classList.add('footer-content');

  // Create content for the footer
  footer.innerHTML = `
    <div class="footer-top">
      <h1>WKND</h1>
      <nav>
        <ul>
          <li><a href="#">MAGAZINE</a></li>
          <li><a href="#">ADVENTURES</a></li>
          <li><a href="#">FAQS</a></li>
          <li><a href="#">ABOUT US</a></li>
        </ul>
      </nav>
      <div class="footer-social">
        <span>FOLLOW US</span>
        <a href="#"><img src="/icons/facebook.svg" alt="Facebook"></a>
        <a href="#"><img src="/icons/twitter.svg" alt="Twitter"></a>
        <a href="#"><img src="/icons/instagram.svg" alt="Instagram"></a>
      </div>
    </div>
    <div class="footer-bottom">
      <p>© 2019, WKND Site.</p>
      <p>WKND is a fictitious adventure and travel website created by Adobe to demonstrate how anyone can use Adobe Experience Manager to build a beautiful, feature-rich website over a single weekend. This site is built entirely with Adobe Experience Manager <a href="#">Core Components</a> and <a href="#">Archetype</a> that are available as open source code to the public. The entire <a href="#">site source code</a> is available as open source as well and is accompanied with a <a href="#">detailed tutorial</a> on how to recreate the site.</p>
      <p>Many of the beautiful images in the WKND site are available for purchase via <a href="#">Adobe Stock</a>.</p>
    </div>
  `;

  block.append(footer);
}
