
// Core music theory types and interfaces
export interface ChordVoicing {
  name: string;
  notes: string[];
  keyboardFingering: string[];
  guitarFingering: {
    frets: number[];
    strings: string[];
    barres?: { fret: number; strings: number[] }[];
  };
  difficulty: 'beginner' | 'intermediate' | 'advanced';
}

export interface ChordProgression {
  section: string;
  chords: string[];
  measures: number;
  rhythm: string;
}

export interface SongStructure {
  sections: {
    name: string;
    progressions: ChordProgression[];
    measures: number;
  }[];
  totalMeasures: number;
  tempo: string;
}

export interface MoodData {
  id: string;
  name: string;
  description: string;
  characteristics: string[];
  keyPreferences: string[];
  commonProgressions: string[][];
  tempo: string;
  color: string;
}

// Expanded mood options for Jazz Funk
export const JAZZ_FUNK_MOODS: MoodData[] = [
  {
    id: 'groovy',
    name: 'Groovy',
    description: 'Deep pocket, infectious rhythm',
    characteristics: ['Strong backbeat', 'Syncopated rhythms', 'Emphasis on groove'],
    keyPreferences: ['Fm', 'Gm', 'Am', 'Dm'],
    commonProgressions: [['Fm9', 'Bb13', 'Fm9', 'Bb13'], ['Gm11', 'C13', 'Fm9', 'Bb13']],
    tempo: 'Medium (90-110 BPM)',
    color: '#FF6B6B'
  },
  {
    id: 'uplifting',
    name: 'Uplifting',
    description: 'Bright, inspiring, energetic',
    characteristics: ['Major tonalities', 'Rising progressions', 'Bright voicings'],
    keyPreferences: ['C', 'F', 'G', 'D'],
    commonProgressions: [['Cmaj9', 'Am11', 'Dm11', 'G13'], ['Fmaj9', 'Em11', 'Am11', 'Dm11']],
    tempo: 'Medium-Fast (110-130 BPM)',
    color: '#4ECDC4'
  },
  {
    id: 'mellow',
    name: 'Mellow',
    description: 'Smooth, relaxed, contemplative',
    characteristics: ['Soft dynamics', 'Extended harmonies', 'Floating feel'],
    keyPreferences: ['Eb', 'Ab', 'Db', 'F'],
    commonProgressions: [['Ebmaj9', 'Fm11', 'Gm11', 'Abmaj9'], ['Abmaj9', 'Bbm11', 'Cm11', 'Dbmaj9']],
    tempo: 'Slow-Medium (70-90 BPM)',
    color: '#95E1D3'
  },
  {
    id: 'funky',
    name: 'Funky',
    description: 'Sharp, rhythmic, percussive',
    characteristics: ['Staccato rhythms', '16th note patterns', 'Aggressive voicings'],
    keyPreferences: ['E', 'A', 'D', 'G'],
    commonProgressions: [['E9', 'A13', 'E9', 'B13'], ['Am11', 'D13', 'Am11', 'E13']],
    tempo: 'Medium-Fast (100-120 BPM)',
    color: '#F38BA8'
  },
  {
    id: 'sophisticated',
    name: 'Sophisticated',
    description: 'Complex, refined, elegant',
    characteristics: ['Advanced harmonies', 'Subtle modulations', 'Rich chord voicings'],
    keyPreferences: ['Bb', 'Eb', 'Ab', 'F#'],
    commonProgressions: [['Bbmaj9#11', 'Em11b5', 'A7alt', 'Dm11'], ['Ebmaj9', 'Am11b5', 'D7alt', 'Gm11']],
    tempo: 'Medium (85-105 BPM)',
    color: '#B19CD9'
  },
  {
    id: 'bluesy',
    name: 'Bluesy',
    description: 'Soulful, expressive, rooted',
    characteristics: ['Blue notes', 'Call and response', 'Emotional depth'],
    keyPreferences: ['Bb', 'F', 'C', 'G'],
    commonProgressions: [['Bb13', 'Eb13', 'Bb13', 'F13'], ['F13', 'Bb13', 'C13', 'F13']],
    tempo: 'Medium (80-100 BPM)',
    color: '#FFB347'
  },
  {
    id: 'ethereal',
    name: 'Ethereal',
    description: 'Floating, atmospheric, dreamy',
    characteristics: ['Suspended chords', 'Ambiguous tonality', 'Spacious voicings'],
    keyPreferences: ['F#', 'C#', 'Ab', 'Eb'],
    commonProgressions: [['F#sus2', 'C#sus4', 'Absus2', 'Ebsus4'], ['C#maj9', 'F#sus2', 'Bmaj9', 'E13sus4']],
    tempo: 'Slow (60-80 BPM)',
    color: '#DDA0DD'
  },
  {
    id: 'energetic',
    name: 'Energetic',
    description: 'High-energy, driving, powerful',
    characteristics: ['Fast tempos', 'Driving rhythms', 'Bold progressions'],
    keyPreferences: ['E', 'A', 'B', 'F#'],
    commonProgressions: [['E13', 'A13', 'B13', 'E13'], ['A13', 'D13', 'E13', 'A13']],
    tempo: 'Fast (120-140 BPM)',
    color: '#FF6B9D'
  },
  {
    id: 'mysterious',
    name: 'Mysterious',
    description: 'Dark, intriguing, complex',
    characteristics: ['Minor tonalities', 'Chromatic movement', 'Unexpected turns'],
    keyPreferences: ['F#m', 'C#m', 'Gm', 'Dm'],
    commonProgressions: [['F#m11', 'G#m11b5', 'C#7alt', 'F#m11'], ['Gm11', 'Ab13#11', 'Dm11b5', 'G7alt']],
    tempo: 'Medium-Slow (75-95 BPM)',
    color: '#6A5ACD'
  },
  {
    id: 'contemplative',
    name: 'Contemplative',
    description: 'Thoughtful, introspective, peaceful',
    characteristics: ['Gentle progressions', 'Extended harmonies', 'Reflective mood'],
    keyPreferences: ['Dm', 'Am', 'Em', 'Bm'],
    commonProgressions: [['Dm11', 'G13', 'Cmaj9', 'Fmaj9'], ['Am11', 'Dm11', 'G13', 'Cmaj9']],
    tempo: 'Slow-Medium (70-90 BPM)',
    color: '#87CEEB'
  }
];

// Jazz Funk chord voicings database
export const CHORD_VOICINGS: Record<string, ChordVoicing[]> = {
  'Fm9': [
    {
      name: 'Fm9',
      notes: ['F', 'Ab', 'C', 'Eb', 'G'],
      keyboardFingering: ['LH: F', 'RH: Ab-C-Eb-G'],
      guitarFingering: {
        frets: [1, 3, 1, 1, 1, 1],
        strings: ['6th', '5th', '4th', '3rd', '2nd', '1st'],
        barres: [{ fret: 1, strings: [1, 2, 3, 6] }]
      },
      difficulty: 'beginner'
    },
    {
      name: 'Fm9 (Advanced)',
      notes: ['F', 'G', 'Ab', 'C', 'Eb'],
      keyboardFingering: ['LH: F-G', 'RH: Ab-C-Eb'],
      guitarFingering: {
        frets: [1, 3, 1, 3, 1, 3],
        strings: ['6th', '5th', '4th', '3rd', '2nd', '1st']
      },
      difficulty: 'advanced'
    }
  ],
  'Bb13': [
    {
      name: 'Bb13',
      notes: ['Bb', 'D', 'F', 'Ab', 'G'],
      keyboardFingering: ['LH: Bb-D', 'RH: F-Ab-G'],
      guitarFingering: {
        frets: [6, 8, 6, 7, 6, 8],
        strings: ['6th', '5th', '4th', '3rd', '2nd', '1st']
      },
      difficulty: 'intermediate'
    }
  ],
  'Gm11': [
    {
      name: 'Gm11',
      notes: ['G', 'Bb', 'D', 'F', 'C'],
      keyboardFingering: ['LH: G-Bb', 'RH: D-F-C'],
      guitarFingering: {
        frets: [3, 5, 3, 3, 3, 3],
        strings: ['6th', '5th', '4th', '3rd', '2nd', '1st'],
        barres: [{ fret: 3, strings: [1, 2, 3, 4, 6] }]
      },
      difficulty: 'beginner'
    }
  ],
  'C13': [
    {
      name: 'C13',
      notes: ['C', 'E', 'G', 'Bb', 'A'],
      keyboardFingering: ['LH: C-E', 'RH: G-Bb-A'],
      guitarFingering: {
        frets: [8, 10, 8, 9, 8, 10],
        strings: ['6th', '5th', '4th', '3rd', '2nd', '1st']
      },
      difficulty: 'intermediate'
    }
  ],
  'Cmaj9': [
    {
      name: 'Cmaj9',
      notes: ['C', 'E', 'G', 'B', 'D'],
      keyboardFingering: ['LH: C', 'RH: E-G-B-D'],
      guitarFingering: {
        frets: [0, 3, 2, 0, 0, 0],
        strings: ['6th', '5th', '4th', '3rd', '2nd', '1st']
      },
      difficulty: 'beginner'
    }
  ],
  'Am11': [
    {
      name: 'Am11',
      notes: ['A', 'C', 'E', 'G', 'D'],
      keyboardFingering: ['LH: A-C', 'RH: E-G-D'],
      guitarFingering: {
        frets: [5, 7, 5, 5, 5, 5],
        strings: ['6th', '5th', '4th', '3rd', '2nd', '1st'],
        barres: [{ fret: 5, strings: [1, 2, 3, 4, 6] }]
      },
      difficulty: 'beginner'
    }
  ],
  'Dm11': [
    {
      name: 'Dm11',
      notes: ['D', 'F', 'A', 'C', 'G'],
      keyboardFingering: ['LH: D-F', 'RH: A-C-G'],
      guitarFingering: {
        frets: [10, 12, 10, 10, 10, 10],
        strings: ['6th', '5th', '4th', '3rd', '2nd', '1st'],
        barres: [{ fret: 10, strings: [1, 2, 3, 4, 6] }]
      },
      difficulty: 'beginner'
    }
  ],
  'G13': [
    {
      name: 'G13',
      notes: ['G', 'B', 'D', 'F', 'E'],
      keyboardFingering: ['LH: G-B', 'RH: D-F-E'],
      guitarFingering: {
        frets: [3, 5, 4, 4, 5, 3],
        strings: ['6th', '5th', '4th', '3rd', '2nd', '1st']
      },
      difficulty: 'intermediate'
    }
  ],
  // Suspended chords for intros
  'Csus2': [
    {
      name: 'Csus2',
      notes: ['C', 'D', 'G'],
      keyboardFingering: ['LH: C', 'RH: D-G'],
      guitarFingering: {
        frets: [0, 3, 0, 0, 1, 0],
        strings: ['6th', '5th', '4th', '3rd', '2nd', '1st']
      },
      difficulty: 'beginner'
    }
  ],
  'Fsus2': [
    {
      name: 'Fsus2',
      notes: ['F', 'G', 'C'],
      keyboardFingering: ['LH: F', 'RH: G-C'],
      guitarFingering: {
        frets: [1, 3, 3, 0, 1, 1],
        strings: ['6th', '5th', '4th', '3rd', '2nd', '1st']
      },
      difficulty: 'beginner'
    }
  ],
  'Gsus4': [
    {
      name: 'Gsus4',
      notes: ['G', 'C', 'D'],
      keyboardFingering: ['LH: G', 'RH: C-D'],
      guitarFingering: {
        frets: [3, 5, 5, 3, 3, 3],
        strings: ['6th', '5th', '4th', '3rd', '2nd', '1st'],
        barres: [{ fret: 3, strings: [1, 2, 3, 6] }]
      },
      difficulty: 'beginner'
    }
  ],
  'Asus2': [
    {
      name: 'Asus2',
      notes: ['A', 'B', 'E'],
      keyboardFingering: ['LH: A', 'RH: B-E'],
      guitarFingering: {
        frets: [0, 0, 2, 2, 0, 0],
        strings: ['6th', '5th', '4th', '3rd', '2nd', '1st']
      },
      difficulty: 'beginner'
    }
  ],
  'Dsus4': [
    {
      name: 'Dsus4',
      notes: ['D', 'G', 'A'],
      keyboardFingering: ['LH: D', 'RH: G-A'],
      guitarFingering: {
        frets: [10, 12, 12, 10, 10, 10],
        strings: ['6th', '5th', '4th', '3rd', '2nd', '1st'],
        barres: [{ fret: 10, strings: [1, 2, 3, 6] }]
      },
      difficulty: 'beginner'
    }
  ],
  'Esus4': [
    {
      name: 'Esus4',
      notes: ['E', 'A', 'B'],
      keyboardFingering: ['LH: E', 'RH: A-B'],
      guitarFingering: {
        frets: [0, 2, 2, 2, 0, 0],
        strings: ['6th', '5th', '4th', '3rd', '2nd', '1st']
      },
      difficulty: 'beginner'
    }
  ],
  // Half-diminished chords for modal progressions
  'Bm11b5': [
    {
      name: 'Bm11b5',
      notes: ['B', 'D', 'F', 'A', 'E'],
      keyboardFingering: ['LH: B-D', 'RH: F-A-E'],
      guitarFingering: {
        frets: [7, 9, 7, 7, 7, 7],
        strings: ['6th', '5th', '4th', '3rd', '2nd', '1st'],
        barres: [{ fret: 7, strings: [1, 2, 3, 4, 6] }]
      },
      difficulty: 'intermediate'
    }
  ],
  'F#m11b5': [
    {
      name: 'F#m11b5',
      notes: ['F#', 'A', 'C', 'E', 'B'],
      keyboardFingering: ['LH: F#-A', 'RH: C-E-B'],
      guitarFingering: {
        frets: [2, 4, 2, 2, 2, 2],
        strings: ['6th', '5th', '4th', '3rd', '2nd', '1st'],
        barres: [{ fret: 2, strings: [1, 2, 3, 4, 6] }]
      },
      difficulty: 'intermediate'
    }
  ],
  'Dm11b5': [
    {
      name: 'Dm11b5',
      notes: ['D', 'F', 'Ab', 'C', 'G'],
      keyboardFingering: ['LH: D-F', 'RH: Ab-C-G'],
      guitarFingering: {
        frets: [10, 11, 10, 10, 11, 10],
        strings: ['6th', '5th', '4th', '3rd', '2nd', '1st']
      },
      difficulty: 'intermediate'
    }
  ],
  // Extended dominant chords
  'A13': [
    {
      name: 'A13',
      notes: ['A', 'C#', 'E', 'G', 'F#'],
      keyboardFingering: ['LH: A-C#', 'RH: E-G-F#'],
      guitarFingering: {
        frets: [5, 7, 6, 6, 7, 5],
        strings: ['6th', '5th', '4th', '3rd', '2nd', '1st']
      },
      difficulty: 'intermediate'
    }
  ],
  'D13': [
    {
      name: 'D13',
      notes: ['D', 'F#', 'A', 'C', 'B'],
      keyboardFingering: ['LH: D-F#', 'RH: A-C-B'],
      guitarFingering: {
        frets: [10, 12, 11, 11, 12, 10],
        strings: ['6th', '5th', '4th', '3rd', '2nd', '1st']
      },
      difficulty: 'intermediate'
    }
  ],
  'E13': [
    {
      name: 'E13',
      notes: ['E', 'G#', 'B', 'D', 'C#'],
      keyboardFingering: ['LH: E-G#', 'RH: B-D-C#'],
      guitarFingering: {
        frets: [0, 2, 1, 1, 2, 0],
        strings: ['6th', '5th', '4th', '3rd', '2nd', '1st']
      },
      difficulty: 'intermediate'
    }
  ],
  // Sus4 dominant chords
  'A13sus4': [
    {
      name: 'A13sus4',
      notes: ['A', 'D', 'E', 'G', 'F#'],
      keyboardFingering: ['LH: A-D', 'RH: E-G-F#'],
      guitarFingering: {
        frets: [5, 7, 7, 6, 7, 5],
        strings: ['6th', '5th', '4th', '3rd', '2nd', '1st']
      },
      difficulty: 'advanced'
    }
  ],
  'C13sus4': [
    {
      name: 'C13sus4',
      notes: ['C', 'F', 'G', 'Bb', 'A'],
      keyboardFingering: ['LH: C-F', 'RH: G-Bb-A'],
      guitarFingering: {
        frets: [8, 10, 10, 9, 10, 8],
        strings: ['6th', '5th', '4th', '3rd', '2nd', '1st']
      },
      difficulty: 'advanced'
    }
  ],
  // Additional minor 11 chords
  'Em11': [
    {
      name: 'Em11',
      notes: ['E', 'G', 'B', 'D', 'A'],
      keyboardFingering: ['LH: E-G', 'RH: B-D-A'],
      guitarFingering: {
        frets: [0, 2, 0, 0, 0, 0],
        strings: ['6th', '5th', '4th', '3rd', '2nd', '1st']
      },
      difficulty: 'beginner'
    }
  ],
  'Fm11': [
    {
      name: 'Fm11',
      notes: ['F', 'Ab', 'C', 'Eb', 'Bb'],
      keyboardFingering: ['LH: F-Ab', 'RH: C-Eb-Bb'],
      guitarFingering: {
        frets: [1, 3, 1, 1, 1, 1],
        strings: ['6th', '5th', '4th', '3rd', '2nd', '1st'],
        barres: [{ fret: 1, strings: [1, 2, 3, 4, 6] }]
      },
      difficulty: 'beginner'
    }
  ],
  'Bbm11': [
    {
      name: 'Bbm11',
      notes: ['Bb', 'Db', 'F', 'Ab', 'Eb'],
      keyboardFingering: ['LH: Bb-Db', 'RH: F-Ab-Eb'],
      guitarFingering: {
        frets: [6, 8, 6, 6, 6, 6],
        strings: ['6th', '5th', '4th', '3rd', '2nd', '1st'],
        barres: [{ fret: 6, strings: [1, 2, 3, 4, 6] }]
      },
      difficulty: 'beginner'
    }
  ],
  'Cm11': [
    {
      name: 'Cm11',
      notes: ['C', 'Eb', 'G', 'Bb', 'F'],
      keyboardFingering: ['LH: C-Eb', 'RH: G-Bb-F'],
      guitarFingering: {
        frets: [8, 10, 8, 8, 8, 8],
        strings: ['6th', '5th', '4th', '3rd', '2nd', '1st'],
        barres: [{ fret: 8, strings: [1, 2, 3, 4, 6] }]
      },
      difficulty: 'beginner'
    }
  ],
  // Diminished chord
  'D#dim7': [
    {
      name: 'D#dim7',
      notes: ['D#', 'F#', 'A', 'C'],
      keyboardFingering: ['LH: D#-F#', 'RH: A-C'],
      guitarFingering: {
        frets: [11, 12, 11, 11, 12, 11],
        strings: ['6th', '5th', '4th', '3rd', '2nd', '1st']
      },
      difficulty: 'advanced'
    }
  ],
  // Additional dominant 13 chords for chromatic patterns
  'F#13': [
    {
      name: 'F#13',
      notes: ['F#', 'A#', 'C#', 'E', 'D#'],
      keyboardFingering: ['LH: F#-A#', 'RH: C#-E-D#'],
      guitarFingering: {
        frets: [2, 4, 3, 3, 4, 2],
        strings: ['6th', '5th', '4th', '3rd', '2nd', '1st']
      },
      difficulty: 'advanced'
    }
  ],
  'B13': [
    {
      name: 'B13',
      notes: ['B', 'D#', 'F#', 'A', 'G#'],
      keyboardFingering: ['LH: B-D#', 'RH: F#-A-G#'],
      guitarFingering: {
        frets: [7, 9, 8, 8, 9, 7],
        strings: ['6th', '5th', '4th', '3rd', '2nd', '1st']
      },
      difficulty: 'advanced'
    }
  ],
  'Ab13': [
    {
      name: 'Ab13',
      notes: ['Ab', 'C', 'Eb', 'Gb', 'F'],
      keyboardFingering: ['LH: Ab-C', 'RH: Eb-Gb-F'],
      guitarFingering: {
        frets: [4, 6, 5, 5, 6, 4],
        strings: ['6th', '5th', '4th', '3rd', '2nd', '1st']
      },
      difficulty: 'advanced'
    }
  ],
  'Gb13': [
    {
      name: 'Gb13',
      notes: ['Gb', 'Bb', 'Db', 'E', 'Eb'],
      keyboardFingering: ['LH: Gb-Bb', 'RH: Db-E-Eb'],
      guitarFingering: {
        frets: [2, 4, 3, 3, 4, 2],
        strings: ['6th', '5th', '4th', '3rd', '2nd', '1st']
      },
      difficulty: 'advanced'
    }
  ],
  'F13': [
    {
      name: 'F13',
      notes: ['F', 'A', 'C', 'Eb', 'D'],
      keyboardFingering: ['LH: F-A', 'RH: C-Eb-D'],
      guitarFingering: {
        frets: [1, 3, 2, 2, 3, 1],
        strings: ['6th', '5th', '4th', '3rd', '2nd', '1st']
      },
      difficulty: 'intermediate'
    }
  ],
  'C#13': [
    {
      name: 'C#13',
      notes: ['C#', 'F', 'G#', 'B', 'A#'],
      keyboardFingering: ['LH: C#-F', 'RH: G#-B-A#'],
      guitarFingering: {
        frets: [9, 11, 10, 10, 11, 9],
        strings: ['6th', '5th', '4th', '3rd', '2nd', '1st']
      },
      difficulty: 'advanced'
    }
  ]
};

// Song structure templates based on Jazz Funk conventions
export const SONG_STRUCTURES: Record<string, SongStructure> = {
  classic: {
    sections: [
      {
        name: 'Intro',
        progressions: [
          {
            section: 'Intro',
            chords: ['Fm9', 'Bb13'],
            measures: 4,
            rhythm: '4/4 - Medium groove'
          }
        ],
        measures: 4
      },
      {
        name: 'Verse',
        progressions: [
          {
            section: 'Verse',
            chords: ['Fm9', 'Bb13', 'Gm11', 'C13'],
            measures: 8,
            rhythm: '4/4 - Laid back'
          }
        ],
        measures: 8
      },
      {
        name: 'Chorus',
        progressions: [
          {
            section: 'Chorus',
            chords: ['Cmaj9', 'Am11', 'Dm11', 'G13'],
            measures: 8,
            rhythm: '4/4 - Strong backbeat'
          }
        ],
        measures: 8
      },
      {
        name: 'Bridge',
        progressions: [
          {
            section: 'Bridge',
            chords: ['Am11', 'Dm11', 'Gm11', 'C13'],
            measures: 8,
            rhythm: '4/4 - Build energy'
          }
        ],
        measures: 8
      }
    ],
    totalMeasures: 28,
    tempo: 'Medium (90-110 BPM)'
  }
};

// Helper functions for section-specific progressions

// Generate relative minor progression from major progression
function generateRelativeMinorProgression(mainProgression: string[]): string[] {
  // Jazz funk technique: shift to relative minor with similar chord functions
  const relativeMinorMap: Record<string, string> = {
    'Cmaj9': 'Am11', 'Fmaj9': 'Dm11', 'Gmaj9': 'Em11', 'Bbmaj9': 'Gm11',
    'Ebmaj9': 'Cm11', 'Abmaj9': 'Fm11', 'Dbmaj9': 'Bbm11',
    'Am11': 'Fm11', 'Dm11': 'Bbm11', 'Em11': 'Cm11', 'Gm11': 'Ebm11',
    'Cm11': 'Abm11', 'Fm11': 'Dbm11', 'Bbm11': 'Gbm11'
  };
  
  return mainProgression.map(chord => relativeMinorMap[chord] || chord);
}

// Generate modal variation (Dorian, Mixolydian feel)
function generateModalVariation(mainProgression: string[], mode: 'dorian' | 'mixolydian' = 'dorian'): string[] {
  if (mode === 'dorian') {
    // Add minor ii-V feels and suspended chords
    const dorianMap: Record<string, string> = {
      'Cmaj9': 'Dm11', 'Am11': 'Bm11b5', 'Dm11': 'Em11', 'G13': 'A13sus4',
      'Fmaj9': 'Gm11', 'Em11': 'F#m11b5', 'Bb13': 'C13sus4',
      'Ebmaj9': 'Fm11', 'Cm11': 'Dm11b5', 'Abmaj9': 'Bbm11'
    };
    return mainProgression.map(chord => dorianMap[chord] || chord);
  } else {
    // Mixolydian - dominant feel with flat 7
    const mixolydianMap: Record<string, string> = {
      'Cmaj9': 'C13', 'Fmaj9': 'F13', 'Gmaj9': 'G13', 'Bbmaj9': 'Bb13',
      'Am11': 'A13', 'Dm11': 'D13', 'Em11': 'E13'
    };
    return mainProgression.map(chord => mixolydianMap[chord] || chord);
  }
}

// Generate chromatic bridge progression
function generateChromaticBridge(mainProgression: string[]): string[] {
  // Create chromatic movement and secondary dominants
  const chromaticPatterns = [
    ['Am11', 'Ab13', 'Gm11', 'Gb13'], // Chromatic descent
    ['Dm11', 'D#dim7', 'Em11', 'F13'], // Diminished passing
    ['Gm11', 'C#13', 'F#m11', 'B13'], // Tritone substitutions
    ['Cm11', 'F#13', 'Bbmaj9', 'E13'] // Secondary dominants
  ];
  
  return chromaticPatterns[Math.floor(Math.random() * chromaticPatterns.length)];
}

// Generate key change for outro
function generateKeyChangeProgression(mainProgression: string[], changeType: 'up' | 'down' = 'up'): string[] {
  // Transpose up or down by perfect 4th/5th
  const keyChangeMap: Record<string, string> = {
    // Up a 4th (common jazz modulation)
    'Cmaj9': 'Fmaj9', 'Am11': 'Dm11', 'Dm11': 'Gm11', 'G13': 'C13',
    'Fmaj9': 'Bbmaj9', 'Em11': 'Am11', 'Bb13': 'Eb13',
    'Gm11': 'Cm11', 'C13': 'F13', 'Fm9': 'Bbm9'
  };
  
  if (changeType === 'down') {
    // Reverse the mapping for downward modulation
    const reverseMap: Record<string, string> = {};
    Object.entries(keyChangeMap).forEach(([key, value]) => {
      reverseMap[value] = key;
    });
    return mainProgression.map(chord => reverseMap[chord] || chord);
  }
  
  return mainProgression.map(chord => keyChangeMap[chord] || chord);
}

// Generate simplified intro progression
function generateIntroProgression(mainProgression: string[]): string[] {
  // Use first 2 chords of main progression, possibly with suspended chords
  const intro = mainProgression.slice(0, 2);
  
  // Add suspended chord variations for intro ambiguity
  const susMap: Record<string, string> = {
    'Cmaj9': 'Csus2', 'Fmaj9': 'Fsus2', 'Gmaj9': 'Gsus4',
    'Am11': 'Asus2', 'Dm11': 'Dsus4', 'Em11': 'Esus4',
    'Bb13': 'Bbsus4', 'C13': 'Csus4', 'G13': 'Gsus4'
  };
  
  // 50% chance to use suspended chords in intro
  return intro.map(chord => Math.random() > 0.5 ? (susMap[chord] || chord) : chord);
}

// Generate section-specific progression
function generateSectionProgression(
  sectionName: string, 
  mainProgression: string[], 
  skillLevel: 'beginner' | 'intermediate' | 'advanced'
): string[] {
  const lowerSectionName = sectionName.toLowerCase();
  
  switch (lowerSectionName) {
    case 'intro':
      return generateIntroProgression(mainProgression);
      
    case 'verse':
      // For verses, use relative minor or modal variation for contrast
      if (skillLevel === 'beginner') {
        return generateRelativeMinorProgression(mainProgression);
      } else {
        return Math.random() > 0.5 
          ? generateRelativeMinorProgression(mainProgression)
          : generateModalVariation(mainProgression, 'dorian');
      }
      
    case 'chorus':
      // Chorus stays in main key but with stronger progressions
      if (skillLevel === 'advanced') {
        return generateModalVariation(mainProgression, 'mixolydian');
      }
      return mainProgression; // Keep original for strong resolution
      
    case 'bridge':
      // Bridge uses contrasting harmony
      if (skillLevel === 'beginner') {
        return generateModalVariation(mainProgression, 'dorian');
      } else {
        return generateChromaticBridge(mainProgression);
      }
      
    case 'outro':
      // Outro can have key changes or extended progressions
      if (skillLevel === 'advanced') {
        return generateKeyChangeProgression(mainProgression);
      }
      return [...mainProgression, ...mainProgression.slice(0, 2)]; // Extended version
      
    default:
      return mainProgression;
  }
}

// Main progression generation function
export function generateProgression(mood: MoodData, skillLevel: 'beginner' | 'intermediate' | 'advanced'): SongStructure {
  const baseStructure = SONG_STRUCTURES.classic;
  
  // Select appropriate main chord progression for the mood
  const progressionIndex = Math.floor(Math.random() * mood.commonProgressions.length);
  const mainProgression = mood.commonProgressions[progressionIndex];
  
  // Generate section-specific progressions
  const adaptedStructure: SongStructure = {
    ...baseStructure,
    tempo: mood.tempo,
    sections: baseStructure.sections.map(section => ({
      ...section,
      progressions: section.progressions.map(prog => {
        const sectionProgression = generateSectionProgression(section.name, mainProgression, skillLevel);
        
        return {
          ...prog,
          chords: sectionProgression,
          rhythm: getSectionRhythm(section.name, mood)
        };
      })
    }))
  };
  
  return adaptedStructure;
}

// Helper function to get section-appropriate rhythm descriptions
function getSectionRhythm(sectionName: string, mood: MoodData): string {
  const baseTempo = '4/4';
  const lowerSectionName = sectionName.toLowerCase();
  
  switch (lowerSectionName) {
    case 'intro':
      return `${baseTempo} - Sparse, establishing groove`;
    case 'verse':
      return `${baseTempo} - Laid back, conversational`;
    case 'chorus':
      return `${baseTempo} - Strong backbeat, full arrangement`;
    case 'bridge':
      return `${baseTempo} - Building tension, rhythmic variation`;
    case 'outro':
      return `${baseTempo} - Fade out or strong resolution`;
    default:
      return `${baseTempo} - Medium groove`;
  }
}

// Get appropriate chord voicing based on skill level
export function getChordVoicing(chordName: string, skillLevel: 'beginner' | 'intermediate' | 'advanced'): ChordVoicing | null {
  const voicings = CHORD_VOICINGS[chordName];
  if (!voicings) return null;
  
  // Filter voicings by skill level
  const appropriateVoicings = voicings.filter(v => {
    if (skillLevel === 'beginner') return v.difficulty === 'beginner';
    if (skillLevel === 'intermediate') return v.difficulty === 'beginner' || v.difficulty === 'intermediate';
    return true; // Advanced players can use all voicings
  });
  
  // Return the first appropriate voicing, or fall back to any voicing
  return appropriateVoicings[0] || voicings[0];
}
