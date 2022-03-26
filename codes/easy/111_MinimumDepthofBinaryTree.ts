import {TreeNode} from "../index";

//递归
function minDepth(root: TreeNode | null): number {
    //边界
    if (root === null) return 0
    //左右子树非空，说明是叶子结点
    if (root.left === null && root.right === null) return 1
    //左子树为空,返回右子树的最小深度，+1
    if (root.left === null && root.right !== null) return minDepth(root.right) + 1
    //右子树为空，左子树非空，返回左子树的最小深度 + 1
    if (root.right === null && root.left !== null) return minDepth(root.left) + 1
    //左右子树都不为空，获取左右子树的最小深度，取最小值 + 1
    return Math.min(minDepth(root.left), minDepth(root.right)) + 1
}
//迭代
function minDepthIterative(root: TreeNode | null): number {
    if (root === null) return 0
    //初始化队列
    const queue: TreeNode[] = []
    queue.push(root)
    //初始化深度为 1
    let depth = 1
    while (queue.length > 0) {
        const len = queue.length
        for (let i = 0; i < len; i++) {
            const s = queue.shift()
            //已知最小深度
            if (s!.left === null && s!.right === null) return depth
            if (s!.left) queue.push(s!.left)
            if (s!.right) queue.push(s!.right)
        }
        depth += 1
    }
    return -1
}