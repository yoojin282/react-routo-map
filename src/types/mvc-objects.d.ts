/// <reference path="index.d.ts" />

declare namespace routo.maps {
  export interface MapsEventListener {
    // instance: Object;
    // eventName: string;
    // handler: () => void;
    remove: () => void;
  }

  export class MVCObject {
    /**
     * Adds the given listener function to the given event name. Returns an
     * identifier for this listener that can be used with
     * <code>routo.maps.event.removeListener</code>.
     */
    addListener(eventName: string, handler: Function): MapsEventListener;
    /**
     * Binds a View to a Model.
     */
    bindTo(
      key: string,
      target: MVCObject,
      targetKey?: string | null,
      noNotify?: boolean,
    ): void;
    /**
     * Gets a value.
     */
    get(key: string): any;
    /**
     * Notify all observers of a change on this property. This notifies both
     * objects that are bound to the object&#39;s property as well as the object
     * that it is bound to.
     */
    notify(key: string): void;
    /**
     * Sets a value.
     */
    set(key: string, value: unknown): void;
    /**
     * Sets a collection of key-value pairs.
     */
    setValues(values?: object | null): void;
    /**
     * Removes a binding. Unbinding will set the unbound property to the current
     * value. The object will not be notified, as the value has not changed.
     */
    unbind(key: string): void;
    /**
     * Removes all bindings.
     */
    unbindAll(): void;
  }

  export class MVCArray<T = any> extends MVCObject {
    /**
     * Access by calling `const {MVCArray} = await
     */
    constructor(array?: T[] | null);
    /**
     * Removes all elements from the array.
     */
    clear(): void;
    /**
     * Iterate over each element, calling the provided callback. The callback is
     * called for each element like: callback(element, index).
     */
    forEach(callback: (a: T, b: number) => void): void;
    /**
     * Returns a reference to the underlying Array. Warning: if the Array is
     * mutated, no events will be fired by this object.
     */
    getArray(): T[];
    /**
     * Returns the element at the specified index.
     */
    getAt(i: number): T;
    /**
     * Returns the number of elements in this array.
     */
    getLength(): number;
    /**
     * Inserts an element at the specified index.
     */
    insertAt(i: number, elem: T): void;
    /**
     * Removes the last element of the array and returns that element.
     */
    pop(): T;
    /**
     * Adds one element to the end of the array and returns the new length of
     * the array.
     */
    push(elem: T): number;
    /**
     * Removes an element from the specified index.
     */
    removeAt(i: number): T;
    /**
     * Sets an element at the specified index.
     */
    setAt(i: number, elem: T): void;
  }
}
