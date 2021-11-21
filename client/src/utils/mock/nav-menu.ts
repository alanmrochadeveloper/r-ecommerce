export const navMenuButtons: INavMenuButton [] = [
    {
        id: "1",
        title: 'Início',
        path: '/',
        classNameValue: 'inicio',
        isSubMenu: false,
        isRightMenu: false,
    },
    {
        id: "2",
        title: 'Contato',
        path: '/contato',
        classNameValue: 'contato',
        isSubMenu: false,
        isRightMenu: false,
    },
    {
        id: "3",
        title: 'Sobre',
        path: '/sobre',
        classNameValue: 'sobre',
        isSubMenu: false,
        isRightMenu: false,
    },
    {
        id: "4",
        title: 'Categorias',
        path: '/categorias',
        classNameValue: 'categoria',
        isSubMenu: true,
        subMenu: [
            {
                id: '41',
                title: 'calca',
                path: 'calca',
                classNameValue: 'calca'
            },
            {
                id: '42',
                title: 'bone',
                path: 'bone',
                classNameValue: 'bone'
            },
            {
                id: '43',
                title: 'cueca',
                path: 'cueca',
                classNameValue: 'cueca'
            },
        ],
        isRightMenu: false
    },
    {
        id: "5",
        title: 'Entrar',
        path: '/entrar',
        classNameValue: 'entrar',
        isSubMenu: false,
        isRightMenu: true,
        offset: 700,
    },
]

interface INavMenuButton {
    id: string;
    title: string;
    path: string;
    classNameValue: string;
    isSubMenu: boolean
    subMenu?: ISubMenu []
    isRightMenu? : boolean 
    offset?: number
}

interface ISubMenu{
    id: string
    title: string
    path: string
    classNameValue: string

}
