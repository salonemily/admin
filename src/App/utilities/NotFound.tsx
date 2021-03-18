import React from 'react';
import { Segment, Button, Header, Icon } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <Segment placeholder>
            <Header icon>
                <Icon name='search' />
                Strona nie istnieje
            </Header>
            <Segment.Inline>
                <Button as={Link} to='/' primary>
                    Powrót do strony głównej
                </Button>
            </Segment.Inline>
        </Segment>
    );
};

export default NotFound;