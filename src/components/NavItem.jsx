import { useState } from "react";

const NavItem = (props) => {
  const [open, setOpen] = useState(false);
  return (
    <li className="p-4 hover:underline cursor-pointer">
      <a href="#" onClick={() => setOpen(!open)}>
        {props.icon}
      </a>

      {open && props.children}
    </li>
  );
};

export default NavItem;
