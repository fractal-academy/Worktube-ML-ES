import { Breadcrumb } from 'antd'
import { Link } from 'react-router-dom'
import PATHS from 'pages/paths'
import { useLocation } from 'react-router-dom'
import { useTransformName } from './hooks'
import { useTranslations } from 'contexts/Translation'

const HeaderBreadcrumbs = () => {
  const { AUTHENTICATED } = PATHS
  const { t } = useTranslations()
  const transformName = useTransformName()
  const location = useLocation()
  const breadcrumbNameMap = Object.fromEntries(
    Object.entries(AUTHENTICATED).map((a) => a.reverse())
  )
  const pathSnippets = location.pathname.split('/').filter((i) => i)
  const extraBreadcrumbItems = pathSnippets.map((_, index) => {
    const url = `/${pathSnippets.slice(0, index + 1).join('/')}`
    const transformedUrl = breadcrumbNameMap[url] ? url : url + 's'
    return (
      <Breadcrumb.Item key={transformedUrl}>
        <Link to={transformedUrl}>
          {t(transformName(breadcrumbNameMap[transformedUrl]))}
        </Link>
      </Breadcrumb.Item>
    )
  })
  const breadcrumbItems = [
    <Breadcrumb.Item key="dashboard">
      <Link to="/dashboard">Dashboard</Link>
    </Breadcrumb.Item>
  ].concat(extraBreadcrumbItems)

  return <Breadcrumb>{breadcrumbItems}</Breadcrumb>
}

export default HeaderBreadcrumbs
