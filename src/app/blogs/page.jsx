import Link from 'next/link';
import React from 'react';
const blogs = 
[
  {
    "id": 1,
    "title": "The Future of Quantum Computing",
    "author": "Dr. Aris Thorne",
    "date": "2026-03-15",
    "category": "Technology",
    "tags": ["Quantum", "Future Tech", "Physics"],
    "summary": "Exploring how qubit stability is finally reaching the breaking point for commercial use."
  },
  {
    "id": 2,
    "title": "10 Minimalist Habits for 2026",
    "author": "Sarah Jenkins",
    "date": "2026-01-10",
    "category": "Lifestyle",
    "tags": ["Minimalism", "Productivity", "Wellness"],
    "summary": "Decluttering your digital and physical space to find mental clarity."
  },
  {
    "id": 3,
    "title": "Sustainable Urban Gardening",
    "author": "Leo Halloway",
    "date": "2026-02-22",
    "category": "Environment",
    "tags": ["Gardening", "Sustainability", "Urban Living"],
    "summary": "How to grow a full salad bar on a 4-foot apartment balcony."
  },
  {
    "id": 4,
    "title": "Mastering TypeScript 5.0",
    "author": "Devin Rivera",
    "date": "2026-04-01",
    "category": "Programming",
    "tags": ["TypeScript", "WebDev", "Coding"],
    "summary": "A deep dive into decorators and const type parameters for cleaner code."
  },
  {
    "id": 5,
    "title": "The Rise of Neo-Retro Design",
    "author": "Elena Vance",
    "date": "2026-03-28",
    "category": "Design",
    "tags": ["UI/UX", "Graphic Design", "Trends"],
    "summary": "Why high-contrast 90s aesthetics are making a massive comeback in web design."
  },
  {
    "id": 6,
    "title": "Remote Work in the Age of VR",
    "author": "Marcus Chen",
    "date": "2026-02-14",
    "category": "Business",
    "tags": ["Remote Work", "VR", "Collaboration"],
    "summary": "Are virtual offices actually increasing productivity or just causing fatigue?"
  },
  {
    "id": 7,
    "title": "Quick Plant-Based Meal Prep",
    "author": "Chloe Sims",
    "date": "2026-03-05",
    "category": "Food",
    "tags": ["Vegan", "Meal Prep", "Health"],
    "summary": "Five high-protein recipes that take less than 30 minutes to prepare for the week."
  },
  {
    "id": 8,
    "title": "Understanding Neural Networks",
    "author": "Prof. Julian Moss",
    "date": "2026-01-20",
    "category": "AI",
    "tags": ["Machine Learning", "AI", "Data Science"],
    "summary": "Breaking down the complexity of hidden layers into simple, digestible concepts."
  },
  {
    "id": 9,
    "title": "The Best Hiking Trails in Patagonia",
    "author": "Riley Scott",
    "date": "2026-04-10",
    "category": "Travel",
    "tags": ["Adventure", "Hiking", "South America"],
    "summary": "A guide to the less-traveled paths in Torres del Paine."
  },
  {
    "id": 10,
    "title": "Financial Freedom for Gen Z",
    "author": "Anita Blake",
    "date": "2026-02-18",
    "category": "Finance",
    "tags": ["Investing", "Savings", "Finance"],
    "summary": "Moving beyond high-yield savings accounts into diversified index funds."
  }
]
const BlogsPage = () => {
  return (
    <div className=''>
      <h1>Blogs Page</h1>
      <div className='grid grid-cols-3 justify-between gap-4 max-w-300 mx-auto'>
        {
          blogs.map((blogs, index)=>{return(
            <div key={index} className='bg-green-500 py-5 px-2'>
            <h1>{blogs.title}</h1>
            <h1>{blogs.author}</h1>
            <h1>{blogs.category}</h1>
            <Link href={`/blogs/${blogs.id}`}>
            <button className='btn'>Show Details</button>
            </Link>
            </div>
          )})
        }
      </div>
    </div>
  );
};

export default BlogsPage;