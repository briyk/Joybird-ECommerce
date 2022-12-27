//import Libraries
import { Container, Row, Col, ListGroup, ListGroupItem } from 'reactstrap';
import { Link } from 'react-router-dom'
//import links
import logo from '../../assets/images/logo.png'
//import styles
import './footer.css'

const Footer = () => {
  return (
    <footer>
      <Container>
        <Row>
          <Col lg={3} md={6} sm={6} className="my-4">
            <div className="footer__logo">
              <img src={logo} alt="logo" />
              <p className='mt-4 '>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus, excepturi?</p>
            </div>
          </Col>
          <Col lg={3} md={6} sm={6} className="my-4">
            <div className="quick__links">
              <h4 className="quick__links__title">
                Top Gategories
              </h4>
              <ul className='mt-4'>
                <li>
                  <Link to="#">Modern Phones</Link>
                </li>
                <li>
                  <Link to="#">Watches</Link>
                </li>
                <li>
                  <Link to="#">Modern Sofa</Link>
                </li>
                <li>
                  <Link to="#">Arm Chair</Link>
                </li>
              </ul>
            </div>
          </Col>
          <Col lg={2} md={6} sm={6}  className="my-4">
            <div className="quick__links">
              <h4 className="quick__links__title">
                Top Links
              </h4>
              <ul className='mt-4'>
                <li>
                  <Link to="/shop">Shop</Link>
                </li>
                <li>
                  <Link to="/cart">Cart</Link>
                </li>
                <li>
                  <Link to="/login">Login</Link>
                </li>
                <li>
                  <Link to="#">Privacy Policy</Link>
                </li>
              </ul>
            </div>
          </Col>
          <Col lg={4} md={6} sm={6} className="my-4">
            <div className="quick__links">
              <h4 className="quick__links__title">
                Contact
              </h4>
              <ul className='mt-4'>
                <li >
                  <Link to="#" className='footer-links'>
                        <span> <i className='ri-map-pin-line'></i> </span>
                        <p>123 street , Mansoura , Egypt</p>
                  </Link>
                </li>
                <li >
                  <Link to="#" className='footer-links'>
                        <span> <i className='ri-phone-line'></i> </span>
                        <p> +20 - 9080 - 3694</p>
                  </Link>
                </li>
                
              </ul>
            </div>
          </Col>
          <Col lg={12} className="text-center py-2">
              <p>All rights Reserved Briyk &copy; 2023</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer