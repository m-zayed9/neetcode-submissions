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
     * @param {number} n
     * @return {ListNode}
     */
    removeNthFromEnd(head, n) {
        let p1 = head
        let p2 = head
        n-=1
        while (n > 0 && p2 != null){
            p2 = p2.next
            n-=1
        }

        let prev = null
        while(p2.next != null){
            p2 = p2.next
            prev = p1
            p1 = p1.next
        }
        if(prev == null)
            return p1.next
        
        prev.next = p1.next
        return head
    }
}
