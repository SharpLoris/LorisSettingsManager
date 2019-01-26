/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

const CompLibrary = require('../../core/CompLibrary.js');

const MarkdownBlock = CompLibrary.MarkdownBlock; /* Used to read markdown */
const Container = CompLibrary.Container;
const GridBlock = CompLibrary.GridBlock;

class HomeSplash extends React.Component {
  render() {
    const {siteConfig, language = ''} = this.props;
    const {baseUrl, docsUrl} = siteConfig;
    const docsPart = `${docsUrl ? `${docsUrl}/` : ''}`;
    const langPart = `${language ? `${language}/` : ''}`;
    const docUrl = doc => `${baseUrl}${docsPart}${langPart}${doc}`;

    const SplashContainer = props => (
      <div className="homeContainer">
        <div className="homeSplashFade">
          <div className="wrapper homeWrapper">{props.children}</div>
        </div>
      </div>
    );

    const Logo = props => (
      <div className="projectLogo">
        <img src={props.img_src} alt="Project Logo" />
      </div>
    );

    const ProjectTitle = () => (
      <h2 className="projectTitle">
        {siteConfig.title}
        <small>{siteConfig.tagline}</small>
      </h2>
    );

    const PromoSection = props => (
      <div className="section promoSection">
        <div className="promoRow">
          <div className="pluginRowBlock">{props.children}</div>
        </div>
      </div>
    );

    const Button = props => (
      <div className="pluginWrapper buttonWrapper">
        <a className="button" href={props.href} target={props.target}>
          {props.children}
        </a>
      </div>
    );

    return (
      <SplashContainer>
        <Logo img_src={`${baseUrl}img/LorisLogoNoText.png`} />
        <div className="inner">
          <ProjectTitle siteConfig={siteConfig} />
          <PromoSection>
            {/* <Button href="#try">Try It Out</Button> */}
            <Button href={docUrl('doc1.html')}>Get Started</Button>
            <Button href={`${baseUrl}feedback`}>Provide Feedback</Button>
          </PromoSection>
        </div>
      </SplashContainer>
    );
  }
}

class Index extends React.Component {
  render() {
    const {config: siteConfig, language = ''} = this.props;
    const {baseUrl} = siteConfig;

    const Block = props => (
      <Container
        padding={['bottom', 'top']}
        id={props.id}
        background={props.background}>
        <GridBlock
          align={props.align}
          contents={props.children}
          layout={props.layout}
        />
      </Container>
    );

    const Features = () => (
      <Block layout="threeColumn" align="center">
        {[
          {
            content: "Configure what settings your game has directly from the Unity Editor. No need to write any code to manage user configurable settings, simply go to Project Settings and set them up. We'll take care of the rest.",
            image: `${baseUrl}img/cog.png`,
            imageAlign: 'top',
            title: 'Manage your Game Settings',
          },
          {
            content: 'Quickly build in-game settings menus without writing a single line of code. Just use the provided components to configure two way bindings between your UI inputs and your settings.',
            image: `${baseUrl}img/input.png`,
            imageAlign: 'top',
            title: 'Create Reactive Menus',
          },
          {
            content: "Using custom inputs? Write your own extensions to configure two way binding with anything you like! Less than a couple of minutes is all it should take to integrate a new input, whether you got it from the asset store or made it yourself.",
            image: `${baseUrl}img/CSharp.png`,
            imageAlign: 'top',
            title: 'Write Extensions',
          }
        ]}
      </Block>
    );

    // const FeatureCallout = () => (
    //   <div
    //     className="productShowcaseSection paddingBottom"
    //     style={{textAlign: 'center'}}>
    //     <h2>More Info</h2>
    //     <MarkdownBlock>Test</MarkdownBlock>
    //   </div>
    // );

    const TellMeAboutIt = () => (
      <Block background="light">
        {[
          {
            content: '<p>The Loris Settings Manager is a Unity3D extension for configuring and accessing game settings.\
            It is intended to facilitate the setup of all of the settings that might be user configurable, provide a code interface\
            for accessing their values, as well as providing a simple way to build the in-game menus to modify them.</p>\
            <p>It should allow you to very easily keep track of and manage what Game Settings you have in your project in much the same\
            way as the Unity Input Manager allows you to manage your controls. Equally, you should be able to build a working settings\
            menu in just a few minutes, or even hand it off to UI designer with no coding knowledge. You can ditch the Unity launcher window \
            and add a bit of polish to your game with very little time investment!</p>',
            image: `${baseUrl}img/docusaurus.svg`,
            imageAlign: 'right',
            title: 'Tell me about it',
          },
        ]}
      </Block>
    );

    const Explanation = () => (
      <Block id="explanation">
        {[
          {
            content: 
            "<p>\
              A little while ago I was working on a personal project, and I started building an in-game settings menu.\
              Often Unity games ship with only the default launcher window; but if you want your game to have custom settings\
              or to be able to change resolution without restarting, then you need to build your own. I spent a while on this,\
              and I realised that Unity doesn't provide much out of the box. It gives you the\
              <a href='https://docs.unity3d.com/ScriptReference/PlayerPrefs.html'>PlayerPrefs</a>\
              class to save these custom key values to the disk, and not much else.\
            </p>\
            <p>\
              I thought it would be useful to have more functionality available directly in the editor for this, so I started with the\
              intention of making a wrapper around EditorPrefs that allows the developer to configure their settings from the editor. \
              From there I started streamlining the process of building UI's by creating functionality to support event driven two way bindings\
              with the settings values, as well as built in validity tracking, and several other things like that. I have tried to build it with two\
              philosophies in mind: allowing settings to be configured and menus built that control them by someone with no coding knowledge, and making\
              it very simple to code two way bindings with any custom inputs.'\
            </p>",
            image: `${baseUrl}img/docusaurus.svg`,
            imageAlign: 'left',
            title: 'Why did you make this?',
          },
        ]}
      </Block>
    );

    const Description = () => (
      <Block background="dark">
        {[
          {
            content:
              'Blah',
            image: `${baseUrl}img/docusaurus.svg`,
            imageAlign: 'right',
            title: 'Description',
          },
        ]}
      </Block>
    );

    const Showcase = () => {
      if ((siteConfig.users || []).length === 0) {
        return null;
      }

      const showcase = siteConfig.users
        .filter(user => user.pinned)
        .map(user => (
          <a href={user.infoLink} key={user.infoLink}>
            <img src={user.image} alt={user.caption} title={user.caption} />
          </a>
        ));

      const pageUrl = page => baseUrl + (language ? `${language}/` : '') + page;

      return (
        <div className="productShowcaseSection paddingBottom">
          <h2>Who is Using This?</h2>
          <p>This project is used by all these people</p>
          <div className="logos">{showcase}</div>
          <div className="more-users">
            <a className="button" href={pageUrl('users.html')}>
              More {siteConfig.title} Users
            </a>
          </div>
        </div>
      );
    };

    return (
      <div>
        <HomeSplash siteConfig={siteConfig} language={language} />
        {/* <div className="mainContainer"> */}
        <div>
          <Features />
          {/* <FeatureCallout /> */}
          <TellMeAboutIt />
          <Explanation />
          <Description />
          {/* <Showcase /> */}
        </div>
      </div>
    );
  }
}

module.exports = Index;
