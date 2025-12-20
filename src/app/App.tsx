import { useState } from 'react';
import { Hero } from './components/Hero';
import { InvitationMessage } from './components/InvitationMessage';
import { EventInfo } from './components/EventInfo';
import { PhotoGallery } from './components/PhotoGallery';
import { LocationInfo } from './components/LocationInfo';

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-orange-50">
      <div className="max-w-md mx-auto bg-white shadow-lg">
        <Hero />
        <InvitationMessage />
        <EventInfo />
        <PhotoGallery />
        <LocationInfo />
        
        <footer className="py-8 text-center text-gray-400 text-sm">
          <p>소중한 분들을 초대합니다</p>
        </footer>
      </div>
    </div>
  );
}