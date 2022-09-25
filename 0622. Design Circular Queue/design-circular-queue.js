/**
 * @param {number} k
 */
var MyCircularQueue = function(k) {
    this.data = new Uint16Array(k)
    this.maxSize = k
    this.head = 0
    this.tail = -1
};

/** 
 * @param {number} value
 * @return {boolean}
 */
MyCircularQueue.prototype.enQueue = function(value) {
    if (this.isFull()) return false
    this.tail = (this.tail + 1) % this.maxSize
    this.data[this.tail] = value
    return true
};

/**
 * @return {boolean}
 */
MyCircularQueue.prototype.deQueue = function() {
    if (this.isEmpty()) return false
    if (this.head === this.tail) this.head = 0, this.tail = -1
    else this.head = (this.head + 1) % this.maxSize
    return true
};

/**
 * @return {number}
 */
MyCircularQueue.prototype.Front = function() {
    return this.isEmpty() ? -1 : this.data[this.head]
};

/**
 * @return {number}
 */
MyCircularQueue.prototype.Rear = function() {
    return this.isEmpty() ? -1 : this.data[this.tail]
};

/**
 * @return {boolean}
 */
MyCircularQueue.prototype.isEmpty = function() {
    return this.tail === -1
};

/**
 * @return {boolean}
 */
MyCircularQueue.prototype.isFull = function() {
    return !this.isEmpty() && (this.tail + 1) % this.maxSize === this.head
};

/** 
 * Your MyCircularQueue object will be instantiated and called as such:
 * var obj = new MyCircularQueue(k)
 * var param_1 = obj.enQueue(value)
 * var param_2 = obj.deQueue()
 * var param_3 = obj.Front()
 * var param_4 = obj.Rear()
 * var param_5 = obj.isEmpty()
 * var param_6 = obj.isFull()
 */


/*
Runtime: 234 ms
Memory Usage: 50 MB
*/


// w/ Linked List:


class ListNode {
    constructor(val, next=null) {
        this.val = val
        this.next = next
    }
}
class MyCircularQueue {
    constructor(k) {
        this.maxSize = k
        this.size = 0
        this.head = null
        this.tail = null
    }
    enQueue(val) {
        if (this.isFull()) return false
        let newNode = new ListNode(val)
        if (this.isEmpty()) this.head = this.tail = newNode
        else this.tail.next = newNode, this.tail = this.tail.next
        this.size++
        return true
    }
    deQueue() {
        if (this.isEmpty()) return false
        this.head = this.head.next
        this.size--
        return true
    }
    Front() {
        return this.isEmpty() ? -1 : this.head.val
    }
    Rear() {
        return this.isEmpty() ? -1 : this.tail.val
    }
    isEmpty() {
        return this.size === 0
    }
    isFull() {
        return this.size === this.maxSize
    };
};