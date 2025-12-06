
'use client';

import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { GraduationCap, User, Crown } from 'lucide-react';

interface SkillLevelSelectorProps {
  selectedLevel: 'beginner' | 'intermediate' | 'advanced' | null;
  onLevelSelect: (level: 'beginner' | 'intermediate' | 'advanced') => void;
}

const skillLevels = [
  {
    id: 'beginner' as const,
    name: 'Beginner',
    description: 'Simple voicings, basic fingerings',
    details: 'Basic triads and 7th chords with simple fingering patterns',
    icon: User,
    color: 'bg-green-500',
    badge: 'Easy'
  },
  {
    id: 'intermediate' as const,
    name: 'Intermediate',
    description: 'Extended chords, moderate complexity',
    details: '9th, 11th, and 13th chords with standard jazz voicings',
    icon: GraduationCap,
    color: 'bg-yellow-500',
    badge: 'Moderate'
  },
  {
    id: 'advanced' as const,
    name: 'Advanced',
    description: 'Complex voicings, altered chords',
    details: 'Advanced voicings, altered dominants, and sophisticated fingerings',
    icon: Crown,
    color: 'bg-purple-500',
    badge: 'Complex'
  }
];

export default function SkillLevelSelector({ selectedLevel, onLevelSelect }: SkillLevelSelectorProps) {
  return (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Select Your Skill Level</h2>
        <p className="text-gray-600">This determines the complexity of chord voicings and fingerings</p>
      </div>

      <div className="grid md:grid-cols-3 gap-4">
        {skillLevels.map((level) => {
          const IconComponent = level.icon;
          const isSelected = selectedLevel === level.id;

          return (
            <Card
              key={level.id}
              className={`cursor-pointer transition-all duration-200 hover:shadow-lg transform hover:scale-105 ${
                isSelected
                  ? 'ring-2 ring-blue-500 bg-blue-50 shadow-lg scale-105'
                  : 'hover:bg-gray-50'
              }`}
              onClick={() => onLevelSelect(level.id)}
            >
              <CardContent className="p-6 text-center">
                <div className={`w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center text-white ${level.color}`}>
                  <IconComponent size={32} />
                </div>
                
                <div className="flex items-center justify-center gap-2 mb-2">
                  <h3 className="font-bold text-lg">{level.name}</h3>
                  <Badge variant="secondary" className="text-xs">
                    {level.badge}
                  </Badge>
                </div>
                
                <p className="text-sm text-gray-600 mb-3">{level.description}</p>
                <p className="text-xs text-gray-500">{level.details}</p>
                
                {isSelected && (
                  <div className="mt-4 p-2 bg-blue-100 rounded-lg">
                    <p className="text-xs text-blue-700 font-medium">Selected Level</p>
                  </div>
                )}
              </CardContent>
            </Card>
          );
        })}
      </div>

      {selectedLevel && (
        <Card className="bg-gradient-to-r from-blue-50 to-indigo-50 border-blue-200">
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center text-white ${
                skillLevels.find(l => l.id === selectedLevel)?.color || 'bg-gray-500'
              }`}>
                {React.createElement(
                  skillLevels.find(l => l.id === selectedLevel)?.icon || User,
                  { size: 16 }
                )}
              </div>
              <div>
                <h3 className="font-bold text-lg capitalize">{selectedLevel} Level Selected</h3>
                <p className="text-sm text-gray-600">
                  {skillLevels.find(l => l.id === selectedLevel)?.details}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
