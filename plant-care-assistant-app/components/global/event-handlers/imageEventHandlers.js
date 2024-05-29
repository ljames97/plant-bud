/**
 * Handle change event of user uploaded file.
 * Reads the selected image file asynchronously and executes a callback with the
 * image's data URL when the read operation is complete.
 * @param {*} event 
 * @param {*} imageDataUrl 
 */
export const imageChangeHandler = (event, callback) => {
  const file = event.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = (e) => {
      callback(e.target.result);
    }
    reader.readAsDataURL(file);
  };
}