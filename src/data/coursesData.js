import astrologyImg from '../assets/images/astrology101.png';
import vaasthuImg from '../assets/images/vaasthu101.png';
import numerologyImg from '../assets/images/numerology101.png';
import shastraImg from '../assets/images/shastra.png';
import nakshatraImg from '../assets/images/nakshatra.png';

const placeholderVideo = 'http://googleusercontent.com/youtube.com/5';

export const courses = [
  {
    id: 'astrology-101',
    title: 'Astrology 101',
    image: astrologyImg,
    price: '799',
    headline: 'Unlock the secrets of the cosmos and master the art of astrological interpretation.',
    instructorName: 'Prof. Dr. N. S. Murthy',
    learningPoints: [
      'Understand the 12 zodiac signs and their core characteristics.',
      'Learn to interpret planetary positions and aspects in a birth chart.',
      'Master the significance of the houses in astrology.',
      'Gain practical skills to perform basic chart readings for yourself and others.',
    ],
    courseIncludes: [
      '40 hours on-demand video',
      '25 downloadable resources',
      'Full lifetime access',
      'Certificate of completion',
    ],
    content: [
      {
        sectionTitle: 'Section 1: Introduction to the Zodiac',
        lectures: [
          { lectureTitle: 'The 12 Signs & Their Meanings', duration: '15min', videoUrl: placeholderVideo, type: 'video' },
          { lectureTitle: 'Elements and Modalities', duration: '22min', videoUrl: placeholderVideo, type: 'video' },
          { lectureTitle: 'Introduction Quiz', duration: '10min', type: 'reading' },
        ],
      },
      {
        sectionTitle: 'Section 2: The Planets',
        lectures: [
          { lectureTitle: 'Inner Planets: Sun, Moon, Mercury, Venus, Mars', duration: '45min', videoUrl: placeholderVideo, type: 'video' },
          { lectureTitle: 'Outer Planets: Jupiter, Saturn, Uranus, Neptune', duration: '55min', videoUrl: placeholderVideo, type: 'video' },
        ],
      },
    ],
  },
  {
    id: 'vaasthu-101',
    title: 'Vaasthu 101',
    image: vaasthuImg,
    price: '399',
    headline: 'Harmonize your living and working spaces with the ancient science of Vaasthu Shastra.',
    instructorName: 'Ms. Archana Murthy',
    learningPoints: ['Understand the core principles of Vaasthu Purusha Mandala.','Learn to analyze and correct energy flows in your home and office.','Apply practical tips for placement of rooms, furniture, and entrances.','Master the art of creating a positive and prosperous environment.',],
    courseIncludes: ['25 hours on-demand video','15 practical home exercises','Access on mobile and TV','Certificate of completion',],
    content: [
      {
        sectionTitle: 'Section 1: Core Principles of Vaasthu',
        lectures: [
          { lectureTitle: 'Understanding the Five Elements (Pancha Bhutas)', duration: '20min', videoUrl: placeholderVideo, type: 'video' },
          { lectureTitle: 'The Vaasthu Purusha Mandala', duration: '30min', videoUrl: placeholderVideo, type: 'video' },
        ],
      },
      {
        sectionTitle: 'Section 2: Practical Application',
        lectures: [
            { lectureTitle: 'Applying Directional Placements', duration: '25min', videoUrl: placeholderVideo, type: 'video' },
            { lectureTitle: 'Remedies for Vaasthu Defects', duration: '18min', videoUrl: placeholderVideo, type: 'video' },
        ]
      }
    ],
  },
  {
    id: 'numerology-101',
    title: 'Numerology 101',
    image: numerologyImg,
    price: '599',
    headline: 'Discover the power of numbers and their influence on your life, personality, and destiny.',
    instructorName: 'Ms. Akila Murthy',
    learningPoints: ['Calculate and understand your Life Path, Destiny, and Soul Urge numbers.','Learn the vibrational meaning of numbers 1 through 9.','Discover how to use numerology for personal growth and decision making.','Analyze the compatibility between individuals using their core numbers.',],
    courseIncludes: ['30 hours on-demand video','Personal numerology chart workbooks','Full lifetime access','Certificate of completion',],
    content: [
        {
          sectionTitle: 'Section 1: Your Core Numbers',
          lectures: [
            { lectureTitle: 'Calculating Your Life Path Number', duration: '18min', videoUrl: placeholderVideo, type: 'video' },
            { lectureTitle: 'The Power of Your Name (Destiny Number)', duration: '22min', videoUrl: placeholderVideo, type: 'video' },
            { lectureTitle: 'The Meaning of Master Numbers 11, 22, 33', duration: '24min', videoUrl: placeholderVideo, type: 'video' },
          ],
        },
      ],
  },
   {
    id: 'shastra',
    title: 'Shastra',
    image: shastraImg,
    price: '799',
    headline: 'A deep dive into the foundational texts and scriptures of ancient wisdom.',
    instructorName: 'Prof. Dr. N. S. Murthy',
    learningPoints: ['Explore the key concepts from the Vedas and Upanishads.','Understand the philosophical underpinnings of Dharmic traditions.','Learn about the various schools of Indian philosophy (Darshanas).','Gain insights into the practical application of scriptural knowledge in modern life.',],
    courseIncludes: ['55 hours on-demand video','Translations of key texts','Full lifetime access','Certificate of completion',],
    content: [
        {
          sectionTitle: 'Section 1: The Vedas & Upanishads',
          lectures: [
            { lectureTitle: 'Overview of the Four Vedas', duration: '30min', videoUrl: placeholderVideo, type: 'video' },
            { lectureTitle: 'Core Philosophy of the Upanishads', duration: '45min', videoUrl: placeholderVideo, type: 'video' },
          ],
        },
        {
            sectionTitle: 'Section 2: The Puranas and Epics',
            lectures: [
              { lectureTitle: 'Stories from the Bhagavata Purana', duration: '50min', videoUrl: placeholderVideo, type: 'video' },
            ],
          },
      ],
  },
  {
    id: 'nakshatra',
    title: 'Nakshatra',
    image: nakshatraImg,
    price: '399',
    headline: 'Journey through the 27 lunar mansions of Vedic astrology for deeper insights.',
    instructorName: 'Ms. Archana Murthy',
    learningPoints: ['Learn the mythology, symbolism, and characteristics of each of the 27 Nakshatras.','Understand how your Moon Nakshatra influences your personality and life path.','Use Nakshatra knowledge for predictive astrology and muhurta (electional astrology).','Discover Nakshatra-based remedies and practices.',],
    courseIncludes: ['35 hours on-demand video','Nakshatra reference guide','Full lifetime access','Certificate of completion',],
    content: [
        {
          sectionTitle: 'Section 1: The 27 Lunar Mansions',
          lectures: [
            { lectureTitle: 'Ashwini to Bharani: The First Pair', duration: '30min', videoUrl: placeholderVideo, type: 'video' },
            { lectureTitle: 'The Role of the Moon in Nakshatras', duration: '25min', videoUrl: placeholderVideo, type: 'video' },
          ],
        },
      ],
  }
];