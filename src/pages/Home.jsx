import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import likeIcon from '../assets/thumbs-up-stroke-rounded.svg';
import commentIcon from '../assets/bubble-chat-stroke-rounded.svg';
import Navbar from '../components/Navbar';
import LeftSidebar from '../components/LeftSidebar';
import RightSidebar from '../components/RightSidebar';
import styles from './home.module.css';

const Home = () => {
  const [expandedPostId, setExpandedPostId] = useState(null);

  const toggleComments = (postId) => {
    setExpandedPostId(expandedPostId === postId ? null : postId);
  };

  const posts = [
    {
      id: 1,
      username: "techguru99",
      profilePic: "https://randomuser.me/api/portraits/men/75.jpg",
      uploadTime: '1',
      title: "JavaScript Tips for Beginners",
      description: "Here are some tips for those just starting out with JavaScript. Learn the basics and more advanced techniques.",
      image: "https://picsum.photos/200/300",
      likeCount: 120,
      commentCount: 25,
      comments: [
        { username: "coder123", comment: "Great tips! I didn't know about the destructuring feature." },
        { username: "devmaster", comment: "These are helpful, thanks for sharing!" }
      ],
    },
    {
      id: 2,
      username: "codebreaker",
      profilePic: "https://randomuser.me/api/portraits/men/76.jpg",
      uploadTime: '4',
      title: "My Experience with React Hooks",
      description: "I recently started using React Hooks in my projects and wanted to share my thoughts on them.",
      image: null,
      likeCount: 45,
      commentCount: 10,
      comments: [
        { username: "reactfan", comment: "Hooks are a game-changer!" },
        { username: "webdevguru", comment: "I love the simplicity of useState." }
      ],
    },
    {
      id: 3,
      username: "frontendlady",
      profilePic: "https://randomuser.me/api/portraits/women/75.jpg",
      uploadTime: '7',
      title: "Building My First Full-Stack App",
      description: "I just finished my first full-stack application using Node.js, Express, and MongoDB. Here's how it went.",
      image: "https://picsum.photos/seed/picsum/500/250",
      likeCount: 200,
      commentCount: 40,
      comments: [
        { username: "backendwizard", comment: "Impressive! I'm working on something similar." },
        { username: "frontenddev", comment: "Great project! Any tips for beginners?" }
      ],
    }
  ];

  return (
    <div className={styles.main}>
      <Navbar />
      <LeftSidebar />
      <RightSidebar />
      <div className={styles.mainFeed}>
        {posts.map((post) => (
          <div key={post.id} className={styles.feedItem}>
            <div className={styles.userInfo}>
              <img src={post.profilePic} alt={`${post.username}'s profile`} className={styles.profilePic} />
              <span className={styles.username}>{post.username}</span>
              <span className={styles.uploadTime}>{post.uploadTime} hr ago</span>
            </div>
            <h2 className={styles.title}>{post.title}</h2>
            <p className={styles.description}>{post.description}</p>
            {post.image && <img src={post.image} alt="Post visual" className={styles.postImage} />}
            <div className={styles.stats}>
              <div className={styles.iconWrapper}>
                <img src={likeIcon} alt="Like icon" className={styles.icon} />
                <span>{post.likeCount}</span>
              </div>
              <div className={styles.iconWrapper} onClick={() => toggleComments(post.id)}>
                <img src={commentIcon} alt="Comment icon" className={styles.icon} />
                <span>{post.commentCount}</span>
              </div>
            </div>
            {expandedPostId === post.id && (
              <div className={styles.commentsSection}>
                {post.comments.map((comment, idx) => (
                  <div key={idx} className={styles.comment}>
                    <span className={styles.commentUser}>{comment.username}:</span>
                    <span className={styles.commentText}>{comment.comment}</span>
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
