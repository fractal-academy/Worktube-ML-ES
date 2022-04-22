import { Button, Dropdown, Menu, MenuItem } from '@qonsoll/react-design'

import { MoreOutlined } from '@ant-design/icons'
import PropTypes from 'prop-types'

const CardDropdown = ({ handleEdit, handleDelete }) => {
  return (
    <Dropdown
      overlay={
        <Menu>
          <MenuItem onClick={handleEdit}>Edit</MenuItem>
          <MenuItem onClick={handleDelete}>Delete</MenuItem>
        </Menu>
      }
    >
      <Button onClick icon={<MoreOutlined rotate={90} />} />
    </Dropdown>
  )
}

CardDropdown.propTypes = {
  handleEdit: PropTypes.func.isRequired,
  handleDelete: PropTypes.func.isRequired
}

export default CardDropdown
