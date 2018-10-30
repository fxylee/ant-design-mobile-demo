import React, { Component } from 'react';
import { connect } from 'dva';

import { SegmentedControl } from 'antd-mobile';

@connect(({ example }) => ({
  example
}))
export default class IndexPage extends Component {

  handle (e) {
    const { dispatch } = this.props;

    dispatch({
      type: 'example/fetch',
    });
  }

  handleSwitch (e) {
    const { dispatch } = this.props;
    const selectedIndex = e.nativeEvent.selectedSegmentIndex;

    dispatch({
      type: 'example/fetch',
      payload: {
        selectedIndex
      }
    });
  }

  render () {
    const { example: { selectedIndex }} = this.props;
    return (
      <div>
        <SegmentedControl
          values={['Segment1', 'Segment2']}
          onChange={this.handle.bind(this)}
        />
        <br />
        <SegmentedControl
          selectedIndex={selectedIndex}
          values={['Segment1', 'Segment2']}
          onChange={this.handleSwitch.bind(this)}
        />
      </div>
    );
  }
}


