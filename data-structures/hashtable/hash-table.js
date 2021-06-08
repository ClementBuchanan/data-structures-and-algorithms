
class HashTable {
  constructor(size) {
    this.values = {};
    this.size = size;
  }

  add(key, value) {
    const hash = this.genHash(key)

    // Initialize this portion of table
    // if it has not yet been defined
    if (!this.values.hasOwnProperty(hash))
      this.values[hash] = {};

    this.values[hash][key] = value;
  }

  remove(key) {
    const hash = this.genHash(key);

    // If this.values has property at hash with a key
    if (this.values.hasOwnProperty(hash) &&
      this.values[hash].hasOwnProperty(key)) {
      delete this.values[hash][key]; // Delete the value
    }
  }

  genHash(key) {
    var keyStr = key.toString();
    var sum = 0;

    // Sum ASCII values of all chars in keyStr
    for (let i = 0; i < keyStr.length; i++)
      sum += keyStr.charCodeAt(i);

    // Ensures index is in range of array
    return sum % this.size;
  }

  getValue(key) {
    const hash = this.genHash(key);

    // If this key value pair exists in table
    if (this.values.hasOwnProperty(hash)
      && this.values[hash].hasOwnProperty(key))
      return this.values[hash][key]; // Return the key's value
    else
      return undefined;
  }
}
