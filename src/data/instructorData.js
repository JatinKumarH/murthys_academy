// src/data/instructorData.js
import instructor1 from '../assets/images/instructor1.png';
import instructor2 from '../assets/images/instructor2.png';
import instructor3 from '../assets/images/instructor3.png';

// Add a bio for each instructor
const loremIpsum = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";
const archanaBio = "A Qualified Astrology & Vaasthu Consultant, speaker at various Astrology National Conferences & author of the monthly column in Astrological eMagazine. Dr. S. Archna Murthy Ph.D in Astrology, M.A in Astrology, M.A (Bridge) in Astrology (in Sanskrit), Kovida in Samskritam MBA, Singapore";
const akilaBio = "Ph.D. in Astrology | M.A. in Astrology | Diploma in Palmistry | M.Sc. in Family Therapy | PGDI in Psychological Counseling | Certified Guidance Counselor | M.A. in International Education | Contributing Author - Astrological EMagazine. I’ve dedicated my life to helping people like you find clarity, peace, and purpose. Combining Astrology, Palmistry, and Holistic Counselling, I offer a practical, compassionate approach to understanding life’s patterns and guiding you towards solutions. From major milestones like starting a new career, planning a wedding, or purchasing property to navigating challenging phases like Sade Sati or Ketu Maha Dasha, I provide the insights and tools and insights you need to move forward with confidence.My work goes beyond predictions, It's about finding meaningful, actionable remedies tailored to your unique journey.";

export const instructors = [
  { id: 'ns-murthy', name: 'Prof. Dr. N. S. Murthy', image: instructor1, bio: loremIpsum },
  { id: 'akila-murthy', name: 'Ms. Akila Murthy', image: instructor2, bio: akilaBio },
  { id: 'archana-murthy', name: 'Ms. Archana Murthy', image: instructor3, bio: archanaBio },
];