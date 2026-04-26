// @ts-nocheck
export const koriva = {
  baseUrl: process.env.NEXT_PUBLIC_CODEGYM_URL || 'https://app.codegyms.com',
  gymSlug: process.env.NEXT_PUBLIC_GYM_SLUG || 'studio-reform',
  widgetKey: process.env.NEXT_PUBLIC_WIDGET_KEY || 'demo',
};

export const studio = {
  name: 'Studio Reform',
  tagline: 'Precision in Every Movement',
  description:
    'Austin\'s premier Pilates reformer & barre studio. Science-backed training for a leaner, stronger body.',
  address: {
    street: '2818 Guadalupe St',
    city: 'Austin',
    state: 'TX',
    zip: '78705',
  },
  phone: '(512) 555-0140',
  email: 'hello@studioreform.com',
  social: {
    instagram: '#',
    facebook: '#',
    youtube: '',
  },
  hours: {
    'Mon–Fri': '5:30 AM – 8:30 PM',
    Saturday: '7:00 AM – 5:00 PM',
    Sunday: '8:00 AM – 4:00 PM',
  },
};

export const instructors = [
  {
    name: 'Claire Fontaine',
    role: 'Lead Instructor',
    specialty: 'Classical Pilates',
    years: 14,
    bio: "Certified by the Pilates Method Alliance, Claire's classical approach builds a foundation of precision and control that transforms posture, strength and confidence from the inside out.",
    image:
      'https://images.unsplash.com/photo-1518611012118-696072aa579a?w=600&q=85&auto=format&fit=crop',
    instagram: '#',
  },
  {
    name: 'Mia Torres',
    role: 'Senior Instructor',
    specialty: 'Reformer · Barre Fusion',
    years: 9,
    bio: "Mia blends reformer work with ballet barre to create the signature Studio Reform silhouette. Her classes are challenging, precise and always leave you feeling two inches taller.",
    image:
      'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=600&q=85&auto=format&fit=crop',
    instagram: '#',
  },
  {
    name: 'Priya Shen',
    role: 'Instructor',
    specialty: 'Sculpt · Mat Flow',
    years: 6,
    bio: "Priya's sculpt classes are the perfect bridge between traditional Pilates and modern strength training. Expect high reps, light resistance and a deep burn you will feel for days.",
    image:
      'https://images.unsplash.com/photo-1545205597-3d9d02c29597?w=600&q=85&auto=format&fit=crop',
    instagram: '#',
  },
];

export const testimonials = [
  {
    quote:
      "I have tried every fitness studio in Austin. Nothing changed my body — or my posture — like Studio Reform. I am a client for life.",
    name: 'Sarah M.',
    title: 'Member since 2022',
    image:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80&auto=format&fit=crop&face=center',
  },
  {
    quote:
      "After years of back pain, a physical therapist recommended reformer Pilates. Studio Reform gave me my life back. The instructors are extraordinary.",
    name: 'Rachel K.',
    title: 'Member since 2023',
    image:
      'https://images.unsplash.com/photo-1499952127939-9bbf5af6c51c?w=200&q=80&auto=format&fit=crop&face=center',
  },
  {
    quote:
      "The most beautiful studio I have ever stepped into. The attention to detail — in the space and in each class — is unmatched in Austin.",
    name: 'Natalie W.',
    title: 'Member since 2021',
    image:
      'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&q=80&auto=format&fit=crop&face=center',
  },
];

export const galleryImages = [
  {
    src: 'https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?w=800&q=85&auto=format&fit=crop',
    alt: 'Reformer Pilates',
  },
  {
    src: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?w=600&q=85&auto=format&fit=crop',
    alt: 'Barre class',
  },
  {
    src: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=600&q=85&auto=format&fit=crop',
    alt: 'Mat Pilates',
  },
  {
    src: 'https://images.unsplash.com/photo-1545205597-3d9d02c29597?w=1200&q=80&auto=format&fit=crop',
    alt: 'Studio Reform Austin',
  },
];
