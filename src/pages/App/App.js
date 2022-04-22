import { Redirect, Route, Switch } from 'react-router-dom'
import {
  CandidateProfileShow,
  CandidateProfilesAll,
  CandidateProfileCreate
} from './CandidateProfile'

import { BoilerplateLayout } from 'components'
import Dashboard from './Dashboard/Dashboard'
import PATHS from '../paths'

const {
  DASHBOARD,
  CANDIDATEPROFILE_SHOW,
  CANDIDATEPROFILES_ALL,
  CANDIDATEPROFILE_CREATE
} = PATHS.AUTHENTICATED

const routes = [
  { key: 'DASHBOARD', path: DASHBOARD, component: Dashboard, exact: true },
  {
    key: 'CANDIDATEPROFILE_SHOW',
    path: CANDIDATEPROFILE_SHOW,
    component: CandidateProfileShow,
    exact: true
  },
  {
    key: 'CANDIDATEPROFILES_ALL',
    path: CANDIDATEPROFILES_ALL,
    component: CandidateProfilesAll,
    exact: true
  },
  {
    key: 'CANDIDATEPROFILE_CREATE',
    path: CANDIDATEPROFILE_CREATE,
    component: CandidateProfileCreate,
    exact: true
  }
]

const App = () => {
  return (
    <BoilerplateLayout>
      <Switch>
        {routes.map((routeProps) => (
          <Route key={routeProps.key} {...routeProps} />
        ))}
        <Redirect to={PATHS.SERVICE.NOT_FOUND} />
      </Switch>
    </BoilerplateLayout>
  )
}

export default App
