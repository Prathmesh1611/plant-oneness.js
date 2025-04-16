import React from 'react';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-4">Welcome to My Portfolio</h1>
      <p className="text-lg text-gray-600 mb-8">
        Hi, I'm Prathamesh — a brand designer and strategist. Here's a recent project I loved working on:
      </p>

      <div className="border rounded-lg p-6 shadow-lg mb-6">
        <h2 className="text-2xl font-semibold text-[#2F4F4F] mb-2">🌿 Plant Oneness</h2>
        <p className="text-gray-700 mb-4">
          A soulful brand blending spiritual storytelling, plant design, and wellness rituals.
        </p>
        <Link href="/plant-oneness">
          <a className="text-blue-500 underline">View Case Study →</a>
        </Link>
      </div>
    </div>
  );
}
