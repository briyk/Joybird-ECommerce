//importing Libraries
import { useState, useEffect } from "react";
import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
//importing Components
import Helmet from "../../components/helmet/Helmet";
import TrendingProduct from '../../components/trendingProducts/TrendingProduct'
import Services from "../../components/services/Services";
//importing images
import heroImg from "../../assets/images/hero-img.png";
//import styles
import "./home.css";
//importing data
import products from '../../assets/data/products'
import ProductsList from "../../components/products/ProductsList";
import Timer from "../../components/timer/Timer";

const Home = () => {
  const [trendingProducts, setTrendingProducts] = useState([]);
  const [bestSaleProducts, setBestSaleProducts] = useState([]);
  const [mobileProducts, setMobileProducts] = useState([]);
  const [wirelessProducts, setWirelessProducts] = useState([]);
  const [popularProducts, setPopulaProducts] = useState([]);

  const year = new Date().getFullYear();

  useEffect(() => {
    //filter products according to tag
    const filterTrending = products.filter(item => item.category === 'chair');
    setTrendingProducts(filterTrending);
    const filterBestSales = products.filter(item => item.category === 'sofa');
    setBestSaleProducts(filterBestSales)
    const filterMobile = products.filter(item => item.category === 'mobile');
    setMobileProducts(filterMobile)
    const filterWireless = products.filter(item => item.category === 'wireless');
    setWirelessProducts(filterWireless)
    const filterPopular = products.filter(item => item.category === 'watch');
    setPopulaProducts(filterPopular)
  }, [])

  return (
    <Helmet title={"Home"}>
      <section className="hero section__space">
        <Container>
          <Row>
            <Col lg={6} md={6} sm={12}>
              <div className="hero__content">
                <p className="hero__subtitle">Trending Products in {year} </p>
                <h2>Make your Interior more Minimalistic & Modern </h2>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Placeat dignissimos aliquam quia fuga sit velit ratione
                  doloremque minima a facilis.
                </p>
                <div className="btn p-0">
                  <motion.button
                    whileTap={{ scale: 1.2 }}
                    type="button"
                    className="buy-btn"
                  >
                    <Link to="/shop">
                      Shop Now <i className="ri-shopping-cart-fill"></i>{" "}
                    </Link>{" "}
                  </motion.button>
                </div>
              </div>
            </Col>
            <Col lg={6} md={6} sm={12}>
              <div className="hero__image">
                <img src={heroImg} alt="hero" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <Services />
      <TrendingProduct data={trendingProducts} />
      <section className="section__space">
        <Container>
          <Row>
            <Col lg={12}>
              <h2 className='section__title mb-4'>Best Sales</h2>
            </Col>
            <ProductsList data={bestSaleProducts} />
          </Row>
        </Container>
      </section>
      <Timer />
      <section className="section__space">
        <Container>
          <Row>
            <Col lg={12}>
              <h2 className='section__title mb-4'>New Arrivales</h2>
            </Col>
            <ProductsList data={mobileProducts}/>
            <ProductsList data={wirelessProducts}/>
          </Row>
        </Container>
      </section>
      <section className="section__space popular__category">
        <Container>
          <Row>
            <Col lg={12}>
              <h2 className='section__title mb-4'>Popular Products</h2>
            </Col>
            <ProductsList data={popularProducts}/>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Home;
