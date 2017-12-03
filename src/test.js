import Ezol from './Ezol';

const headerView = () => {
  Ezol((collection, elements, attach) => {
    const { header, nav, div } = elements;

    attach(header({ id: 'header' }, '', [
      nav({ id: 'nav' }, '', [
        div({ id: 'logo' }, 'I am logo', [])
      ])
    ]), 'body');
  });
};

export default () => headerView();
