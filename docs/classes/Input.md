[**com.sweaxizone.inputaction**](../README.md)

***

[com.sweaxizone.inputaction](../globals.md) / Input

# Class: Input

Defined in: [src/Input.ts:69](https://github.com/MatheusDS4/inputaction.js/blob/7c6511c9db3862eb6499c4716ee63a7f957c0a15/src/Input.ts#L69)

The `Input` class handles action mapping and user input event listening.

# Getting started

The following code demonstrates using arrows and WASD keys
for entity movement:

```ts
import { input } from "com.sweaxizone.inputaction";

input.setActions({
    "moveLeft": [
        { key: "a" },
        { key: "leftArrow" },
    ],
    "moveRight": [
        { key: "d" },
        { key: "rightArrow" },
    ],
    "moveUp": [
        { key: "w" },
        { key: "upArrow" },
    ],
    "moveDown": [
        { key: "s" },
        { key: "downArrow" },
    ],
});

input.on("inputPressed", () => {
    const shouldMoveRight = input.isPressed("moveRight");
});
```

# Built-in actions

The following actions are pre-defined in every action map
and can be overriden:

* `escape` - Used for escaping out in the user interface.
* `navigateLeft` — Used for focusing the left neighbor of an user interface control.
* `navigateRight` — Used for focusing the right neighbor of an user interface control.
* `navigateUp` — Used for focusing the top neighbor of an user interface control.
* `navigateDown` — Used for focusing the bottom neighbor of an user interface control.

# Events

This class extends `EventTarget` and may dispatch the following events:

```ts
// Dispatched when user input starts being pressed or
// is continuously pressed.
inputPressed: Event;
// Dispatched when any user input is released.
inputReleased: Event;
// Dispatched when the actions map is updated.
actionsUpdated: Event;
```

## Extends

- `SAEventTarget`

## Constructors

### Constructor

> **new Input**(): `Input`

#### Returns

`Input`

#### Inherited from

`SAEventTarget.constructor`

## Properties

### \[EventRecord\]

> **\[EventRecord\]**: `object`

Defined in: [src/Input.ts:75](https://github.com/MatheusDS4/inputaction.js/blob/7c6511c9db3862eb6499c4716ee63a7f957c0a15/src/Input.ts#L75)

#### actionsUpdated

> **actionsUpdated**: `Event`

#### inputPressed

> **inputPressed**: `Event`

#### inputReleased

> **inputReleased**: `Event`

#### Overrides

`SAEventTarget.[EventRecord]`

***

### input

> `readonly` `static` **input**: `Input`

Defined in: [src/Input.ts:73](https://github.com/MatheusDS4/inputaction.js/blob/7c6511c9db3862eb6499c4716ee63a7f957c0a15/src/Input.ts#L73)

The singleton instance of the `Input` class.

## Methods

### emit()

#### Call Signature

> **emit**\<`K`, `C`, `EventResult`\>(`type`, `constructor`): `boolean`

Defined in: node\_modules/com.sweaxizone.w3c.extension/dist/index.d.ts:28

##### Type Parameters

###### K

`K` *extends* `"actionsUpdated"` \| `"inputPressed"` \| `"inputReleased"`

###### C

`C` *extends* (`type`) => `EventResult`

###### EventResult

`EventResult` *extends* `Event`

##### Parameters

###### type

`K`

###### constructor

`C`

##### Returns

`boolean`

##### Inherited from

`SAEventTarget.emit`

#### Call Signature

> **emit**\<`K`, `C`, `O`, `EventResult`\>(`type`, `constructor`, `options`): `boolean`

Defined in: node\_modules/com.sweaxizone.w3c.extension/dist/index.d.ts:29

##### Type Parameters

###### K

`K` *extends* `"actionsUpdated"` \| `"inputPressed"` \| `"inputReleased"`

###### C

`C` *extends* (`type`, `options`) => `EventResult`

###### O

`O`

###### EventResult

`EventResult` *extends* `Event`

##### Parameters

###### type

`K`

###### constructor

`C`

###### options

`O`

##### Returns

`boolean`

##### Inherited from

`SAEventTarget.emit`

#### Call Signature

> **emit**(`event`): `boolean`

Defined in: node\_modules/com.sweaxizone.w3c.extension/dist/index.d.ts:30

##### Parameters

###### event

`Event`

##### Returns

`boolean`

##### Inherited from

`SAEventTarget.emit`

***

### getActions()

> **getActions**(): `Record`\<`string`, [`InputActionAtom`](../type-aliases/InputActionAtom.md)[]\>

Defined in: [src/Input.ts:184](https://github.com/MatheusDS4/inputaction.js/blob/7c6511c9db3862eb6499c4716ee63a7f957c0a15/src/Input.ts#L184)

Returns the current action map in read-only mode.

#### Returns

`Record`\<`string`, [`InputActionAtom`](../type-aliases/InputActionAtom.md)[]\>

***

### isPressed()

> **isPressed**(`name`): `boolean`

Defined in: [src/Input.ts:291](https://github.com/MatheusDS4/inputaction.js/blob/7c6511c9db3862eb6499c4716ee63a7f957c0a15/src/Input.ts#L291)

Determines whether an action is pressed.

#### Parameters

##### name

`string`

#### Returns

`boolean`

#### Throws

Error Thrown if the action does not exist.

***

### justPressed()

> **justPressed**(`name`): `boolean`

Defined in: [src/Input.ts:324](https://github.com/MatheusDS4/inputaction.js/blob/7c6511c9db3862eb6499c4716ee63a7f957c0a15/src/Input.ts#L324)

Determines whether an action has been just pressed right now.

#### Parameters

##### name

`string`

#### Returns

`boolean`

#### Throws

Error Thrown if the action does not exist.

***

### off()

#### Call Signature

> **off**\<`K`\>(`type`, `listener`, `options?`): `void`

Defined in: node\_modules/com.sweaxizone.w3c.extension/dist/index.d.ts:26

##### Type Parameters

###### K

`K` *extends* `"actionsUpdated"` \| `"inputPressed"` \| `"inputReleased"`

##### Parameters

###### type

`K`

###### listener

(`e`) => `void` \| `undefined`

###### options?

`boolean` | `SAOffEventOptions`

##### Returns

`void`

##### Inherited from

`SAEventTarget.off`

#### Call Signature

> **off**(`type`, `listener`, `options?`): `void`

Defined in: node\_modules/com.sweaxizone.w3c.extension/dist/index.d.ts:27

##### Parameters

###### type

`string`

###### listener

(`e`) => `void` \| `undefined`

###### options?

`boolean` | `SAOffEventOptions`

##### Returns

`void`

##### Inherited from

`SAEventTarget.off`

***

### on()

#### Call Signature

> **on**\<`K`\>(`type`, `listener`, `options?`): `void`

Defined in: node\_modules/com.sweaxizone.w3c.extension/dist/index.d.ts:24

##### Type Parameters

###### K

`K` *extends* `"actionsUpdated"` \| `"inputPressed"` \| `"inputReleased"`

##### Parameters

###### type

`K`

###### listener

(`e`) => `void` \| `undefined`

###### options?

`boolean` | `SAOnEventOptions`

##### Returns

`void`

##### Inherited from

`SAEventTarget.on`

#### Call Signature

> **on**(`type`, `listener`, `options?`): `void`

Defined in: node\_modules/com.sweaxizone.w3c.extension/dist/index.d.ts:25

##### Parameters

###### type

`string`

###### listener

(`e`) => `void` \| `undefined`

###### options?

`boolean` | `SAOnEventOptions`

##### Returns

`void`

##### Inherited from

`SAEventTarget.on`

***

### setActions()

> **setActions**(`map`): `void`

Defined in: [src/Input.ts:191](https://github.com/MatheusDS4/inputaction.js/blob/7c6511c9db3862eb6499c4716ee63a7f957c0a15/src/Input.ts#L191)

Updates the action map, firing the `actionsUpdated` event.

#### Parameters

##### map

`Record`\<`string`, [`InputActionAtom`](../type-aliases/InputActionAtom.md)[]\>

#### Returns

`void`

***

### display()

> `static` **display**(`param`): `string`

Defined in: [src/Input.ts:89](https://github.com/MatheusDS4/inputaction.js/blob/7c6511c9db3862eb6499c4716ee63a7f957c0a15/src/Input.ts#L89)

Returns the display text of a shortcut, such as `"Ctrl+A"`.

Check the [repository's respective source](https://github.com/hydroperx/inputaction.js/blob/master/src/Input.ts)
for resulting key names in case you need overriding them.

#### Parameters

##### param

Either an action name or a series of action atoms.

`string` | [`InputActionKey`](../type-aliases/InputActionKey.md)[]

#### Returns

`string`

***

### keyNameDisplay()

> `static` **keyNameDisplay**(`name`): `string`

Defined in: [src/Input.ts:123](https://github.com/MatheusDS4/inputaction.js/blob/7c6511c9db3862eb6499c4716ee63a7f957c0a15/src/Input.ts#L123)

Returns the display text of an individual key name.

Check the [repository's respective source](https://github.com/hydroperx/inputaction.js/blob/master/src/Input.ts)
for resulting key names in case you need overriding them.

#### Parameters

##### name

[`InputActionKeyName`](../type-aliases/InputActionKeyName.md)

#### Returns

`string`
