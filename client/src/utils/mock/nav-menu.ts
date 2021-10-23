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
        classNameValue: 'categories',
        isSubMenu: true,
        subMenu: [
            {
                id: '41',
                title: 'sub1',
                path: 'sub1',
                classNameValue: 'sub1'
            },
            {
                id: '42',
                title: 'sub2',
                path: 'sub2',
                classNameValue: 'sub2'
            },
            {
                id: '43',
                title: 'sub3',
                path: 'sub3',
                classNameValue: 'sub3'
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
        offset: 650,
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