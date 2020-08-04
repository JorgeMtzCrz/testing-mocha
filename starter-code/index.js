class SortedList {
  constructor() {
    this.items = []
    this.length = this.items.length
  }

  add(item) {
    this.length = this.items.push(item)
  }

  get(pos) {
    if (this.items[pos-1]){
      return this.items[pos-1]
    }else{
      return 'Error: OutOfBounds'
    }
  }

  max() {
    let max = 0
    if(this.length===0){
      return 'Error: EmptySortedList'
    }else{
      for (let i=0; i<this.items.length; i++){
        if(this.items[i] > this.items[i+1]){
           max = this.items[i]
          return max
        }
      }
    }
    
    
  }

  min() {}

  sum() {}

  avg() {}
}

module.exports = SortedList
