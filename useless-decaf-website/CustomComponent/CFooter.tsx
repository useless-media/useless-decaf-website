import * as React from 'react';

export const PlasmicCFooterProps = {
  props: {

  }
};
interface CFooterProps {
};

interface CFooterState {
};


export class CFooter extends React.Component<CFooterProps, CFooterState> {

  constructor(props: CFooterProps, context: any) {
    super(props, context);
    this.state = {}
  }

  componentDidMount() {

  }

  // componentDidUpdate() {}

  render() {
    return (
      <div className="hero_area" style={{
        position: "relative",
        width:'100%',
        height: '100%'
      }}>
        <svg className="waves" xmlns="http://www.w3.org/2000/svg"
             viewBox="0 24 150 28" preserveAspectRatio="none" shape-rendering="auto">
          <defs>
            <path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"/>
          </defs>
          <g className="parallax">
            <use href="#gentle-wave" x="48" y="0" fill="rgba(255,255,255,0.7"/>
            <use href="#gentle-wave" x="48" y="3" fill="rgba(255,255,255,0.5)"/>
            <use href="#gentle-wave" x="48" y="5" fill="rgba(255,255,255,0.3)"/>
            <use href="#gentle-wave" x="48" y="7" fill="#fff"/>
          </g>
        </svg>
      </div>
    );
  }
}
