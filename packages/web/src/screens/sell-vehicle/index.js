import React from 'react';
import { connect } from 'react-redux';
import { Spinner } from '@blueprintjs/core';
import Navbar from '../home/components/navbar';
import Footer from '../home/components/footer';
import SellForm from './components/sellVehicleForm';
import * as actions from '../../actions';

class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fetchSuccess: false,
    };
  }

  async componentWillMount() {
    const { fetchInitialData } = this.props;
    await fetchInitialData();
    this.setState({ fetchSuccess: true });
  }

  render() {
    const { fetchSuccess } = this.state;
    return (
      <div className="sell-vehicle">
        <div className="page_nav">
          <Navbar {...this.props} />
        </div>
        <div className="page-header">
          <div className="inner" style={{ minHeight: "250px", maxHeight: "250px" }}>
            <div className="container">
            </div>
          </div>
        </div>
        <div className="page-content">
          <div className="sell-vehicle-content">
            {fetchSuccess ? <SellForm props={this.props} /> : <Spinner size={25} intent="primary" />}
          </div>
        </div>

        <Footer {...this.props} />
      </div>
    );
  }
}
const mapStateToProps = (state) => state;

export default connect(mapStateToProps, { ...actions })(Index);
