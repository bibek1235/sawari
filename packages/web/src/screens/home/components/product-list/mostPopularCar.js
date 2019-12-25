import React from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import { Card, Elevation, Button } from '@blueprintjs/core';
import HorizontalScrollView from 'react-horizontal-scrolling-menu';
import { ENDPOINT } from '../../../../config';

const ProductCard = (obj, cardOnClickHandler) => {
  return (
    <Card
      interactive
      elevation={Elevation.TWO}
      className="product-card"
      style={{ height: 240, width: 250 }}
      onClick={() => cardOnClickHandler(obj)}
    >
      <img src={`${ENDPOINT}/images/${obj.image}`} alt={obj.brandName} style={{ height: 170, width: 230 }} />
      <span style={{ fontWeight: 'bold' }}>{obj.name}</span>
      <span>{`Rs ${obj.price}/-`}</span>
    </Card>
  );
};

class ProductDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = { showProductDtails: false };
  }

  cardOnClickHandler = (obj) => {
    const { updateMainValue } = this.props;
    updateMainValue('currentCarDetail', obj);
    this.setState({ showProductDtails: obj.id });
  }

  render() {
    const { main, updateMainValue } = this.props;
    const { showProductDtails } = this.state;
    return (
      <div elevation={0} className="home-product-list" style={{ width: '100%'}}>
        {showProductDtails && <Redirect to={`/details/${showProductDtails}`} />}
        <div style={{ height: 1, background: '#f1f1f1', margin: 0, marginTop: -22 }} />
        <div className="product-list">
          <div style={{ width: '100%', textAlign: 'center', height: '100%' }}>
            <HorizontalScrollView
              // wheel
              data = {main.initialData.vehicleBrandProduct ? main.initialData.vehicleBrandProduct.filter(c => c.stypeId === 1).map((obj) => ProductCard(obj, this.cardOnClickHandler)) : []}
              arrowRight={<Button style={{ width: 20, height: 20, borderRadius: '50%' }} rightIcon="arrow-right" />}
              arrowLeft={<Button style={{ width: 20, height: 20, borderRadius: '50%' }} rightIcon="arrow-left" />}
              // onSelect={(key) => console.log('seleceed', key)}
              clickWhenDrag={false}
              alignOnResize
              hideSingleArrow
              hideArrows
              scrollBy={3}
              clickWhenDrag={false}
            />
          </div>
        </div>
      </div>
    );
  }
}
export default ProductDetails;
ProductDetails.propTypes = {
  main: PropTypes.objectOf(PropTypes.any).isRequired,
  updateMainValue: PropTypes.func.isRequired,
};