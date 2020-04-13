import React, {useEffect, useState} from 'react';
import {ActivityIndicator, Alert, Button, Picker, ScrollView, Text, View} from 'react-native';
import DateTimePickerModal from "react-native-modal-datetime-picker";

import {createPost, updatePost, deletePost, getMyPostDetail} from "../../services/post";
import {useAuth} from "../../provider";

import {ErrorText} from "../../components/Shared";
import {DefaultStyles} from "../../assets/Stylings";
import {CheckBox, Input} from "react-native-elements";
import Icon from "react-native-vector-icons/dist/FontAwesome";

export default function PostForm(props) {
    const {navigation, route} = props;
    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const [pageLoading, setPageLoading] = useState(true);
    const [post, setPost] = useState({});
    const [published, setPublished] = useState(false);
    const [postDate, setPostDate] = useState('');
    const [postDateError, setPostDateError] = useState(null);
    const [title, setTitle] = useState('');
    const [titleError, setTitleError] = useState();
    const [subtitle1, setSubtitle1] = useState('');
    const [subtitle1Error, setSubtitle1Error] = useState();
    const [description1, setDescription1] = useState('');
    const [description1Error, setDescription1Error] = useState();
    const [quote1, setQuote1] = useState('');
    const [quoter1, setQuoter1] = useState('');
    const [category, setCategory] = useState('');
    const {state, isLoggedIn} = useAuth();

    const showDatePicker = () => {
        setDatePickerVisibility(true);
    };

    const hideDatePicker = () => {
        setDatePickerVisibility(false);
    };

    const handleConfirm = date => {
        let newDate = `${date.toISOString()}`;
        newDate = newDate.substring(5, 7) + '/' + newDate.substring(8, 10) + '/' + newDate.substring(0, 4);
        setPostDate(newDate);
        hideDatePicker();
    };


    async function onSubmit() {
        setLoading(true);
        let error = false;
        if (!title) {
            setTitleError('Title field required');
            error = true;
        } else {
            setTitleError(undefined)
        }
        if (!postDate) {
            setPostDateError('Post Date field required');
            error = true;
        } else {
            setPostDateError(undefined)
        }
        if (!description1) {
            setDescription1Error('Description field required');
            error = true;
        } else {
            setDescription1Error(undefined)
        }
        if (!subtitle1) {
            setSubtitle1Error('Subtitle field required');
            error = true;
        } else {
            setSubtitle1Error(undefined);
        }
        if (!error) {
            const data = {
                published: published,
                postDate: postDate,
                title: title,
                subtitle1: subtitle1,
                description1: description1,
                quote1: quote1,
                quoter1: quoter1,
                category: category
            };
            if (route.name === 'UpdatePost') {
                const {postId} = props.route.params;
                try {
                    let response = await updatePost(postId, data);
                    navigation.navigate('MyProfile');

                } catch (error) {
                    setError(error.message);
                    setLoading(false)
                }
            } else {
                try {
                    let response = await createPost(data);
                    navigation.navigate('MyProfile');

                } catch (error) {
                    setError(error.message);
                    setLoading(false)
                }
            }
        }
    }

    async function onDelete() {
        Alert.alert(
            "Delete Post?",
            "This can not be undone",
            [
                {
                    text: "Cancel",
                    onPress: () => null,
                    style: "cancel"
                },
                {
                    text: "OK", onPress: async () => {
                        setLoading(true);
                        const {postId} = props.route.params;
                        try {
                            let response = await deletePost(postId);
                            navigation.navigate('MyProfile');
                        } catch (error) {
                            setError(error.message);
                            setLoading(false)
                        }
                    }
                }
            ],
            {cancelable: false}
        );
    }

    useEffect(() => {
        if (route.name === 'UpdatePost') {
            const {postId} = props.route.params;
            getMyPostDetail(postId).then(
                res => {
                    setPost(res);
                    setPublished(res.published);
                    setPostDate(res.postDate);
                    setTitle(res.title);
                    setSubtitle1(res.subtitle1);
                    setDescription1(res.description1);
                    setQuote1(res.quote1);
                    setQuoter1(res.quoter1);
                    setCategory(res.category);
                    setPageLoading(false);
                }, error => {
                    Alert.alert('Not Found');
                    navigation.navigate('MyProfile')
                }
            )
        } else {
            setPageLoading(false);
        }
    }, []);
    Icon.loadFont();
    return (
        pageLoading ? (
                <ActivityIndicator/>
            )
            : (
                <ScrollView style={DefaultStyles.scrollView}>
                    <View style={{flex: 1, paddingHorizontal: 16}}>
                        <View style={{flex: 1}}>
                            {route.name === 'UpdatePost' ?
                                <View><Button onPress={() => onDelete()} title={'Delete'}/></View> : undefined}
                            <CheckBox checked={published} title="Published?" name={'published'}
                                      onPress={() => setPublished(!published)}/>
                            <View style={{
                                margin: 10,
                                borderBottomWidth: 1,
                                borderTopWidth: 1,
                                borderBottomColor: 'black',
                                borderTopColor: 'black'
                            }}>
                                <Button title="Show Date Picker" onPress={showDatePicker}/>
                                <Text style={{margin: 10, fontWeight: 'bold'}}>PostDate: {postDate}</Text>
                                <DateTimePickerModal
                                    isVisible={isDatePickerVisible}
                                    mode="date"
                                    date={postDate ? new Date(postDate) : undefined}
                                    onConfirm={handleConfirm}
                                    onCancel={hideDatePicker}
                                />
                                <ErrorText error={postDateError}/>
                            </View>
                            <Input label={'Title'} name={'title'} placeholder={'Title...'} nativeID={'title'} value={title}
                                   onChange={(e) => setTitle(e.nativeEvent.text)}/>
                            <ErrorText error={titleError}/>
                            <Input label={'Subtitle'} name={'subtitle1'} placeholder={'Subtitle...'} value={subtitle1}
                                   onChange={(e) => setSubtitle1(e.nativeEvent.text)}/>
                            <ErrorText error={subtitle1Error}/>
                            <Input label={'Description'} name={'description1'} placeholder={'Description...'}
                                   value={description1}
                                   multiline={true} onChange={(e) => setDescription1(e.nativeEvent.text)}/>
                            <ErrorText error={description1Error}/>
                            <Input label={'Quote'} name={'quote1'} placeholder={'Quote...'} multiline={true} value={quote1}
                                   onChange={(e) => setQuote1(e.nativeEvent.text)}/>
                            <Input label={'Quoter'} name={'quoter1'} placeholder={'Quoter...'} value={quoter1}
                                   onChange={(e) => setQuoter1(e.nativeEvent.text)}/>
                            <View style={{
                                margin: 10,
                                borderBottomWidth: 1,
                                borderTopWidth: 1,
                                borderBottomColor: 'black',
                                borderTopColor: 'black'
                            }}>
                                <Text style={{fontWeight: 'bold'}}>Category: {category}</Text>
                                <Picker
                                    style={{margin: 0}}
                                    selectedValue={category}
                                    onValueChange={e => setCategory(e)}
                                >
                                    <Picker.Item label="--Select Category--" value=""/>
                                    <Picker.Item label="Story" value="story"/>
                                    <Picker.Item label="Fun" value="fun"/>
                                    <Picker.Item label="Help" value="help"/>
                                    <Picker.Item label="Family" value="family"/>
                                </Picker>
                            </View>
                            <Button onPress={() => onSubmit()} title={'Submit'}/>
                        </View>
                    </View>
                </ScrollView>
            )
    );
};
