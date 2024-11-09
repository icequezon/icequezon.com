import React from 'react';

interface Tab {
  name: string,
  url: string,
  content: string
}

interface TerminalProps {
  tabs: Array<Tab>|Array<any>,
  activeTab: string|null,
}

interface TerminalState {
  tabs: Array<Tab>|null,
  activeTab: string|null,
  content: string|null,
}

export default class Terminal extends React.Component<TerminalProps, TerminalState>{

  constructor(props: any){
    super(props);
    const { tabs, activeTab } = props;
    const { content } = tabs.filter((tab:Tab)=>(tab.name == activeTab))[0];
    this.state = {
      tabs: tabs,
      activeTab: "",
      content: content
    };
  }

  generateTabs(tabs: Array<Tab>| null) {
    if (!tabs)
      return;

    return tabs.map((tab:Tab) => (
      <React.Fragment key={tab.name}>
        <a href={tab.url}>
        <span className="nav-item">{tab.name}</span>
        </a>
        <span className="nav-item">|</span>
      </React.Fragment>
    ));
  }

  getTabsRender() {
    return (
      <div className="nav-bar">
      { this.generateTabs(this.state.tabs) }
      </div>
    );
  }

  formatContent(content: string|null) {
    if (!content){
      return;
    }
    const lines = content.split('\n'); // Split the input into lines
    const maxIndexLength = lines.length.toString().length;
    return lines
      .map((line, index) => (
        <React.Fragment key={index}>
        {`${(index + 1).toString().padStart(maxIndexLength, ' ')} ${line}`}
        <br />
        </React.Fragment>
      )); // Add line number and <br> tag
  }

  getContentRender() {
    return (
      <div className="content">
        <pre>
          <code>
          { this.formatContent(this.state.content) }
          </code>
        </pre>
      </div>
    );
  }

  render() {
    return(
      <>
      <div className="terminal">
          <div className="header">
              <div className="buttons">
                  <div className="button red"></div>
                  <div className="button yellow"></div>
                  <div className="button green"></div>
              </div>
              <div className="title">nvim</div>
          </div>
          { this.getTabsRender() }
          { this.getContentRender() }
          <div className="pre-footer">
              <span className="footer-item green">NORMAL</span>
              <div className="right-footer">
                  <span className="footer-item">utf-8[unix]</span>
                  <span className="footer-item green">7%</span>
                  <span className="footer-item">ln:3</span>
                  <span className="footer-item">27</span>
                  <span className="footer-item orange">[11]</span>
                  <span className="footer-item">trailing</span>
              </div>
          </div>
      </div>
      <div className="footer"></div>
      </>
    );
  }
}
