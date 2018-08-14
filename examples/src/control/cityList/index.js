import React from 'react';
import { Button } from 'antd';
import {
  Map,
  ControlAnchor,
  CityList,
} from 'rc-bmap';
import Container from 'components/Container';
import City from './index.md';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      offset: {
        width: 0,
        height: 0,
      },
      anchor: ControlAnchor.TOP_RIGHT,
    };
  }

  handleAnchor = () => {
    this.setState({
      anchor: ControlAnchor.TOP_LEFT,
    });
  }

  handleOffset = () => {
    this.setState({
      offset: {
        width: 10,
        height: 10,
      },
    });
  }

  onChangeBefore = () => {
    console.log('onChangeBefore');
  }

  onChangeAfter = () => {
    console.log('onChangeAfter');
  }

  render() {
    const { offset, anchor } = this.state;
    return (
      <Container code={City}>
        <div style={{ height: '90vh' }}>
          <Map
            ak="dbLUj1nQTvDvKXkov5fhnH5HIE88RUEO"
            scrollWheelZoom
          >
            <CityList
              offset={offset}
              anchor={anchor}
              onChangeBefore={this.onChangeBefore}
              onChangeAfter={this.onChangeAfter}
            />
          </Map>
          <Button onClick={this.handleOffset}>改变offset</Button>
          <Button onClick={this.handleAnchor}>改变停靠位置</Button>
        </div>
      </Container>
    );
  }
}

export default App;
