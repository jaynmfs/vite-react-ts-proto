/* eslint-disable react/jsx-props-no-spreading */
import loadable from '@loadable/component'
import React from 'react'
import { Route, RouteProps, Switch } from 'react-router-dom'

import PageNotFound from '@/components/PageNotFound'

const HomePage = loadable(() => import('@/pages'))

const routes: Array<RouteProps> = [
  { path: '/', exact: true, children: <HomePage /> },
  {
    path: '*',
    children: <PageNotFound />,
  },
]

const RoutesConfig: React.FC = () => {
  const renderRoutes = routes.map(({ children, ...routeProps }) => (
    <Route {...routeProps}>{children}</Route>
  ))

  return <Switch>{renderRoutes}</Switch>
}

export default RoutesConfig
