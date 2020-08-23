import React from 'react';

export const NavbarLogo = ({ children, className, ...props }) => {
  let classArray = [
    "hidden",
    "md:flex",
    "items-center",
    "flex-shrink-0",
    "mr-6",
    "text-white",
    className
  ];

  let baseClass = classArray.join(' ');

  return (
    <div className={baseClass} {...props}>
      {children}
    </div>
  );
}

export const NavbarList = ({children, className, ...props}) => {
  let classArray = [
    "flex-grow",
    "block",
    "w-full",
    "lg:flex",
    "lg:items-center",
    "lg:w-auto"
  ];

  let innerClass = [
    "text-sm",
    "lg:flex-grow",
    className
  ].join(' ');

  let baseClass = classArray.join(' ');
  return (
    <div className={baseClass}>
      <div className={innerClass} {...props}>
        {children}
      </div>
    </div>
  );
}

export const NavbarItem = ({children, className, href, ...props}) => {
  let classArray = [
    "block",
    "mt-4",
    "mr-4",
    "text-teal-200",
    "lg:inline-block",
    "lg:mt-0",
    "hover:text-white",
    "cursor-pointer",
    className
  ];

  let baseClass = classArray.join(' ');

  return (
    <a href={href} className={baseClass} {...props}>
      {children}
    </a>
  )
}

export const MenuButton = ({children, className, onClick, ...props}) => {
  let classArray = [
    "flex",
    "flex-none",
    "items-center",
    "px-2",
    "py-1",
    "h-8",
    "w-8",
    "text-primary-200",
    "border",
    "border-teal-400",
    "rounded",
    "hover:text-white",
    "hover:border-white",
    "float-right",
    className
  ];

  let baseClass = classArray.join(' ');

  return (
    <button onClick={(e) => onClick(e)} className={baseClass} {...props}>
      {children}
    </button>
  )
}

export class Navbar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showMenu: false
    }

    let classArray = [
      "flex",
      "flex-wrap",
      "items-center",
      "justify-between",
      "p-6",
      "bg-primary-500",
      props.className
    ];

    this.baseClass = classArray.join(' ');
  }
  static Logo = NavbarLogo;
  static List = NavbarList;
  static Item = NavbarItem;
  // static MobileMenu = NavbarMobileMenu;

  render() {
    return (
      <nav className={this.baseClass}>
        <div className="hidden w-full lg:flex">
          {this.props.children}
        </div>
        <div className="flex items-center justify-between w-full lg:hidden">
          {this.state.showMenu && <div className="flex-1">
            {this.props.children}
          </div>}
          <div className={`block ${this.state.showMenu ? "" : "w-full"}`}>
            <MenuButton onClick={() => this.setState({ showMenu: !this.state.showMenu })}>
              <svg className="fill-current" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
            </MenuButton>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
