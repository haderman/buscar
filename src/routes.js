import ItemsPage, { getServerSideProps as getItemsProps } from './pages/items/index'
import ItemPage, { getServerSideProps as getItemProps } from './pages/items/[id]'
import HomePage from './pages/index'

export const routes = [
  {
    path: '/',
    component: HomePage,
  },
  {
    path: '/items',
    component: ItemsPage,
    getServerSideProps: getItemsProps,
  },
  {
    path: '/items/:id',
    component: ItemPage,
    getServerSideProps: getItemProps,
  },
];
