import ItemsPage, {
  getServerSideProps as getItemsProps,
  mapPropsToSEO as mapItemsPropsToSEO
} from './pages/items/index'
import ItemPage, {
  getServerSideProps as getItemProps,
  mapPropsToSEO as mapItemPropsToSEO
} from './pages/items/[id]'
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
    mapPropsToSEO: mapItemsPropsToSEO,
  },
  {
    path: '/items/:id',
    component: ItemPage,
    getServerSideProps: getItemProps,
    mapPropsToSEO: mapItemPropsToSEO,
  },
];
