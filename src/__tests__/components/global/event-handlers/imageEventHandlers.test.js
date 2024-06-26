// imageEventHandlers.test.js

import { imageChangeHandler } from "../../../../components/global/event-handlers";

describe('imageChangeHandler', () => {
  const mockFile = new File([''], 'filename.png', { type: 'image/png' });
  const mockCallback = jest.fn();
  const mockEvent = {
    target: {
      files: [mockFile]
    }
  };
  test('should call callback with the selected file', () => {
    imageChangeHandler(mockEvent, mockCallback);

    expect(mockCallback).toHaveBeenCalledWith(mockFile);
  });

  test('should not call callback if no file selected', () => {
    const mockCallback = jest.fn();
    const mockEvent = {
      target: {
        files: []
      }
    };

    imageChangeHandler(mockEvent, mockCallback);

    expect(mockCallback).not.toHaveBeenCalled();
  });
});