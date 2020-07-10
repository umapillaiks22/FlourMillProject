import { INavData } from '@coreui/angular';

export const navItems: INavData[] = [
  {
    name: 'Home',
    url: '/layout/home',
    icon: 'icon-home',
  },
  {
    title: true,
    name: 'Order'
  },
  {
    name: 'New Orders',
    url: '/layout/neworders',
    icon: 'icon-plus'
  },
  {
    name: 'Assigned Orders',
    url: '/layout/assignedorders',
    icon: 'icon-check'
  },
  {
    name: 'Pending Orders',
    url: '/layout/pendingorders',
    icon: 'icon-clock'
  },
  {
    title: true,
    name: 'Details'
  },
  {
    name: 'Staff Details',
    url: '/layout/staffdetails',
    icon: 'icon-people'
  },
  {
    name: 'Price Modification',
    url: '/layout/pricemodification',
    icon: 'cui-dollar'
  },
  {
    title: true,
    name: 'Review'
  },
  {
    name: 'Notification',
    url: '/layout/notification',
    icon: 'icon-bell'
  },
  
  
  {
    divider: true
  },
  {
    title: true,
    name: 'Extras',
  },
  {
    name: 'Pages',
    url: '/pages',
    icon: 'icon-star',
    children: [
      {
        name: 'Login',
        url: '/login',
        icon: 'icon-star'
      },
      {
        name: 'Register',
        url: '/register',
        icon: 'icon-star'
      },
      {
        name: 'Error 404',
        url: '/404',
        icon: 'icon-star'
      },
      {
        name: 'Error 500',
        url: '/500',
        icon: 'icon-star'
      }
    ]
  }
];
