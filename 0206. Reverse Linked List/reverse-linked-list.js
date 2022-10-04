// Approach 1: Iterative

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    if(head==null || head.next==null){
        return head;
    }
    let p = head ,q = head.next;
    head.next = null;
    while(q!=null){
        let temp = q;
        q = q.next;
        temp.next = p;
        p = temp;
    }
    return p;
};

// Another way to write code

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    if(head==null || head.next==null){
        return head;
    }
    let prev = null;
    while (head) {
      let next = head.next;
      head.next = prev;
      prev = head;
      head = next;
    }

    return prev;
};

// Approach 1: Recursion

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    if (!head || !head.next)
      return head;

    let newHead = reverseList(head.next);
    head.next.next = head;
    head.next = null;
    return newHead;
};

