import React from 'react';
import { AppstoreOutlined, OrderedListOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Menu } from 'antd';

type MenuItem = Required<MenuProps>['items'][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
  type?: 'group',
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
    type,
  } as MenuItem;
}

const items: MenuProps['items'] = [
  getItem('Matches', 'sub1', <AppstoreOutlined />, [
    getItem('Live', '1'),
    getItem('Previous', '2'),
  ]),

  { type: 'divider' },

  getItem('Standings', 'sub4', <OrderedListOutlined />, [
    getItem('North America', '9'),
    getItem('Europe', '10'),
  ]),

	{ type: 'divider' },
];

const NavBar: React.FC = () => {
  const onClick: MenuProps['onClick'] = (e) => {
    console.log('click ', e);
  };

  return (
    <Menu
      onClick={onClick}
      style={{ width: '20vw', height: '100vh' }}
			theme='dark'
      defaultSelectedKeys={['1']}
      defaultOpenKeys={['sub1']}
      mode="inline"
      items={items}
    />
  );
};

export default NavBar;