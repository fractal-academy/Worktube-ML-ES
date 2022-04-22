import { Button, Col, Container, Img, Row, Title } from '@qonsoll/react-design'

import PropTypes from 'prop-types'
import noDataLogo from '../../assets/empty-svg.svg'

const Empty = (props) => {
  return (
    <Container
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
    >
      <Row>
        <Img src={noDataLogo} alt="No data" height="240" />
      </Row>
      <Row marginTop="24px">
        <Col>
          <Title>{props?.message || 'No data'}</Title>
        </Col>
      </Row>
      <Row marginTop="12px">
        <Col>
          <Button onClick={props?.onCreateButtonClick} type="primary">
            Create
          </Button>
        </Col>
      </Row>
    </Container>
  )
}

Empty.propTypes = {
  message: PropTypes.string,
  onCreateButtonClick: PropTypes.func
}

export default Empty
