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

function isSymmetric(root: TreeNode | null): boolean {
    if(root === null)return true
    return symmetricCheck(root.left,root.right)
}

//用于递归的辅助函数
function symmetricCheck(s: TreeNode | null, t: TreeNode | null): boolean {
    //如果节点的左子树或者右子树为空，那要判断是否都为空，如果都为空就是对称的，返回true
    //其中一个结点不为空都不是对称的，返回false
    if (s === null || t === null) return s === null && t === null
    //如果都不为空，那么对称性就由根节点的值是否相等，以及左结点的左子树和右节点的右子树是否对称来决定
    return s.val === t.val && symmetricCheck(s.left, t.right) && symmetricCheck(s.right, t.left)
}