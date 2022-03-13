function permute(nums: number[]): number[][] {
    const res: number[][] = []
    if (!nums || nums.length === 0) return res
    Rec(nums, 0, res)
    return res
}

//递归函数
//cur:当前的排列
//start:开始的下标
//result:保存排列结果
function Rec(cur: number[], start: number, result: number[][]) {
    if (start === cur.length) {
        result.push(cur)
    } else {
        //遍历从start开始的子数组
        for (let i = start; i < cur.length; ++i) {
            swap(cur, i, start)
            Rec(cur, start + 1, result);
            swap(cur, i, start)
        }
    }
}

function swap(nums: number[], i: number, start: number) {
    let temp = nums[i]
    nums[i] = nums[start]
    nums[start] = temp
}


permute([1, 2, 3])

