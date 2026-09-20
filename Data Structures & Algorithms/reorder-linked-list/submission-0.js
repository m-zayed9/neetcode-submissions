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
     * @return {void}
     */
    reorderList(head) {
        let temp = head , reversed = null , prev = null , length = 0;

    while(temp){
        reversed = new ListNode(temp.val);
        reversed.next = prev;
        prev = reversed;
        temp = temp.next;
        length+=1;
    }
    let i = 0 , tem = head;
    while(tem && i<length/2){
        console.log(i);
        let next = tem.next , r = reversed.next;
        tem.next = reversed
        reversed.next = next;

        tem = next;
        reversed = r;
        i+=1;
    }

    let k = 0 , t = head;
    while(k<length-1){
        t = t.next;
        k+=1;
    }
    t.next = null;
    }
}
