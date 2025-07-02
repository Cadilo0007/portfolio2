/// <reference types="vite/client" />

// Asset modules
declare module '*.glb';
declare module '*.png';

// JSX support for custom meshline elements
declare global {
  namespace JSX {
    interface IntrinsicElements {
      meshLineGeometry: any;
      meshLineMaterial: any;
    }
  }
}

export {}; // To ensure this file is treated as a module
