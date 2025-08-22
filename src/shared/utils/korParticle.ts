export const getKoreanParticle = (
  word: string,
  type: '을를' | '와과',
): string => {
  const trimmed = word.trim();
  if (!trimmed) {
    return type === '을를' ? '를' : '과';
  }

  const lastChar = Array.from(trimmed).pop()!;
  const codePoint = lastChar.codePointAt(0)!;
  const uni = codePoint - 0xac00;

  if (uni < 0 || uni > 11171) {
    return type === '을를' ? '를' : '과';
  }

  const jong = uni % 28;
  if (type === '을를') {
    return jong === 0 ? '를' : '을';
  }
  return jong === 0 ? '와' : '과';
};
