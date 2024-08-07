import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Modal } from 'react-bootstrap'; // Import Modal component from react-bootstrap

const Courses = () => {
  const [courses, setCourses] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState('');

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await fetch('http://localhost:5000/courses');
        const data = await response.json();
        setCourses(data);
      } catch (error) {
        console.error('Error fetching courses:', error);
      }
    };

    fetchCourses();
  }, []);

  const handleThumbnailClick = (videoUrl) => {
    setSelectedVideo(videoUrl);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedVideo('');
  };

  return (
    <div className="container-xxl py-5">
      <div className="container">
        <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
          <h6 className="section-title bg-white text-center px-3 d-inline-block">Courses</h6>
          <h1 className="mb-5" style={{ color: '#fb873f' }}>Explore Our Popular Courses</h1>
        </div>
        <div className="row g-4 justify-content-center">
          {courses.length > 0 ? (
            courses.map((course) => (
              <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s" key={course._id}>
                <div className="card bg-light">
                  <div className="position-relative overflow-hidden">
                    <img 
                      className="img-fluid cursor-pointer" 
                      src={course.thumbnailUrl} 
                      alt="Course" 
                      onClick={() => handleThumbnailClick(course.videoUrl)} 
                      style={{ cursor: 'pointer' }} // Add cursor pointer style
                    />
                  </div>
                  <div className="card-body text-center">
                    <h3 className="card-title">{course.title}</h3>
                    <p className="card-text">{course.description}</p>
                  </div>
                  <div className="d-flex border-top">
                    <div className="flex-fill text-center border-end py-2">
                      <i className="fa fa-user-tie text-primary me-2"></i>{course.instructor}
                    </div>
                    <div className="flex-fill text-center py-2">
                      <i className="fa fa-clock text-primary me-2"></i>{course.duration}
                    </div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p>Loading courses...</p>
          )}
        </div>
      </div>

      {/* Modal for video playback */}
      <Modal show={showModal} onHide={handleCloseModal} size="lg">
        <Modal.Body>
          <div className="position-relative">
            <button type="button" className="btn-close" aria-label="Close" onClick={handleCloseModal}></button>
            <video className="w-100" controls autoPlay>
              <source src={selectedVideo} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default Courses;
