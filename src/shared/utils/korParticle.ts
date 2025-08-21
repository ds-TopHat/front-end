export function getKoreanParticle(word: string, type: '을를' | '와과') {
  if (!word) {
    return type === '을를' ? '를' : '과';
  }
  const lastChar = word[word.length - 1];
  const uni = lastChar.charCodeAt(0) - 0xac00;
  const jong = uni % 28;

  if (type === '을를') {
    return jong === 0 ? '를' : '을';
  } else {
    return jong === 0 ? '와' : '과';
  }
}
