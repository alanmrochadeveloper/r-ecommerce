export const navMenuButtons: INavMenuButton [] = [
    {
        id: "1",
        title: 'Início',
        path: '/',
        classNameValue: 'inicio',
    },
    {
        id: "2",
        title: 'Contato',
        path: '/contato',
        classNameValue: 'contato',
    },
    {
        id: "3",
        title: 'Sobre',
        path: '/sobre',
        classNameValue: 'sobre',
    },
    {
        id: "4",
        title: 'Entrar',
        path: '/entrar',
        classNameValue: 'entrar',
    },
]

interface INavMenuButton {
    id: string;
    title: string;
    path: string;
    classNameValue: string;
}