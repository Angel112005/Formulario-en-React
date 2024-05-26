
class Node {
    constructor(data) {
      this.data = data;
      this.next = null;
    }
  }
  
  class LinkedList {
    constructor() {
      this.head = null;
    }
  
    add(data) {
      const newNode = new Node(data);
      if (this.head === null) {
        this.head = newNode;
      } else {
        let current = this.head;
        while (current.next !== null) {
          current = current.next;
        }
        current.next = newNode;
      }
    }
  
    toArray() {
      const result = [];
      let current = this.head;
      while (current !== null) {
        result.push(current.data);
        current = current.next;
      }
      return result;
    }
  }
  
  export default LinkedList;
  