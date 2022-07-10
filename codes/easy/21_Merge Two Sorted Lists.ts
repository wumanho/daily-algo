//Definition for singly-linked list.
// class ListNode {
//     val: number
//     next: ListNode | null
//
//     constructor(val?: number, next?: ListNode | null) {
//         this.val = (val === undefined ? 0 : val)
//         this.next = (next === undefined ? null : next)
//     }
// }

function mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {
    const dummy: ListNode = new ListNode(0)
    //游标指向 dummy
    let p = dummy
    //L2和L1都不为空，循环对比两个链表结点上的数字
    while (list1 !== null && list2 !== null) {
        //如果 l1 比较小，则 p 的 next 指向l1，l1向后移动一个结点
        if (list1.val < list2.val) {
            p.next = list1
            list1 = list1.next
        } else {
            //否则 p 的 next 指向 l2，l2向后移动一个结点
            p.next = list2
            list2 = list2.next
        }
        //p 无论如何都需要向后移动一个结点
        p = p.next
    }
    //循环结束后，其中一个链表可能还会有一个结点，它拼接到 p 的最后
    if (list1 !== null) p.next = list1
    if (list2 !== null) p.next = list2
    return dummy.next
}
