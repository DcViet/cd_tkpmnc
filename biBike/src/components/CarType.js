import React, { Component } from 'react';
import { View, Text, Image, ScrollView, StyleSheet, TouchableOpacity, Modal } from 'react-native';

class CarType extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedCarInfo: null, // Thông tin của box được chọn
            modalVisible: false, // Đánh dấu xem modal có hiển thị hay không
            selectedBox: null // Trạng thái được chọn của box
        };
    }

    handleBoxPress = (carInfo, index) => {
        // Xử lý sự kiện chọn box và lưu thông tin vào state
        this.setState({ selectedCarInfo: carInfo, modalVisible: true, selectedBox: index });
    };

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

        const { selectedBox } = this.state;

        return (
            <View style={styles.carouselContainer} key={type}>
                <View style={styles.container}>

                    <View style={styles.view2}>
                        <View style={styles.flexContainer}>
                            {carInfoData.map((item, index) => (
                                <TouchableOpacity
                                    key={index}
                                    style={[styles.infoBox, selectedBox === index && styles.selectedBox]} // Thêm kiểu dáng cho box được chọn
                                    onPress={() => this.handleBoxPress(item, index)}>
                                    <Text style={styles.infoText}>{item.title}</Text>
                                    {item.content.map((contentItem, contentIndex) => (
                                        <Text key={contentIndex}>{contentItem}</Text>
                                    ))}
                                </TouchableOpacity>
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

    renderModal = () => {
        const { selectedCarInfo, modalVisible } = this.state;

        if (!modalVisible || !selectedCarInfo) {
            // Return null if modal is not visible or selectedCarInfo is null
            return null;
        }

        return (
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    this.setState({ modalVisible: false });
                }}
            >
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <Text style={styles.modalText}>You have selected:</Text>
                        <Text style={styles.selectedType}>{selectedCarInfo.title}</Text>
                        <TouchableOpacity
                            style={styles.closeButton}
                            onPress={() => this.setState({ modalVisible: false })}
                        >
                            <Text style={styles.closeButtonText}>Close</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
        );
    };


    render() {
        const carTypes = ["Type1", "Type2", "Type3"];

        return (
            <ScrollView horizontal={true} style={styles.scrollView}>
                {carTypes.map((type, index) => (
                    this.renderCarousel(type)
                ))}
                {this.renderModal()}
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


    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
    },
    modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },
    modalText: {
        marginBottom: 15,
        textAlign: "center"
    },
    selectedType: {
        marginBottom: 15,
        textAlign: "center",
        fontWeight: "bold"
    },
    closeButton: {
        backgroundColor: "#2196F3",
        borderRadius: 20,
        padding: 10,
        elevation: 2
    },
    closeButtonText: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
    },
    selectedBox: {
        backgroundColor: 'rgba(0, 0, 255, 0.5)', // Màu nền khi box được chọn
    }
});

export default CarType;


