[**@hydroperx/inputaction**](../README.md)

***

[@hydroperx/inputaction](../globals.md) / Input

# Class: Input

Defined in: [src/Input.ts:70](https://github.com/hydroperx/inputaction.js/blob/81a9d50bb8dace8c4efcbe3dd2d006c7a5dc5b42/src/Input.ts#L70)

The `Input` class handles action mapping and user input event listening.

# Getting started

The following code demonstrates using arrows and WASD keys
for entity movement:

```ts
import { input } from "@hydroperx/inputaction";

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

- `IntermediateEventTarget`\<`InputEventMap`, `this`\>

## Constructors

### Constructor

> **new Input**(): `Input`

Defined in: node\_modules/@hydroperx/event/dist/index.d.ts:2

#### Returns

`Input`

#### Inherited from

`(EventTarget as TypedEventTarget<InputEventMap>).constructor`

## Properties

### input

> `readonly` `static` **input**: `Input`

Defined in: [src/Input.ts:74](https://github.com/hydroperx/inputaction.js/blob/81a9d50bb8dace8c4efcbe3dd2d006c7a5dc5b42/src/Input.ts#L74)

The singleton instance of the `Input` class.

## Methods

### addEventListener()

#### Call Signature

> **addEventListener**\<`K`\>(`type`, `callback`, `options?`): `void`

Defined in: node\_modules/@hydroperx/event/dist/index.d.ts:5

Appends an event listener for events whose type attribute value is type. The callback argument sets the callback that will be invoked when the event is dispatched.

The options argument sets listener-specific options. For compatibility this can be a boolean, in which case the method behaves exactly as if the value was specified as options's capture.

When set to true, options's capture prevents callback from being invoked when the event's eventPhase attribute value is BUBBLING_PHASE. When false (or not present), callback will not be invoked when event's eventPhase attribute value is CAPTURING_PHASE. Either way, callback will be invoked if event's eventPhase attribute value is AT_TARGET.

When set to true, options's passive indicates that the callback will not cancel the event by invoking preventDefault(). This is used to enable performance optimizations described in § 2.8 Observing event listeners.

When set to true, options's once indicates that the callback will only be invoked once after which the event listener will be removed.

If an AbortSignal is passed for options's signal, then the event listener will be removed when signal is aborted.

The event listener is appended to target's event listener list and is not appended if it has the same type, callback, and capture.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/EventTarget/addEventListener)

##### Type Parameters

###### K

`K` *extends* keyof `InputEventMap`

##### Parameters

###### type

`K`

###### callback

(`event`) => `InputEventMap`\[`K`\] *extends* `Event` ? `void` : `never`

###### options?

`boolean` | `AddEventListenerOptions`

##### Returns

`void`

##### Inherited from

`(EventTarget as TypedEventTarget<InputEventMap>).addEventListener`

#### Call Signature

> **addEventListener**(`type`, `callback`, `options?`): `void`

Defined in: node\_modules/@hydroperx/event/dist/index.d.ts:6

Appends an event listener for events whose type attribute value is type. The callback argument sets the callback that will be invoked when the event is dispatched.

The options argument sets listener-specific options. For compatibility this can be a boolean, in which case the method behaves exactly as if the value was specified as options's capture.

When set to true, options's capture prevents callback from being invoked when the event's eventPhase attribute value is BUBBLING_PHASE. When false (or not present), callback will not be invoked when event's eventPhase attribute value is CAPTURING_PHASE. Either way, callback will be invoked if event's eventPhase attribute value is AT_TARGET.

When set to true, options's passive indicates that the callback will not cancel the event by invoking preventDefault(). This is used to enable performance optimizations described in § 2.8 Observing event listeners.

When set to true, options's once indicates that the callback will only be invoked once after which the event listener will be removed.

If an AbortSignal is passed for options's signal, then the event listener will be removed when signal is aborted.

The event listener is appended to target's event listener list and is not appended if it has the same type, callback, and capture.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/EventTarget/addEventListener)

##### Parameters

###### type

`string`

###### callback

`null` | `EventListenerOrEventListenerObject`

###### options?

`boolean` | `EventListenerOptions`

##### Returns

`void`

##### Inherited from

`(EventTarget as TypedEventTarget<InputEventMap>).addEventListener`

***

### dispatchEvent()

> **dispatchEvent**(`event`): `boolean`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:8309

Dispatches a synthetic event event to target and returns true if either event's cancelable attribute value is false or its preventDefault() method was not invoked, and false otherwise.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/EventTarget/dispatchEvent)

#### Parameters

##### event

`Event`

#### Returns

`boolean`

#### Inherited from

`(EventTarget as TypedEventTarget<InputEventMap>).dispatchEvent`

***

### getActions()

> **getActions**(): `Record`\<`string`, [`InputActionAtom`](../type-aliases/InputActionAtom.md)[]\>

Defined in: [src/Input.ts:154](https://github.com/hydroperx/inputaction.js/blob/81a9d50bb8dace8c4efcbe3dd2d006c7a5dc5b42/src/Input.ts#L154)

Returns the current action map in read-only mode.

#### Returns

`Record`\<`string`, [`InputActionAtom`](../type-aliases/InputActionAtom.md)[]\>

***

### isPressed()

> **isPressed**(`name`): `boolean`

Defined in: [src/Input.ts:257](https://github.com/hydroperx/inputaction.js/blob/81a9d50bb8dace8c4efcbe3dd2d006c7a5dc5b42/src/Input.ts#L257)

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

Defined in: [src/Input.ts:289](https://github.com/hydroperx/inputaction.js/blob/81a9d50bb8dace8c4efcbe3dd2d006c7a5dc5b42/src/Input.ts#L289)

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

> **off**\<`T`\>(`type`, `listener`, `options?`): `void`

Defined in: [src/Input.ts:334](https://github.com/hydroperx/inputaction.js/blob/81a9d50bb8dace8c4efcbe3dd2d006c7a5dc5b42/src/Input.ts#L334)

Shortcut for the `removeEventListener()` method.

##### Type Parameters

###### T

`T` *extends* keyof `InputEventMap`

##### Parameters

###### type

`T`

###### listener

(`event`) => `void`

###### options?

`boolean` | `EventListenerOptions`

##### Returns

`void`

#### Call Signature

> **off**(`type`, `listener`, `options?`): `void`

Defined in: [src/Input.ts:339](https://github.com/hydroperx/inputaction.js/blob/81a9d50bb8dace8c4efcbe3dd2d006c7a5dc5b42/src/Input.ts#L339)

Shortcut for the `removeEventListener()` method.

##### Parameters

###### type

`string`

###### listener

`Function`

###### options?

`boolean` | `EventListenerOptions`

##### Returns

`void`

***

### on()

#### Call Signature

> **on**\<`T`\>(`type`, `listener`, `options?`): `void`

Defined in: [src/Input.ts:320](https://github.com/hydroperx/inputaction.js/blob/81a9d50bb8dace8c4efcbe3dd2d006c7a5dc5b42/src/Input.ts#L320)

Shortcut for the `addEventListener()` method.

##### Type Parameters

###### T

`T` *extends* keyof `InputEventMap`

##### Parameters

###### type

`T`

###### listener

(`event`) => `void`

###### options?

`boolean` | `AddEventListenerOptions`

##### Returns

`void`

#### Call Signature

> **on**(`type`, `listener`, `options?`): `void`

Defined in: [src/Input.ts:325](https://github.com/hydroperx/inputaction.js/blob/81a9d50bb8dace8c4efcbe3dd2d006c7a5dc5b42/src/Input.ts#L325)

Shortcut for the `addEventListener()` method.

##### Parameters

###### type

`string`

###### listener

`Function`

###### options?

`boolean` | `AddEventListenerOptions`

##### Returns

`void`

***

### removeEventListener()

#### Call Signature

> **removeEventListener**\<`K`\>(`type`, `callback`, `options?`): `void`

Defined in: node\_modules/@hydroperx/event/dist/index.d.ts:7

Removes the event listener in target's event listener list with the same type, callback, and options.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/EventTarget/removeEventListener)

##### Type Parameters

###### K

`K` *extends* keyof `InputEventMap`

##### Parameters

###### type

`K`

###### callback

(`event`) => `InputEventMap`\[`K`\] *extends* `Event` ? `void` : `never`

###### options?

`boolean` | `EventListenerOptions`

##### Returns

`void`

##### Inherited from

`(EventTarget as TypedEventTarget<InputEventMap>).removeEventListener`

#### Call Signature

> **removeEventListener**(`type`, `callback`, `options?`): `void`

Defined in: node\_modules/@hydroperx/event/dist/index.d.ts:8

Removes the event listener in target's event listener list with the same type, callback, and options.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/EventTarget/removeEventListener)

##### Parameters

###### type

`string`

###### callback

`null` | `EventListenerOrEventListenerObject`

###### options?

`boolean` | `EventListenerOptions`

##### Returns

`void`

##### Inherited from

`(EventTarget as TypedEventTarget<InputEventMap>).removeEventListener`

***

### setActions()

> **setActions**(`map`): `void`

Defined in: [src/Input.ts:161](https://github.com/hydroperx/inputaction.js/blob/81a9d50bb8dace8c4efcbe3dd2d006c7a5dc5b42/src/Input.ts#L161)

Updates the action map, firing the `actionsUpdated` event.

#### Parameters

##### map

`Record`\<`string`, [`InputActionAtom`](../type-aliases/InputActionAtom.md)[]\>

#### Returns

`void`

***

### display()

> `static` **display**(`param`): `string`

Defined in: [src/Input.ts:81](https://github.com/hydroperx/inputaction.js/blob/81a9d50bb8dace8c4efcbe3dd2d006c7a5dc5b42/src/Input.ts#L81)

Returns the display text of a shortcut, such as `"Ctrl+A"`.

#### Parameters

##### param

Either an action name or a series of action atoms.

`string` | [`InputActionKey`](../type-aliases/InputActionKey.md)[]

#### Returns

`string`

***

### keyNameDisplay()

> `static` **keyNameDisplay**(`name`): `string`

Defined in: [src/Input.ts:109](https://github.com/hydroperx/inputaction.js/blob/81a9d50bb8dace8c4efcbe3dd2d006c7a5dc5b42/src/Input.ts#L109)

Returns the display text of an individual key name.

#### Parameters

##### name

[`InputActionKeyName`](../type-aliases/InputActionKeyName.md)

#### Returns

`string`
