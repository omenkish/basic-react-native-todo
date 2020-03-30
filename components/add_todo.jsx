import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default ({ submitHandler }) => {
    const [text, setText] = useState('');
    const changeHandler = (val) => setText(val);

    return (
        <View>
            <TextInput
                style={styles.input}
                placeholder='New todo....'
                onChangeText={changeHandler}
            />

            <Button title='Add todo' color='coral' onPress={() => submitHandler(text)} />
        </View>
    );
};

const styles = StyleSheet.create({
    input: {
        marginBottom: 10,
        paddingHorizontal: 8,
        paddingVertical: 6,
        borderBottomColor: '#ddd',
        borderBottomWidth: 1
    }
});
