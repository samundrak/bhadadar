import React from 'react';
import styled from 'styled-components';
import prettyMS from 'pretty-ms';

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  background: #f7f7f7;
`;
const Item = styled.div`
  flex: 1;
  border-top: 1px solid #ddd;
  padding: 2%;
  background: ${props => (props.index % 2 === 0 ? 'white' : '#f7f7f7')};
`;
const SpanSpace = styled.span`
  padding: 1%;
  font-weight: bold;
`;
const speeds = [48, 50, 70, 80, 100, 150, 200, 300];
const distanceCoveredTime = (totalKilometer, currentSpeedPerhour) => (totalKilometer / currentSpeedPerhour) * (60 * 60 * 1000);

const SpeedDistance = ({ km }) => (
  <Container>
    {km ? (
      speeds.map((item, index) => (
        <Item index={index} key={item}>
          <SpanSpace>{prettyMS(distanceCoveredTime(km, item), { verbose: true })}</SpanSpace>
          {' '}
if
          speed is
          <SpanSpace style={{ padding: '1%' }}>{item}</SpanSpace>
          KMPH
        </Item>
      ))
    ) : (
      <Item>
        {' '}
        <i>Select source and destination to get more details</i>
      </Item>
    )}
  </Container>
);

export default SpeedDistance;
