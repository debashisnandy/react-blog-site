import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { blogList } from '../../config/data';
import Chip from '../../components/common/Chip';
import EmptyList from '../../components/common/EmptyList';
import './styles.css';
import { Link } from 'react-router-dom';

const Blog = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    let blog = blogList.find((blog) => blog.id === parseInt(id));
    if (blog) {
      setBlog(blog);
    }
  }, []);

  return (
    <>
      <Link className='blog-goBack' to='/'>
        <span> &#8592;</span> <span>Go Back</span>
      </Link>
      {blog ? (
        <div className='blog-wrap'>
          <header>
            <p className='blog-date'>Published {blog.createdAt}</p>
         
            <div className='blog-subCategory'>
              {blog.subCategory.map((category, i) => (
                <div key={i}>
                  <Chip label={category} />
                </div>
              ))}
            </div>
          </header>
          <div className='row margin-top'>
          <img className='col l6 s12' src={blog.cover} alt='cover' />
          <h1 className='col l6 s12 margin-left'>{blog.title}</h1>
       
          </div>
          <p className='blog-desc'>{blog.description}</p>
          <footer className="margin-lr mt-2 padding-bottom">
          <div className="item-author">
            <img src={blog.authorAvatar} alt="avatar" />
            <div>
              <h6>{blog.authorName}</h6>
              <p>{blog.createdAt}</p>
            </div>
          </div>
        </footer>
        </div>
      ) : (
        <EmptyList />
      )}
    </>
  );
};

export default Blog;
