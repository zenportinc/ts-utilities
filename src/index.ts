type NotAllowedSpecialCharacters = `${string}${'\\' | '//' | ':' | '*' | '?' | '"' | '<' | '>' | '|'}${string}`;
type AllowedSpecialCharacters = `${string}${'_' | '-' | '%' | '+' | '!' | "'" | '{' | '}' | '~'}${string}`;

const charactersMap = new Map<NotAllowedSpecialCharacters, AllowedSpecialCharacters>([
    ['\\', '_'],
    ['//', '-'],
    [':', '%'],
    ['*', '-'],
    ['?', '!'],
    ['"', "'"],
    ['<', "{"],
    ['>', "}"],
    ['|', "~"],

])

/**
 * Regex match rule:
 */
const regex = /[\\\\/:*?"<>|]/g


/**
 * Replacer
 * find a matching character and replace it with the map value
 */
export const replacer = (char: string): string => charactersMap.get(char as NotAllowedSpecialCharacters) ?? ''

//================================UNIT TEST===========================================//
// const testShipments = new Map<string, string>([
//     ['my\\shipment\\to\\japan', 'my_shipment_to_japan'],
//     ['11//24//2022', '11-24-2022'],
//     ['hello:world', 'hello%world'],
//     ['my*asterisk*shipment', 'my+asterisk+shipment'],
//     ['where is it?', 'where is it!']
// ])


// testShipments.forEach((value, expected) => {
//     const result = value.replace(regex, replacer)
//     console.log(`assert ${value}`, result == value)
// }