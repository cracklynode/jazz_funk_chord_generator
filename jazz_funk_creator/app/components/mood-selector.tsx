
'use client';

import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { MoodData, JAZZ_FUNK_MOODS } from '@/lib/music-theory';
import { Music, Sparkles, Waves, Zap, Star, Heart, Cloud, Flame, Moon, Sun } from 'lucide-react';

interface MoodSelectorProps {
  selectedMood: MoodData | null;
  onMoodSelect: (mood: MoodData) => void;
}

const moodIcons: Record<string, React.ComponentType<any>> = {
  groovy: Music,
  uplifting: Sun,
  mellow: Waves,
  funky: Zap,
  sophisticated: Star,
  bluesy: Heart,
  ethereal: Cloud,
  energetic: Flame,
  mysterious: Moon,
  contemplative: Sparkles
};

export default function MoodSelector({ selectedMood, onMoodSelect }: MoodSelectorProps) {
  return (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Choose Your Mood</h2>
        <p className="text-gray-600">Select the emotional vibe for your Jazz Funk composition</p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {JAZZ_FUNK_MOODS.map((mood) => {
          const IconComponent = moodIcons[mood.id] || Music;
          const isSelected = selectedMood?.id === mood.id;

          return (
            <Card
              key={mood.id}
              className={`cursor-pointer transition-all duration-200 hover:shadow-lg transform hover:scale-105 ${
                isSelected
                  ? 'ring-2 ring-blue-500 bg-blue-50 shadow-lg scale-105'
                  : 'hover:bg-gray-50'
              }`}
              onClick={() => onMoodSelect(mood)}
            >
              <CardContent className="p-4 text-center">
                <div
                  className="w-12 h-12 rounded-full mx-auto mb-3 flex items-center justify-center text-white"
                  style={{ backgroundColor: mood.color }}
                >
                  <IconComponent size={24} />
                </div>
                <h3 className="font-semibold text-sm mb-1">{mood.name}</h3>
                <p className="text-xs text-gray-600 mb-2">{mood.description}</p>
                <div className="text-xs text-gray-500">
                  {mood.tempo}
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {selectedMood && (
        <Card className="bg-blue-50 border-blue-200">
          <CardContent className="p-4">
            <div className="flex items-center gap-3 mb-3">
              <div
                className="w-8 h-8 rounded-full flex items-center justify-center text-white"
                style={{ backgroundColor: selectedMood.color }}
              >
                {React.createElement(moodIcons[selectedMood.id] || Music, { size: 16 })}
              </div>
              <h3 className="font-bold text-lg">{selectedMood.name}</h3>
            </div>
            <p className="text-gray-700 mb-3">{selectedMood.description}</p>
            <div className="grid md:grid-cols-2 gap-4 text-sm">
              <div>
                <h4 className="font-semibold mb-1">Characteristics:</h4>
                <ul className="list-disc list-inside text-gray-600 space-y-1">
                  {selectedMood.characteristics.map((char, index) => (
                    <li key={index}>{char}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-1">Key Preferences:</h4>
                <div className="flex flex-wrap gap-1">
                  {selectedMood.keyPreferences.map((key, index) => (
                    <span
                      key={index}
                      className="inline-block bg-white px-2 py-1 rounded text-xs border"
                    >
                      {key}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
