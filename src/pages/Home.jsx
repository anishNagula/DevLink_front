import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import API_BASE_URL from '../config';
import likeIcon from '../assets/thumbs-up-stroke-rounded.svg';
import commentIcon from '../assets/bubble-chat-stroke-rounded.svg';
import Navbar from '../components/Navbar';
import LeftSidebar from '../components/LeftSidebar';
import RightSidebar from '../components/RightSidebar';
import axios from 'axios'; // Add axios for making HTTP requests
import styles from './home.module.css';

const Home = () => {
  const [expandedPostId, setExpandedPostId] = useState(null);
  const [posts, setPosts] = useState([]); // To store posts fetched from the server
  const [loading, setLoading] = useState(true); // To track the loading state
  const [error, setError] = useState(null); // To track any errors during fetching

  useEffect(() => {
    // Fetch posts from the API
    const fetchPosts = async () => {
      try {
        const token = localStorage.getItem('token'); // Make sure the token is stored in localStorage
        const res = await axios.get(`${API_BASE_URL}/api/posts`, {
          headers: {
            'Authorization': `Bearer ${token}`, // Include the token in the request header
          },
        });
        setPosts(res.data); // Set posts data from the server
        setLoading(false); // Stop loading
      } catch (err) {
        setError('Failed to fetch posts');
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  const toggleComments = (postId) => {
    setExpandedPostId(expandedPostId === postId ? null : postId);
  };

  if (loading) {
    return <div>Loading...</div>; // Show loading state
  }

  if (error) {
    return <div>{error}</div>; // Show error message if fetch fails
  }

  return (
    <div className={styles.main}>
      <Navbar />
      <LeftSidebar />
      <RightSidebar />
      <div className={styles.mainFeed}>
        {posts.map((post) => (
          <div key={post._id} className={styles.feedItem}> {/* Use _id from the MongoDB object */}
            <div className={styles.userInfo}>
              <img
                src={post.author.profilePic || "https://randomuser.me/api/portraits/men/75.jpg"} // Handle missing profile pic
                alt={`${post.author.username}'s profile`}
                className={styles.profilePic}
              />
              <span className={styles.username}>{post.author.username}</span>
              <span className={styles.uploadTime}>
                {new Date(post.createdAt).toLocaleString()} {/* Format the createdAt field */}
              </span>
            </div>
            <h2 className={styles.title}>{post.title}</h2>
            <p className={styles.description}>{post.content}</p>
            {post.image && <img src={post.image} alt="Post visual" className={styles.postImage} />}
            <div className={styles.stats}>
              <div className={styles.iconWrapper}>
                <img src={likeIcon} alt="Like icon" className={styles.icon} />
                <span>{post.likes.length}</span> {/* Display the number of likes */}
              </div>
              <div className={styles.iconWrapper} onClick={() => toggleComments(post._id)}>
                <img src={commentIcon} alt="Comment icon" className={styles.icon} />
                <span>{post.comments.length}</span> {/* Display the number of comments */}
              </div>
            </div>
            {expandedPostId === post._id && (
              <div className={styles.commentsSection}>
                {post.comments.map((comment, idx) => (
                  <div key={idx} className={styles.comment}>
                    <span className={styles.commentUser}>{comment.username}:</span>
                    <span className={styles.commentText}>{comment.content}</span> {/* Display the comment content */}
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
