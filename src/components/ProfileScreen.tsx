import React from "react"
import {View,Text,Image,StyleSheet} from "react-native"
// import profileImage from '../../assets/profile.png'

const ProfileScreen = () => {
    return (
      <View style={styles.container}>

        <View style={styles.header}>
       <View style={styles.row}>
         
            <Text style={styles.sectionTitle}>Welcome</Text>   
              
            </View>
          </View>
          
        <View style={styles.header}>    
          <Image
            source={require('../../assets/profile.png')}
            style={styles.profileImage}
          />
          <Text style={styles.username}>John Doe</Text>
        </View>
  
        <View style={styles.header}>
        <View style={styles.row}>
          <Image
            source={require('../../assets/house.png')}
            style={styles.icon}
          />
          <Text style={styles.sectionTitle}>My Recipes</Text>
          <Image
            source={require('../../assets/right-arrow.png')}
            style={styles.image}
          />
          </View>
          </View>

     <View style={styles.header}>
       <View style={styles.row}>
          <Image
            source={require('../../assets/notification.png')}
            style={styles.icon}
          />
            <Text style={styles.sectionTitle}>Notifications</Text>   
            <Image
            source={require('../../assets/right-arrow.png')}
            style={styles.icon}
          />       
            </View>
          </View>

    <View style={styles.header}>
       <View style={styles.row}>
          <Image
            source={require('../../assets/question.png')}
            style={styles.icon}
          />
             <Text style={styles.sectionTitle}>Help</Text>     
             <Image
            source={require('../../assets/right-arrow.png')}
            style={styles.icon}
          />  
            </View>
          </View>

    <View style={styles.header}>
        <View style={styles.row}>
          <Image
            source={require('../../assets/info.png')}
            style={styles.image}
          />
            <Text style={styles.sectionTitle}>About</Text>  
            <Image
            source={require('../../assets/right-arrow.png')}
            style={styles.image}
          />   
            </View>
          </View>

          <View style={styles.header}>
        <View style={styles.row}>
          <Image
            source={require('../../assets/logout.png')}
            style={styles.image}
          />
            <Text style={styles.sectionTitle}>Logout</Text>  
            <Image
            source={require('../../assets/right-arrow.png')}
            style={styles.image}
          /> 
            </View>
          </View>
        </View>
      
    );
  };
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      paddingHorizontal: 30,
      paddingTop: 20,   
      paddingBottom:30,
     
    },
    header: {
      flexDirection: 'row', 
      marginBottom: 30,
      alignSelf:"stretch",
     
    
    },

    profileImage: { 
      width: 100,
      height: 100,
      borderRadius: 50,
      marginRight: 10,
      
      
    },

    username: {
      fontSize: 24,
      fontWeight: 'bold',
      alignSelf:'center'
    },
    row: {
      marginBottom: 20,
      flexDirection: 'row',
      alignSelf:"stretch",
      alignItems: 'flex-start',
    
    },
    sectionTitle: {
      marginLeft:20,
      fontSize: 20,
      alignSelf:"stretch"
      
    },
  
    icon:{
      width:20,
      height:20,
      marginLeft:10,
      
    },
    image:{
      width:20,
      height:20,
      marginLeft:10,
    
    }
  });
  
  export default ProfileScreen;