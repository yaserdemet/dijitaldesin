// Route path constants

function path(root, sublink) {
  return `${root}${sublink}`;
}

const ROOTS_APP = '/';

// ----------------------------------------------------------------------

export const PATH_PAGE = {
  root: ROOTS_APP,
  home: path(ROOTS_APP, ''),
  about: path(ROOTS_APP, 'about'),
  services: path(ROOTS_APP, 'services'),
  contact: path(ROOTS_APP, 'contact'),
  referances: path(ROOTS_APP, 'reference'),
  kvkk: path(ROOTS_APP, 'kvkk'),
  secretPolicy: path(ROOTS_APP, 'secret-policy'),
};