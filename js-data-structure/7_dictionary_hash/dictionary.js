function Dictionary() {
  const items = {};

  this.has = function(key) {
    return key in items;
  };

  this.set = function(key, value) {
    items[key] = value;
  };

  this.remove = function(key) {
    if (this.has(key)) {
      delete items[key];
      return true;
    }
    return false;
  };

  this.get = function(key) {
    return this.has(key) ? items[key] : undefined;
  };

  this.values = function() {
    const values = [];
    for (let k in items) {
      if (this.has(k)) {
        values.push(items[k]);
      }
    }
    return values;
  };
  this.clear = () => {
    items = {};
    return true;
  };
  this.size = () => {
    return this.values().length;
  };
  this.keys = () => {
    const keys = [];
    for (let k in items) {
      keys.push(k);
    }
    return keys;
  };
  this.getItems = function() {
    return items;
  };
}

const dic = new Dictionary();

dic.set("1", "1입니다.");
dic.set("2", 2);

console.log(dic.values());
console.log(dic.getItems());
console.log(dic.size());
console.log(dic.keys());

dic.remove("2");
console.log(dic.getItems());
