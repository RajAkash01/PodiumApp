import React from 'react';
import {
  View,
  StyleSheet,
  StatusBar,
  Text,
  ImageBackground,
  Dimensions,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {
  Feather,
  Ionicons,
  AntDesign,
  MaterialCommunityIcons,
  MaterialIcons,
  Entypo,
  FontAwesome,
} from '@expo/vector-icons';
import { Rating, AirbnbRating } from 'react-native-ratings';
import { Avatar, Button } from 'react-native-paper';
import LinearGradient from 'react-native-linear-gradient';
import StarRating from 'react-native-star-rating-widget';

const { width, height } = Dimensions.get('window');
function HomeScreen({ navigation }) {
  const Info = [
    {
      Name: 'Dave',
      id: 1,
      img: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      description:
        "Lorems ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a gallery of type and scrambled it to make a type specimen book.",
    },
    {
      Name: 'Dave',
      id: 2,
      img: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      description:
        "Lorems ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a gallery of type and scrambled it to make a type specimen book.",
    },
    {
      Name: 'Dave',
      id: 3,
      img: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      description:
        "Lorems ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a gallery of type and scrambled it to make a type specimen book.",
    },
  ];
  const Course = [
    {
      id: 1,
      CourseName: 'Yoga',
      By: 'Dave',
    },
    {
      id: 2,
      CourseName: 'Yoga',
      By: 'Ak',
    },
  ];
  const Card = () => {
    return (
      <View>
        <View style={{ backgroundColor: '#F9E9B6', height: 610 }}>
          <ImageBackground
            source={require('../assets/yoga.jpg')}
            style={{
              width: 390,
              left: 10,
              height: 240,
              borderRadius: 10,
              overflow: 'hidden',
              top: 20,
            }}
          >
            <View
              style={{ flexDirection: 'row', justifyContent: 'space-between' }}
            >
              <View
                style={{
                  backgroundColor: '#444443',
                  left: 10,
                  top: 10,
                  width: 120,
                }}
              >
                <StarRating
                  starStyle={{ width: 13, height: 2, top: 2.5 }}
                  rating={4.5}
                  starSize={23}
                />
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  top: 44,
                  left: -180,
                  backgroundColor: '#444443',
                  height: 28,
                  width: 59,
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderRadius: 5,
                }}
              >
                <Ionicons
                  style={{ marginRight: 5 }}
                  name="person-circle-sharp"
                  size={24}
                  color="white"
                />
                <Text style={{ color: 'white' }}>245</Text>
              </View>
              <View
                style={{
                  width: 70,
                  height: 20,
                  backgroundColor: '#F96D1E',
                  borderRadius: 5,
                  justifyContent: 'center',
                  alignItems: 'center',
                  top: 10,
                  right: 10,
                }}
              >
                <Text style={{ color: '#fff' }}>Live</Text>
              </View>
            </View>
            <View style={{ flexDirection: 'row', top: 155, left: 10 }}>
              <Feather name="calendar" size={49} color="white" />
              <View>
                <Text style={{ color: 'white', fontSize: 19, left: 4 }}>
                  Mon - Fri
                </Text>
                <Text
                  style={{
                    color: 'white',
                    fontSize: 19,
                    left: 4,
                    fontWeight: 'bold',
                  }}
                >
                  9:00Am - 12:00Am
                </Text>
              </View>
            </View>
          </ImageBackground>
          <View style={{ flexDirection: 'row' }}>
            <View
              style={{
                width: 137,
                height: 30,
                backgroundColor: '#F96D1E',
                borderRadius: 5,
                justifyContent: 'center',
                alignItems: 'center',
                top: 35,
                right: -10,
              }}
            >
              <Text style={{ color: 'white', fontSize: 17 }}>Bestseller</Text>
            </View>
            <AntDesign
              style={{ top: 33, left: 180 }}
              name="hearto"
              size={35}
              color="black"
            />
            <Ionicons
              style={{ top: 32, left: 190 }}
              name="share-social"
              size={35}
              color="black"
            />
          </View>
          <Text
            style={{
              fontSize: 22,
              fontWeight: 'bold',
              top: 40,
              left: 10,
              width: 280,
            }}
          >
            Yoga for All Ages with Suryanamaskaraa
          </Text>
          <Text style={{ top: 43, left: 10, fontSize: 19 }}>
            What exactly is Yoga,and why is it become so popular ?
          </Text>

          <View style={{ flexDirection: 'row' }}>
            <View
              style={{
                backgroundColor: '#FBF3D8',
                top: 50,
                left: 10,
                width: 180,
                height: 39,
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <Text style={{ fontSize: 18, letterSpacing: 0.5 }}>
                Duration:2hr 30min
              </Text>
            </View>
            <View
              style={{
                backgroundColor: '#FBF3D8',
                top: 50,
                left: 19,
                width: 70,
                height: 39,
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <Text style={{ fontSize: 18, letterSpacing: 0.5 }}>Age:8+</Text>
            </View>
          </View>
          <View
            style={{
              backgroundColor: '#FBF3D8',
              top: 57,
              left: 12,
              width: 299,
              height: 39,
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Text style={{ fontSize: 18, letterSpacing: 0.5 }}>
              Days Of Classes:Mon,Wed And Fri
            </Text>
          </View>

          <View style={{ flexDirection: 'row', top: 70, left: 10 }}>
            <Avatar.Image
              size={59}
              source={{
                uri: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
              }}
            />
            <View>
              <Text style={{ fontSize: 18, left: 16, fontWeight: 'bold' }}>
                Ankur Garg
              </Text>
              <Text style={{ fontSize: 16, left: 16 }}>
                Yoga Mentor | Psycologist | Teacher
              </Text>
            </View>
          </View>

          {/* <Rating
            style={{ marginBottom: 15 }}
            type="star"
            fractions={1}
            ratingCount={5}
            imageSize={37}
            showRating
            minValue="0"
            startingValue="0"
            onFinishRating={(value) => [
              setModalVisible(false),
              alert(`rated${value}`),
            ]}
          /> */}
        </View>
      </View>
    );
  };
  const CourseDetails = () => {
    return (
      <View>
        <View style={{ flexDirection: 'row' }}>
          <Text style={{ fontWeight: 'bold', fontSize: 30, top: 15, left: 18 }}>
            Free
          </Text>

          <View>
            <Text
              style={{
                fontSize: 20,
                top: 15,
                left: 45,
                textDecorationLine: 'line-through',
              }}
            >
              Rs.250.00
            </Text>

            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 10,
                backgroundColor: 'orange',
                width: 90,
                top: 16,
                left: 40,
              }}
            >
              <Text
                style={{
                  color: 'white',
                }}
              >
                100% off
              </Text>
            </View>
          </View>
          <View
            style={{
              left: 70,
              top: 12,
              borderWidth: 1,
              borderColor: 'grey',
              height: 70,
              width: 1,
            }}
          />
          <View>
            <Text style={{ color: 'red', fontSize: 18, left: 90, top: 19 }}>
              Class starts in
            </Text>
            <Text
              style={{
                color: 'red',
                fontSize: 18,
                left: 90,
                top: 19,
                letterSpacing: 2.5,
              }}
            >
              24 : 58 : 02
            </Text>
          </View>
        </View>
        <Button
          style={{
            backgroundColor: '#F96D1E',
            borderRadius: 5,
            width: 410,
            justifyContent: 'center',
            alignSelf: 'center',
            top: 23,
          }}
          labelStyle={{ color: 'white' }}
        >
          Register Now !
        </Button>
        <Text style={{ fontWeight: 'bold', top: 38, left: 10, fontSize: 18 }}>
          Course details
        </Text>
        <View
          style={{
            borderWidth: 1,
            borderColor: 'black',
            width: 390,
            height: 1,
            alignSelf: 'center',
            top: 45,
          }}
        />
        <View
          style={{ flexDirection: 'row', top: 59, left: 10, marginBottom: 10 }}
        >
          <Ionicons name="volume-medium" size={24} color="black" />
          <Text style={{ fontSize: 17, left: 10 }}>
            Audio: English original{' '}
          </Text>
        </View>
        <View
          style={{ flexDirection: 'row', top: 59, left: 10, marginBottom: 10 }}
        >
          <FontAwesome name="cc" size={24} color="black" />
          <Text style={{ fontSize: 17, left: 10 }}>
            Subtitles: English,Spanish,French{' '}
          </Text>
        </View>
        <View
          style={{ flexDirection: 'row', top: 59, left: 10, marginBottom: 10 }}
        >
          <MaterialCommunityIcons
            name="layers-outline"
            size={24}
            color="black"
          />
          <Text style={{ fontSize: 17, left: 10 }}>Course: 7 Parts </Text>
        </View>
        <View
          style={{ flexDirection: 'row', top: 59, left: 10, marginBottom: 10 }}
        >
          <Feather name="layers" size={24} color="black" />
          <Text style={{ fontSize: 17, left: 10 }}>Level: Mediuml </Text>
        </View>
        <View
          style={{ flexDirection: 'row', top: 59, left: 10, marginBottom: 10 }}
        >
          <MaterialIcons name="access-time" size={24} color="black" />
          <Text style={{ fontSize: 17, left: 10 }}>Duration: 2hr 30 min </Text>
        </View>
        <View
          style={{ flexDirection: 'row', top: 59, left: 10, marginBottom: 10 }}
        >
          <Ionicons name="md-phone-portrait-outline" size={24} color="black" />
          <Text style={{ fontSize: 17, left: 10 }}>
            Access On Mobile,Desltop And Tv{' '}
          </Text>
        </View>
        <View
          style={{ flexDirection: 'row', top: 59, left: 10, marginBottom: 10 }}
        >
          <MaterialCommunityIcons
            name="certificate-outline"
            size={24}
            color="black"
          />
          <Text style={{ fontSize: 17, left: 10 }}>
            Certificate Of Completion{' '}
          </Text>
        </View>
        <View
          style={{ flexDirection: 'row', top: 59, left: 10, marginBottom: 10 }}
        >
          <Entypo name="link" size={24} color="black" />
          <Text style={{ fontSize: 17, left: 10 }}>Support Files </Text>
        </View>
        <View
          style={{ flexDirection: 'row', top: 59, left: 10, marginBottom: 10 }}
        >
          <Ionicons name="infinite-outline" size={24} color="black" />
          <Text style={{ fontSize: 17, left: 10 }}>Full Time Access </Text>
        </View>
      </View>
    );
  };
  const Whatyouwilllearn = () => {
    return (
      <View style={{ top: 70, flex: 1 }}>
        <Text style={{ left: 20, fontSize: 19, fontWeight: 'bold' }}>
          What you'll learn
        </Text>
        <View
          style={{
            borderWidth: 1,
            borderColor: 'black',
            width: 390,
            height: 1,
            alignSelf: 'center',
            top: 7,
          }}
        />
        <View style={{ height: 159, width: 400, alignSelf: 'center', top: 30 }}>
          <LinearGradient
            colors={['#F89F17', '#F6C06D', '#FBDFB5']}
            style={styles.linearGradient}
          >
            <Text
              style={{
                color: 'white',
                fontSize: 17,
                fontWeight: 'bold',
                width: 350,
                letterSpacing: 1,
                top: 14,
              }}
            >
              Lorems ipsum has been the industry's standard dummy text ever
              since the 1500s.
            </Text>
          </LinearGradient>
        </View>
      </View>
    );
  };
  const Curriculum = () => {
    return (
      <View style={{ top: -115, flex: 1 }}>
        <Text style={{ left: 20, fontSize: 19, fontWeight: 'bold' }}>
          Curriculum
        </Text>
        <Text style={{ left: 20, top: 5 }}>
          28 Sections . 12 Lectures . 3h 45m Total Length
        </Text>
        <View
          style={{
            borderWidth: 1,
            borderColor: 'black',
            width: 390,
            height: 1,
            alignSelf: 'center',
            top: 17,
          }}
        />
        <View style={{ top: 39 }}>
          <View
            style={{
              backgroundColor: '#D4D2D0',
              width: 390,
              alignSelf: 'center',
              alignItems: 'center',
              borderRadius: 10,
            }}
          >
            <Text style={{ width: 340, fontSize: 17 }}>
              {'\u2022'} Lorems ipsum has been the industry's standard dummy
              text ever since the 1500s, when an unknown printer took a gallery
              of type and scrambled it to make a type specimen book.{`\n`}
              {'\u2022'} It has survived not only five centuries but also the
              leap into electronic typesetting,remaining essentially unchanged.
            </Text>
          </View>
        </View>
      </View>
    );
  };
  const Software_required_Material = () => {
    return (
      <View style={{ top: -240, flex: 1 }}>
        <Text style={{ left: 20, fontSize: 19, fontWeight: 'bold' }}>
          Software/Required Material
        </Text>
        <View
          style={{
            borderWidth: 1,
            borderColor: 'black',
            width: 390,
            height: 1,
            alignSelf: 'center',
            top: 7,
          }}
        />
        <Text
          style={{ fontSize: 18, left: 20, top: 17 }}
        >{`Yoga Matt \nWater(1ml)`}</Text>
        <Text style={{ fontWeight: 'bold', fontSize: 18, top: 50, left: 170 }}>
          You can access can to more {`\n`} courses while you earn{`\n`} more
          coins
        </Text>
        <Button
          style={{ backgroundColor: '#F96D1E', top: 80, borderRadius: 5 }}
          labelStyle={{ color: 'white' }}
        >
          {'Play & Win now !'}
        </Button>
      </View>
    );
  };
  const Review = () => {
    return (
      <View style={{ top: -370, flex: 1 }}>
        <Text style={{ left: 20, fontSize: 19, fontWeight: 'bold' }}>
          Review
        </Text>
        <View
          style={{
            borderWidth: 1,
            borderColor: 'black',
            width: 390,
            height: 1,
            alignSelf: 'center',
            top: 1,
          }}
        />
        <LinearGradient
          colors={['#fff', '#FCE4BF']}
          style={{ height: 800, paddingLeft: 15, paddingRight: 15, top: 15 }}
        >
          <View
            style={{
              backgroundColor: '#fff',
              left: 1,
              top: 10,
              width: 120,
              height: 25,
              elevation: 2,
              borderRadius: 5,
            }}
          >
            <StarRating
              starStyle={{ width: 13, height: 2, top: 2.5, right: 2 }}
              rating={4.5}
              starSize={23}
            />
          </View>
          {Info.map((item) => {
            return (
              <View
                style={{
                  width: 400,
                  height: 130,
                  backgroundColor: '#FCBF0A',
                  alignSelf: 'center',
                  borderRadius: 10,
                  top: 30,
                  marginBottom: 10,
                  flexDirection: 'row',
                }}
              >
                <Avatar.Image
                  style={{ top: 13, left: 15 }}
                  size={49}
                  source={{
                    uri: item.img,
                  }}
                />
                <View style={{ left: 29, top: 11 }}>
                  <Text style={{ fontWeight: 'bold', fontSize: 18 }}>
                    {item.Name}
                  </Text>
                  <Text style={{ width: 320 }}>{item.description}</Text>
                </View>
              </View>
            );
          })}

          <ScrollView style={{ bottom: 48 }} horizontal>
            {Course.map((item) => {
              return (
                <View
                  style={{
                    backgroundColor: 'white',
                    width: 380,
                    height: 230,
                    alignSelf: 'center',
                    top: 50,
                    borderRadius: 10,
                    marginRight: 10,
                  }}
                >
                  <ImageBackground
                    style={{
                      width: 355,
                      height: 138,
                      alignSelf: 'center',
                      borderRadius: 10,
                      overflow: 'hidden',
                      top: 18,
                    }}
                    source={require('../assets/yoga.jpg')}
                  >
                    <View style={{ flexDirection: 'row' }}>
                      <View
                        style={{
                          backgroundColor: '#444443',
                          left: 10,
                          top: 10,
                          width: 120,
                          height: 20,
                        }}
                      >
                        <StarRating
                          starStyle={{ width: 13, height: 2, top: 2.5 }}
                          rating={4.5}
                          starSize={15}
                        />
                      </View>
                      <View
                        style={{
                          flexDirection: 'row',
                          top: 10,
                          left: 20,
                          backgroundColor: '#444443',
                          height: 21,
                          width: 59,
                          justifyContent: 'center',
                          alignItems: 'center',
                          borderRadius: 5,
                        }}
                      >
                        <Ionicons
                          style={{ marginRight: 5 }}
                          name="person-circle-sharp"
                          size={18}
                          color="white"
                        />
                        <Text style={{ color: 'white' }}>245</Text>
                      </View>

                      <View
                        style={{
                          width: 70,
                          height: 20,
                          backgroundColor: '#F96D1E',
                          borderRadius: 5,
                          justifyContent: 'center',
                          alignItems: 'center',
                          top: 10,
                          right: -100,
                        }}
                      >
                        <Text style={{ color: '#fff' }}>Live</Text>
                      </View>
                      <Ionicons
                        style={{ top: 10, left: 160 }}
                        name="share-social"
                        size={18}
                        color="white"
                      />
                      <AntDesign
                        style={{ top: 10, left: 170 }}
                        name="hearto"
                        size={18}
                        color="white"
                      />
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                      <Avatar.Image
                        style={{ top: 60, left: 10 }}
                        size={42}
                        source={{
                          uri: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
                        }}
                      />
                      <Text style={{ color: 'white', top: 60, left: 20 }}>
                        by {`\n`}
                        <Text style={{ color: 'white', fontWeight: 'bold' }}>
                          Dave Lee{' '}
                        </Text>
                      </Text>
                      <Text style={{ color: 'white', top: 60, left: 130 }}>
                        {'     '} Mon-Fri{`\n`}
                        <Text style={{ fontWeight: 'bold' }}>9:00-12:00</Text>
                      </Text>
                      <Feather
                        style={{ top: 60, left: 135 }}
                        name="calendar"
                        size={40}
                        color="white"
                      />
                    </View>
                  </ImageBackground>

                  <View>
                    <Text
                      style={{
                        fontSize: 18,
                        fontWeight: 'bold',
                        width: 199,
                        letterSpacing: 0.4,
                        top: 27,
                        left: 16,
                      }}
                    >
                      Yoga For All Ages With Suryanamaskaraa
                    </Text>
                    <Button
                      style={{
                        backgroundColor: '#F96D1E',
                        width: 134,
                        left: 231,
                        bottom: 17,
                      }}
                      labelStyle={{ color: 'white' }}
                    >
                      Enroll Free
                    </Button>
                  </View>
                </View>
              );
            })}
          </ScrollView>
        </LinearGradient>
      </View>
    );
  };
  return (
    <>
      <View
        style={{
          flexDirection: 'row',
          margin: 10,
          justifyContent: 'space-between',
        }}
      >
        <TouchableOpacity onPress={() => navigation.openDrawer()}>
          <Feather name="menu" size={35} color="black" />
        </TouchableOpacity>

        <Ionicons name="person-circle-outline" size={38} color="black" />
      </View>
      <ScrollView contentContainerStyle={styles.container}>
        <Card />
        <CourseDetails />
        <Whatyouwilllearn />
        <Curriculum />
        <Software_required_Material />
        <Review />
      </ScrollView>
    </>
  );
}
const styles = StyleSheet.create({
  container: {
    // paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    height: height + 2000,
    backgroundColor: '#fff',
  },
  linearGradient: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 10,
  },
  buttonText: {
    fontSize: 18,
    fontFamily: 'Gill Sans',
    textAlign: 'center',
    margin: 10,
    color: '#ffffff',
    backgroundColor: 'transparent',
  },
});
export default HomeScreen;
