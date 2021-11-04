import React from 'react';
import { Typography } from 'antd';

const { Title } = Typography;

interface IProps {
	children: React.ReactNode;
}

const DashboardCustomerWrapper: React.FC<IProps> = ({ children }) => {
	return (
		<div>
			<Title level={2}>Portal do cliente</Title>
			{children}
		</div>
	)
}

export default DashboardCustomerWrapper;
