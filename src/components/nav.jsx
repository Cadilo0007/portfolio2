import { CgNametag } from "react-icons/cg";
import { AiOutlineClose } from "react-icons/ai";
import { HiMenuAlt1 } from "react-icons/hi";
import { useState } from "react";

const nav = () => {
  const [toggle, setToggle] = useState(false);
  function openMenu(){
    setToggle(true);
  }
  function closeMenu(){
    setToggle(false);
  }
  return (
    <>
    </>
  )
}

export default nav;
