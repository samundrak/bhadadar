import React from 'react';
import styled from 'styled-components';
import prettyMS from 'pretty-ms';
import LanguageContext from '../contexts/LanguageContext';

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
  <LanguageContext.Consumer>
    {lang => (
      <Container>
        {km ? (
          speeds.map((item, index) => (
            <Item index={index} key={item}>
              <SpanSpace>{prettyMS(distanceCoveredTime(km, item), { verbose: true })}</SpanSpace>
              {' '}
if
              {lang.speedIs}
              <SpanSpace style={{ padding: '1%' }}>{item}</SpanSpace>
              {lang.kmph}
            </Item>
          ))
        ) : (
          <Item>
            {' '}
            <i>{lang.noTravelDetails}</i>
          </Item>
        )}
      </Container>
    )}
  </LanguageContext.Consumer>
);

export default SpeedDistance;
