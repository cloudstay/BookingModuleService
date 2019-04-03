const db = require('../database/index.js');

test('if model creates a new  object', () => {
    expect(typeof db.reservations).toBe('function');
  });
  
test('if Reservation model creates new  objects', () => {
  expect(typeof new db.reservations).toBe('object');
});