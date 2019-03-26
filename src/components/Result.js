import React from 'react';
import styled from 'styled-components';
import CountUp from 'react-countup';
import SpeedDistance from './SpeedDistance';

const Container = styled.div`
  display: flex;
  height: 100%;
  flex-direction: row;
`;
const Item = styled.div`
  flex: 1;
  display: flex;
  height: 100%;
  background: white;
  flex-direction: column;
`;
const HighlightedItem = styled.div`
  flex: 1;
  display: flex;
  background: #f4f4f8;
  z-index: 1;
  flex-direction: column;
`;

const Counter = styled.div`
  display: flex;
  align-self: center;
  justify-content: center;
  flex-direction: column;
`;
const Count = styled.div`
  font-size: 10vw;
  flex: 1;
`;
const Unit = styled.div`
  font-style: italic;
  font-size: 2vw;
`;
const Label = styled.div`
  font-size: 3vw;
  background: #ff4545;
  color: white;
  text-align: center;
  box-shadow: 1px 4px 4px 0px #888888;
`;
class Result extends React.Component {
  render() {
    const { value } = this.props;
    return (
      <Container className="result-container">
        <Item className="result-item">
          <Label className="result-item-label">
            <img src="/images/distance.png" height="40px" width="40px" />
            Distance
          </Label>
          <Counter className="result-item-counter">
            <CountUp start={0} end={Number(value.distanceInKm.en)} delay={0}>
              {({ countUpRef }) => (
                <Count>
                  <span ref={countUpRef} />
                </Count>
              )}
            </CountUp>
            <Unit>KM</Unit>
          </Counter>
        </Item>
        <HighlightedItem className="result-item">
          <Label className="result-item-label">
            <img src="/images/cost.png" height="40px" width="40px" />
            Cost
          </Label>
          <Counter className="result-item-counter">
            <CountUp start={0} end={Number(value.fair.en)} delay={0}>
              {({ countUpRef }) => (
                <Count>
                  <span ref={countUpRef} />
                </Count>
              )}
            </CountUp>
            <Unit>Rupees</Unit>
          </Counter>
        </HighlightedItem>
        <Item>
          <Label>
            <img src="/images/time.png" height="40px" width="40px" />
            Time
          </Label>
          <Counter style={{ width: '100%' }}>
            <SpeedDistance km={Number(value.distanceInKm.en)} />
          </Counter>
        </Item>
      </Container>
    );
  }
}
export default Result;
