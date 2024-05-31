import { StyleSheet } from 'react-native';

export const CarTypeStyles = StyleSheet.create({
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
