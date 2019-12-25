import React from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import { Card, Tabs, Tab } from '@blueprintjs/core';
import NewCar from '../newCar';
import PopularCar from '../mostPopularCar';

class ProductDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = { showProductDtails: false, selectedTabId: 'New' };
  }

  cardOnClickHandler = (obj) => {
    const { updateMainValue } = this.props;
    updateMainValue('currentCarDetail', obj);
    this.setState({ showProductDtails: obj.id });
  }

  handleTabChange = (id) => {
    console.log('tab id', id);
    this.setState({ selectedTabId: id });
  }

  render() {
    const { main, updateMainValue } = this.props;
    const { showProductDtails, selectedTabId } = this.state;
    return (
      <Card elevation={0} className="home-product-list">
        {showProductDtails && <Redirect to={`/details/${showProductDtails}`} />}
        <Tabs id="TabsExample" onChange={this.handleTabChange} selectedTabId={selectedTabId}>
          <Tabs.Expander />
          <div style={{ width: '100%' }}><h2 style={{ margin: 0, marginLeft: -20 }}>{`${selectedTabId} Cars`}</h2></div>
          <Tab style={{ fontSize: 15 }} id="New" title="New" panel={<NewCar {...this.props} />} />
          <Tab style={{ fontSize: 15 }} id="Popular" title="Popular" panel={<PopularCar {...this.props} />} panelClassName="ember-panel" />
          <Tab style={{ fontSize: 15 }} id="Upcoming" title="Upcoming" panel={<PopularCar {...this.props} />} />
        </Tabs>
      </Card>
    );
  }
}
export default ProductDetails;
ProductDetails.propTypes = {
  main: PropTypes.objectOf(PropTypes.any).isRequired,
  updateMainValue: PropTypes.func.isRequired,
};