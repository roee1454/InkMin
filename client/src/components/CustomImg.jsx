import React from "react";

export default function CustomImg({ className, src, alt,modalOptions, setModalOptions}) {
  return (
    <img onClick={() => {
        setModalOptions({
          isOpen: !modalOptions.isOpen,
          currentPhoto: src,
        })
    }} className={`${className} modalimg`} src={src} alt={alt}></img>
  );
}
