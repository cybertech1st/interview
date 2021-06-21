import React, { useState, useEffect } from 'react';
import { Text, ImageBackground, StyleSheet, Image, KeyboardAvoidingView, StatusBar, ScrollView,  Alert,View,TouchableOpacity } from 'react-native';



// import { View, Text, StatusBar, StyleSheet, Image, TextInput, TouchableOpacity, Alert, AsyncStorage, ImageBackground } from "react-native";
import { Container, Content, Item, Button,Form, Input, Label } from 'native-base';

// import Loader from "react-native-modal-loader";
// import { bg1, loginlogo } from '../../includes/includes';
import { bg1, loginlogo,camera } from '../../includes/includes';

// import { API_URL } from '../../utilies/globals';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';






const C = (props) => {
    

    return (
        <Container style={{ flex: 1, width: wp('100%')}}>
            <StatusBar barStyle="dark-content" hidden={true} />

            <Content>
                <View style={{ width: wp('100%'), height: hp('100%') }}>
                    <View style={styles.logoContainer}>
                        
                    </View>
                    
                    <View style={styles.tag}>
                        <Text style={{ fontSize: 20,  color:'#FFFFFF', fontWeight: "bold", fontFamily: 'Helvetica Neue', paddingTop:wp('5%'), paddingLeft:wp('2%') }}>
                            Whats App  </Text>
                            
                                             
                         </View>
                         <View style={styles.tag2}>
                         <Image source={camera} style={{ resizeMode: 'contain', width: wp('10%'),paddingTop:wp('20%'), paddingLeft:wp('15%') }} />
                         <TouchableOpacity onPress={() => {
                            props.navigation.navigate('C');}}>
                        <Text style={{ fontSize: 20,  color:'#FFFFFF', fontWeight: "bold", fontFamily: 'Helvetica Neue', paddingTop:wp('5%'), paddingLeft:wp('10%') }}>
                            CHATS  </Text></TouchableOpacity>
                            <TouchableOpacity onPress={() => {
                            props.navigation.navigate('B');}}>
                            <Text style={{ fontSize: 20,  color:'#FFFFFF', fontWeight: "bold", fontFamily: 'Helvetica Neue', paddingTop:wp('5%'), paddingLeft:wp('10%') }}>
                            STATUS  </Text></TouchableOpacity>
                            <TouchableOpacity onPress={() => {
                            props.navigation.navigate('A');}}>
                            <Text style={{ fontSize: 20,  color:'#FFFFFF', fontWeight: "bold", fontFamily: 'Helvetica Neue', paddingTop:wp('5%'), paddingLeft:wp('10%') }}>
                            CALLS  </Text></TouchableOpacity>
                           

                            
                                             
                         </View>
                    <View  style={{width: wp('95%'), marginLeft: wp('0%'), marginRight: wp('0%')}}>

                    
                        
                   
                    
                   
                    <View style={{width: wp('80%'), marginTop:hp('5%'), marginLeft: wp('3%'), marginRight: wp('18%'), flexDirection: 'row'}}>
                    <Image source={{uri: 'http://fantasyfelons.us/devapi/uploads/159834600ED774DC9-1D23-49CF-9766-A443C558C844.jpg'}} style={{width: 40, height: 60, borderRadius: 50,width: wp('15%'),  marginLeft: wp('3%')}}/> 
                        <Text style={{ fontSize: 20, fontWeight: '900', color: '#1C1854',width: wp('40%'), textAlign:'center', fontFamily: 'Helvetica Neue',   }}>
                        <Text style={{ fontSize: 26, fontWeight: '900', color:'#1C1854',textAlign:'left',     fontWeight: "bold", fontFamily: 'Helvetica Neue', 
 }}>
                            Weekend 
                        {'\n'}
                         
                         
                         </Text>
                            
                            
                          

                        Sofia Sticker
                        
                        </Text>


                    </View> 
                    <View style={{width: wp('80%'), marginTop:hp('5%'), marginLeft: wp('3%'), marginRight: wp('18%'), flexDirection: 'row'}}>
                    <Image source={{uri: 'http://fantasyfelons.us/devapi/uploads/159834600ED774DC9-1D23-49CF-9766-A443C558C844.jpg'}} style={{width: 40, height: 60, borderRadius: 50,width: wp('15%'),  marginLeft: wp('3%')}}/> 
                        <Text style={{ fontSize: 20, fontWeight: '900', color: '#1C1854',width: wp('40%'), textAlign:'center', fontFamily: 'Helvetica Neue',   }}>
                        <Text style={{ fontSize: 26, fontWeight: '900', color:'#1C1854',textAlign:'left',     fontWeight: "bold", fontFamily: 'Helvetica Neue', 
 }}>
                            Weekend 
                        {'\n'}
                         
                         
                         </Text>
                            
                            
                          

                        Sofia Sticker
                        
                        </Text>


                    </View> 
                    <View style={{width: wp('80%'), marginTop:hp('5%'), marginLeft: wp('3%'), marginRight: wp('18%'), flexDirection: 'row'}}>
                    <Image source={{uri: 'http://fantasyfelons.us/devapi/uploads/159834600ED774DC9-1D23-49CF-9766-A443C558C844.jpg'}} style={{width: 40, height: 60, borderRadius: 50,width: wp('15%'),  marginLeft: wp('3%')}}/> 
                        <Text style={{ fontSize: 20, fontWeight: '900', color: '#1C1854',width: wp('40%'), textAlign:'center', fontFamily: 'Helvetica Neue',   }}>
                        <Text style={{ fontSize: 26, fontWeight: '900', color:'#1C1854',textAlign:'left',     fontWeight: "bold", fontFamily: 'Helvetica Neue', 
 }}>
                           Lunch Club 
                        {'\n'}
                         
                         
                         </Text>
                            
                            
                          

                        Sofia Sticker
                        
                        </Text>


                    </View> 
                    <View style={{width: wp('80%'), marginTop:hp('5%'), marginLeft: wp('3%'), marginRight: wp('18%'), flexDirection: 'row'}}>
                    <Image source={{uri: 'http://fantasyfelons.us/devapi/uploads/159834600ED774DC9-1D23-49CF-9766-A443C558C844.jpg'}} style={{width: 40, height: 60, borderRadius: 50,width: wp('15%'),  marginLeft: wp('3%')}}/> 
                        <Text style={{ fontSize: 20, fontWeight: '900', color: '#1C1854',width: wp('40%'), textAlign:'center', fontFamily: 'Helvetica Neue',   }}>
                        <Text style={{ fontSize: 26, fontWeight: '900', color:'#1C1854',textAlign:'left',     fontWeight: "bold", fontFamily: 'Helvetica Neue', 
 }}>
                            Family
                        {'\n'}
                         
                         
                         </Text>
                            
                            
                          

                        Sofia Sticker
                        
                        </Text>


                    </View> 
                    <View style={{width: wp('80%'), marginTop:hp('5%'), marginLeft: wp('3%'), marginRight: wp('18%'), flexDirection: 'row'}}>
                    <Image source={{uri: 'http://fantasyfelons.us/devapi/uploads/159834600ED774DC9-1D23-49CF-9766-A443C558C844.jpg'}} style={{width: 40, height: 60, borderRadius: 50,width: wp('15%'),  marginLeft: wp('3%')}}/> 
                        <Text style={{ fontSize: 20, fontWeight: '900', color: '#1C1854',width: wp('40%'), textAlign:'center', fontFamily: 'Helvetica Neue',   }}>
                        <Text style={{ fontSize: 26, fontWeight: '900', color:'#1C1854',textAlign:'left',     fontWeight: "bold", fontFamily: 'Helvetica Neue', 
 }}>
                            Weekend 
                        {'\n'}
                         
                         
                         </Text>
                            
                            
                          

                        Sofia Sticker
                        
                        </Text>


                    </View> 
                    {/* <View style={{width: wp('80%'), marginTop:hp('0%'), marginLeft: wp('1%'), marginRight: wp('18%'), flexDirection: 'row'}}>
                    <Image source={{uri: 'http://fantasyfelons.us/devapi/uploads/159834600ED774DC9-1D23-49CF-9766-A443C558C844.jpg'}} style={{width: 40, height: 60, borderRadius: 40/ 2,width: wp('15%'), marginRight: wp('10%'), marginLeft: wp('3%') }}/> 
                        <Text style={{ fontSize: 20, fontWeight: '900', color: '#1C1854',width: wp('80%'), textAlign:'center', fontFamily: 'Helvetica Neue'  }}>
                        <Text style={{ fontSize: 26, fontWeight: '900', color:'#1C1854',textAlign:'center',     fontWeight: "bold", fontFamily: 'Helvetica Neue'
 }}>
                            Karen {'\n'}
                        Solomon
                        {'\n'}
                         
                         
                         </Text>
                            
                            
                          

                        President/Co-Founder 
                        
                        </Text>


                    </View>  */}
                    

                   
                          
                        </View> 
                  
                </View>
            </Content>

        </Container>
    );
}


const styles = StyleSheet.create({
    logoContainer: {
        
        // height: hp('35%'),
        //backgroundColor: 'red',
        flexDirection: 'row',
        justifyContent: 'center'
    },
    tag: {
        // height: hp('20%'),
        //backgroundColor: 'red',
        flexDirection: 'row',
       
        backgroundColor: '#075E55',
        height: hp('8%'),

        // paddingTop: hp('1%')
        
        
    },
    tag2: {
        // height: hp('20%'),
        //backgroundColor: 'red',
        flexDirection: 'row',
       
        backgroundColor: '#075E55',
        height: hp('10%'),

        // paddingTop: hp('5%')
        
        
    },
    forgotPassContainer: {
        //backgroundColor: 'red',
        width: wp('80%'),
        //height: hp('10%'),
        flexDirection: 'row',
        justifyContent: 'flex-end',
        paddingTop: hp('1%')
    },
    buttonContainer: {
        paddingTop: hp('2%'),
        width: wp('80%'),
        flexDirection: 'row',
        justifyContent: 'center',
        marginLeft: wp('10%')
    }
});



export default C;  