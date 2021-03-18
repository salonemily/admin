import React from "react";
import { Segment, Header, Icon } from "semantic-ui-react";

const NullDressView = () => {
  return (
    <Segment placeholder>
      <Header icon>
        <Icon name="search" />
        Wybierz suknie poprzez użycie wyszukiwarki
      </Header>
    </Segment>
  );
};

export default NullDressView;
