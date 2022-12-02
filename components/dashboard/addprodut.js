import { StyleSheet, Text, View, Keyboard, TouchableWithoutFeedback,KeyboardAvoidingView } from 'react-native'
import React from 'react'
import { TextInput } from 'react-native-paper';
const Input = (props) => {
  const { label, value, onChangeText, returnKey } = props;
  return (
    <TextInput
      mode='outlined'
      label={label}
      value={value}
      onChangeText={onChangeText}
      autoCapitalize={true}
      multiline={false}
      style={styles.InputStyle}
      activeOutlineColor={'rgba(0,87,255,0.6)'}
      returnKeyType={returnKey}
      outlineColor={'rgba(0,87,255,0.4)'}
    />
  )
}
const Addproduct = () => {
  // const [ImageUrl, setImageUrl] = React.useState([]);
  const [category, setcategory] = React.useState("");
  const [title, settitle] = React.useState("");
  const [color, setcolor] = React.useState([]);
  const [price, setprice] = React.useState("");
  const [description, setdescription] = React.useState("");
  const [sizes, setsizes] = React.useState([]);

  return (
    <View style={styles.container}>
      <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
        <View style={styles.Cont} onTouchStart={()=>{Keyboard.dismiss()}} >
      <View style={styles.TitleCont}>
        <Text style={styles.Title}>Dashboard</Text>
      </View>
        <View style={styles.InputCont}>
          <Input returnKey='next' label='title' value={title} onChangeText={settitle} />
          <Input label='category' returnKey='next' value={category} onChangeText={setcategory} />
          <Input label='price' returnKey='next' value={price} onChangeText={setprice} />
          <Input label='description' returnKey='done' value={description} onChangeText={setdescription} />
          <Input label='description' returnKey='done' value={description} onChangeText={setdescription} />
          <Input label='description' returnKey='done' value={description} onChangeText={setdescription} />
          <Input label='description' returnKey='done' value={description} onChangeText={setdescription} />

        </View></View>
        </KeyboardAvoidingView>
    </View>
  )
}

export default Addproduct

const styles = StyleSheet.create({

  container: {
    flex: 1,
    marginTop: 20,
    backgroundColor: "#ffffff",
  },
  InputStyle: {
    width: '80%',
    marginBottom:10,
    backgroundColor:'white',
  },
  Cont: {
    backgroundColor: 'red',
    flex: 1,
    // borderWidth: 1
  },
  InputCont: {
    flex: 1,
    alignItems:'center',
    borderWidth:1,
  },
  Title: {
    fontWeight: "bold",
    fontSize: 26,
  },
  TitleCont: {
    height: "8%",
    paddingLeft: 20,
    paddingTop: 15,
},
})