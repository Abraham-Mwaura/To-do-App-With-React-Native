import React,{useState} from 'react'
import { StyleSheet,Keyboard, View, Text, TextInput, KeyboardAvoidingView, Platform, TouchableOpacity } from 'react-native'
import Task from './components/Task'


export default function App() {
  // for things that change often in our app
  const[task, setTask]=useState();
  const[taskItems, setTaskItems]= useState([]);

  const handleAddTask = ()=>{
    Keyboard.dismiss();
    // this appends the new task to the already existing tasks
    setTaskItems([...taskItems , task])
    //This empties the area
    setTask(null)
  }
  const completeTask = (index)=>{
    let itemsCopy=[...taskItems];
    //the second parameter helps us remove only one item
    itemsCopy.splice( index,1);
    //we recreate a new array less one item
    setTaskItems(itemsCopy)

  
  
  
  
  
  
  
  
  }

  return (
    <View style={styles.container}> 
      {/* todos task */}
       <View style={styles.taskWrapper}>
          <Text style={styles.sectionTitle}> Today's Tasks</Text>
          
          <View style={styles.items}>
                {
                  // we need to add return to see our text
                  taskItems.map((item,index)=>{
                    //the mapping function provides an index
                    return (
                      // we also change the key to the parent component
                        <TouchableOpacity key={index}  onPress={()=>completeTask(index)}>
                            <Task text={item}/>
                        </TouchableOpacity>
                         )
                     })
                   }

            {/* This is where the tasks will go*/}
          </View>
        </View>
          {/* Write a task here */}
          <KeyboardAvoidingView 
            behavior={Platform.OS==='ios'?'padding':'height'}

          style= {styles.writeTaskWrapper}>
            {/* value= task help us to see the realtime changes in the app */}
               <TextInput style={styles.input} placeholder={'Write a task here'} value={task} onChangeText= {text=>setTask(text)} />
              {/* touchable opacity is the button */}
               <TouchableOpacity onPress={()=>handleAddTask()} >

                    <View style={styles.addWrapper}>
                        <Text style={styles.addText}>+</Text>
                    </View> 

                </TouchableOpacity>
          </KeyboardAvoidingView>


        

    </View>
  )
}

const styles = StyleSheet.create({
  container:
  {
    flex:1,
    backgroundColor:'#EBEAED',
  },
  taskWrapper:{
    paddingTop:80,
    paddingHorizontal:20,

  },
  sectionTitle:{
  
    fontSize:24,
    fontWeight:'bold',
  },
  items:{
    marginTop:30

  },
  writeTaskWrapper:{
    position:'absolute',
    bottom:60,
    width:'100%',
    flexDirection:'row',
    justifyContent:'space-around',
    alignItems:"center",
    
  },
          
  input:{

      paddingVertical:15,
      paddingHorizontal:15,
      backgroundColor:"#FFF",
      borderRadius:60,
     
      borderColor:"#C0C0C0",
      borderWidth:1,
      width:250
  },

  addWrapper:{
    width:60,
    height:60,
    borderRadius:60,
    backgroundColor:"#FFF",
    justifyContent:'center',
    alignItems:'center',
    borderWidth:1,
    borderColor:"#C0C0C0"
    

  },
  addText:{
     

  },

});
