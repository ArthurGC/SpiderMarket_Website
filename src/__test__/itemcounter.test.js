/**
 * @jest-environment jsdom
 */

import { expect, test } from '@jest/globals';
import { htmlTemplate } from './htmltemplate.js';
import itemCounter from '../modules/itemCounter.js';

describe('Test ItemCounter', () => {
  // Arrange
  document.body.innerHTML = htmlTemplate;

  // Act
  const items = itemCounter();

  // Assert
  test('itemCounter should return 9', () => {
    expect(items).toBe(9);
  });
});
