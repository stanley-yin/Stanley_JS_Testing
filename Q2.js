class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  // methods
  isEmpty() {
    return this.length === 0;
  }
  getNode(index) {
    // 判斷指定位置是否在範圍內
    if (index < 0 || index >= this.length) return null;
    // 從頭開始迭代到指定位置訪問
    let currNode = this.head;
    let currIndex = 0;
    while (currIndex < index) {
      currIndex += 1;
      currNode = currNode.next;
    }
    return currNode;
  }
  print() {
    const temp = [];
    let currNode = this.head;
    while (currNode) {
      temp.push(currNode.data);
      currNode = currNode.next;
    }
    return temp.join(", ");
  }
  push(data) {
    const newNode = new Node(data);
    if (this.isEmpty()) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length += 1;
  }
  pop() {
    const lastNode = this.getNode(this.length - 1);
    const preNode = this.getNode(this.length - 2);
    this.tail = preNode;
    this.tail.next = null;
    this.length -= 1;
    return lastNode;
  }
  size() {
    return this.length;
  }
}
const myLinkedList = new LinkedList(1);
// console.log(myLinkedList);
myLinkedList.push(1);
myLinkedList.push(2);
myLinkedList.push(3);
myLinkedList.pop()
console.log(myLinkedList.size());
