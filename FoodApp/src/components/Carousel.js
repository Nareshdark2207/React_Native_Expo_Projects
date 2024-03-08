import { StyleSheet, Text, View, FlatList, Image, Dimensions } from "react-native";
import React, { useEffect, useRef, useState } from "react";
import {Slider1, Slider2, Slider3, Slider4, Slider5, Slider6, Slider7, Slider8} from "../CarouselImages";

const Carousel = () => {
    const flatListRef = useRef(); 
    const screenWidth = Dimensions.get("window").width;
    const [activeIndex, setActiveIndex] = useState(0);
    console.log("index", activeIndex);
    const carouselData = [
        {
            id: "0",
            imageUrl: Slider1,
        },
        {
            id: "1",
            imageUrl: Slider2,
        },
        {
            id: "2",
            imageUrl: Slider3,
        },  
        {
            id: "3",
            imageUrl: Slider4,
        },
        {
            id: "4",
            imageUrl: Slider5,
        },
        {
            id: "5",
            imageUrl: Slider6,
        },
        {
            id: "6",
            imageUrl: Slider7,
        },  
        {
            id: "7",
            imageUrl: Slider8,
        }
    ];
    // useEffect(() => {
    //     let interval = setInterval(()=>{
    //         if(activeIndex === carouselData.length - 1) {
    //             flatListRef.current.scrollToIndex({
    //                 index: 0,
    //                 animation: true,
    //             });
    //         } 
    //         else {
    //             flatListRef.current.scrollToIndex({
    //                 index: activeIndex + 1,
    //                 animation: true,
    //             });
    //         }
    //     }, 3000);
    //     return () => clearInterval(interval);
    // },[activeIndex]);

    const getItemLayout = (data, index) =>({
        length: screenWidth,
        offset: screenWidth * index,
        index: index,
    });

    const renderItem = ({ item, data }) => {
        return(
            <View>
                <Image key={data} source={item.imageUrl} style={{ height:200, width: screenWidth }}></Image>
            </View>
        );
    };

    const handleScroll = (event) =>{
        const scrollPosition = event.nativeEvent.contentOffset.x;
        const index = scrollPosition / screenWidth;
        setActiveIndex(index);
    }
    return (
        <View>
        {/* {carouselData.map((backgroundColor, index) => ( */}
            
            <FlatList data={carouselData} 
                renderItem={renderItem}
                // key={index}
                ref={flatListRef}
                getItemLayout={getItemLayout}
                // keyExtractor={(item)=>item.id} 
                snapToAlignment="center"
                decelerationRate={"fast"}
                showsHorizontalScrollIndicator={false}
                horizontal={true}
                scrollEnabled={true} 
                pagingEnabled={true}
                useScrollView={true}
                onScroll={handleScroll}>
            </FlatList>
        
        {/* ))} */}
        </View> 
    )
}

export default Carousel;

const styles = StyleSheet.create({});