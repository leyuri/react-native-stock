import React, { Component } from 'react';
import { Container, Header, Content, Card, CardItem, Text, Body } from 'native-base';


export default class CardHeaderFooterExample extends Component {
  render() {
    return (
          <Card>
            <CardItem header>
              <Text>Hello Stock</Text>
            </CardItem>
            <CardItem>
              <Body>
                <Text>
                You can find stock information here.
                </Text>
              </Body>
            </CardItem>
            <CardItem footer>
              <Text>Enjoy</Text>
            </CardItem>
         </Card>

    );
  }
}