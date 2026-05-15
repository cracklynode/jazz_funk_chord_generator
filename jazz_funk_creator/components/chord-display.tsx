
'use client';

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ChordVoicing } from '@/lib/music-theory';
import { Piano, Guitar, Music } from 'lucide-react';

interface ChordDisplayProps {
  chordName: string;
  voicing: ChordVoicing | null;
}

export default function ChordDisplay({ chordName, voicing }: ChordDisplayProps) {
  if (!voicing) {
    return (
      <Card className="bg-gray-50">
        <CardContent className="p-4 text-center">
          <Music size={24} className="mx-auto mb-2 text-gray-400" />
          <p className="text-sm text-gray-500">Voicing not available for {chordName}</p>
        </CardContent>
      </Card>
    );
  }

  const difficultyColors = {
    beginner: 'bg-green-100 text-green-800',
    intermediate: 'bg-yellow-100 text-yellow-800',
    advanced: 'bg-red-100 text-red-800'
  };

  return (
    <Card className="hover:shadow-lg transition-shadow duration-200">
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg font-bold">{voicing.name}</CardTitle>
          <Badge className={`text-xs ${difficultyColors[voicing.difficulty]}`}>
            {voicing.difficulty}
          </Badge>
        </div>
      </CardHeader>
      
      <CardContent className="space-y-4">
        {/* Notes */}
        <div>
          <h4 className="font-semibold text-sm mb-2 flex items-center gap-2">
            <Music size={16} />
            Notes
          </h4>
          <div className="flex flex-wrap gap-1">
            {voicing.notes.map((note, index) => (
              <span
                key={index}
                className="inline-block bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm font-medium"
              >
                {note}
              </span>
            ))}
          </div>
        </div>

        {/* Keyboard Fingering */}
        <div>
          <h4 className="font-semibold text-sm mb-2 flex items-center gap-2">
            <Piano size={16} />
            Keyboard
          </h4>
          <div className="bg-gray-50 rounded-lg p-3">
            {voicing.keyboardFingering.map((fingering, index) => (
              <div key={index} className="text-sm font-mono mb-1 last:mb-0">
                {fingering}
              </div>
            ))}
          </div>
        </div>

        {/* Guitar Fingering */}
        <div>
          <h4 className="font-semibold text-sm mb-2 flex items-center gap-2">
            <Guitar size={16} />
            Guitar
          </h4>
          <div className="bg-gray-50 rounded-lg p-3 space-y-2">
            <div className="text-sm">
              <span className="font-medium">Frets:</span>
              <span className="font-mono ml-2">{voicing.guitarFingering.frets.join('-')}</span>
            </div>
            <div className="text-sm">
              <span className="font-medium">Strings:</span>
              <span className="ml-2">{voicing.guitarFingering.strings.join(', ')}</span>
            </div>
            {voicing.guitarFingering.barres && voicing.guitarFingering.barres.length > 0 && (
              <div className="text-sm">
                <span className="font-medium">Barres:</span>
                {voicing.guitarFingering.barres.map((barre, index) => (
                  <div key={index} className="ml-2 text-xs">
                    Fret {barre.fret}, Strings {barre.strings.join(', ')}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
