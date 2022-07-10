function twoSum(nums: number[], target: number): number[] {
  if (!nums || nums.length < 1) return [-1, -1]
  const map = new Map<number, number>()
  for (let i = 0; i < nums.length; i++) {
    if (map.has(target - nums[i])) {
      const key = map.get(target - nums[i]) as number
      return [i, key]
    } else {
      map.set(nums[i], i)
    }
  }
  return [-1, -1]
}

console.log(twoSum([1, 12, 7, 2, 15], 9))

// function twoSum(nums: number[], target: number): number[] {
//     if(!nums || nums.length <1)return[-1,-1]
//     const map = new Map<number,number>()
//     for (let i = 0; i < nums.length; i++) {
//         if(map.has(target - nums[i])){
//             const key = map.get(target - nums[i]) as number
//             return [i,key]
//         }else{
//             map.set(nums[i],i)
//         }
//     }
//     return [-1,-1]
// }
