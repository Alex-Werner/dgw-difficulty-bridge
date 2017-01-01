'use strict';

const dgw = require('dark-gravity-wave-js');
const expect = require('chai').expect;

describe('Should load dgw', function(){
    it('Should load 25 blocks', function(){
      let blocks = [];//Here we get the data from API
      const expectedHexDiff = 0;
      let diff = dgw.darkGravityWaveTargetWithBlocks(blocks);
      expect(diff).to.equal(expectedHexDiff);
    });
});
