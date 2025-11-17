/**
 * Part of the `Input` class. It is used to describe a specific user input key or gamepad
 * button.
 */
export type InputActionAtom = InputActionKey;

/**
 * Part of the Input API. It is used to describe a specific user input key.
 */
export type InputActionKey = {
  /**
   * Identifies the input key.
   */
  key: InputActionKeyName;

  /**
   * Whether the `Ctrl` key is used.
   */
  control?: boolean;

  /**
   * Whether the `Alt` key is used.
   */
  alt?: boolean;

  /**
   * Whether the `Shift` key is used.
   */
  shift?: boolean;

  /**
   * Whether the meta key is used (e.g. the Windows Logo or Mac Command key).
   */
  meta?: boolean;
};

/**
 * Part of the Input API. It is used to identify the name of a specific user input key.
 * 
 * The `"meta"` key corresponds to the Windows logo or Mac Command key.
 */
export type InputActionKeyName =
  | "meta"
  | "fn"
  | "home"
  | "end"
  | "leftArrow"
  | "rightArrow"
  | "upArrow"
  | "downArrow"
  | "spacebar"
  | "enter"
  | "backspace"
  | "minus"
  | "plus"
  | "tab"
  | "escape"
  | "assign"
  | "comma"
  | "dot"
  | "semicolon"
  | "delete"
  | "pageUp"
  | "pageDown"
  | "capsLock"
  | "f1"
  | "f2"
  | "f3"
  | "f4"
  | "f5"
  | "f6"
  | "f7"
  | "f8"
  | "f9"
  | "f10"
  | "f11"
  | "f12"
  | "0"
  | "1"
  | "2"
  | "3"
  | "4"
  | "5"
  | "6"
  | "7"
  | "8"
  | "9"
  | "a"
  | "b"
  | "c"
  | "d"
  | "e"
  | "f"
  | "g"
  | "h"
  | "i"
  | "j"
  | "k"
  | "l"
  | "m"
  | "n"
  | "o"
  | "p"
  | "q"
  | "r"
  | "s"
  | "t"
  | "u"
  | "v"
  | "w"
  | "x"
  | "y"
  | "z";

const mapNavigatorKeyToThis = new Map<string, InputActionKeyName>([
  ["arrowleft", "leftArrow"],
  ["arrowright", "rightArrow"],
  ["arrowup", "upArrow"],
  ["arrowdown", "downArrow"],
  ["left", "leftArrow"],
  ["right", "rightArrow"],
  ["up", "upArrow"],
  ["down", "downArrow"],
  ["escape", "escape"],
  [" ", "spacebar"],
  ["enter", "enter"],
  ["backspace", "backspace"],
  ["subtract", "minus"],
  ["add", "plus"],
  ["tab", "tab"],
  ["+", "plus"],
  ["-", "minus"],
  ["=", "assign"],
  [",", "comma"],
  [".", "dot"],
  [";", "semicolon"],
  ["meta", "meta"],
  ["os", "meta"],
  ["fn", "fn"],
  ["delete", "delete"],
  ["del", "delete"],
  ["pageup", "pageUp"],
  ["pagedown", "pageDown"],
  ["home", "home"],
  ["end", "end"],
  ["capslock", "capsLock"],
]);

export function navigatorKeyToThis(
  name: string,
): InputActionKeyName | undefined {
  name = name.toLowerCase();
  if (/^([a-z0-9]|f\d\d?)$/.test(name)) {
    return name as any;
  }
  return mapNavigatorKeyToThis.get(name);
}
