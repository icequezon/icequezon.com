import React from 'react';

interface ContentData {
  type: string,
  value: string,
  display: string
}

interface Tab {
  name: string,
  url: string,
  content: string,
  data: Record<string, ContentData>|null
}

interface TerminalProps {
  tabs: Array<Tab>|Array<any>,
  activeTab: string|null,
}

interface TerminalState {
  tabs: Array<Tab>|null,
  activeTab: string|null,
  content: string|null,
  data: Record<string, ContentData>|null,
}

export default class Terminal extends React.Component<TerminalProps, TerminalState>{

  constructor(props: any){
    super(props);
    const { tabs, activeTab } = props;
    const { content, data } = tabs.filter((tab:Tab)=>(tab.name == activeTab))[0];
    this.state = {
      tabs: tabs,
      activeTab: "",
      content: content,
      data: data
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
  if (!content) {
    return null;
  }

  const data = this.state.data;
  const lines = content.split('\n'); // Split the input into lines
  const maxIndexLength = lines.length.toString().length;

  return lines.map((line, index) => {
    // Split the line by placeholders like {email}, {linkedin}, {github}
    const parts = line.split(/({\w+})/g);

    return (
      <React.Fragment key={index}>
        {/* Render line numbers with padding */}
        <span style={{ color: 'gray' }}>
          {`${(index + 1).toString().padStart(maxIndexLength, ' ')} `}
        </span>
        
        {/* Render each part of the line, replacing placeholders with links */}
        {parts.map((part, partIndex) => {
          // Check if the part is a placeholder (e.g., {email})
          const key = part.replace(/[{}]/g, '');
          if (data && data[key]) {
            // Render link for placeholder
            const link = data[key];
            return (
              <a key={`${index}-${partIndex}`} href={link.value} target="_blank" rel="noopener noreferrer">
                {link.display}
              </a>
            );
          }
          // Render plain text
          return <span key={`${index}-${partIndex}`}>{part}</span>;
        })}

        {/* Line break after each line */}
        <br />
      </React.Fragment>
    );
  });
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
