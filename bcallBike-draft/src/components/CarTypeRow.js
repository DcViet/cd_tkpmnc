import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { CarTypeStyles } from '../../styles/componentsStyle';

const CarTypeRow = ({ type, handleBoxPress, selectedBox }) => {
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
        <View style={CarTypeStyles.carouselContainer} key={type}>
            <View style={CarTypeStyles.container}>
                {/* View2 */}
                <View style={CarTypeStyles.view2}>
                    <View style={CarTypeStyles.flexContainer}>
                        {carInfoData.map((item, index) => (
                            <TouchableOpacity
                                key={index}
                                style={[CarTypeStyles.infoBox, selectedBox === index && CarTypeStyles.selectedBox]} // Thêm kiểu dáng cho box được chọn
                                onPress={() => handleBoxPress(item, index)}>
                                <Text style={CarTypeStyles.infoText}>{item.title}</Text>
                                {item.content.map((contentItem, contentIndex) => (
                                    <Text key={contentIndex}>{contentItem}</Text>
                                ))}
                            </TouchableOpacity>
                        ))}
                    </View>
                </View>

                {/* View1 */}
                <View style={CarTypeStyles.view1}>
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

export default CarTypeRow;
