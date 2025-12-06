
'use client';

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { SongStructure } from '@/lib/music-theory';
import { Clock, Music2, BarChart3 } from 'lucide-react';

interface SongStructureDisplayProps {
  structure: SongStructure;
  mood: string;
}

export default function SongStructureDisplay({ structure, mood }: SongStructureDisplayProps) {
  return (
    <Card className="bg-gradient-to-br from-blue-50 to-indigo-50 border-blue-200">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="text-xl font-bold flex items-center gap-2">
            <Music2 size={24} />
            Song Structure
          </CardTitle>
          <Badge variant="outline" className="text-sm">
            {mood} Style
          </Badge>
        </div>
      </CardHeader>
      
      <CardContent className="space-y-4">
        {/* Song Info */}
        <div className="grid grid-cols-2 gap-4 p-3 bg-white rounded-lg">
          <div className="flex items-center gap-2">
            <Clock size={16} className="text-blue-600" />
            <span className="text-sm">
              <span className="font-medium">Tempo:</span> {structure.tempo}
            </span>
          </div>
          <div className="flex items-center gap-2">
            <BarChart3 size={16} className="text-blue-600" />
            <span className="text-sm">
              <span className="font-medium">Total:</span> {structure.totalMeasures} measures
            </span>
          </div>
        </div>

        {/* Sections */}
        <div className="space-y-3">
          {structure.sections.map((section, index) => (
            <Card key={index} className="bg-white border border-gray-200">
              <CardContent className="p-4">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-bold text-lg text-gray-900">{section.name}</h3>
                  <Badge variant="secondary" className="text-xs">
                    {section.measures} measures
                  </Badge>
                </div>
                
                {section.progressions.map((progression, progIndex) => (
                  <div key={progIndex} className="space-y-2">
                    {/* Chords */}
                    <div className="flex flex-wrap gap-2">
                      {progression.chords.map((chord, chordIndex) => (
                        <span
                          key={chordIndex}
                          className="inline-block bg-blue-100 text-blue-800 px-3 py-1 rounded-md text-sm font-medium"
                        >
                          {chord}
                        </span>
                      ))}
                    </div>
                    
                    {/* Rhythm */}
                    <div className="text-xs text-gray-600 bg-gray-50 px-2 py-1 rounded">
                      <span className="font-medium">Rhythm:</span> {progression.rhythm}
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Summary */}
        <div className="bg-white rounded-lg p-3 border border-blue-200">
          <h4 className="font-semibold text-sm mb-2 text-blue-800">Structure Summary</h4>
          <div className="flex flex-wrap gap-2">
            {structure.sections.map((section, index) => (
              <span key={index} className="text-xs bg-blue-50 text-blue-700 px-2 py-1 rounded">
                {section.name} ({section.measures}m)
              </span>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
