function mergeAlternatively(word1, word2) {
    let mergedString = '';
    const longerWord = word1.length > word2.length ? word1 : word2;
    for(let i = 0;i < longerWord.length;i++) {
        word1[i] && (mergedString += word1[i]);
        word2[i] && (mergedString += word2[i]);
    }
    return mergedString;
}

