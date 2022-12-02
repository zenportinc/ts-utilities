type NotAllowedSpecialCharacters = `${string}${'\\' | '//' | ':' | '*' | '?' | '"' | '<' | '>' | '|'}${string}`;
type AllowedSpecialCharacters = `${string}${'_' | '-' | '%' | '+' | '!' | "'" | '{' | '}' | '~'}${string}`;

const charactersMap = new Map<NotAllowedSpecialCharacters, AllowedSpecialCharacters>([
  ['\\', '_'],
  ['//', '-'],
  [':', '%'],
  ['*', '-'],
  ['?', '!'],
  ['"', "'"],
  ['<', '{'],
  ['>', '}'],
  ['|', '~'],
]);

/**
 * Regex match rule:
 */
export const regex = /[\\\\/:*?"<>|]/g;

/**
 * Replacer
 * find a matching character and replace it with the map value
 */
export const replacer = (char: string): string => charactersMap.get(char as NotAllowedSpecialCharacters) ?? '';


