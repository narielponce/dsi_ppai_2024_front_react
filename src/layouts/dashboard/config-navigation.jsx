import SvgColor from 'src/components/svg-color';

// ----------------------------------------------------------------------

const icon = (name) => (
  <SvgColor src={`/assets/icons/navbar/${name}.svg`} sx={{ width: 1, height: 1 }} />
);

const navConfig = [
  {
    title: 'dashboard',
    path: '/',
    icon: icon('ic_analytics'),
  },
  {
    title: 'user',
    path: '/user',
    icon: icon('ic_user'),
  },
  {
    title: 'product',
    path: '/products',
    icon: icon('ic_cart'),
  },
  {
    title: 'blog',
    path: '/blog',
    icon: icon('ic_blog'),
  },
  {
    title: 'login',
    path: '/login',
    icon: icon('ic_lock'),
  },
  {
    title: 'Administrar catálogo de vinos',
    path: '/404',
    icon: icon('ic_disabled'),
  },
  {
    title: 'Administrar regiones vitivinícolas y bodegas',
    path: '/404',
    icon: icon('ic_disabled'),
  },
  {
    title: 'Administrar enófilos y sommeliers',
    path: '/404',
    icon: icon('ic_disabled'),
  },
  {
    title: 'Gestionar calificaciones y reseñas sobre vinos',
    path: '/404',
    icon: icon('ic_disabled'),
  },
  {
    title: 'Gestionar seguimiento de amigos y publicación en redes sociales',
    path: '/404',
    icon: icon('ic_disabled'),
  },
  {
    title: 'Administrar varietales y tipos de uva',
    path: '/404',
    icon: icon('ic_disabled'),
  },
  {
    title: 'Administrar maridajes con comidas',
    path: '/404',
    icon: icon('ic_disabled'),
  },
  {
    title: 'Generar informes de Enófilos y Bodegas.',
    path: '/404',
    icon: icon('ic_disabled'),
  },
  {
    title: 'Generar informes de sobre vinos',
    path: '/404',
    icon: icon('ic_disabled'),
  },
  // {
  //   title: 'Not found',
  //   path: '/404',
  //   icon: icon('ic_disabled'),
  // },
];

export default navConfig;
