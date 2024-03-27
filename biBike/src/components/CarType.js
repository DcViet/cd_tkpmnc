import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Image, ScrollView } from 'react-native';
import CarTypeRow from './CarTypeRow';
import CarInfoModal from './CarInfoModal';
import { CarTypeStyles } from '../../styles/componentsStyle';

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

    renderModal = () => {
        const { selectedCarInfo, modalVisible } = this.state;

        if (!modalVisible || !selectedCarInfo) {
          
            return null;
        }

        return (
            <CarInfoModal 
                selectedCarInfo={selectedCarInfo}
                modalVisible={modalVisible}
                closeModal={() => this.setState({ modalVisible: false })}
            />
        );
    };

    render() {
        const carTypes = ["Type1", "Type2", "Type3"];

        return (
            <ScrollView horizontal={true} style={CarTypeStyles.scrollView}>
                {carTypes.map((type, index) => (
                    <CarTypeRow 
                        key={index} 
                        type={type} 
                        handleBoxPress={this.handleBoxPress} 
                        selectedBox={this.state.selectedBox} 
                    />
                ))}
                {this.renderModal()}
            </ScrollView>
        );
    }
}

export default CarType;
