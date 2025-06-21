import React, { useState } from 'react';

const VendorUploadForm = () => {
  const [highlight, setHighlight] = useState(false);
  const [fileName, setFileName] = useState('');
  const [imagePreview, setImagePreview] = useState(null);
  const [auctionDuration, setAuctionDuration] = useState({
    hours: 24,
    minutes: 0
  });

  // Prevent default drag behaviors
  const preventDefaults = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };

  // Highlight the drop area when dragging over it
  const handleDragEnter = () => setHighlight(true);
  const handleDragLeave = () => setHighlight(false);

  // Handle files dropped into the drop area
  const handleDrop = (e) => {
    preventDefaults(e);
    setHighlight(false);
    const files = e.dataTransfer.files;
    handleFiles(files);
  };

  // Handle files selected via input or drop
  const handleFiles = (files) => {
    if (files.length > 0) {
      setFileName(`Selected file: ${files[0].name}`);
      
      // Create a preview of the image
      const reader = new FileReader();
      reader.onload = (e) => {
        setImagePreview(e.target.result);
      };
      reader.readAsDataURL(files[0]);
    } else {
      setFileName('');
      setImagePreview(null);
    }
  };

  // Handle file input changes
  const handleFileInput = (e) => {
    const files = e.target.files;
    handleFiles(files);
  };

  // Handle hour change
  const handleHourChange = (e) => {
    const value = parseInt(e.target.value) || 0;
    setAuctionDuration({
      ...auctionDuration,
      hours: Math.min(Math.max(value, 0), 72) // Limit to 0-72 hours
    });
  };

  // Handle minute change
  const handleMinuteChange = (e) => {
    const value = parseInt(e.target.value) || 0;
    setAuctionDuration({
      ...auctionDuration,
      minutes: Math.min(Math.max(value, 0), 59) // Limit to 0-59 minutes
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Calculate total milliseconds for auction duration
    const totalMilliseconds = 
      (auctionDuration.hours * 60 * 60 * 1000) + 
      (auctionDuration.minutes * 60 * 1000);
    
    // Create end time based on current time + duration
    const endTime = new Date(Date.now() + totalMilliseconds).toISOString();
    
    // Get form values
    const title = e.target.itemName.value;
    const startPrice = parseFloat(e.target.startPrice.value);
    const quantity = parseInt(e.target.quantity.value);
    const category = e.target.category.value;
    
    // Create product object with all form data
    const productData = {
      id: Date.now(), // Unique ID based on timestamp
      title: title,
      brand: 'Vendor Brand', // You can add a brand field to the form if needed
      category: category,
      price: `$${startPrice}`,
      minOrder: quantity,
      inStock: true,
      // Use the image preview as the source, or a placeholder if none
      image: imagePreview || '/api/placeholder/400/320',
      // Auction-specific fields
      startPrice: startPrice,
      quantity: quantity,
      auctionDuration: {
        hours: auctionDuration.hours,
        minutes: auctionDuration.minutes
      },
      endTime: endTime
    };
    
    // Save to localStorage
    const existingProducts = JSON.parse(localStorage.getItem('vendorProducts') || '[]');
    const updatedProducts = [...existingProducts, productData];
    localStorage.setItem('vendorProducts', JSON.stringify(updatedProducts));
    
    // Reset form
    e.target.reset();
    setFileName('');
    setImagePreview(null);
    setAuctionDuration({ hours: 24, minutes: 0 });
    
    alert("Product successfully uploaded! It will appear in the shop.");
    
    // Refresh the page to show the new product immediately (optional)
    // window.location.reload();
  };

  return (
    <div className="vendor-upload-container">
      <h2>Bid Vendor Product Upload</h2>
      <form onSubmit={handleSubmit} className="bd-container">
        <div
          id="dropArea"
          className={`bd-upload-area ${highlight ? 'highlight' : ''}`}
          onDragEnter={(e) => {
            preventDefaults(e);
            handleDragEnter();
          }}
          onDragOver={preventDefaults}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
        >
          {imagePreview && (
            <div className="bd-image-preview" style={{ marginBottom: '15px' }}>
              <img 
                src={imagePreview} 
                alt="Product preview" 
                style={{ maxWidth: '100%', maxHeight: '200px' }} 
              />
            </div>
          )}
          
          <p>Drag and drop product image here or</p>
          <button
            type="button"
            id="browseButton"
            className="browse-button"
            onClick={() => document.getElementById('fileInput').click()}
          >
            Browse
          </button>
          <input
            type="file"
            id="fileInput"
            style={{ display: 'none' }}
            onChange={handleFileInput}
            accept="image/*"
          />
          <p id="fileNameDisplay" className="bd-file-name">{fileName}</p>
        </div>
        
        <div className="bd-form-controls">
          <input type="text" name="itemName" className="bd-form-input" placeholder="Item Name" required />
          <input type="number" name="startPrice" className="bd-form-input" placeholder="Bid Start Price" min="1" step="0.01" required />
          <input type="number" name="quantity" className="bd-form-input" placeholder="Quantity" min="1" required />
          
          <select name="category" className="bd-form-input" required>
            <option value="" disabled selected>Category</option>
            <option value="home electrical">Home Electrical</option>
            <option value="kitchen essentials">Kitchen Essentials</option>
            <option value="diy & tools">DIY & Tools</option>
            <option value="outdoor electrical">Outdoor Electrical</option>
            <option value="computing devices">Computing Devices</option>
            <option value="accessories">Accessories</option>
          </select>
          
          {/* Add auction duration selector */}
          <div className="bd-auction-duration">
            <label className="bd-duration-label">Auction Duration:</label>
            <div className="bd-time-inputs">
              <div className="bd-time-input-group">
                <input
                  type="number"
                  name="hours"
                  className="bd-time-input"
                  value={auctionDuration.hours}
                  onChange={handleHourChange}
                  min="0"
                  max="72"
                  required
                />
                <span className="bd-time-label">Hours</span>
              </div>
              <div className="bd-time-input-group">
                <input
                  type="number"
                  name="minutes"
                  className="bd-time-input"
                  value={auctionDuration.minutes}
                  onChange={handleMinuteChange}
                  min="0"
                  max="59"
                  required
                />
                <span className="bd-time-label">Minutes</span>
              </div>
            </div>
          </div>
          
          <button type="submit" className="bd-submit-button">
            Upload Product
          </button>
        </div>
      </form>
    </div>
  );
};

// Styles combined directly in the file
const styles = `
/* General container styling */
bd-body {
  margin: 0;
  font-family: Arial, sans-serif;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: linear-gradient(135deg, #e0f7fa, #fce4ec); 
  color: #374151;
} 

.bd-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  background: linear-gradient(135deg, #ffffff, #f3f4f6);
  border-radius: 16px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
  padding: 2rem;
  width: 90%;
  max-width: 700px;
  margin: 0 auto;
  overflow: hidden;
}

.bd-upload-area {
  background-color: #eef2ff;
  padding: 3rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 3px dashed #4f46e5;
  border-radius: 16px;
  margin-bottom: 2rem;
  transition: background-color 0.3s ease, transform 0.3s ease, box-shadow 0.3s ease;
  text-align: center;
  position: relative;
}

.bd-upload-area::before {
  content: '';
  position: absolute;
  inset: 0;
  border-radius: 16px;
  background: radial-gradient(circle, rgba(79, 70, 229, 0.1), transparent);
  z-index: -1;
}

.bd-upload-area.highlight {
  background-color: #dbeafe;
  box-shadow: 0 8px 20px rgba(79, 70, 229, 0.3);
  transform: translateY(-5px);
}

.bd-upload-area p {
  font-size: 1.25rem;
  font-weight: 600;
  color: #1e3a8a;
  margin-bottom: 1rem;
}

.browse-button {
  background: linear-gradient(135deg, #4f46e5, #4338ca);
  color: white;
  padding: 0.75rem 2rem;
  border: none;
  border-radius: 12px;
  cursor: pointer;
  font-size: 1rem;
  font-weight: 700;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.browse-button:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
}

.bd-file-name {
  margin-top: 1rem;
  font-size: 0.9rem;
  color: #6b7280;
  font-style: italic;
  text-align: center;
}

.bd-form-controls {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  width: 100%;
}

.bd-form-input {
  background-color: #f9fafb;
  padding: 1rem;
  border: 2px solid #d1d5db;
  border-radius: 12px;
  font-size: 1rem;
  transition: border-color 0.3s ease, box-shadow 0.3s ease;
}

.bd-form-input:focus {
  outline: none;
  border-color: #4f46e5;
  box-shadow: 0 0 10px rgba(79, 70, 229, 0.4);
}

.bd-form-input::placeholder {
  color: #9ca3af;
  font-style: italic;
}

select.bd-form-input {
  appearance: none;
  background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.25a.75.75 0 01-1.06 0L5.21 8.27a.75.75 0 01.02-1.06z' clip-rule='evenodd'/%3E%3C/svg%3E") no-repeat right 1rem center;
  background-size: 1rem;
}

@media (min-width: 768px) {
  .bd-container {
    flex-direction: row;
    align-items: flex-start;
    gap: 2rem;
  }

  .bd-upload-area {
    flex: 1;
    margin-bottom: 0;
  }

  .bd-form-controls {
    flex: 1;
  }
}

.bd-auction-duration {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.bd-duration-label {
  font-weight: 600;
  color: #374151;
}

.bd-time-inputs {
  display: flex;
  gap: 1rem;
}

.bd-time-input-group {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.bd-time-input {
  background-color: #f9fafb;
  padding: 0.75rem;
  border: 2px solid #d1d5db;
  border-radius: 12px;
  font-size: 1rem;
  width: 80px;
  transition: border-color 0.3s ease, box-shadow 0.3s ease;
}

.bd-time-input:focus {
  outline: none;
  border-color: #4f46e5;
  box-shadow: 0 0 10px rgba(79, 70, 229, 0.4);
}

.bd-time-label {
  font-size: 0.875rem;
  color: #6b7280;
}

.bd-submit-button {
  background: linear-gradient(135deg, #4f46e5, #4338ca);
  color: white;
  padding: 1rem;
  border: none;
  border-radius: 12px;
  cursor: pointer;
  font-size: 1rem;
  font-weight: 700;
  margin-top: 1rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.bd-submit-button:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  background: linear-gradient(135deg, #4338ca, #3730a3);
}

.bd-image-preview {
  width: 100%;
  text-align: center;
  margin-bottom: 15px;
  border-radius: 4px;
  overflow: hidden;
}

.bd-image-preview img {
  max-width: 100%;
  max-height: 200px;
  object-fit: contain;
  border-radius: 4px;
}

.vendor-upload-container {
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
  margin-top: 5rem;
}

.vendor-upload-container h2 {
  text-align: center;
  margin-bottom: 2rem;
  color: #1e3a8a;
  font-size: 2rem;
}
`;

// Create style element and append to document head
const styleElement = document.createElement('style');
styleElement.innerHTML = styles;
document.head.appendChild(styleElement);

export default VendorUploadForm;