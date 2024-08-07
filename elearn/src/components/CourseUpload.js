import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const CourseUpload = () => {
  const [thumbnail, setThumbnail] = useState(null);
  const [video, setVideo] = useState(null);
  const [description, setDescription] = useState('');
  const [thumbnailPreview, setThumbnailPreview] = useState('');

  const handleThumbnailChange = (e) => {
    const file = e.target.files[0];
    setThumbnail(file);
    const reader = new FileReader();
    reader.onload = (e) => {
      setThumbnailPreview(e.target.result);
    };
    reader.readAsDataURL(file);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('thumbnail', thumbnail);
    formData.append('video', video);
    formData.append('description', description);

    try {
      const response = await fetch('http://localhost:5000/upload', {
        method: 'POST',
        body: formData,
      });

      const result = await response.json();
      if (response.ok) {
        alert('Upload successful!');
        console.log(result);
      } else {
        alert(`Error: ${result.message}`);
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred. Please try again.');
    }
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Admin Page</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="thumbnail" className="form-label">Thumbnail:</label>
          <div className="border p-3 mb-3" style={{ width: '200px', height: '200px', backgroundColor: '#e9e9e9' }}>
            {thumbnailPreview && <img src={thumbnailPreview} alt="Thumbnail Preview" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />}
          </div>
          <input type="file" className="form-control" id="thumbnail" accept="image/*" onChange={handleThumbnailChange} required />
        </div>
        <div className="mb-3">
          <label htmlFor="video" className="form-label">Video:</label>
          <input type="file" className="form-control" id="video" accept="video/*" onChange={(e) => setVideo(e.target.files[0])} required />
        </div>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">Description:</label>
          <textarea className="form-control" id="description" rows="3" value={description} onChange={(e) => setDescription(e.target.value)} required></textarea>
        </div>
        <button type="submit" className="btn btn-primary">Upload</button>
      </form>
    </div>
  );
};

export default CourseUpload;
