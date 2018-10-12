import React from 'react';
import { Statistic, Icon, Image } from 'semantic-ui-react';

const StatistcsSection = () => (
  <Statistic.Group widths="four">
    <Statistic>
      <Statistic.Value>22</Statistic.Value>
      <Statistic.Label>Saves</Statistic.Label>
    </Statistic>

    <Statistic>
      <Statistic.Value text>
        Three
        <br />
        Thousand
      </Statistic.Value>
      <Statistic.Label>Signups</Statistic.Label>
    </Statistic>

    <Statistic>
      <Statistic.Value>
        <Icon name="plane" />
5
      </Statistic.Value>
      <Statistic.Label>Flights</Statistic.Label>
    </Statistic>

    <Statistic>
      <Statistic.Value>
        <Image
          src="https://react.semantic-ui.com/images/avatar/small/joe.jpg"
          className="circular inline"
        />
        42
      </Statistic.Value>
      <Statistic.Label>Team Members</Statistic.Label>
    </Statistic>
  </Statistic.Group>
);

export default StatistcsSection;
