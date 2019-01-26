/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

const CompLibrary = require('../../core/CompLibrary.js');

const Container = CompLibrary.Container;

function Feedback(props) {
  return (
    <div className="docMainWrapper wrapper">
      <Container className="mainContainer documentContainer postContainer">
        <div className="center">
          <iframe src="https://docs.google.com/forms/d/e/1FAIpQLScD2trUt40w0XZ8hIIWrOH4bOCuSdvZvZjgdQ-Lm_gCfuHUeg/viewform?embedded=true" 
          width="640" height="756" frameBorder="0" marginHeight="0" marginWidth="0">Loading...
          </iframe>
        </div>
      </Container>
    </div>
  );
}

module.exports = Feedback;
