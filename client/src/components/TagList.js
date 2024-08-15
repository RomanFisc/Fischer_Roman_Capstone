import React, { useEffect, useState } from 'react';
import axios from 'axios';

const TagList = () => {
  const [tags, setTags] = useState([]);

  useEffect(() => {
    const fetchTags = async () => {
      try {
        const response = await axios.get('/api/tags');
        setTags(response.data);
      } catch (error) {
        console.error('Error fetching tags:', error);
      }
    };
    fetchTags();
  }, []);

  return (
    <ul>
      {tags.map((tag) => (
        <li key={tag._id}>{tag.name}</li>
      ))}
    </ul>
  );
};

export default TagList;