import React, { Component } from 'react';
import { Container, Header, Content, List, ListItem, Left, Body, Right, Thumbnail, Text 
  ,Grid, Col, Button

} from 'native-base';

const profile = require("../../assets/images/profile.png")
export default class ListAvatarExample extends Component {
  render() {
    return (
      <Container>
        <Content>
          <List>
            <ListItem avatar>
              <Left>
                <Thumbnail source={profile} />
              </Left>
              <Body>
                <Text>yuri</Text>
                <Text note>I like stocks. I feel happy when I buy and sell.</Text>
              </Body>
              <Right>
                <Text note>Joined Date:2020-01-01</Text>
              </Right>
            </ListItem>
          </List>
          <List>
            <ListItem itemDivider>
              <Text>A</Text>
            </ListItem>                    
            <ListItem>
              <Text>AAPL</Text>

            </ListItem>
            <ListItem>
              <Text>AMD</Text>
            </ListItem>
            <ListItem itemDivider>
              <Text>B</Text>
            </ListItem>  
            <ListItem>
              <Text>BAC</Text>
            </ListItem>
          </List>
        </Content>
      </Container>
    );
  }
}


