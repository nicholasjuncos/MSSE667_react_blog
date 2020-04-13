import {StyleSheet} from "react-native";
import DefaultColors from "./DefaultColors";

export default StyleSheet.create({
    scrollView: {
        backgroundColor: DefaultColors.white,
        paddingHorizontal: 16
    },
    engine: {
        position: 'absolute',
        right: 0,
    },
    body: {
        backgroundColor: DefaultColors.white,
    },
    sectionContainer: {
        marginTop: 32,
        paddingHorizontal: 24,
    },
    sectionTitle: {
        fontSize: 24,
        fontWeight: '600',
        textAlign: 'center',
        color: DefaultColors.black,
    },
    sectionDescription: {
        marginTop: 8,
        fontSize: 18,
        fontWeight: '400',
        color: DefaultColors.dark,
    },
    highlight: {
        fontWeight: '700',
    },
    footer: {
        color: DefaultColors.dark,
        fontSize: 12,
        fontWeight: '600',
        padding: 4,
        paddingRight: 12,
        textAlign: 'right',
    },
    fullCenterView: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    link: {
        color: "blue"
    }
});
