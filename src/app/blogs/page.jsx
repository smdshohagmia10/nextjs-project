import React from 'react';
import Post from '../components/Post';

const blogs = [
  {
    id: 1,
    title: "The Future of Artificial Intelligence",
    author: "John Doe",
    category: "Technology",
    content: "Artificial intelligence is transforming the way we work, learn, and communicate."
  },
  {
    id: 2,
    title: "10 Tips for Better Productivity",
    author: "Jane Smith",
    category: "Productivity",
    content: "Simple habits can help you manage your time and accomplish more each day."
  },
  {
    id: 3,
    title: "A Beginner's Guide to Healthy Eating",
    author: "Alex Brown",
    category: "Health",
    content: "Learn the basics of building balanced and nutritious meals."
  },
  {
    id: 4,
    title: "Exploring Beautiful Bangladesh",
    author: "Rahim Ahmed",
    category: "Travel",
    content: "Discover fascinating destinations, culture, and natural beauty across Bangladesh."
  },
  {
    id: 5,
    title: "How to Start Learning Programming",
    author: "Sarah Wilson",
    category: "Programming",
    content: "A practical introduction to programming concepts and choosing your first language."
  }
];

const Blogs = () => {
  return (
    <>
      <h1>Our Blogs</h1>

      {blogs.map((post) => (
  <Post key={post.id} post={post} />
))}
    </>
  );
};

export default Blogs;