/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function isPalindrome(head: ListNode | null): boolean {
    const stack: number[] = []
    let current = head
    while (current) {
        stack.push(current.val)
        current = current.next
    }
    current = head
    while (current) {
        if (current.val !== stack.pop()) {
            return false
        } else {
            current = current.next
        }
    }
    return true
}