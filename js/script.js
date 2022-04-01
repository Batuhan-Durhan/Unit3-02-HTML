// Copyright (c) 2022 Batuhan Durhan All rights reserved
//
// Created by: Batuhan Durhan
// Created on: Mar 2022
// This file contains the JS functions for index.html

'use strict'
/**
 * This function calculates volume of pyramid.
 */
function calculate() {
  // input
  const length = parseInt(document.getElementById('length-of-trapezoid').value)
  const width = parseInt(document.getElementById('width-of-trapezoid').value)
  const height = parseInt(document.getElementById('height-of-trapezoid').value)

  // process
  const volume = (length * width * height) / 3

  // output
  document.getElementById('volume').innerHTML = 'Volume is: ' + volume + ' cm3'
}
