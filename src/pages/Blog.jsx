import React from 'react'
import { Search } from 'lucide-react';

function Blog() {
    const [posts, setPosts] = React.useState([]);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    fetch('http://127.0.0.1:8000/post/')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not OK');
        }
        return response.json();
      })
      .then(data => {
        setPosts(data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching posts:', error);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading posts...</p>;
    
  return (
    <div className='Blogwrapper'>
        <p>welcome back <span>Edu</span> </p>
        <form className='searchFilter'>
            <div className='searchInputWrapper'>
                <input type='text' placeholder='Enter your search' />
                <span className='searchIcon'><Search size={18} /></span>
            </div>
        </form>
        <div>
      <h2>Blog Posts</h2>
      {posts.map(post => (
        <div key={post.id} style={{ border: '1px solid #ccc', padding: '10px', marginBottom: '10px' }}>
          <h3>{post.topic}</h3>
          <p>{post.content}</p>
          <p><strong>Creator:</strong> {post.creator.username}</p>
          <a href={post.twitter_link} target="_blank" rel="noopener noreferrer">Twitter</a>
          <br />
          {post.profile_pic && (
            <img src={`http://127.0.0.1:8000${post.profile_pic}`} alt="Profile" width="50" />
          )}
        </div>
      ))}
    </div>
    </div>
  )
}

export default Blog