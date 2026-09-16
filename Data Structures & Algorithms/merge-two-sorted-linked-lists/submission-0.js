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
     * @param {ListNode} list1
     * @param {ListNode} list2
     * @return {ListNode}
     */
    mergeTwoLists(list1, list2) {
        let nodes = [];
        while(list1 || list2){
            if(list1 && list2){
                if(list1.val < list2.val){
                    nodes.push(list1);
                    list1 = list1.next;
                }else{
                    nodes.push(list2);
                    list2 = list2.next;
                }
            }else if(list1){
                nodes.push(list1);
                list1 = list1.next;
            }else if(list2){
                nodes.push(list2);
                list2 = list2.next;
            }
        }
        // console.log(nodes);
        let head = null , temp = null;
        for(let i = 0 ; i < nodes.length ; i+=1){
            if(head == null){
                head = new ListNode(nodes[i].val);
                temp = head;
                continue;
            }
            temp.next = new ListNode(nodes[i].val);
            temp = temp.next;
        }
        return head;
    }
}
