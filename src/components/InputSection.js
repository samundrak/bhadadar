import React from 'react';
import { Dropdown, Grid, Button } from 'semantic-ui-react';

const InputSection = () => (
  <Grid columns={3} divided stackable verticalAlign="middle" padded="vertically">
    <Grid.Row className="center" centered>
      <Grid.Column className="no-padding-column">
        <Dropdown
          height="50px"
          header="From"
          fluid
          button
          className="icon test"
          labeled
          icon="world"
          options={[]}
          search
          inline
          text="From"
        />
      </Grid.Column>
      <Grid.Column className="no-padding-column">
        <Dropdown
          header="To"
          fluid
          button
          className="icon test"
          labeled
          icon="world"
          options={[]}
          search
          inline
          text="To"
        />
      </Grid.Column>
      <Grid.Column className="no-padding-column">
        <Button type="submit" className="test">
          Search
        </Button>
      </Grid.Column>
    </Grid.Row>
  </Grid>
);

export default InputSection;
