export const navMenuSiderDashboardButtons: ISiderNavBarDashboard[] = [
  {
    id: 1,
    title: 'Minhas compras',
    url: '/minhas-compras',
    icon: 'ShoppingCartOutlined'
  }, 
  {
    id: 2,
    title: 'Minhas configurações',
    url: '/minhas-configuracoes',
    icon: 'UserOutlined'
  },
  {
    id: 3,
    title: 'Acompanhamento',
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
