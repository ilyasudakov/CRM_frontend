import { Suspense, useContext, useEffect, useState } from 'react';
import { Switch, Route } from 'react-router-dom';
import './MainPage.scss';
import 'Components/MainWindow/MainWindow.scss';
import 'Components/Form/Form.scss';
import Header from '../Header/Header.jsx';
import {
  Clients,
  GeneralPage,
  NewClient,
  Products,
  NewProduct,
  Users,
  EditUser,
  NewUser,
  LtdListPage,
  ViewProduct,
  EditProduct,
  Rigging,
  Transportation,
  EditTransportation,
  NewTransportation,
  GeneralTasks,
  NewTask,
  EditTask,
  Employees,
  NewEmployee,
  EditEmployee,
  Work,
  NewWork,
  EditWork,
  NewCategory,
  EditCategory,
  LEMZ,
  Lepsari,
  RecordWork,
  LogListPage,
  WorkManagementPage,
  PriceList,
  ClientCategories,
  EditClient,
  FeedbackPage,
  NewFeedback,
  ViewFeedback,
  EtceteraPage,
  PackagingPage,
  NewPackaging,
  EditPackaging,
  ReportTablePage,
  RiggingList,
  StatisticsPage,
  ReportsPage,
  EmployeeReportPage,
  NewRequest,
  EditRequest,
  NewLtd,
  EditLtd,
  ProductionJournal,
  WorkshopRequests,
} from './lazyImports';
import SideMenu from '../SideMenu/SideMenu.jsx';
import PageNotFound from './PageNotFound/PageNotFound.jsx';
import PrivateRoute from '../PrivateRoute/PrivateRoute.jsx';
import PageLoading from './PageLoading/PageLoading.jsx';
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary.jsx';
import UserContext from '../../App.js';
import UploadPricelistFile from './PriceList/PricesListPage/UploadPricelistFile/UploadPricelistFile.jsx';

const MainPage = () => {
  const [sidemenuHidden, setSidemenuHidden] = useState(true);
  const userContext = useContext(UserContext);

  const userScreenWidth =
    window.innerWidth ||
    document.documentElement.clientWidth ||
    document.body.clientWidth;

  useEffect(() => {
    if (userScreenWidth > 1366) setSidemenuHidden(false);
  }, []);

  const allUsers = [
    'ROLE_ADMIN',
    'ROLE_WORKSHOP',
    'ROLE_MANAGER',
    'ROLE_DISPATCHER',
    'ROLE_ENGINEER',
  ];

  return (
    <div className="main_page">
      <Header
        sidemenuHidden={sidemenuHidden}
        setSidemenuHidden={setSidemenuHidden}
      />
      <div className="main_page__content">
        <ErrorBoundary componentName={`компоненте "Главная страница"`}>
          <SideMenu hidden={sidemenuHidden} setSideMenu={setSidemenuHidden} />
          {userScreenWidth <= 1366 && (
            <div
              className={
                sidemenuHidden
                  ? 'main_page__overlay main_page__overlay--hidden'
                  : 'main_page__overlay'
              }
              onClick={() => {
                if (userScreenWidth <= 1366) {
                  setSidemenuHidden(!sidemenuHidden);
                }
              }}
            ></div>
          )}
          <div
            className={`main_page__activity_panel ${
              sidemenuHidden ? 'main_page__activity_panel--minimized' : ''
            }`}
          >
            <div className="main-window">
              <Suspense fallback={<PageLoading />}>
                <Switch>
                  <PrivateRoute
                    exact
                    path="/"
                    component={GeneralPage}
                    allowedRoles={allUsers}
                  />
                  <PrivateRoute
                    exact
                    path="/profile/users"
                    component={Users}
                    userHasAccess={userContext.userHasAccess}
                    userData={userContext.userData}
                    allowedRoles={['ROLE_ADMIN']}
                  />
                  <PrivateRoute
                    exact
                    path="/profile/users/new"
                    component={NewUser}
                    userHasAccess={userContext.userHasAccess}
                    userData={userContext.userData}
                    allowedRoles={['ROLE_ADMIN']}
                  />
                  <PrivateRoute
                    path="/profile/users/edit/"
                    component={EditUser}
                    userHasAccess={userContext.userHasAccess}
                    userData={userContext.userData}
                    allowedRoles={['ROLE_ADMIN']}
                  />
                  <PrivateRoute
                    exact
                    path="/profile/log-list"
                    component={LogListPage}
                    userHasAccess={userContext.userHasAccess}
                    userData={userContext.userData}
                    allowedRoles={['ROLE_ADMIN']}
                  />
                  <PrivateRoute
                    path="/clients/category/"
                    component={Clients}
                    type="clients"
                    userData={userContext.userData}
                    allowedRoles={['ROLE_ADMIN', 'ROLE_MANAGER']}
                  />
                  <PrivateRoute
                    exact
                    path="/clients/categories/"
                    component={ClientCategories}
                    type="clients"
                    userHasAccess={userContext.userHasAccess}
                    userData={userContext.userData}
                    allowedRoles={['ROLE_ADMIN', 'ROLE_MANAGER']}
                  />
                  <PrivateRoute
                    exact
                    path="/clients/new"
                    component={NewClient}
                    type="clients"
                    userHasAccess={userContext.userHasAccess}
                    userData={userContext.userData}
                    allowedRoles={['ROLE_ADMIN', 'ROLE_MANAGER']}
                  />
                  <PrivateRoute
                    path="/clients/edit/"
                    component={EditClient}
                    type="clients"
                    userHasAccess={userContext.userHasAccess}
                    userData={userContext.userData}
                    allowedRoles={['ROLE_ADMIN', 'ROLE_MANAGER']}
                  />
                  <PrivateRoute
                    path="/suppliers/category/"
                    component={Clients}
                    type="suppliers"
                    userHasAccess={userContext.userHasAccess}
                    userData={userContext.userData}
                    allowedRoles={allUsers}
                  />
                  <PrivateRoute
                    exact
                    path="/suppliers/categories/"
                    component={ClientCategories}
                    type="suppliers"
                    userHasAccess={userContext.userHasAccess}
                    userData={userContext.userData}
                    allowedRoles={allUsers}
                  />
                  <PrivateRoute
                    exact
                    path="/suppliers/new"
                    component={NewClient}
                    type="suppliers"
                    userHasAccess={userContext.userHasAccess}
                    userData={userContext.userData}
                    allowedRoles={allUsers}
                  />
                  <PrivateRoute
                    path="/suppliers/edit/"
                    component={EditClient}
                    type="suppliers"
                    userHasAccess={userContext.userHasAccess}
                    userData={userContext.userData}
                    allowedRoles={[
                      'ROLE_ADMIN',
                      'ROLE_MANAGER',
                      'ROLE_DISPATCHER',
                    ]}
                  />
                  <PrivateRoute
                    exact
                    path="/requests/new"
                    component={NewRequest}
                    type="requests"
                    allowedRoles={['ROLE_ADMIN', 'ROLE_MANAGER']}
                  />
                  <PrivateRoute
                    path="/requests/edit/"
                    component={EditRequest}
                    type="requests"
                    allowedRoles={[
                      'ROLE_ADMIN',
                      'ROLE_MANAGER',
                      'ROLE_WORKSHOP',
                    ]}
                  />
                  <PrivateRoute
                    path="/requests/"
                    component={WorkshopRequests}
                    type="requests"
                    userHasAccess={userContext.userHasAccess}
                    userData={userContext.userData}
                    allowedRoles={['ROLE_ADMIN', 'ROLE_MANAGER']}
                  />
                  <PrivateRoute
                    exact
                    path="/price-list"
                    component={PriceList}
                    userHasAccess={userContext.userHasAccess}
                    userData={userContext.userData}
                    allowedRoles={['ROLE_ADMIN', 'ROLE_MANAGER']}
                  />
                  <PrivateRoute
                    exact
                    path="/price-list/prices/upload"
                    component={UploadPricelistFile}
                    allowedRoles={['ROLE_ADMIN', 'ROLE_MANAGER']}
                  />
                  <PrivateRoute
                    exact
                    path="/products"
                    component={Products}
                    userHasAccess={userContext.userHasAccess}
                    userData={userContext.userData}
                    allowedRoles={[
                      'ROLE_ADMIN',
                      'ROLE_MANAGER',
                      'ROLE_WORKSHOP',
                    ]}
                  />
                  <Route path="/products/view/" component={ViewProduct} />
                  <PrivateRoute
                    path="/products/edit/"
                    component={EditProduct}
                    userHasAccess={userContext.userHasAccess}
                    userData={userContext.userData}
                    allowedRoles={['ROLE_ADMIN', 'ROLE_MANAGER']}
                  />
                  <PrivateRoute
                    exact
                    path="/products/new"
                    component={NewProduct}
                    userHasAccess={userContext.userHasAccess}
                    userData={userContext.userData}
                    allowedRoles={['ROLE_ADMIN', 'ROLE_MANAGER']}
                  />
                  <PrivateRoute
                    path="/lemz"
                    component={LEMZ}
                    userHasAccess={userContext.userHasAccess}
                    userData={userContext.userData}
                    allowedRoles={[
                      'ROLE_ADMIN',
                      'ROLE_MANAGER',
                      'ROLE_LEMZ',
                      'ROLE_DISPATCHER',
                    ]}
                  />
                  <PrivateRoute
                    path="/lepsari"
                    component={Lepsari}
                    userHasAccess={userContext.userHasAccess}
                    userData={userContext.userData}
                    allowedRoles={[
                      'ROLE_ADMIN',
                      'ROLE_MANAGER',
                      'ROLE_LEPSARI',
                      'ROLE_DISPATCHER',
                    ]}
                  />
                  <PrivateRoute
                    path="/dispatcher/rigging"
                    component={Rigging}
                    userHasAccess={userContext.userHasAccess}
                    userData={userContext.userData}
                    allowedRoles={[
                      'ROLE_ADMIN',
                      'ROLE_DISPATCHER',
                      'ROLE_ENGINEER',
                      'ROLE_WORKSHOP',
                    ]}
                  />
                  <PrivateRoute
                    exact
                    path="/dispatcher/transportation"
                    component={Transportation}
                    userHasAccess={userContext.userHasAccess}
                    userData={userContext.userData}
                    allowedRoles={['ROLE_ADMIN', 'ROLE_DISPATCHER']}
                  />
                  <PrivateRoute
                    exact
                    path="/dispatcher/transportation/new"
                    component={NewTransportation}
                    userHasAccess={userContext.userHasAccess}
                    userData={userContext.userData}
                    allowedRoles={['ROLE_ADMIN', 'ROLE_DISPATCHER']}
                  />
                  <PrivateRoute
                    path="/dispatcher/transportation/edit/"
                    component={EditTransportation}
                    userHasAccess={userContext.userHasAccess}
                    userData={userContext.userData}
                    allowedRoles={['ROLE_ADMIN', 'ROLE_DISPATCHER']}
                  />
                  <PrivateRoute
                    exact
                    path="/dispatcher/general-tasks"
                    component={GeneralTasks}
                    userData={userContext.userData}
                    userHasAccess={userContext.userHasAccess}
                    allowedRoles={allUsers}
                  />
                  <PrivateRoute
                    exact
                    path="/dispatcher/general-tasks/new"
                    component={NewTask}
                    userHasAccess={userContext.userHasAccess}
                    userData={userContext.userData}
                    allowedRoles={allUsers}
                  />
                  <PrivateRoute
                    path="/dispatcher/general-tasks/edit/"
                    component={EditTask}
                    userHasAccess={userContext.userHasAccess}
                    userData={userContext.userData}
                    allowedRoles={[
                      'ROLE_ADMIN',
                      'ROLE_DISPATCHER',
                      'ROLE_ENGINEER',
                      'ROLE_WORKSHOP',
                    ]}
                  />
                  <PrivateRoute
                    exact
                    path="/dispatcher/employees"
                    component={Employees}
                    userHasAccess={userContext.userHasAccess}
                    userData={userContext.userData}
                    allowedRoles={['ROLE_ADMIN', 'ROLE_DISPATCHER']}
                  />
                  <PrivateRoute
                    exact
                    path="/dispatcher/employees/new"
                    component={NewEmployee}
                    userHasAccess={userContext.userHasAccess}
                    userData={userContext.userData}
                    allowedRoles={['ROLE_ADMIN', 'ROLE_DISPATCHER']}
                  />
                  <PrivateRoute
                    path="/dispatcher/employees/edit/"
                    component={EditEmployee}
                    userHasAccess={userContext.userHasAccess}
                    userData={userContext.userData}
                    allowedRoles={['ROLE_ADMIN', 'ROLE_DISPATCHER']}
                  />
                  <PrivateRoute
                    exact
                    path="/work-list"
                    component={Work}
                    userHasAccess={userContext.userHasAccess}
                    userData={userContext.userData}
                    allowedRoles={[
                      'ROLE_ADMIN',
                      'ROLE_DISPATCHER',
                      'ROLE_ENGINEER',
                    ]}
                  />
                  <PrivateRoute
                    exact
                    path="/work-list/new"
                    component={NewWork}
                    userHasAccess={userContext.userHasAccess}
                    userData={userContext.userData}
                    allowedRoles={[
                      'ROLE_ADMIN',
                      'ROLE_DISPATCHER',
                      'ROLE_ENGINEER',
                    ]}
                  />
                  <PrivateRoute
                    path="/work-list/edit/"
                    component={EditWork}
                    userHasAccess={userContext.userHasAccess}
                    userData={userContext.userData}
                    allowedRoles={[
                      'ROLE_ADMIN',
                      'ROLE_DISPATCHER',
                      'ROLE_ENGINEER',
                    ]}
                  />
                  <PrivateRoute
                    exact
                    path="/products/category/new"
                    component={NewCategory}
                    userHasAccess={userContext.userHasAccess}
                    userData={userContext.userData}
                    allowedRoles={[
                      'ROLE_ADMIN',
                      'ROLE_MANAGER',
                      'ROLE_WORKSHOP',
                    ]}
                  />
                  <PrivateRoute
                    path="/products/category/edit/"
                    component={EditCategory}
                    userHasAccess={userContext.userHasAccess}
                    userData={userContext.userData}
                    allowedRoles={['ROLE_ADMIN', 'ROLE_MANAGER']}
                  />
                  <PrivateRoute
                    exact
                    path="/work-management"
                    component={WorkManagementPage}
                    userHasAccess={userContext.userHasAccess}
                    userData={userContext.userData}
                    allowedRoles={allUsers}
                  />
                  <PrivateRoute
                    path="/work-management/record-time"
                    component={RecordWork}
                    allowedRoles={allUsers}
                  />
                  <PrivateRoute
                    path="/work-management/journal/"
                    component={ProductionJournal}
                    allowedRoles={allUsers}
                  />
                  <PrivateRoute
                    exact
                    path="/feedback"
                    component={FeedbackPage}
                    userHasAccess={userContext.userHasAccess}
                    userData={userContext.userData}
                    allowedRoles={allUsers}
                  />
                  <PrivateRoute
                    exact
                    path="/feedback/new"
                    component={NewFeedback}
                    userHasAccess={userContext.userHasAccess}
                    userData={userContext.userData}
                    allowedRoles={allUsers}
                  />
                  <PrivateRoute
                    path="/feedback/view/"
                    component={ViewFeedback}
                    userHasAccess={userContext.userHasAccess}
                    userData={userContext.userData}
                    allowedRoles={allUsers}
                  />
                  <PrivateRoute
                    exact
                    path="/etcetera"
                    component={EtceteraPage}
                    userHasAccess={userContext.userHasAccess}
                    userData={userContext.userData}
                    allowedRoles={allUsers}
                  />
                  <PrivateRoute
                    exact
                    path="/reports"
                    component={ReportsPage}
                    allowedRoles={['ROLE_ADMIN']}
                  />
                  <PrivateRoute
                    exact
                    path="/ltd-list"
                    component={LtdListPage}
                    allowedRoles={['ROLE_ADMIN', 'ROLE_MANAGER']}
                  />
                  <PrivateRoute
                    exact
                    path="/ltd-list/new"
                    component={NewLtd}
                    allowedRoles={['ROLE_ADMIN', 'ROLE_MANAGER']}
                  />
                  <PrivateRoute
                    path="/ltd-list/edit/"
                    component={EditLtd}
                    allowedRoles={['ROLE_ADMIN', 'ROLE_MANAGER']}
                  />
                  <PrivateRoute
                    exact
                    path="/reports/employee"
                    component={EmployeeReportPage}
                    allowedRoles={['ROLE_ADMIN']}
                  />
                  <PrivateRoute
                    exact
                    path="/packaging"
                    component={PackagingPage}
                    userHasAccess={userContext.userHasAccess}
                    userData={userContext.userData}
                    allowedRoles={['ROLE_ADMIN']}
                  />
                  <PrivateRoute
                    exact
                    path="/packaging/new"
                    component={NewPackaging}
                    userHasAccess={userContext.userHasAccess}
                    userData={userContext.userData}
                    allowedRoles={['ROLE_ADMIN']}
                  />
                  <PrivateRoute
                    path="/packaging/edit/"
                    component={EditPackaging}
                    userHasAccess={userContext.userHasAccess}
                    userData={userContext.userData}
                    allowedRoles={['ROLE_ADMIN']}
                  />
                  <PrivateRoute
                    exact
                    path="/report-table"
                    component={ReportTablePage}
                    userHasAccess={userContext.userHasAccess}
                    userData={userContext.userData}
                    allowedRoles={allUsers}
                  />
                  <PrivateRoute
                    exact
                    path="/rigging-list"
                    component={RiggingList}
                    userHasAccess={userContext.userHasAccess}
                    allowedRoles={allUsers}
                  />
                  <PrivateRoute
                    exact
                    path="/statistics"
                    component={StatisticsPage}
                    allowedRoles={['ROLE_ADMIN']}
                  />
                  <Route component={PageNotFound} />
                </Switch>
              </Suspense>
            </div>
          </div>
        </ErrorBoundary>
      </div>
    </div>
  );
};

export default MainPage;
