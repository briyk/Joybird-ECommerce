import { Col } from "reactstrap";
import {motion} from 'framer-motion'
import "./products.css";
import { Link } from "react-router-dom";

const ProductCard = ({item}) => {
  return (
    <Col lg={3} md={4} sm={6} className="mb-3 gap-2">
      <div className="product__card">
        <div className="product__img">
          <motion.img whileTap={{scale:1.2}} src={item.imgUrl} alt="product" />
        </div>
        <h3 className="product__name py-2">
            <Link to={`/shop/${item.id}`}>{item.productName}</Link>
        </h3>
        <span className="text-center d-inline-block w-100">{item.category}</span>
        <div className="product__cart__bottom d-flex align-items-center justify-content-between p-2">
          <span className="product__price">$ {item.price}</span>
          <span>
            <i className="ri-add-line"></i>
          </span>
        </div>
      </div>
    </Col>
  );
};

export default ProductCard;
