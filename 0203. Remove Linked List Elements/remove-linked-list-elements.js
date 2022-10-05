/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {
    if (head === null) {
        return head;
    }
    let currentNode = head;
    let previousNode;
    while(currentNode != null){
        if(currentNode.val == val){
            if(currentNode == head){
                currentNode = head.next;
                head.next = null;
                head = currentNode;
                continue;
            }else{
                previousNode.next = currentNode.next;
                currentNode.next = null;
                currentNode = previousNode.next;
                continue;
            }
        }
        previousNode = currentNode;
        currentNode = currentNode.next;
    }
 
    return head;
};

/*

*/