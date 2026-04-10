import consoleImg from './console.jpg';
import esportsImg from './esports.jpg';
import hardwareImg from './hardware.jpg';
import retroImg from './retro.jpg';

const articles = [
  {
    name: 'optimize-pc-max-fps',
    title: 'How to Optimize Your PC for Max FPS',
    content: [
      'Stop dropping frames in team fights...',
      'First, we need to dive into your NVIDIA...',
      'Next, we will look at Windows Game Mode...'
    ],
    image: hardwareImg   // ✅ FIXED
  },
  {
    name: 'next-gen-console-war',
    title: 'The Next-Gen Console War: What We Know',
    content: [
      'Rumors are swirling...',
      'Leaked developer documents...',
      'But the real wildcard is Nintendo...'
    ],
    image: consoleImg   // ✅ FIXED
  },
  {
    name: 'top-10-indie-games',
    title: 'Top 10 Indie Games You Missed This Year',
    content: [
      'Take a break from massive open worlds...',
      'While AAA studios were busy...',
      'Our number one pick this year...'
    ],
    image: retroImg   // ✅ FIXED
  },
  {
    name: 'understanding-ranked-meta',
    title: 'Understanding the New Ranked Meta',
    content: [
      'The latest patch completely flipped...',
      'The recent nerfs to mobility...',
      'If you are playing solo queue...'
    ],
    image: esportsImg   // ✅ FIXED
  }
];

export default articles;