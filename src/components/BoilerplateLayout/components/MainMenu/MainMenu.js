import {
  AppstoreOutlined,
  DatabaseOutlined,
  FormatPainterOutlined,
  TeamOutlined,
  StarOutlined
} from '@ant-design/icons'
import { Col, Menu, MenuItem, Row } from '@qonsoll/react-design'

import { LanguageSelect } from 'domains/Translation/components'
import { useMemo } from 'react'
import { useTranslations } from 'contexts/Translation'
import { useHistory } from 'react-router-dom'

const MainMenu = () => {
  const { t } = useTranslations()
  const history = useHistory()
  const menuItems = useMemo(
    () => [
      {
        value: 'DASHBOARD',
        icon: <AppstoreOutlined />,
        text: t('Dashboard')
      },
      {
        value: 'ROLES',
        icon: <TeamOutlined />,
        text: t('Roles')
      },
      {
        value: 'STYLING',
        icon: <FormatPainterOutlined />,
        text: t('Styling')
      },
      {
        value: 'DB_STRUCTURE',
        icon: <DatabaseOutlined />,
        text: t('DB structure')
      },
      {
        value: 'CANDIDATEPROFILES',
        icon: <StarOutlined />,
        text: t('Candidate Profiles'),
        onClick: () => history.push('/candidateProfiles')
      }
    ],
    [t, history]
  )
  return (
    <>
      <Row mb={16}>
        <Col>
          <LanguageSelect />
        </Col>
      </Row>
      <Menu mode="inline">
        {menuItems.map((item, index) => (
          <MenuItem
            onClick={item.onClick}
            key={`${item.value}-${index}`}
            icon={item.icon}
          >
            {item.text}
          </MenuItem>
        ))}
      </Menu>
    </>
  )
}

export default MainMenu
