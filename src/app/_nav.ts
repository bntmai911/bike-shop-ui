import { INavData } from '@coreui/angular';

export const navItems: INavData[] = [
  {
    name: 'Trang chủ',
    url: '/dashboard',
    icon: 'icon-speedometer',
  },
  {
    name: 'Tạo đơn hàng mới',
    url: '/new-order',
    icon: 'icon-drop'
  },
  {
    name: 'Tình hình tài chính',
    url: '/finance',
    icon: 'icon-pencil'
  },
  {
    name: 'Quản lý kho',
    url: '/storage',
    icon: 'icon-cursor',
    children: [
      {
        name: 'Buttons',
        url: '/buttons/buttons',
        icon: 'icon-cursor'
      },
      {
        name: 'Dropdowns',
        url: '/buttons/dropdowns',
        icon: 'icon-cursor'
      },
      {
        name: 'Brand Buttons',
        url: '/buttons/brand-buttons',
        icon: 'icon-cursor'
      }
    ]
  },
];
