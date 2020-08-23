import React from 'react';

export class Modal extends React.Component {
  constructor(props) {
    super(props);
    
    let classArray = [
      "bg-white",
      "rounded",
      "shadow",
      "p-8",
      "m-4",
      "max-w-xs",
      "max-h-full",
      "text-center",
      "overflow-y-auto",
      props.className
    ];
  
    this.baseClass = classArray.join(' ');
  }

  componentDidMount() {
    document.addEventListener('keydown', this.handleEscape)
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleEscape);
  }

  handleEscape = (e) => {
    if (e.key === 'Esc' || e.key === 'Escape') {
      this.props.onToggle(e);
    }
  }

  render() {
    return (
      <>
        <div 
          className="fixed inset-0 bg-black opacity-50 cursor-default" 
          onClick={this.props.onToggle} 
          tabIndex="-1"
        />
        <div className="fixed inset-0">
          <div className="absolute flex items-center justify-center w-full h-screen opacity-100 bg-modal">
            <div className={this.baseClass} {...this.props}>
              {this.props.children}
            </div>
          </div>
        </div>
      </>
    );
  }
}

Modal.defaultProps = {
  onToggle: () => { return; },
  show: "true"
}

export default Modal;