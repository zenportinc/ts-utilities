import { regex, replacer } from '../index'

// ================================UNIT TEST===========================================//
const testShipments = new Map<string, string>([
    ['my\\shipment\\to\\japan', 'my_shipment_to_japan'],
    ['11/24/2022', '11-24-2022'],
    ['hello:world', 'hello%world'],
    ['my*asterisk*shipment', 'my+asterisk+shipment'],
    ['where is it?', 'where is it!'],
    ['22/22', '22-22'],
    ['22//22', '22--22'],
    ['22///22', '22---22'],
    ['22\\22', '22_22'],
    ['22\\\\22', '22__22'],
    ['22\\\\\\22', '22___22'],
]);

test('My Greeter', () => {
    testShipments.forEach((value,key) => {
        const result = key.replace(regex,replacer)
        console.log(`assert ${value}`, result == value)
        expect(result).toBe(value)
    })
});




