class SortedList {
  constructor(items,length) {
    this.items = [];
    this.length =0;
  }

  add(item) {
    this.items.push(item);
    return this.items.sort((a,b) => a - b)
  }

  get(pos) {
   if (pos > this.items.length) {
    throw new Error('OutOfBounds');
   } else {
    return this.items[pos]
   }
  }

  max() {
    if (this.items.length === 0) {
      throw new Error('EmptySortedList');
    } else {
      return Math.max(...this.items)
    }
  }

  min() {
    if (this.items.length === 0) {
      throw new Error('EmptySortedList');
    } else {
      return Math.min(...this.items)
    }
  }
  

  sum() {
   if (this.items.length === 0) {
     return 0;
   } else {
     return this.items.reduce((a,b) => a+b)
   }
  }

  avg() {
    let sum = this.sum()
    if (this.items.length === 0) {
      throw new Error('EmptySortedList');
    } else {
      return sum / this.length;
    }
    
  }
}

module.exports = SortedList;
