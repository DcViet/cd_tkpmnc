import React from 'react';
import { View, Text, Image, ScrollView, StyleSheet } from 'react-native';

class CarType extends React.Component {
    renderCarousel = (type) => {
        let carInfoData = [];

        if (type === "Type1") {
            carInfoData = [
                { title: " ", content: [], imageSource: require('../../assets/images/glc-300.png') },
                { title: "51A-123.45", content: ["Biển số"] },
                { title: "GLC-300", content: ["Model"] },
                { title: "5 chỗ", content: ["Chỗ ngồi"] },
                { title: "50.000 VNĐ", content: [] },
                { title: "5 *", content: [] }
            ];
        } else if (type === "Type2") {
            carInfoData = [
                { title: " ", content: [], imageSource: require('../../assets/images/audi-q4.png') },
                { title: "51A-456.78", content: ["Biển số"] },
                { title: "Audi-Q4", content: ["Model"] },
                { title: "4 chỗ", content: ["Chỗ ngồi"] },
                { title: "30.000 VNĐ", content: [] },
                { title: "5 *", content: [] }
            ];
        }

        return (
            <View style={styles.carouselContainer} key={type}>
                <View style={styles.container}>

                    <View style={styles.view2}>
                        <View style={styles.flexContainer}>
                            {carInfoData.map((item, index) => (
                                <View style={styles.infoBox} key={index}>
                                    <Text style={styles.infoText}>{item.title}</Text>
                                    {item.content.map((contentItem, contentIndex) => (
                                        <Text key={contentIndex}>{contentItem}</Text>
                                    ))}
                                </View>
                            ))}
                        </View>
                    </View>

                    <View style={styles.view1}>
                        <View>
                            {carInfoData.map((item, index) => (
                                <Image
                                    key={index}
                                    source={item.imageSource}
                                    style={{ width: 150, height: 150 }}
                                    resizeMode="contain"
                                />
                            ))}
                        </View>
                    </View>
                </View>
            </View>

        );
    };

    render() {
        const carTypes = ["Type1", "Type2", "Type3"];

        return (
            <ScrollView horizontal={true} style={styles.scrollView}>
                {carTypes.map((type, index) => (
                    this.renderCarousel(type)
                ))}
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 20,
    },
    carousel: {
        flexDirection: 'row',
        paddingVertical: 10,
    },
    carouselItem: {
        marginRight: 10,
    },

    view1: {
        // width: 150,
        // height: 200,
        backgroundColor: 'transparent',
        position: 'absolute',
        top: 10,
        left: -30,
        zIndex: 1,
        // borderRadius: 20,
    },
    view2: {
        width: 250,
        height: 160,
        backgroundColor: 'transparent',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#ccc',
        padding: 10,
        borderRadius: 5,
    },
    flexContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap', // Xếp các box vào hàng mới khi không đủ chỗ
        justifyContent: 'space-between', // Căn đều các box theo chiều ngang
    },
    infoBox: {
        width: '48%', // Để tạo ra hai cột trong mỗi hàng
        // borderWidth: 1,
        // borderColor: '#ccc',
        // borderRadius: 5,
        padding: 5,
        marginVertical: 5,
    },
    infoText: {
        fontWeight: 'bold',
    },
});

export default CarType;
