import { createElement } from "../helper/createElement.js";

export const createHeader = (parent) => {
  const container = createElement('div', {
    className: 'container header__container',
  });

  parent.append(container);

  const headerLogoLink = createElement('a', {
    className: 'header__logo-link',
    href: '#',
  });

  const logo = createElement('img', {
    className: 'header__logo',
    src: 'img/logo.svg',
    alt: 'Логотип сервиса Brain Cards',
  });

  headerLogoLink.append(logo);

  const headerTitle = createElement('h2', {
    className: 'header__subtitle',
    textContent: 'Категории',
  });

  const headerBtn = createElement('button', {
    className: 'header__btn',
    textContent: 'Добавить категорию',
  });

  container.append(headerLogoLink, headerTitle, headerBtn);

  const updateHeaderTitle = title => {
    headerTitle.textContent = title;
  };

  return { headerLogoLink, headerBtn, updateHeaderTitle };
};