export const navMenuSiderDashboardButtons: ISiderNavBarDashboard[] = [
  {
    id: 1,
    title: 'início',
    url: 'inicio',
    icon: 'HomeOutlined'
  },
  {
    id: 2,
    title: 'compras',
    url: 'compras',
    icon: 'ShoppingCartOutlined'
  },
  {
    id: 3,
    title: 'configurações',
    url: 'configuracoes',
    icon: 'UserOutlined'
  },
  {
    id: 4,
    title: 'acompanhamento',
    url: 'acompanhamento',
    icon: 'DollarOutlined'
  }
]

interface ISiderNavBarDashboard {
  id: number,
  title: string,
  url: string,
  icon: string,
}
