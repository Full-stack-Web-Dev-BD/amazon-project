import { adminRoot } from './defaultValues';

const data = [
  {
    id: 'Product Asset ',
    icon: 'simple-icon-layers',
    label: 'Product Manager',
    to: `${adminRoot}/product-manager`,
  },
  {
    id: 'My Kit ',
    icon: 'simple-icon-star',
    label: 'My Kit ',
    to: `${adminRoot}/brand-kit`,
  },
  {
    id: 'My Projects',
    icon: 'simple-icon-organization',
    label: 'My Projects',
    to: `${adminRoot}/my-project`,
  },
  {
    id: 'Settings',
    icon: 'iconsminds-gears',
    label: 'Settings',
    to: `${adminRoot}/setting`,
  },
];
export default data;
