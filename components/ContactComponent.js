import React, { Component } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { ListItem } from 'react-native-elements';

class Contact extends Component {

    constructor(props) {
        super(props);
        this.state = {

        };
    }
    static navigationOptions = {
        title: 'Contact Us'
    }
    render() {
        return (
            <ScrollView>

            </ScrollView>
        );
    }
}

export default Contact;