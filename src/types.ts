export type RomajiLetter = [string, string];
export type RomajiKanji = [string, string];

export type KanaQuestionTypes = 'hiragana' | 'katakana' | 'kanji';

export type RomajiQuestion = {
  question: string;
  answer: string[];
  letters: RomajiLetter[][] | RomajiKanji[][];
  type: KanaQuestionTypes;
  meaning?: string;
};

export type RomajiAnswerPart = [string, string, boolean];
export type RomajiAnswer = RomajiAnswerPart[];