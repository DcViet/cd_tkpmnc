// Interface cho các dịch vụ bản đồ
class MapService {
    constructor() {
        if (this.constructor === MapService) {
            throw new TypeError('Abstract class "MapService" cannot be instantiated directly.');
        }
    }

    // Phương thức trừu tượng để tạo một bản đồ mới
    createMap() {
        throw new Error('Method "createMap" must be implemented.');
    }
}

// Lớp triển khai cho dịch vụ Google Maps
class GoogleMapsService extends MapService {
    createMap() {
        return new GoogleMap();
    }
}

// Lớp triển khai cho dịch vụ OpenStreet
class OpenStreetService extends MapService {
    createMap() {
        return new OpenStreetMap();
    }
}

// Lớp đối tượng cho bản đồ của Google
class GoogleMap {
    // Triển khai các phương thức và thuộc tính cần thiết
}

// Lớp đối tượng cho bản đồ của OpenStreet
class OpenStreetMap {
    // Triển khai các phương thức và thuộc tính cần thiết
}

// Factory Method cho dịch vụ bản đồ
class MapServiceFactory {
    static createMapService(type) {
        switch (type) {
            case 'GoogleMaps':
                return new GoogleMapsService();
            case 'OpenStreet':
                return new OpenStreetService();
            default:
                throw new Error('Invalid map service type.');
        }
    }
}

// Sử dụng Factory Method để tạo dịch vụ bản đồ
const googleMapsService = MapServiceFactory.createMapService('GoogleMaps');
const googleMap = googleMapsService.createMap();

const openstreetService = MapServiceFactory.createMapService('OpenStreet');
const openstreetMap = openstreetService.createMap();