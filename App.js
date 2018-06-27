import React from 'react';
import { Image } from 'react-native';
import { Container, Content, Header, Body, StyleProvider, Text, Card, CardItem, Thumbnail} from 'native-base';
import getSampleTheme from './src/theme';

export default class App extends React.Component {

    render() {
    return (
        <StyleProvider style={getSampleTheme()}>
            <Container>
                <Header>
                    <Body><Text title>Native Base Code Sample</Text></Body>
                </Header>
                <Content>
                    <Card>
                        <CardItem cardBody>
                            <Image style={{ height: 250, width: null, flex: 1}} source={require('./src/assets/1.png')} />
                        </CardItem>
                        <CardItem>
                            <Thumbnail xSmall source={require('./src/assets/user.jpg')}/>>
                            <Text comment>How about this photo?</Text>
                        </CardItem>
                    </Card>
                </Content>
            </Container>
        </StyleProvider>    
    );
  }
}
