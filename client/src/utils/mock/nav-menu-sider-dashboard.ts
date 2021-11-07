export const navMenuSiderDashboardButtons: ISiderNavBarDashboard[] = [
  {
    id: 1,
    title: 'Compras',
    url: '/minhas-compras',
    icon: 'ShoppingCartOutlined'
  },
  {
    id: 2,
    title: 'Configurações',
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
