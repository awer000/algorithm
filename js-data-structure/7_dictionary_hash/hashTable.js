function HashTable() {
  const table = [];

  const loseloseHashCode = key => {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash += key.charCodeAt(i);
    }
    return hash % 37;
  };

  this.put = (key, value) => {
    const position = loseloseHashCode(key);
    console.log(`${position} - ${key}`);
    table[position] = value;
  };

  this.get = key => {
    return table[loseloseHashCode(key)];
  };

  this.remove = key => {
    table[loseloseHashCode(key)] = undefined;
  };
}

const hash = new HashTable();

hash.put("조원준", "whdnjswnswkd@naver.com");
hash.put("고승민", "gogogo@naver.com");
hash.put("이종민", "lelel@daum.net");

console.log(hash.get("이종민"));
console.log(hash.get("고승민"));

hash.remove("고승민");
console.log(hash.get("고승민"));
console.log(hash.get("이종민"));
