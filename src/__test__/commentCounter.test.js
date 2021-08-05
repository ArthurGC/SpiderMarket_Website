/**
 * @jest-environment jsdom
 */

 import { expect, test } from '@jest/globals';
 import { PopUpTemplate } from './Popuptemplate.js';
 import itemCounterComments from '../modules/commentCounter.js';
 
 describe('Test ItemCounter', () => {
   // Arrange
   document.body.innerHTML = PopUpTemplate;
 
   // Act
   const items = itemCounterComments();
 
   // Assert
   test('itemCounter should return 2', () => {
     expect(items).toBe(2);
   });
 });
 