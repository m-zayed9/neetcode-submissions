/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} head
     * @return {boolean}
     */
    hasCycle(head) {
        let fast = head;
        let slow = head;
        while(slow && fast){
            if(slow.next == null || fast.next == null)
                break;
            
            slow = slow.next;
            fast = fast.next.next;
            if(slow == fast)
                return true;
            
            if(slow == head)
                break;
        }
        return false;
    }
}
