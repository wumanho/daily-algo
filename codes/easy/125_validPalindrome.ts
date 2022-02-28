function isPalindrome(s: string): boolean {
    if(s === null || s.length === 0) return true
    const newStr = preProcessing(s)
    let left = 0
    let right = newStr.length -1
    while(left < right){
        if(newStr[left] !== newStr[right])return false
        left +=1
        right -=1
    }
    return true
};

function preProcessing(s:string): string{
    return s.toLocaleLowerCase().replace(/[\W_]/ig, '')
}