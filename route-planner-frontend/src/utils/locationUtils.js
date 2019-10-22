export function calcLocationValue(location) {
    const value = location.sum/location.serviceTime;
    return value;
}