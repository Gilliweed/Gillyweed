import React, { useState } from 'react';

const Upload = () => {
  const [fileInput, setFileInput] = useState('');
  const [previewSource, setPreviewSource] = useState('');
  const handleFileInputChange = (e) => {
    const file = e.target.files[0];
    previewFile(file);
  };

  const previewFile = (file) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setPreviewSource(reader.result);
    };
  };
  const handleSubmitFiles = (e) => {
    e.preventDefault();
    if (!previewSource) return;
    uploadImage(previewSource);
  };
  const uploadImage = async (base64EncodedImage) => {
    console.log(base64EncodedImage);
    try {
      await fetch('/api/products/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ data: base64EncodedImage }),
      });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <h1>Uploads</h1>
      <form onSubmit={handleSubmitFiles}>
        <input
          type="file"
          name="image"
          onChange={handleFileInputChange}
          value={fileInput}
        />
        <button type="submit"> submit </button>
      </form>
      {previewSource && <img src={previewSource} alt="Preview" />}
    </>
  );
};
export default Upload;
