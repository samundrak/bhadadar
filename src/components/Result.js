import React from 'react';
import styled from 'styled-components';
import CountUp from 'react-countup';

const Container = styled.div`
  display: flex;
  flex-direction: row;
  height: 100%;
`;
const Item = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #f4f4f8;
  flex-direction: column;
`;
const HighlightedItem = styled.div`
  flex-direction: column;
  flex: 2;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #f4f4f8;
  box-shadow: 1px 4px 4px 0px #888888;
  z-index: 1;
`;

const Counter = styled.div`
  display: flex;
  flex-direction: row;
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
`;
class Result extends React.Component {
  render() {
    const { value } = this.props;
    console.log(value);
    return (
      <Container>
        <Item>
          <Counter>
            <CountUp start={0} end={Number(value.distanceInKm.en)} delay={0}>
              {({ countUpRef }) => (
                <Count>
                  <span ref={countUpRef} />
                </Count>
              )}
            </CountUp>
            <Unit>KM</Unit>
          </Counter>
          <Label>Distance</Label>
        </Item>
        <HighlightedItem>
          <Counter>
            <CountUp start={0} end={Number(value.fair.en)} delay={0}>
              {({ countUpRef }) => (
                <Count>
                  <span ref={countUpRef} />
                </Count>
              )}
            </CountUp>
            <Unit>Rupees</Unit>
          </Counter>

          <Label>Cost</Label>
        </HighlightedItem>
        <Item>
          <Counter>
            <CountUp start={0} end={0} delay={0}>
              {({ countUpRef }) => (
                <Count>
                  <span ref={countUpRef} />
                </Count>
              )}
            </CountUp>
            <Unit>Hours</Unit>
          </Counter>

          <Label>Travel Time</Label>
        </Item>
      </Container>
    );
  }
}
export default Result;
