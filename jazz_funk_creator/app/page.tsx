
'use client';

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import MoodSelector from '@/components/mood-selector';
import SkillLevelSelector from '@/components/skill-level-selector';
import SongStructureDisplay from '@/components/song-structure-display';
import ChordDisplay from '@/components/chord-display';
import LeadSheetDisplay from '@/components/lead-sheet-display';
import { 
  MoodData, 
  SongStructure, 
  ChordVoicing,
  generateProgression,
  getChordVoicing
} from '@/lib/music-theory';
import { 
  Music, 
  Sparkles, 
  RefreshCw, 
  ArrowRight, 
  ChevronRight,
  Play
} from 'lucide-react';

type Step = 'mood' | 'skill' | 'generate' | 'results';

export default function Home() {
  const [currentStep, setCurrentStep] = useState<Step>('mood');
  const [selectedMood, setSelectedMood] = useState<MoodData | null>(null);
  const [selectedSkill, setSelectedSkill] = useState<'beginner' | 'intermediate' | 'advanced' | null>(null);
  const [songStructure, setSongStructure] = useState<SongStructure | null>(null);
  const [chordVoicings, setChordVoicings] = useState<Record<string, ChordVoicing>>({});
  const [isGenerating, setIsGenerating] = useState(false);

  const handleMoodSelect = (mood: MoodData) => {
    setSelectedMood(mood);
  };

  const handleSkillSelect = (skill: 'beginner' | 'intermediate' | 'advanced') => {
    setSelectedSkill(skill);
  };

  const generateSong = async () => {
    if (!selectedMood || !selectedSkill) return;

    setIsGenerating(true);
    setCurrentStep('generate');

    // Simulate generation time for better UX
    await new Promise(resolve => setTimeout(resolve, 2000));

    try {
      // Generate song structure
      const structure = generateProgression(selectedMood, selectedSkill);
      setSongStructure(structure);

      // Generate chord voicings for all unique chords
      const allChords = new Set<string>();
      structure.sections.forEach(section => {
        section.progressions.forEach(progression => {
          progression.chords.forEach(chord => allChords.add(chord));
        });
      });

      const voicings: Record<string, ChordVoicing> = {};
      allChords.forEach(chord => {
        const voicing = getChordVoicing(chord, selectedSkill);
        if (voicing) {
          voicings[chord] = voicing;
        }
      });

      setChordVoicings(voicings);
      setCurrentStep('results');
    } catch (error) {
      console.error('Error generating song:', error);
    } finally {
      setIsGenerating(false);
    }
  };

  const resetGenerator = () => {
    setCurrentStep('mood');
    setSelectedMood(null);
    setSelectedSkill(null);
    setSongStructure(null);
    setChordVoicings({});
    setIsGenerating(false);
  };

  const getStepTitle = () => {
    switch (currentStep) {
      case 'mood': return 'Choose Your Mood';
      case 'skill': return 'Select Skill Level';
      case 'generate': return 'Generating Your Jazz Funk Song';
      case 'results': return 'Your Jazz Funk Composition';
      default: return 'Jazz Funk Creator';
    }
  };

  const canProceedToSkill = selectedMood !== null;
  const canGenerate = selectedMood !== null && selectedSkill !== null;

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <Music className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">Jazz Funk Creator</h1>
                <p className="text-sm text-gray-600">Professional chord progression generator</p>
              </div>
            </div>
            
            {currentStep === 'results' && (
              <Button onClick={resetGenerator} variant="outline" className="flex items-center gap-2">
                <RefreshCw size={16} />
                New Song
              </Button>
            )}
          </div>
        </div>
      </header>

      {/* Progress Indicator */}
      <div className="max-w-6xl mx-auto px-4 py-6">
        <div className="flex items-center justify-center gap-4 mb-8">
          {[
            { key: 'mood', label: 'Mood', icon: Music },
            { key: 'skill', label: 'Skill', icon: Sparkles },
            { key: 'generate', label: 'Generate', icon: Play },
            { key: 'results', label: 'Results', icon: ChevronRight }
          ].map((step, index) => {
            const isActive = currentStep === step.key;
            const isCompleted = ['mood', 'skill', 'generate'].includes(step.key) && currentStep === 'results';
            const isEnabled = 
              step.key === 'mood' || 
              (step.key === 'skill' && canProceedToSkill) ||
              (step.key === 'generate' && canGenerate) ||
              (step.key === 'results' && songStructure);

            return (
              <div key={step.key} className="flex items-center gap-4">
                <div className={`
                  w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium transition-all
                  ${isActive ? 'bg-blue-600 text-white ring-4 ring-blue-100' : 
                    isCompleted ? 'bg-green-600 text-white' : 
                    isEnabled ? 'bg-gray-200 text-gray-700' : 'bg-gray-100 text-gray-400'}
                `}>
                  <step.icon size={16} />
                </div>
                <span className={`text-sm font-medium ${isActive ? 'text-blue-600' : isCompleted ? 'text-green-600' : 'text-gray-500'}`}>
                  {step.label}
                </span>
                {index < 3 && (
                  <ArrowRight size={16} className="text-gray-300" />
                )}
              </div>
            );
          })}
        </div>

        {/* Main Content */}
        <div className="max-w-4xl mx-auto">
          <Card className="shadow-lg border-0 bg-white/90 backdrop-blur-sm">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl font-bold text-gray-900">
                {getStepTitle()}
              </CardTitle>
            </CardHeader>
            
            <CardContent className="p-8">
              {currentStep === 'mood' && (
                <div className="space-y-6">
                  <MoodSelector 
                    selectedMood={selectedMood}
                    onMoodSelect={handleMoodSelect}
                  />
                  
                  {selectedMood && (
                    <div className="flex justify-center pt-4">
                      <Button 
                        onClick={() => setCurrentStep('skill')}
                        className="flex items-center gap-2 px-8"
                        size="lg"
                      >
                        Continue to Skill Level
                        <ArrowRight size={16} />
                      </Button>
                    </div>
                  )}
                </div>
              )}

              {currentStep === 'skill' && (
                <div className="space-y-6">
                  <SkillLevelSelector
                    selectedLevel={selectedSkill}
                    onLevelSelect={handleSkillSelect}
                  />
                  
                  <div className="flex justify-center gap-4 pt-4">
                    <Button 
                      onClick={() => setCurrentStep('mood')}
                      variant="outline"
                      className="flex items-center gap-2"
                    >
                      Back
                    </Button>
                    
                    {selectedSkill && (
                      <Button 
                        onClick={generateSong}
                        className="flex items-center gap-2 px-8"
                        size="lg"
                      >
                        Generate Song
                        <Sparkles size={16} />
                      </Button>
                    )}
                  </div>
                </div>
              )}

              {currentStep === 'generate' && (
                <div className="text-center space-y-6">
                  <div className="w-16 h-16 mx-auto bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center animate-pulse">
                    <Music className="w-8 h-8 text-white" />
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Creating your Jazz Funk composition...</h3>
                    <p className="text-gray-600">
                      Generating {selectedMood?.name.toLowerCase()} chord progressions for {selectedSkill} level
                    </p>
                  </div>
                  
                  <div className="w-64 mx-auto bg-gray-200 rounded-full h-2">
                    <div className="bg-gradient-to-r from-blue-600 to-purple-600 h-2 rounded-full animate-pulse w-full"></div>
                  </div>
                </div>
              )}

              {currentStep === 'results' && songStructure && selectedMood && selectedSkill && (
                <div className="space-y-8">
                  {/* Song Structure */}
                  <SongStructureDisplay 
                    structure={songStructure}
                    mood={selectedMood.name}
                  />

                  {/* Chord Voicings */}
                  <div className="space-y-4">
                    <h2 className="text-xl font-bold text-gray-900 flex items-center gap-2">
                      <Music size={20} />
                      Chord Voicings & Fingerings
                    </h2>
                    
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                      {Object.entries(chordVoicings).map(([chordName, voicing]) => (
                        <ChordDisplay
                          key={chordName}
                          chordName={chordName}
                          voicing={voicing}
                        />
                      ))}
                    </div>
                  </div>

                  {/* Lead Sheet */}
                  <LeadSheetDisplay
                    mood={selectedMood.name}
                    skillLevel={selectedSkill}
                    structure={songStructure}
                    chordVoicings={chordVoicings}
                  />
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-50 border-t border-gray-200 mt-16">
        <div className="max-w-6xl mx-auto px-4 py-8">
          <div className="text-center">
            <p className="text-sm text-gray-600">
              Jazz Funk Song Chord Progression Creator - Generate authentic Jazz Funk compositions with detailed chord voicings and fingerings
            </p>
            <p className="text-xs text-gray-500 mt-2">
              Built for musicians, by musicians
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
