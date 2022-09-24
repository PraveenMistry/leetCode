/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function (head) {
    // Pass empty or single-item linked lists
    if (!head || !head.next) return true;

    // Traverse the linked list in order to find the mid-point (slow)
    let slow = head,
        fast = head;
    while (fast.next && fast.next.next) {
        slow = slow.next;
        fast = fast.next.next;
    }

    // Reverse the second half of the linked list
    slow.next = reverseLinkedList(slow.next);
    slow = slow.next;

    // Compare the original linked list with the reversed second half
    while (slow) {
        if (head.val !== slow.val) {
            // If a mismatch is detected, break out
            return false;
        }
        head = head.next;
        slow = slow.next;
    }

    return true;
};

var reverseLinkedList = function (head) {
    let nextNode = null;
    let previousNode = null;
    while (head) {
        nextNode = head.next;
        head.next = previousNode;
        previousNode = head;
        head = nextNode;
    }
    return previousNode;
};


/*
Runtime: 243 ms
Memory Usage: 77.6 MB
*/