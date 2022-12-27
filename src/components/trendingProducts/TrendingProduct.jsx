import {Container, Col, Row} from 'reactstrap'
import ProductsList from '../products/ProductsList'
import './trendingProducts.css'

const TrendingProduct = ({data}) => {
  // console.log(data)
  return (
    <section className='trending section__space'>
            <Container>
                 <Row>
                 <Col lg={12}>
                      <h2 className='section__title mb-4'>Trending Products</h2>
                  </Col>

                  <ProductsList data={data}/>

                 </Row>
            </Container>
    </section>
  )
}

export default TrendingProduct