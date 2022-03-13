function countSubstrings(s: string): number {
    if (s === null || s.length === 0) return 0
    let count = 0
    for (let i = 0; i < s.length; i++) {
        count += expand(s, i, i)
        count += expand(s, i, i + 1)
    }
    return count
}

//s:当前字符串
//left & right 当前字符串的左右游标
//返回扩展过程中回文子串的个数
function expand(s: string, left: number, right: number): number {
    let count = 0
    //当左右游标不超过左右边界
    //且指向的字符相等时，count + 1
    //游标向两边移动
    while (left >= 0 && right < s.length && s[left] === s[right]) {
        count += 1
        left -= 1
        right += 1
    }
    return count
}

console.log(countSubstrings('aaa'))

