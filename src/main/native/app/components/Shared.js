import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Icon from "react-native-vector-icons/dist/MaterialIcons";
// import {Icon, Badge} from 'react-native-elements';

//HEADER COMPONENT
export const Header = (props) => {
    let {title, style} = props;

    return (
        <View style={[styles.header, style]}>
            <Text style={styles.headerText}>
                {title}
            </Text>
        </View>
    )
};

Header.defaultProps = {
    title: "",
    style: {}
};

//ERROR COMPONENT
export const ErrorText = ({error}) => {
    return <Text style={styles.errorText}>{error}</Text>
};

ErrorText.defaultProps = {
    error: ""
};

const styles = StyleSheet.create({
    header: {
        height: 50,
        justifyContent: "center"
    },

    headerText: {
        fontSize: 25,
        color: "#362068",
        fontWeight: "400",
        fontFamily: "Helvetica Neue"
    },

    errorText:{
        marginBottom: 8,
        color:"red"
    }
});

export class NavigationDrawerStructure extends Component {
    //Structure for the navigatin Drawer
    toggleDrawer = () => {
        //Props to open/close the drawer
        this.props.navigationProps.toggleDrawer();
    };
    render() {
        Icon.loadFont();
        return (
            <View style={{ flexDirection: 'row' }}>
                <TouchableOpacity onPress={this.toggleDrawer.bind(this)}>
                    {/*Donute Button Image */}
                    <Icon name="menu" size={25} style={{marginLeft: 10}}/>
                    {/*<Image*/}
                    {/*    source={require('./image/drawer.png')}*/}
                    {/*    style={{ width: 25, height: 25, marginLeft: 5 }}*/}
                    {/*/>*/}
                </TouchableOpacity>
            </View>
        );
    }
}

