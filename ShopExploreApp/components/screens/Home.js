import React, {useState, useEffect} from 'react';
import {
    View,
    Text,
    StatusBar,
    ScrollView,
    TouchableOpacity,
    Image,
} from 'react-native';
import {COLORS, Items} from '../database/Database';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const Home = ({navigation}) => {
const [products, setProducts] = useState([]);
const [accessory, setAccessory] = useState([]);

  //get called on screen loads
    useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => {
    getDataFromDB();
});

    return unsubscribe;
    }, [navigation]);

  //get data from DB

    const getDataFromDB = () => {
        let productList = [];
        let accessoryList = [];
        for (let index = 0; index < Items.length; index++) {
            if (Items[index].category == 'product') {
                productList.push(Items[index]);
        } else if (Items[index].category == 'accessory') {
            accessoryList.push(Items[index]);
        }
    }

    setProducts(productList);
    setAccessory(accessoryList);
    };

  //create an product reusable card

    const ProductCard = ({data}) => {
        return (
    <TouchableOpacity
        onPress={() => navigation.navigate('ProductInfo', {productID: data.id})}
        style={{
            width: '48%',
            marginVertical: 14,
        }}>
        <View
        style={{
            width: '100%',
            height: 100,
            borderRadius: 10,
            backgroundColor: COLORS.backgroundLight,
            position: 'relative',
            justifyContent: 'center',
            alignItems: 'center',
            marginBottom: 8,
        }}>
            {data.isOff ? (
            <View
                style={{
                    position: 'absolute',
                    width: '20%',
                    height: '24%',
                    backgroundColor: COLORS.green,
                    top: 0,
                    left: 0,
                    borderTopLeftRadius: 10,
                    borderBottomRightRadius: 10,
                    alignItems: 'center',
                    justifyContent: 'center',
                }}>
            <Text
                style={{
                    fontSize: 12,
                    color: COLORS.white,
                    fontWeight: 'bold',
                    letterSpacing: 1,
                }}>
                {data.offPercentage}%
            </Text>
            </View>
        ) : null}
        <Image
            source={data.productImage}
            style={{
                width: '80%',
                height: '80%',
                resizeMode: 'contain',
            }}
        />
        </View>
        <Text
            style={{
            fontSize: 13,
            color: COLORS.black,
            lineHeight: 18,
            fontWeight: '700',
            marginBottom: 6,
            }}>
            {data.productName}
        </Text>
        {data.category == 'accessory' ? (
            data.isAvailable ? (
            <View
                style={{
                flexDirection: 'row',
                alignItems: 'center',
            }}>
            <FontAwesome
                name="circle"
                style={{
                    fontSize: 12,
                    marginRight: 6,
                    color: COLORS.green,
                }}
            />
            <Text
                style={{
                    fontSize: 12,
                    color: COLORS.green,
                }}>
                Available
            </Text>
            </View>
        ) : (
            <View
                style={{
                flexDirection: 'row',
                alignItems: 'center',
            }}>
            <FontAwesome
                name="circle"
                style={{
                    fontSize: 12,
                    marginRight: 6,
                    color: COLORS.red,
                }}
                />
            <Text
                style={{
                    fontSize: 12,
                    color: COLORS.red,
                }}>
                Unavailable
            </Text>
            </View>
        )
        ) : null}
        <Text>&#8377; {data.productPrice}</Text>
    </TouchableOpacity>
    );
};

  return (
    <View
      style={{
        width: '100%',
        height: '100%',
        backgroundColor: COLORS.white,
      }}>
      <StatusBar backgroundColor={COLORS.white} barStyle="dark-content" />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{
            width: '100%',
            flexDirection: 'row',
            justifyContent: 'space-between',
            padding: 16,
          }}>
          <TouchableOpacity>
            <Entypo
              name="shopping-bag"
              style={{
                fontSize: 18,
                color: COLORS.backgroundMedium,
                padding: 12,
                borderRadius: 10,
                backgroundColor: COLORS.backgroundLight,
              }}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Cart')}>
            <MaterialCommunityIcons
              name="cart"
              style={{
                fontSize: 18,
                color: COLORS.backgroundMedium,
                padding: 12,
                borderRadius: 10,
                borderWidth: 1,
                borderColor: COLORS.backgroundLight,
              }}
            />
          </TouchableOpacity>
        </View>
        <View
          style={{
            marginBottom: 10,
            padding: 16,
          }}>
          <Text
            style={{
              fontSize: 26,
              color: COLORS.black,
              fontWeight: '500',
              letterSpacing: 1,
              marginBottom: 10,
            }}>
            ShopMe Explore 
          </Text>
          <Text
            style={{
              fontSize: 14,
              color: COLORS.black,
              fontWeight: '400',
              lineHeight: 24,
            }}>
            Audio shop on Rustaveli Ave 57.
            {'\n'}This shop offers both products and services
          </Text>
        </View>
        <View
          style={{
            padding: 16,
          }}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <Text
                style={{
                  fontSize: 18,
                  color: COLORS.black,
                  fontWeight: '500',
                  letterSpacing: 1,
                }}>
                Products
              </Text>
              <Text
                style={{
                  fontSize: 14,
                  color: COLORS.black,
                  fontWeight: '400',
                  opacity: 0.5,
                  marginLeft: 10,
                }}>
                41
              </Text>
            </View>
            <Text
              style={{
                fontSize: 14,
                color: COLORS.blue,
                fontWeight: '400',
              }}>
              See all
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              flexWrap: 'wrap',
              justifyContent: 'space-around',
            }}>
            {products.map(data => {
              return <ProductCard data={data} key={data.id} />;
            })}
          </View>
        </View>

        <View
          style={{
            padding: 16,
          }}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <Text
                style={{
                  fontSize: 18,
                  color: COLORS.black,
                  fontWeight: '500',
                  letterSpacing: 1,
                }}>
                Accessories
              </Text>
              <Text
                style={{
                  fontSize: 14,
                  color: COLORS.black,
                  fontWeight: '400',
                  opacity: 0.5,
                  marginLeft: 10,
                }}>
                78
              </Text>
            </View>
            <Text
              style={{
                fontSize: 14,
                color: COLORS.blue,
                fontWeight: '400',
              }}>
              See all
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              flexWrap: 'wrap',
              justifyContent: 'space-around',
            }}>
            {accessory.map(data => {
              return <ProductCard data={data} key={data.id} />;
            })}
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default Home;