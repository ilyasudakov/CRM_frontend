import HomeImg from 'Assets/sidemenu/home.inline.svg';
import ClientImg from 'Assets/sidemenu/client.inline.svg';
import SupplierIcon from 'Assets/sidemenu/supplier_icon.inline.svg';
import PriceListImg from 'Assets/sidemenu/price.inline.svg';
import PlayListImg from 'Assets/sidemenu/list-ul.inline.svg';
import MoreImg from 'Assets/sidemenu/more.inline.svg';
import WrenchImg from 'Assets/sidemenu/wrench.inline.svg';
import TasksImg from 'Assets/sidemenu/round-task-alt.inline.svg';
import EmployeesImg from 'Assets/sidemenu/employee.inline.svg';
import TruckImg from 'Assets/sidemenu/truck.inline.svg';
import BoxImg from 'Assets/sidemenu/product.inline.svg';
import FeedbackImg from 'Assets/sidemenu/feedback.inline.svg';
import ListImg from 'Assets/sidemenu/list.inline.svg';
import ScrewImg from 'Assets/sidemenu/screw.inline.svg';
import FactoryIcon from 'Assets/sidemenu/factory.inline.svg';

const allRoles = [
  'ROLE_ADMIN',
  'ROLE_DISPATCHER',
  'ROLE_MANAGER',
  'ROLE_WORKSHOP',
  'ROLE_ENGINEER',
];

export const sidemenuImageSize = 16; //default before - 20

export const mainPage = {
  pathname: '/',
  mainRoles: allRoles,
  addButtonRoles: allRoles,
  addButtonName: 'Учесть рабочее время',
  linkTo: '/',
  addButtonLinkTo: '/work-management/record-time',
  name: 'Главная',
  renderIcon: (
    <HomeImg
      width={sidemenuImageSize}
      height={sidemenuImageSize}
      className="sidemenu__img"
    />
  ),
};

export const generalTasks = {
  pathname: '/dispatcher/general-tasks',
  name: 'Задачи',
  mainRoles: allRoles,
  addButtonRoles: ['ROLE_ADMIN', 'ROLE_DISPATCHER', 'ROLE_ENGINEER'],
  addButtonName: 'Добавить задачу',
  renderIcon: (
    <TasksImg
      width={sidemenuImageSize}
      height={sidemenuImageSize}
      className="sidemenu__img"
    />
  ),
};

export const clients = {
  pathname: '/clients',
  addButtonRoles: ['ROLE_ADMIN', 'ROLE_MANAGER'],
  addButtonName: 'Добавить клиента',
  addButtonLinkTo: '/clients/new',
  mainRoles: ['ROLE_ADMIN', 'ROLE_MANAGER'],
  name: 'Клиенты',
  renderIcon: (
    <ClientImg
      width={sidemenuImageSize}
      height={sidemenuImageSize}
      className="sidemenu__img"
    />
  ),
  dropdownMenu: [],
};

export const suppliers = {
  pathname: '/suppliers',
  addButtonRoles: ['ROLE_ADMIN', 'ROLE_MANAGER'],
  addButtonName: 'Добавить поставщика',
  addButtonLinkTo: '/suppliers/new',
  mainRoles: allRoles,
  name: 'Поставщики',
  renderIcon: (
    <SupplierIcon
      width={sidemenuImageSize}
      height={sidemenuImageSize}
      className="sidemenu__img"
    />
  ),
  dropdownMenu: [],
};

export const workManagement = {
  pathname: '/work-management',
  addButtonLinkTo: '/work-management/record-time',
  mainRoles: allRoles,
  addButtonRoles: allRoles,
  addButtonName: 'Учесть рабочее время',
};

export const requests = {
  pathname: '/requests',
  linkTo: '/requests/open',
  name: 'Заявки',
  mainRoles: ['ROLE_ADMIN', 'ROLE_MANAGER'],
  addButtonRoles: ['ROLE_ADMIN', 'ROLE_MANAGER'],
  addButtonName: 'Добавить заявку',
  renderIcon: (
    <PlayListImg
      width={sidemenuImageSize}
      height={sidemenuImageSize}
      viewBox="0 0 20 20"
      className="sidemenu__img sidemenu__img--request"
    />
  ),
};

export const products = {
  pathname: '/products',
  name: 'Продукция',
  mainRoles: ['ROLE_ADMIN', 'ROLE_MANAGER', 'ROLE_WORKSHOP'],
  addButtonRoles: ['ROLE_ADMIN', 'ROLE_MANAGER'],
  addButtonName: 'Добавить продукцию',
  renderIcon: (
    <BoxImg
      width={sidemenuImageSize}
      height={sidemenuImageSize}
      className="sidemenu__img sidemenu__img--product"
    />
  ),
};

export const priceList = {
  pathname: '/price-list',
  name: 'Прайс-лист',
  mainRoles: ['ROLE_ADMIN', 'ROLE_MANAGER'],
  renderIcon: (
    <PriceListImg
      width={sidemenuImageSize}
      height={sidemenuImageSize}
      className="sidemenu__img sidemenu__img--price"
    />
  ),
};

export const workshopLEMZ = {
  pathname: '/lemz/workshop-lemz',
  mainRoles: ['ROLE_ADMIN', 'ROLE_LEMZ'],
  addButtonRoles: ['ROLE_ADMIN', 'ROLE_LEMZ'],
  addButtonName: 'Добавить план производства',
};

export const reportTable = {
  pathname: '/report-table',
  mainRoles: ['ROLE_ADMIN', 'ROLE_DISPATCHER'],
  addButtonRoles: ['ROLE_ADMIN', 'ROLE_DISPATCHER'],
  addButtonName: 'Учесть рабочее время',
  addButtonLinkTo: '/work-management/record-time',
};

export const workshopLigosvkiy = {
  pathname: '/ligovskiy/',
  linkTo: '/rigging-list',
  mainRoles: ['ROLE_ADMIN', 'ROLE_LIGOVSKIY', 'ROLE_DISPATCHER'],
  name: 'ЦехЛиговский',
  renderIcon: (
    <FactoryIcon
      width={sidemenuImageSize}
      height={sidemenuImageSize}
      className="sidemenu__img sidemenu__img--factory"
    />
  ),
  iconClassName: 'sidemenu__img',
  dropdownMenu: [
    {
      name: 'Очередь инструментального производства',
      pathname: '/rigging-list',
      link: '/rigging-list',
      renderIcon: (
        <ListImg
          width={sidemenuImageSize}
          height={sidemenuImageSize}
          className="sidemenu__img"
        />
      ),
      mainRoles: ['ROLE_ADMIN', 'ROLE_LIGOVSKIY'],
    },
  ],
};

export const workshopLepsari = {
  pathname: '/lepsari/workshop-lepsari',
  mainRoles: ['ROLE_ADMIN', 'ROLE_LEPSARI'],
  addButtonRoles: ['ROLE_ADMIN', 'ROLE_LEPSARI'],
  addButtonName: 'Добавить план производства',
};

export const lepsariDropdown = [
  {
    name: 'Очередь производства',
    pathname: '/lepsari/workshop-lepsari',
    link: '/lepsari/workshop-lepsari',
    renderIcon: (
      <PlayListImg
        width={sidemenuImageSize}
        height={sidemenuImageSize}
        viewBox="0 0 20 20"
        className="sidemenu__img sidemenu__img--request"
      />
    ),
    mainRoles: ['ROLE_ADMIN', 'ROLE_LEPSARI'],
  },
  {
    name: 'Очередь инструментального производства',
    pathname: '/rigging-list',
    link: '/rigging-list',
    renderIcon: (
      <ListImg
        width={sidemenuImageSize}
        height={sidemenuImageSize}
        className="sidemenu__img"
      />
    ),
    mainRoles: ['ROLE_ADMIN', 'ROLE_LEPSARI'],
  },
  {
    name: 'Склад',
    pathname: '/lepsari/workshop-storage',
    link: '/lepsari/workshop-storage',
    renderIcon: (
      <BoxImg
        width={sidemenuImageSize}
        height={sidemenuImageSize}
        className="sidemenu__img sidemenu__img--product"
      />
    ),
    mainRoles: ['ROLE_ADMIN', 'ROLE_LEPSARI'],
  },
  {
    name: 'Комплектация цеха',
    pathname: '/lepsari/workshop-orders',
    link: '/lepsari/workshop-orders',
    renderIcon: (
      <ScrewImg
        width={sidemenuImageSize}
        height={sidemenuImageSize}
        className="sidemenu__img"
      />
    ),
    mainRoles: ['ROLE_ADMIN', 'ROLE_LEPSARI', 'ROLE_DISPATCHER'],
  },
];

export const lemzDropdown = [
  {
    name: 'Очередь производства',
    pathname: '/lemz/workshop-lemz',
    link: '/lemz/workshop-lemz',
    renderIcon: (
      <PlayListImg
        width={sidemenuImageSize}
        height={sidemenuImageSize}
        viewBox="0 0 20 20"
        className="sidemenu__img sidemenu__img--request"
      />
    ),
    mainRoles: ['ROLE_ADMIN', 'ROLE_LEMZ'],
  },
  {
    name: 'Очередь инструментального производства',
    pathname: '/rigging-list',
    link: '/rigging-list',
    renderIcon: (
      <ListImg
        width={sidemenuImageSize}
        height={sidemenuImageSize}
        className="sidemenu__img"
      />
    ),
    mainRoles: ['ROLE_ADMIN', 'ROLE_LEMZ'],
  },
  {
    name: 'Склад',
    pathname: '/lemz/workshop-storage',
    link: '/lemz/workshop-storage',
    renderIcon: (
      <BoxImg
        width={sidemenuImageSize}
        height={sidemenuImageSize}
        className="sidemenu__img sidemenu__img--product"
      />
    ),
    mainRoles: ['ROLE_ADMIN', 'ROLE_LEMZ'],
  },
  {
    name: 'Комплектация цеха',
    pathname: '/lemz/workshop-orders',
    link: '/lemz/workshop-orders',
    mainRoles: ['ROLE_ADMIN', 'ROLE_LEMZ', 'ROLE_DISPATCHER'],
    renderIcon: (
      <ScrewImg
        width={sidemenuImageSize}
        height={sidemenuImageSize}
        className="sidemenu__img"
      />
    ),
  },
];

export const storageLemz = {
  pathname: '/lemz/workshop-storage',
  mainRoles: ['ROLE_ADMIN', 'ROLE_LEMZ'],
  addButtonRoles: ['ROLE_ADMIN', 'ROLE_LEMZ'],
  addButtonName: 'Добавить деталь',
};

export const storageLepsari = {
  pathname: '/lepsari/workshop-storage',
  mainRoles: ['ROLE_ADMIN', 'ROLE_LEPSARI'],
  addButtonRoles: ['ROLE_ADMIN', 'ROLE_LEPSARI'],
  addButtonName: 'Добавить деталь',
};

export const rigging = {
  pathname: '/dispatcher/rigging/',
  linkTo: '/dispatcher/rigging/stamp',
  mainRoles: [
    'ROLE_ADMIN',
    'ROLE_DISPATCHER',
    'ROLE_ENGINEER',
    'ROLE_WORKSHOP',
  ],
  name: 'Оснастка',
  renderIcon: (
    <WrenchImg
      width={sidemenuImageSize}
      height={sidemenuImageSize}
      className="sidemenu__img"
    />
  ),
};

export const stamp = {
  pathname: '/dispatcher/rigging/stamp',
  mainRoles: ['ROLE_ADMIN', 'ROLE_DISPATCHER', 'ROLE_ENGINEER'],
  addButtonRoles: ['ROLE_ADMIN', 'ROLE_DISPATCHER', 'ROLE_ENGINEER'],
  addButtonName: 'Добавить штамп',
};

export const machine = {
  pathname: '/dispatcher/rigging/machine',
  mainRoles: ['ROLE_ADMIN', 'ROLE_DISPATCHER', 'ROLE_ENGINEER'],
  addButtonRoles: ['ROLE_ADMIN', 'ROLE_DISPATCHER', 'ROLE_ENGINEER'],
  addButtonName: 'Добавить станок',
};

export const pressForm = {
  pathname: '/dispatcher/rigging/press-form',
  mainRoles: ['ROLE_ADMIN', 'ROLE_DISPATCHER', 'ROLE_ENGINEER'],
  addButtonRoles: ['ROLE_ADMIN', 'ROLE_DISPATCHER', 'ROLE_ENGINEER'],
  addButtonName: 'Добавить пресс-форму',
};

export const parts = {
  pathname: '/dispatcher/rigging/parts',
  mainRoles: ['ROLE_ADMIN', 'ROLE_DISPATCHER', 'ROLE_ENGINEER'],
  addButtonRoles: ['ROLE_ADMIN', 'ROLE_DISPATCHER', 'ROLE_ENGINEER'],
  addButtonName: 'Добавить запчасть',
};

export const users = {
  pathname: '/profile/users',
  mainRoles: ['ROLE_ADMIN'],
  addButtonRoles: ['ROLE_ADMIN'],
  addButtonName: 'Добавить пользователя',
};

export const ltdList = {
  pathname: '/ltd-list',
  mainRoles: ['ROLE_ADMIN', 'ROLE_MANAGER'],
  addButtonRoles: ['ROLE_ADMIN', 'ROLE_MANAGER'],
  addButtonName: 'Добавить ООО',
};

export const employees = {
  pathname: '/dispatcher/employees',
  name: 'Сотрудники',
  mainRoles: ['ROLE_ADMIN', 'ROLE_DISPATCHER'],
  addButtonRoles: ['ROLE_ADMIN', 'ROLE_DISPATCHER'],
  addButtonName: 'Добавить сотрудника',
  renderIcon: (
    <EmployeesImg
      width={sidemenuImageSize}
      height={sidemenuImageSize}
      className="sidemenu__img sidemenu__img--employees"
    />
  ),
};

export const transportation = {
  pathname: '/dispatcher/transportation',
  name: 'Транспортировка',
  mainRoles: ['ROLE_ADMIN', 'ROLE_DISPATCHER'],
  addButtonRoles: ['ROLE_ADMIN', 'ROLE_DISPATCHER'],
  addButtonName: 'Добавить запись',
  renderIcon: (
    <TruckImg
      width={sidemenuImageSize}
      height={sidemenuImageSize}
      className="sidemenu__img sidemenu__img--truck"
    />
  ),
};

export const feedback = {
  pathname: '/feedback',
  name: 'Обратная связь',
  mainRoles: allRoles,
  addButtonRoles: allRoles,
  addButtonName: 'Оставить сообщение',
  renderIcon: (
    <FeedbackImg
      width={sidemenuImageSize}
      height={sidemenuImageSize}
      className="sidemenu__img"
    />
  ),
};

export const etcetera = {
  pathname: '/etcetera',
  name: 'Остальное',
  mainRoles: allRoles,
  renderIcon: (
    <MoreImg
      width={sidemenuImageSize}
      height={sidemenuImageSize}
      className="sidemenu__img"
    />
  ),
};

export const packaging = {
  pathname: '/packaging',
  mainRoles: ['ROLE_ADMIN'],
  addButtonRoles: ['ROLE_ADMIN'],
  addButtonName: 'Создать упаковку',
};
