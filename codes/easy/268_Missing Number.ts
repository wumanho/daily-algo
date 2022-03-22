function missingNumber(nums: number[]): number {
    let n = nums.length
    let result = n
    for (let i = 0; i < n; i++) {
        result = result ^ i ^ nums[i]
    }
    return result
}