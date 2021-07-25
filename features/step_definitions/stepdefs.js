const assert = require('assert');
const { Given, When, Then } = require('@cucumber/cucumber');
const isItFriday = require('../../src/is-it-friday');

Given('today is {string}', (givenDay) => {
  this.today = givenDay;
});

When('I ask whether it\'s Friday yet', () => {
  this.actualAnswer = isItFriday(this.today);
});

Then('I should be told {string}', (expectedAnswer) => {
  assert.strictEqual(this.actualAnswer, expectedAnswer);
});
