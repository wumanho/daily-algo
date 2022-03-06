//Definition for singly-linked list.
class ListNode {
    val: number
    next: ListNode | null

    constructor(val?: number, next?: ListNode | null) {
        this.val = (val === undefined ? 0 : val)
        this.next = (next === undefined ? null : next)
    }
}

function reverseList(head: ListNode | null): ListNode | null {
    //声明当前结点和前一个结点
    let current = head
    let pre = null
    while (current) {
        //记录next的next值防止链表中断
        let next = current.next
        //将当前结点的下一跳指向前一个结点
        current.next = pre
        //current的next已经指向pre了，所以将current赋值给pre
        pre = current
        //将current赋值他原本的next值
        current = next
    }
    //因为当前已经是null了，所以要return pre
    return pre
}