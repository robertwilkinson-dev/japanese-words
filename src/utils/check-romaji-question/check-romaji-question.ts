import { RomajiAnswer, RomajiAnswerPart, RomajiQuestion } from '../../types';

export const checkRomajiQuestion = (question: RomajiQuestion, answer: string): RomajiAnswer => {
  // normalize the input to handle diacritic marks and case sensitivity
  const normalizeInput = (input: string) => input.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();
  const input = normalizeInput(answer);

  // check for a direct match in the possible answers
  const correctAnswer = question.answer.find((a) => normalizeInput(a) === input || a === input);
  if (correctAnswer) {
    // TODO: maybe return the answer the user gave, but for now just return the correct answer
    // the kanji statement is a hack at the moment
    if (question.type === 'kanji') {
      const letters = question.letters.map(letterSet => normalizeInput(letterSet.map(([, romaji]) => romaji).join('')));
      const letterIndex = letters.findIndex(l => l === input);
  
      return question.letters[letterIndex].map(([kana, romaji]) => [kana, romaji, true]);
    }

    return question.letters[0].map(([kana, romaji]) => [kana, romaji, true]);
  }

  const answers: RomajiAnswer[] = [];
  for (let i = 0; i < question.letters.length; i++) {
    let inputCopy = input;
    const letterSet = question.letters[i];
    const answer: RomajiAnswer = [];

    for (const [kana, romaji] of letterSet) {
      const userAnswerPart = inputCopy.slice(0, romaji.length);

      answer.push([kana, romaji, normalizeInput(userAnswerPart) === normalizeInput(romaji)] as RomajiAnswerPart);
      inputCopy = inputCopy.slice(romaji.length);
    }

    answers.push(answer);
  }

  // find the closest match
  const closestMatch: RomajiAnswer = answers.reduce((prev, curr) => {
    const prevCorrect = prev.filter(([, , isCorrect]) => isCorrect).length;
    const currCorrect = curr.filter(([, , isCorrect]) => isCorrect).length;

    return prevCorrect > currCorrect ? prev : curr;
  });

  return closestMatch;
};