
'use client';

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { SongStructure, ChordVoicing } from '@/lib/music-theory';
import { generateLeadSheetPDF, LeadSheetData } from '@/lib/pdf-generator';
import { Download, FileText, Music } from 'lucide-react';

interface LeadSheetDisplayProps {
  mood: string;
  skillLevel: 'beginner' | 'intermediate' | 'advanced';
  structure: SongStructure;
  chordVoicings: Record<string, ChordVoicing>;
}

export default function LeadSheetDisplay({ 
  mood, 
  skillLevel, 
  structure, 
  chordVoicings 
}: LeadSheetDisplayProps) {
  const handleDownloadPDF = () => {
    const leadSheetData: LeadSheetData = {
      title: `Jazz Funk Lead Sheet - ${mood}`,
      mood,
      skillLevel,
      structure,
      chordVoicings
    };
    
    generateLeadSheetPDF(leadSheetData);
  };

  return (
    <Card className="bg-gradient-to-br from-green-50 to-emerald-50 border-green-200">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="text-xl font-bold flex items-center gap-2">
            <FileText size={24} />
            Lead Sheet
          </CardTitle>
          <Button onClick={handleDownloadPDF} className="flex items-center gap-2">
            <Download size={16} />
            Download PDF
          </Button>
        </div>
      </CardHeader>
      
      <CardContent className="space-y-6">
        {/* Header Info */}
        <div className="bg-white rounded-lg p-4 border border-green-200">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
            <div>
              <span className="font-medium text-gray-700">Mood:</span>
              <Badge variant="outline" className="ml-2">{mood}</Badge>
            </div>
            <div>
              <span className="font-medium text-gray-700">Skill Level:</span>
              <Badge variant="outline" className="ml-2 capitalize">{skillLevel}</Badge>
            </div>
            <div>
              <span className="font-medium text-gray-700">Tempo:</span>
              <span className="ml-2 text-gray-600">{structure.tempo}</span>
            </div>
          </div>
        </div>

        {/* Simplified Chart Format */}
        <div className="space-y-4">
          <h3 className="font-bold text-lg flex items-center gap-2">
            <Music size={20} />
            Chord Chart
          </h3>
          
          {structure.sections.map((section, index) => (
            <div key={index} className="bg-white rounded-lg p-4 border border-gray-200">
              <div className="flex items-center justify-between mb-3">
                <h4 className="font-bold text-md uppercase tracking-wide">{section.name}</h4>
                <span className="text-sm text-gray-500">{section.measures} measures</span>
              </div>
              
              {section.progressions.map((progression, progIndex) => (
                <div key={progIndex} className="space-y-2">
                  {/* Chord progression in chart format */}
                  <div className="grid grid-cols-4 gap-2 p-3 bg-gray-50 rounded border">
                    {progression.chords.map((chord, chordIndex) => (
                      <div key={chordIndex} className="text-center">
                        <div className="font-bold text-lg text-blue-800 border-b border-gray-300 pb-1">
                          {chord}
                        </div>
                        <div className="text-xs text-gray-500 mt-1">
                          {chordIndex + 1}
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <div className="text-xs text-gray-600 italic">
                    {progression.rhythm}
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>

        {/* Quick Reference */}
        <div className="bg-white rounded-lg p-4 border border-green-200">
          <h4 className="font-semibold mb-3">Quick Chord Reference</h4>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-sm">
            {Object.entries(chordVoicings).map(([chordName, voicing]) => (
              <div key={chordName} className="bg-gray-50 p-2 rounded text-center">
                <div className="font-medium">{chordName}</div>
                {voicing && (
                  <div className="text-xs text-gray-600 mt-1">
                    {voicing.notes.slice(0, 3).join('-')}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Download Instructions */}
        <div className="bg-blue-50 rounded-lg p-3 border border-blue-200">
          <h4 className="font-semibold text-blue-800 mb-2">PDF Download</h4>
          <p className="text-sm text-blue-700">
            Click "Download PDF" to generate a complete lead sheet with detailed chord voicings, 
            fingerings for both keyboard and guitar, and the full song structure ready for practice or performance.
          </p>
        </div>
      </CardContent>
    </Card>
  );
}
