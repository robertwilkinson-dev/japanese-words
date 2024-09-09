import { RomajiQuestion } from '@/types';

export const questions: RomajiQuestion[] = [
  {
    question: 'おはよう',
    answer: ['ohayou', 'ohayō'],
    letters: [
      [
        ['お', 'o'],
        ['は', 'ha'],
        ['よ', 'yo'],
        ['う', 'u'],
      ]
    ],
    type: 'hiragana',
    meaning: 'Good morning',
  },
  {
    question: 'おはようございます',
    answer: ['ohayougozaimasu', 'ohayōgozaimasu'],
    letters: [
      [
        ['お', 'o'],
        ['は', 'ha'],
        ['よ', 'yo'],
        ['う', 'u'],
        ['ご', 'go'],
        ['ざ', 'za'],
        ['い', 'i'],
        ['ま', 'ma'],
        ['す', 'su'],
      ]
    ],
    type: 'hiragana',
    meaning: 'Good morning (polite)',
  },
  {
    question: 'こんにちは',
    answer: ['konnichiwa'],
    letters: [
      [
        ['こ', 'ko'],
        ['ん', 'n'],
        ['に', 'ni'],
        ['ち', 'chi'],
        ['は', 'ha'],
      ]
    ],
    type: 'hiragana',
  },
  {
    question: 'こんばんは',
    answer: ['konbanwa'],
    letters: [
      [
        ['こ', 'ko'],
        ['ん', 'n'],
        ['ば', 'ba'],
        ['ん', 'n'],
        ['は', 'wa'],
      ]
    ],
    type: 'hiragana',
    meaning: 'Good evening',
  },
  {
    question: 'さよ うなら',
    answer: ['sayounara', 'sayōnara'],
    letters: [
      [
        ['さ', 'sa'],
        ['よ', 'yo'],
        ['う', 'u'],
        ['な', 'na'],
        ['ら', 'ra'],
      ]
    ],
    type: 'hiragana',
    meaning: 'Goodbye',
  },
  {
    question: 'おやすみなさい',
    answer: ['oyasuminasai'],
    letters: [
      [
        ['お', 'o'],
        ['や', 'ya'],
        ['す', 'su'],
        ['み', 'mi'],
        ['な', 'na'],
        ['さ', 'sa'],
        ['い', 'i'],
      ]
    ],
    type: 'hiragana',
    meaning: 'Good night',
  },
  {
    question: 'ありがとう',
    answer: ['arigatou'],
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
    meaning: 'Thank you',
  },
  {
    question: 'ありがとうございます',
    answer: ['arigatougozaimasu'],
    letters: [
      [
        ['あ', 'a'],
        ['り', 'ri'],
        ['が', 'ga'],
        ['と', 'to'],
        ['う', 'u'],
        ['ご', 'go'],
        ['ざ', 'za'],
        ['い', 'i'],
        ['ま', 'ma'],
        ['す', 'su'],
      ]
    ],
    type: 'hiragana',
    meaning: 'Thank you (polite)',
  },
  {
    question: 'すみません',
    answer: ['sumimasen'],
    letters: [
      [
        ['す', 'su'],
        ['み', 'mi'],
        ['ま', 'ma'],
        ['せ', 'se'],
        ['ん', 'n'],
      ]
    ],
    type: 'hiragana',
    meaning: 'Excuse me / I\'m sorry',
  },
  {
    question: 'いいえ',
    answer: ['iie'],
    letters: [
      [
        ['い', 'i'],
        ['い', 'i'],
        ['え', 'e'],
      ]
    ],
    type: 'hiragana',
  },
  {
    question: 'いいえ',
    answer: ['iie'],
    letters: [
      [
        ['い', 'i'],
        ['い', 'i'],
        ['え', 'e'],
      ]
    ],
    type: 'hiragana',
    meaning: 'No / Not at all',
  },
  {
    question: 'いってきます',
    answer: ['ittekimasu'],
    letters: [
      [
        ['い', 'i'],
        ['っ', 't'],
        ['て', 'te'],
        ['き', 'ki'],
        ['ま', 'ma'],
        ['す', 'su'],
      ]
    ],
    type: 'hiragana',
    meaning: 'I\'ll go and come back.'
  },
  {
    question: 'いってらっしゃい',
    answer: ['itterasshai'],
    letters: [
      [
        ['い', 'i'],
        ['っ', 't'],
        ['て', 'te'],
        ['ら', 'ra'],
        ['っ', 'ss'],
        ['し', 'ha'],
        ['ゃ', 'i'],
      ]
    ],
    type: 'hiragana',
    meaning: 'Please go and come back'
  },
  {
    question: 'ただいま',
    answer: ['tadaima'],
    letters: [
      [
        ['た', 'ta'],
        ['だ', 'da'],
        ['い', 'i'],
        ['ま', 'ma'],
      ]
    ],
    type: 'hiragana',
    meaning: 'I\'m home'
  },
  {
    question: 'おかえりなさい',
    answer: ['okaerinasai'],
    letters: [
      [
        ['お', 'o'],
        ['か', 'ka'],
        ['え', 'e'],
        ['り', 'ri'],
        ['な', 'na'],
        ['さ', 'sa'],
        ['い', 'i'],
      ]
    ],
    type: 'hiragana',
    meaning: 'Welcome home'
  },
  {
    question: 'いただきます',
    answer: ['itadakimasu'],
    letters: [
      [
        ['い', 'i'],
        ['た', 'ta'],
        ['だ', 'da'],
        ['き', 'ki'],
        ['ま', 'ma'],
        ['す', 'su'],
      ]
    ],
    type: 'hiragana',
    meaning: 'Thank you for the meal.'
  },
  {
    question: 'ごちそうさまでした',
    answer: ['gochisousamadeshita'],
    letters: [
      [
        ['ご', 'go'],
        ['ち', 'chi'],
        ['そ', 'so'],
        ['う', 'u'],
        ['さ', 'sa'],
        ['ま', 'ma'],
        ['で', 'de'],
        ['し', 'shi'],
        ['た', 'ta'],
      ]
    ],
    type: 'hiragana',
    meaning: 'Thank you for the meal.'
  },
  {
    question: 'はじめまして',
    answer: ['hajimemashite'],
    letters: [
      [
        ['は', 'ha'],
        ['じ', 'ji'],
        ['め', 'me'],
        ['ま', 'ma'],
        ['し', 'shi'],
        ['て', 'te'],
      ]
    ],
    type: 'hiragana',
    meaning: 'How do you do?'
  },
  {
    question: 'よろしくおねがいします',
    answer: ['yoroshikuonegaishimasu'],
    letters: [
      [
        ['よ', 'yo'],
        ['ろ', 'ro'],
        ['し', 'shi'],
        ['く', 'ku'],
        ['お', 'o'],
        ['ね', 'ne'],
        ['が', 'ga'],
        ['い', 'i'],
        ['し', 'shi'],
        ['ま', 'ma'],
        ['す', 'su'],
      ]
    ],
    type: 'hiragana',
    meaning: 'Nice to meet you'
  },
  {
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
    meaning: 'Beer',
  },
  {
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
    meaning: 'Japan',
  },
];