import { RomajiQuestion } from '@/types';
import { checkRomajiQuestion } from './check-romaji-question';

const hiraganaQuestion: RomajiQuestion = {
  question: `ありがとう`,
  answer: [`arigatou`],
  letters: [
    [
      ['あ', 'a'],
      ['り', 'ri'],
      ['が', 'ga'],
      ['と', 'to'],
      ['う', 'u'],
    ]
  ],
  type: 'hiragana',
};

const katakanaQuestion: RomajiQuestion = {
  question: 'ビール',
  answer: ['bi-ru', 'biru', 'bĩru', 'bīru'],
  letters: [
    [
      ['ビ', 'bi'],
      ['ー', '-'],
      ['ル', 'ru'],
    ]
  ],
  type: 'katakana',
};

const kanjiQuestion: RomajiQuestion = {
  question: '日本',
  answer: ['nihon', 'nippon'],
  letters: [
    [
      ['日', 'ni'],
      ['本', 'hon'],
    ],
    [
      ['日', 'ni'],
      ['本', 'ppon'],
    ]
  ],
  type: 'kanji',
};

describe('checkRomajiQuestion', () => {
  describe('hiragana', () => {
    it('should validate a correct answer', () => {
      expect(checkRomajiQuestion(hiraganaQuestion, 'arigatou')).toEqual([
        ['あ', 'a', true],
        ['り', 'ri', true],
        ['が', 'ga', true],
        ['と', 'to', true],
        ['う', 'u', true],
      ])
    });

    it('should validate an incorrect answer', () => {
      expect(checkRomajiQuestion(hiraganaQuestion, 'arigato')).toEqual([
        ['あ', 'a', true],
        ['り', 'ri', true],
        ['が', 'ga', true],
        ['と', 'to', true],
        ['う', 'u', false],
      ])
    });
  })

  describe('katakana', () => {
    it('should validate a correct answer', () => {
      expect(checkRomajiQuestion(katakanaQuestion, 'bi-ru')).toEqual([
        ['ビ', 'bi', true],
        ['ー', '-', true],
        ['ル', 'ru', true],
      ])
    });

    it('should validate alternative correct answers', () => {
      expect(checkRomajiQuestion(katakanaQuestion, 'bīru')).toEqual([
        ['ビ', 'bi', true],
        ['ー', '-', true],
        ['ル', 'ru', true],
      ])
    });

    it('should validate alternative correct answers with special charters', () => {
      expect(checkRomajiQuestion(katakanaQuestion, 'bĩru')).toEqual([
        ['ビ', 'bi', true],
        ['ー', '-', true],
        ['ル', 'ru', true],
      ])
    });

    it('should validate an incorrect answer', () => {
      expect(checkRomajiQuestion(katakanaQuestion, 'bira')).toEqual([
        ['ビ', 'bi', true],
        ['ー', '-', false],
        ['ル', 'ru', false],
      ])
    });
  });

  describe('kanji', () => {
    it('should validate a correct answer', () => {
      expect(checkRomajiQuestion(kanjiQuestion, 'nihon')).toEqual([
        ['日', 'ni', true],
        ['本', 'hon', true],
      ])
    });

    it('should validate alternative correct answers', () => {
      expect(checkRomajiQuestion(kanjiQuestion, 'nippon')).toEqual([
        ['日', 'ni', true],
        ['本', 'ppon', true],
      ])
    });

    it('should validate an incorrect answer', () => {
      console.log(checkRomajiQuestion(kanjiQuestion, 'konnichiwa'));

      expect(checkRomajiQuestion(kanjiQuestion, 'konnichiwa')).toEqual([
        ['日', 'ni', false],
        ['本', 'ppon', false],
      ])
    });
  });
});