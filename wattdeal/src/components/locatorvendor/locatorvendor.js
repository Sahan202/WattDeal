import React, { useState } from 'react';
import axios from 'axios';


const LocationVendorPage = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    latitude: '',
    longitude: '',
    description: '',
    saleType: '',
    openingHours: '',
    closingHours: '',
    contactNumber: '',
    websiteUrl: '',
  });
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState('');
  const [highlight, setHighlight] = useState(false);
  const [infoPanel, setInfoPanel] = useState('');
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const preventDefaults = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleDragEnter = () => setHighlight(true);
  const handleDragLeave = () => setHighlight(false);

  const handleDrop = (e) => {
    preventDefaults(e);
    setHighlight(false);
    const files = e.dataTransfer.files;
    if (files.length > 0) {
      handleFileSelection(files[0]);
    }
  };

  const handleFileInput = (e) => {
    const file = e.target.files[0];
    if (file) {
      handleFileSelection(file);
    }
  };

  const handleFileSelection = (file) => {
    if (!file.type.match('image.*')) {
      alert('Please select an image file');
      return;
    }
    if (file.size > 10 * 1024 * 1024) {
      alert('File size should not exceed 10MB');
      return;
    }
    setFile(file);

    const reader = new FileReader();
    reader.onload = (e) => setPreview(e.target.result);
    reader.readAsDataURL(file);
  };

  const handleSubmit = async () => {
    if (!file) {
      setStatus('Please select an image before submitting.');
      return;
    }

    const formDataToSubmit = new FormData();
    formDataToSubmit.append('name', formData.name);
    formDataToSubmit.append('address', formData.address);
    formDataToSubmit.append('lat', formData.latitude);
    formDataToSubmit.append('lng', formData.longitude);
    formDataToSubmit.append('description', formData.description);
    formDataToSubmit.append('saleType', formData.saleType);
    formDataToSubmit.append('openingHours', formData.openingHours);
    formDataToSubmit.append('closingHours', formData.closingHours);
    formDataToSubmit.append('contactNumber', formData.contactNumber);
    formDataToSubmit.append('websiteUrl', formData.websiteUrl);
    formDataToSubmit.append('image', file);

    try {
      const response = await axios.post('http://localhost:5000/api/shops', formDataToSubmit, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      setStatus('Shop added successfully!');
      console.log(response.data);
    } catch (error) {
      console.error('Error uploading shop data:', error);
      setStatus('Failed to add shop. Try again!');
    }

    // Reset form after submission
    setFormData({
      name: '',
      address: '',
      latitude: '',
      longitude: '',
      description: '',
      saleType: '',
      openingHours: '',
      closingHours: '',
      contactNumber: '',
      websiteUrl: '',
    });
    setFile(null);
    setPreview('');
    setCurrentStep(1);
  };

  const nextStep = () => {
    if (currentStep === 1) {
      if (!formData.name || !formData.address) {
        alert('Please fill in the location name and address');
        return;
      }
    }
    setCurrentStep(currentStep + 1);
  };

  const prevStep = () => {
    setCurrentStep(currentStep - 1);
  };

  const getCoordinates = () => {
    if (formData.address) {
      setTimeout(() => {
        setFormData((prev) => ({
          ...prev,
          latitude: '40.7128',
          longitude: '-74.0060',
        }));
        alert('Coordinates fetched successfully!');
      }, 1000);
    } else {
      alert('Please enter an address first');
    }
  };

  const toggleInfoPanel = (panel) => {
    setInfoPanel(infoPanel === panel ? '' : panel);
  };

  return (
    <div className="lc-location-vendor-container">
      <div className="lc-location-vendor-header">
        <h1>Add Your Location</h1>
        <p>Fill in the details below to add your location to our directory</p>
      </div>

      <div className="lc-progress-bar">
        <div className={`lc-progress-step ${currentStep >= 1 ? 'lc-active' : ''}`}>
          <div className="lc-step-number">1</div>
          <span>Basic Info</span>
        </div>
        <div className="lc-progress-line"></div>
        <div className={`lc-progress-step ${currentStep >= 2 ? 'lc-active' : ''}`}>
          <div className="lc-step-number">2</div>
          <span>Details</span>
        </div>
        <div className="lc-progress-line"></div>
        <div className={`lc-progress-step ${currentStep >= 3 ? 'lc-active' : ''}`}>
          <div className="lc-step-number">3</div>
          <span>Image</span>
        </div>
        <div className="lc-progress-line"></div>
        <div className={`lc-progress-step ${currentStep >= 4 ? 'lc-active' : ''}`}>
          <div className="lc-step-number">4</div>
          <span>Review</span>
        </div>
      </div>

      <div className="lc-form-card">
        {currentStep === 1 && (
          <div className="lc-form-step">
            <h2>Basic Information</h2>
            <div className="lc-form-group">
              <label htmlFor="name">Location Name*</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter location name"
                required
              />
            </div>
            <div className="lc-form-group">
              <label htmlFor="address">Address*</label>
              <input
                type="text"
                id="address"
                name="address"
                value={formData.address}
                onChange={handleChange}
                placeholder="Enter full address"
                required
              />
            </div>
            <div className="lc-form-row">
              <div className="lc-form-group">
                <label htmlFor="latitude">Latitude</label>
                <input
                  type="text"
                  id="latitude"
                  name="latitude"
                  value={formData.latitude}
                  onChange={handleChange}
                  placeholder="Latitude"
                  readOnly
                />
              </div>
              <div className="lc-form-group">
                <label htmlFor="longitude">Longitude</label>
                <input
                  type="text"
                  id="longitude"
                  name="longitude"
                  value={formData.longitude}
                  onChange={handleChange}
                  placeholder="Longitude"
                  readOnly
                />
              </div>
              <button type="button" className="lc-coordinate-button" onClick={getCoordinates}>
                <i className="fas fa-map-marker-alt"></i> Get Coordinates
              </button>
            </div>
            <div className="lc-form-buttons">
              <button type="button" className="lc-next-button" onClick={nextStep}>
                Next <i className="fas fa-arrow-right"></i>
              </button>
            </div>
          </div>
        )}

        {currentStep === 2 && (
          <div className="lc-form-step">
            <h2>Location Details</h2>
            <div className="lc-form-group">
              <label htmlFor="description">Description</label>
              <textarea
                id="description"
                name="description"
                value={formData.description}
                onChange={handleChange}
                placeholder="Describe your location"
                rows="3"
              ></textarea>
            </div>
            <div className="lc-form-group">
              <label htmlFor="saleType">Sale Type</label>
              <select
                id="saleType"
                name="saleType"
                value={formData.saleType}
                onChange={handleChange}
              >
                <option value="" disabled>Select sale type</option>
                <option value="retail">Retail</option>
                <option value="wholesale">Wholesale</option>
                <option value="retail and wholesale">Retail and Wholesale</option>
              </select>
            </div>
            <div className="lc-form-row">
              <div className="lc-form-group">
                <label htmlFor="openingHours">Opening Hours</label>
                <input
                  type="text"
                  id="openingHours"
                  name="openingHours"
                  value={formData.openingHours}
                  onChange={handleChange}
                  placeholder="e.g. 9:00 AM"
                />
              </div>
              <div className="lc-form-group">
                <label htmlFor="closingHours">Closing Hours</label>
                <input
                  type="text"
                  id="closingHours"
                  name="closingHours"
                  value={formData.closingHours}
                  onChange={handleChange}
                  placeholder="e.g. 6:00 PM"
                />
              </div>
            </div>
            <div className="lc-form-group">
              <label htmlFor="contactNumber">Contact Number</label>
              <input
                type="tel"
                id="contactNumber"
                name="contactNumber"
                value={formData.contactNumber}
                onChange={handleChange}
                placeholder="Enter contact number"
              />
            </div>
            <div className="lc-form-group">
              <label htmlFor="websiteUrl">Website URL</label>
              <input
                type="url"
                id="websiteUrl"
                name="websiteUrl"
                value={formData.websiteUrl}
                onChange={handleChange}
                placeholder="https://yourwebsite.com"
              />
            </div>
            <div className="lc-form-buttons">
              <button type="button" className="lc-back-button" onClick={prevStep}>
                <i className="fas fa-arrow-left"></i> Back
              </button>
              <button type="button" className="lc-next-button" onClick={nextStep}>
                Next <i className="fas fa-arrow-right"></i>
              </button>
            </div>
          </div>
        )}

        {currentStep === 3 && (
          <div className="lc-form-step">
            <h2>Upload Image</h2>
            <div
              className={`lc-image-upload-box ${highlight ? 'lc-highlight' : ''}`}
              onDragEnter={handleDragEnter}
              onDragLeave={handleDragLeave}
              onDrop={handleDrop}
            >
              <input
                type="file"
                id="file-input"
                name="file"
                accept="image/*"
                onChange={handleFileInput}
                hidden
              />
              <label htmlFor="file-input" className="lc-file-input-label">
                Drag and drop your image or click to select
              </label>
              {preview && <img src={preview} alt="Preview" className="lc-image-preview" />}
            </div>
            <div className="lc-form-buttons">
              <button type="button" className="lc-back-button" onClick={prevStep}>
                <i className="fas fa-arrow-left"></i> Back
              </button>
              <button type="button" className="lc-next-button" onClick={nextStep}>
                Next <i className="fas fa-arrow-right"></i>
              </button>
            </div>
          </div>
        )}

        {currentStep === 4 && (
          <div className="lc-form-step">
            <h2>Review Your Information</h2>
            <div className="lc-review-section">
              <p><strong>Location Name:</strong> {formData.name}</p>
              <p><strong>Address:</strong> {formData.address}</p>
              <p><strong>Description:</strong> {formData.description}</p>
              <p><strong>Sale Type:</strong> {formData.saleType}</p>
              <p><strong>Opening Hours:</strong> {formData.openingHours}</p>
              <p><strong>Closing Hours:</strong> {formData.closingHours}</p>
              <p><strong>Contact Number:</strong> {formData.contactNumber}</p>
              <p><strong>Website:</strong> {formData.websiteUrl}</p>
              <p><strong>Latitude:</strong> {formData.latitude}</p>
              <p><strong>Longitude:</strong> {formData.longitude}</p>
              {preview && <img src={preview} alt="Uploaded preview" className="lc-review-image" />}
            </div>
            <div className="lc-form-buttons">
              <button type="button" className="lc-back-button" onClick={prevStep}>
                <i className="fas fa-arrow-left"></i> Back
              </button>
              <button type="button" className="lc-submit-button" onClick={handleSubmit}>
                Submit
              </button>
            </div>
            {status && <p className="lc-status-message">{status}</p>}
          </div>
        )}
      </div>
    </div>
  );
};

// Styles combined directly
const styles = `

@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');
@import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css');

/* Base styles */
:root {
  --primary-color: #3b82f6;
  --primary-hover: #2563eb;
  --secondary-color: #10b981;
  --secondary-hover: #059669;
  --light-bg: #f3f4f6;
  --card-bg: #ffffff;
  --text-dark: #1f2937;
  --text-medium: #4b5563;
  --text-light: #6b7280;
  --border-color: #e5e7eb;
  --shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.05);
  --shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  --shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
  --radius-sm: 0.375rem;
  --radius-md: 0.5rem;
  --radius-lg: 0.75rem;
  --transition: all 0.3s ease;
}

body {
  margin: 0;
  padding: 0;
  font-family: 'Poppins', sans-serif;
  background-color: var(--light-bg);
  color: var(--text-dark);
  line-height: 1.5;
}

/* Container layout */
.lc-location-vendor-container {
  max-width: 1000px;
  margin: 8rem auto;
  padding: 0 1rem;

  
}

.lc-location-vendor-header {
  text-align: center;
}

.lc-location-vendor-header h1 {
  font-size: 2.25rem;
  font-weight: 700;
  color: var(--primary-color);
  margin-bottom: 0.5rem;
}

.lc-location-vendor-header p {
  font-size: 1.125rem;
  color: var(--text-medium);
}

/* Progress bar */
.lc-progress-bar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
  position: relative;
}

.lc-progress-step {
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  z-index: 2;
}

.lc-step-number {
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  background-color: var(--light-bg);
  border: 2px solid var(--border-color);
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  color: var(--text-medium);
  margin-bottom: 0.5rem;
  transition: var(--transition);
}

.lc-progress-step span {
  font-size: 0.875rem;
  color: var(--text-medium);
  transition: var(--transition);
}

.lc-progress-step.lc-active .lc-step-number {
  background-color: var(--primary-color);
  border-color: var(--primary-color);
  color: white;
}

.lc-progress-step.lc-active span {
  color: var(--primary-color);
  font-weight: 500;
}

.lc-progress-line {
  flex-grow: 1;
  height: 2px;
  background-color: var(--border-color);
  position: relative;
  z-index: 1;
}

/* Form card */
.lc-form-card {
  background-color: var(--card-bg);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-lg);
  padding: 2rem;
  margin-bottom: 2rem;
  min-height: 400px;
}

.lc-form-step {
  animation: fadeIn 0.5s ease;
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
}

.lc-form-step h2 {
  font-size: 1.5rem;
  font-weight: 600;
  color: var(--text-dark);
  margin-bottom: 1.5rem;
  padding-bottom: 0.75rem;
  border-bottom: 1px solid var(--border-color);
}

/* Form elements */
.lc-form-group {
  margin-bottom: 1.5rem;
}

.lc-form-row {
  display: flex;
  gap: 1rem;
  margin-bottom: 1.5rem;
}

label {
  display: block;
  font-size: 0.875rem;
  font-weight: 500;
  color: var(--text-medium);
  margin-bottom: 0.5rem;
}

input, select, textarea {
  width: 100%;
  padding: 0.75rem 1rem;
  font-size: 1rem;
  border: 1px solid var(--border-color);
  border-radius: var(--radius-md);
  background-color: white;
  color: var(--text-dark);
  transition: var(--transition);
  font-family: inherit;
}

input:focus, select:focus, textarea:focus {
  outline: none;
  border-color: var(--primary-color);
  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.25);
}

input::placeholder, select::placeholder, textarea::placeholder {
  color: var(--text-light);
}

/* Button styles */
button {
  cursor: pointer;
  font-family: inherit;
  font-weight: 500;
  border: none;
  border-radius: var(--radius-md);
  transition: var(--transition);
}

.lc-coordinate-button {
  background-color: var(--text-medium);
  color: white;
  padding: 0.75rem 1rem;
  font-size: 0.875rem;
  border-radius: var(--radius-md);
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-top: 1.85rem;
}

.lc-coordinate-button:hover {
  background-color: var(--text-dark);
}

.lc-form-buttons {
  display: flex;
  justify-content: space-between;
  margin-top: 2rem;
}

.lc-back-button, .lc-next-button, .lc-submit-button {
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.lc-back-button {
  background-color: var(--light-bg);
  color: var(--text-medium);
}

.lc-back-button:hover {
  background-color: var(--border-color);
}

.lc-next-button {
  background-color: var(--primary-color);
  color: white;
}

.lc-next-button:hover {
  background-color: var(--primary-hover);
}

.lc-submit-button {
  background-color: var(--secondary-color);
  color: white;
}

.lc-submit-button:hover {
  background-color: var(--secondary-hover);
}

button:disabled {
  opacity: 0.7;
  cursor: not-allowed;
}

/* Drop area styles */
.lc-image-upload-box {
  border: 2px dashed var(--border-color);
  border-radius: var(--radius-lg);
  padding: 3rem 2rem;
  text-align: center;
  background-color: var(--light-bg);
  transition: var(--transition);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 300px;
}

.lc-image-upload-box.lc-highlight {
  border-color: var(--primary-color);
  background-color: rgba(59, 130, 246, 0.05);
}

.lc-image-upload-box.lc-has-preview {
  padding: 1rem;
}

.lc-drop-icon {
  font-size: 3rem;
  color: var(--primary-color);
  margin-bottom: 1rem;
}

.lc-image-upload-box p {
  margin: 0.5rem 0;
  color: var(--text-medium);
}

.lc-or-divider {
  margin: 0.75rem 0;
  position: relative;
  color: var(--text-light);
}

.lc-or-divider::before, .lc-or-divider::after {
  content: '';
  position: absolute;
  top: 50%;
  width: 50px;
  height: 1px;
  background-color: var(--border-color);
}

.lc-or-divider::before {
  right: calc(100% + 10px);
}

.lc-or-divider::after {
  left: calc(100% + 10px);
}

.lc-browse-button {
  background-color: var(--primary-color);
  color: white;
  padding: 0.75rem 2rem;
  border-radius: var(--radius-md);
  margin: 0.75rem 0;
}

.lc-browse-button:hover {
  background-color: var(--primary-hover);
}

.lc-file-info {
  font-size: 0.75rem;
  color: var(--text-light);
  margin-top: 1rem;
}

/* Image preview */
.lc-image-preview {
  max-width: 100%;
  max-height: 300px;
  border-radius: var(--radius-md);
  object-fit: contain;
  margin-top: 1rem;
}

.lc-file-input-label {
  cursor: pointer;
  display: block;
  width: 100%;
  text-align: center;
}

.lc-remove-image {
  position: absolute;
  top: -10px;
  right: -10px;
  background-color: #ef4444;
  color: white;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: var(--shadow-md);
}

.lc-remove-image:hover {
  background-color: #dc2626;
}

/* Review styles */
.lc-review-section {
  margin-bottom: 1.5rem;
}

.lc-review-section h3 {
  font-size: 1.125rem;
  font-weight: 600;
  color: var(--primary-color);
  margin-bottom: 1rem;
  padding-bottom: 0.5rem;
  border-bottom: 1px solid var(--border-color);
}

.lc-review-item {
  margin-bottom: 0.75rem;
  display: flex;
}

.lc-review-label {
  font-weight: 500;
  color: var(--text-medium);
  min-width: 120px;
  margin-right: 1rem;
}

.lc-review-value {
  color: var(--text-dark);
  flex: 1;
}

.lc-review-image {
  max-width: 100%;
  max-height: 300px;
  object-fit: contain;
  border-radius: var(--radius-md);
  margin-top: 1rem;
}

.lc-no-image {
  color: var(--text-light);
  font-style: italic;
}

/* Info panel */
.lc-info-panel {
  background-color: var(--card-bg);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-md);
  overflow: hidden;
}

.lc-info-tabs {
  display: flex;
  border-bottom: 1px solid var(--border-color);
}

.lc-info-tab {
  flex: 1;
  padding: 1rem;
  text-align: center;
  background-color: var(--light-bg);
  color: var(--text-medium);
  font-weight: 500;
  border: none;
  transition: var(--transition);
}

.lc-info-tab:hover {
  background-color: var(--border-color);
}

.lc-info-tab.lc-active {
  background-color: var(--card-bg);
  color: var(--primary-color);
  border-bottom: 2px solid var(--primary-color);
}

.lc-info-tab i {
  margin-right: 0.5rem;
}

.lc-info-content {
  padding: 1.5rem;
  animation: fadeIn 0.5s ease;
}

.lc-info-content h3 {
  font-size: 1.125rem;
  color: var(--text-dark);
  margin-top: 0;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.lc-status-message {
  margin-top: 1rem;
  padding: 0.75rem;
  border-radius: var(--radius-md);
  text-align: center;
  font-weight: 500;
}
  `;

const styleElement = document.createElement('style');
styleElement.innerHTML = styles;
document.head.appendChild(styleElement);


export default LocationVendorPage;