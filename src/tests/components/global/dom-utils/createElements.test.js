// createElements.test.js
/**
 * unit test for the createElement and createIcon functions.
*/

import { createElement, createIcon, createMenuDots } from "../../../../components/global";
import { addedPlantIcon } from "../../../../images";

describe('create element', () => {
  test('should create a new HTML element with the specified tag name', () => {
    const element = createElement({tagName: 'div'});
    expect(element.tagName).toBe('DIV');
  });

  test('should set placeholder attribute', () => {
    const element = createElement({tagName: 'div', placeholder: 'Enter text'});
    expect(element.placeholder).toBe('Enter text');
  });

  test('should add textcontent', () => {
    const element = createElement({tagName: 'div', textContent: 'Text'});
    expect(element.textContent).toBe('Text');
  });

  test('should add classes', () => {
    const element = createElement({tagName: 'div', classEl: ['class1', 'class2']});
    expect(element.classList.contains('class1')).toBe(true);
    expect(element.classList.contains('class2')).toBe(true);
  });

  test('should add id', () => {
    const element = createElement({tagName: 'div', id: 'testId'});
    expect(element.id).toBe('testId');
  });

  test('should add value', () => {
    const element = createElement({tagName: 'input', value: 'some value'});
    expect(element.value).toBe('some value');
  });

  test('should add type', () => {
    const element = createElement({tagName: 'input', type: 'text'});
    expect(element.type).toBe('text');
  });

  test('should add htmlFor', () => {
    const element = createElement({tagName: 'label', fr: 'inputId'});
    expect(element.htmlFor).toBe('inputId');
  });

  test('should add data attributes', () => {
    const element = createElement({tagName: 'div', dataAttributes: { key1: 'value1', key2: 'value2' }});
    expect(element.getAttribute('data-key1')).toBe('value1');
    expect(element.getAttribute('data-key2')).toBe('value2');
  });
});

describe('create menu dots', () => {
  test('should create menu dot container', () => {
    const menuDotContainer = createMenuDots();
    expect(menuDotContainer.classList.contains('menu-dots-container')).toBe(true);
  });

  test('should contain three menu dots', () => {
    const menuDotContainer = createMenuDots();
    const menuDots = menuDotContainer.querySelectorAll('.menu-dot');
    expect(menuDots.length).toBe(3);
  });

  test('each dot should have the correct class', () => {
    const menuDotContainer = createMenuDots();
    const menuDots = menuDotContainer.querySelectorAll('.menu-dot');
    menuDots.forEach(menuDot => {
      expect(menuDot.classList.contains('menu-dot')).toBe(true);
    });
  });
})

jest.mock('../../../../images', () => ({
  addedPlantIcon: 'mocked-icon-url.png',
}));

describe('create icon', () => {
  test('should create new icon container', () => {
    const newIcon = createIcon();
    expect(newIcon.classList.contains('added-to-plants-icon')).toBe(true);
    expect(newIcon.classList.contains('back-button')).toBe(true);
  });

  test('should create new icon with correct src', () => {
    const newIcon = createIcon();
    const newIconImg = newIcon.querySelector('img');
    expect(newIconImg).not.toBeNull();
    expect(newIconImg.src).toContain(addedPlantIcon);
  });

  test('should append image to the container', () => {
    const newIcon = createIcon();
    const newIconImg = newIcon.querySelector('img');
    expect(newIcon.children.length).toBe(1);
    expect(newIcon.children[0]).toBe(newIconImg); 
  });
});
