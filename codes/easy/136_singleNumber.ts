function singleNumber(nums: number[]): number {
    const set = new Set<number>()
    let sum = 0
    let uniSum = 0
    nums.forEach(num => {
        if (!set.has(num)) {
            uniSum += num
            set.add(num)
        }
        sum += num
    })
    return uniSum * 2 - sum
}