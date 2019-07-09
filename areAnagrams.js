const areAnagrams = (str1, str2) => {
    str1 = str1.toLowerCase().split(' ').join('')
    str2 = str2.toLowerCase().split(' ').join('')
    let dict = {}
    for (let i=0; i<str1.length; i++) {
        dict[str1[i]] ? dict[str1[i]]++ : dict[str1[i]] = 1
    }
    for (let i = 0; i < str2.length; i++) {
        if (dict[str2[i]] && dict[str2[i]] > 0) {
            dict[str2[i]]--
        }
        else {
            return false
        }
    }
    return true
}

console.log(areAnagrams('restful', 'fluster'))
console.log(areAnagrams('Anagram', 'Nag a Ram'))