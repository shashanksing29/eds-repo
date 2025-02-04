import { loadFragment } from '../fragment/fragment.js';

/**
 * Decorates the header block.
 * @param {Element} block The header block element
 */
export default async function decorate(block) {
  const header = document.createElement('header');
  const nav = document.createElement('nav');
  header.append(nav);

  // Brand
  const brand = document.createElement('div');
  brand.className = 'nav-brand';
  const brandLink = document.createElement('a');
  brandLink.href = '/';
  brandLink.innerHTML = 'WKND';
  brandLink.style.color = '#000'; // Set the color to black
  brand.append(brandLink);

  // Navigation Sections
  const sections = document.createElement('div');
  sections.className = 'nav-sections';
  const sectionsList = document.createElement('ul');
  const sectionNames = ['Magazine', 'Adventures', 'FAQs', 'About Us'];
  sectionNames.forEach((name) => {
    const listItem = document.createElement('li');
    const link = document.createElement('a');
    link.href = `/${name.toLowerCase().replace(' ', '-')}`;
    link.textContent = name.toUpperCase();
    listItem.append(link);
    sectionsList.append(listItem);
  });
  sections.append(sectionsList);

  // Navigation Tools
  const tools = document.createElement('div');
  tools.className = 'nav-tools';
  const search = document.createElement('div');
  search.className = 'search';
  const searchForm = document.createElement('form');
  searchForm.action = 'https://www.google.com/search';
  searchForm.method = 'get';
  const searchInput = document.createElement('input');
  searchInput.type = 'text';
  searchInput.name = 'q';
  searchInput.placeholder = 'Search';
  const searchIcon = document.createElement('img');
  searchIcon.src = `${window.hlx.codeBasePath}/icons/search.svg`;
  searchIcon.alt = 'Search';
  searchForm.append(searchIcon, searchInput);
  search.append(searchForm);
  tools.append(search);

  // Append all to nav
  nav.append(brand, sections, tools);

  block.append(header);
}
