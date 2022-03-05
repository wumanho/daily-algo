//Definition for a binary tree node.
class TreeNode {
    val: number
    left: TreeNode | null
    right: TreeNode | null

    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
        this.val = (val === undefined ? 0 : val)
        this.left = (left === undefined ? null : left)
        this.right = (right === undefined ? null : right)
    }
}

function isSameTree(p: TreeNode | null, q: TreeNode | null): boolean {
    //其中一个为空，另一个不为空
    if (p === null && q === null) return true
    if (p === null || q === null) return false
    return p.val === q.val && isSameTree(p.left, q.left) && isSameTree(p.right, q.right)
}

//迭代
function isSameTreeIterative(p: TreeNode | null, q: TreeNode | null): boolean {
    const stack = []
    stack.push(p)
    stack.push(q)
    while (stack.length > 0) {
        let s = stack.pop()
        let t = stack.pop()
        if (!s && !t) continue
        if (!s || !t) return false
        if (s.val !== t.val) return false
        stack.push(s.left)
        stack.push(t.left)
        stack.push(s.right)
        stack.push(t.right)
    }
    return true
}
