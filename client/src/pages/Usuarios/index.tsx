import React from 'react'
import api, { UsersEndPoints } from '../../api/axios'
import { IUser } from '../../types/interfaces'
import { Typography } from 'antd'
import MainWrapper from '../../layout/MainWrapper';

interface IProps {}
const Usuarios: React.FC<IProps> = () => {
    const { Title } = Typography
    const [users, setUsers] = React.useState<IUser[]>()
    const fetchUsers = React.useCallback(async () => {
        try {
            const response = await api(UsersEndPoints.USERS)
            setUsers(response.data)
        } catch (error) {
            console.log(`Usuários não encontrados!`)
        }
    }, [])

    React.useEffect(() => {
        fetchUsers()
    }, [])

    return (
        <MainWrapper>
            <div>
                <Title level={2}>Usuários</Title>
                <ul style={{ listStyle: 'none'}}>
                {users ? (
                    users.map((user) => (
                        <li>
                            <span>Email: </span>
                            <span>{user.email}</span>
                        </li>
                    ))
                ) : (
                    <div>Carregando...</div>
                )}
                </ul>
            </div>
        </MainWrapper>
    )
}
export default Usuarios
