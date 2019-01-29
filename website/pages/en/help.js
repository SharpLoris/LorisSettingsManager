/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

const CompLibrary = require('../../core/CompLibrary.js');

const Container = CompLibrary.Container;
const GridBlock = CompLibrary.GridBlock;

function Help(props) {
  const {config: siteConfig, language = ''} = props;
  const {baseUrl, docsUrl} = siteConfig;
  const docsPart = `${docsUrl ? `${docsUrl}/` : ''}`;
  const langPart = `${language ? `${language}/` : ''}`;
  const docUrl = doc => `${baseUrl}${docsPart}${langPart}${doc}`;
  const feedbackUrl = `${baseUrl}feedback`;

  const supportLinks = [
    {
      content: "Watch video tutorials on working with the Loris Settings Manager\
       over at our [YouTube]() channel. Feel free to suggest guides if you can't find what you're looking for!",
      title: 'Video Tutorials',
    },
    {
      content: `Learn more using the [documentation on this site.](${docUrl('doc1.html')})\
       The documentation should provide a comprehensive overview of every feature, but if\
        anything appears to be missing please let us know.`,
      title: 'Browse Docs',
    },
    {
      content: "Ask questions about the documentation and project over at the\
       [Discord](https://discord.gg/ycWuErK) server. We're also on \
       [Twitter](https://twitter.com/sharploris).",
      title: 'Join the community',
    },
  ];

  return (
    <div className="docMainWrapper wrapper">
      <Container className="mainContainer documentContainer postContainer">
        <div className="post">
          <header className="postHeader">
            <h1>Need help with anything?</h1>
          </header>
          <p>
            This project and documentation is developed and maintained by one person, but there are a few resources you can turn to for help.
            If anything doesn't seem right with the project or this site, please use the <a href={feedbackUrl}>feedback form</a>. If there are
            any improvements or changes you'd like to make to the documentation, you're welcome to head over to the open source
            <a href="https://github.com/sharploris/LorisSettingsManager"> GitHub repo</a> for the site and submit a pull request.
          </p>
          <GridBlock contents={supportLinks} layout="threeColumn" />
        </div>
      </Container>
    </div>
  );
}

module.exports = Help;
