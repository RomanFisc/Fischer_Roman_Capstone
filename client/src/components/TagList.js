import React, { useEffect, useState } from 'react';
import { getTags, deleteTag } from '../api/tagsApi';

function TagList() {
  const [tags, setTags] = useState([]);

  useEffect(() => {
    loadTags();
  }, []);

  const loadTags = async () => {
    const response = await getTags();
    setTags(response.data);
  };

  const handleDelete = async (id) => {
    await deleteTag(id);
    loadTags();
  };

  return (
    <ul>
      {tags.map(tag => (
        <li key={tag._id}>
          {tag.name}
          <button onClick={() => handleDelete(tag._id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
}

export default TagList;