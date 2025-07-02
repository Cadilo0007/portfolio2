// import React, { useEffect, useState } from 'react';
// import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

// // Define icons using React components
// const SOCIAL_ICONS = {
//   GitHub: <FaGithub />,
//   LinkedIn: <FaLinkedin />,
//   X: <FaTwitter />
// };

// const profiles = [
//   { network: "GitHub", url: "https://github.com" },
//   { network: "LinkedIn", url: "https://linkedin.com" },
//   { network: "X", url: "https://x.com" }
// ];

// const CommandPalette = () => {
//   const [showModal, setShowModal] = useState(false); // State to control modal visibility

//   useEffect(() => {
//     // Ensure HotKeyPad is accessible globally, or import if using a module
//     if (typeof HotKeyPad === "undefined") {
//       console.error("HotKeyPad is not defined or imported.");
//       return;
//     }

//     // Map profiles to the command objects
//     const profilesInfo = profiles.map(({ network, url }) => {
//       const icon = SOCIAL_ICONS[network];
//       const firstLetter = network[0].toLowerCase();

//       return {
//         id: network,
//         section: "Social",
//         title: `Visitar ${network}`,
//         url,
//         icon,
//         hotkey: `ctrl+${firstLetter}`,
//         handler: () => window.open(url, "_blank")
//       };
//     });

//     // Create and configure HotKeyPad
//     const hotkeypad = new HotKeyPad();
//     hotkeypad.setCommands([
//       {
//         id: "print",
//         title: "Imprimir",
//         icon: `<svg xmlns="http://www.w3.org/2000/svg" ...></svg>`,  // Optional SVG icon for print
//         hotkey: "ctrl+P",
//         section: "Acciones",
//         handler: () => window.print()
//       },
//       ...profilesInfo
//     ]);

//     // Event listener for Ctrl+K to toggle the modal visibility and prevent default behavior
//     const handleKeyPress = (e) => {
//       if (e.ctrlKey && e.key === 'k') {
//         e.preventDefault(); // Prevent the default browser action (like Bing search)
//         setShowModal(prevState => !prevState);
//       }
//     };

//     document.addEventListener("keydown", handleKeyPress);

//     // Cleanup listener on component unmount
//     return () => {
//       document.removeEventListener("keydown", handleKeyPress);
//     };
//   }, []);

//   return (
//     <>
//       <footer
//         id="normal-footer"
//         className="bg-white border-t border-gray-200 fixed bottom-0 w-full p-2 text-center text-sm animate-fadeIn"
//       >
//         Pulsa <kbd className="bg-gray-200 rounded px-1 text-xs">Ctrl</kbd> + <kbd className="bg-gray-200 rounded px-1 text-xs">K</kbd> para abrir la paleta de comandos.
//       </footer>

//       <div
//         id="footer-button"
//         className="bg-white border border-gray-200 fixed bottom-4 right-4 w-12 h-12 rounded-full flex items-center justify-center cursor-pointer md:hidden"
//         onClick={() => setShowModal(prevState => !prevState)} // Toggle modal when button is clicked
//       >
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           className="icon icon-tabler icon-tabler-command w-6 h-6"
//           viewBox="0 0 24 24"
//           strokeWidth="1.5"
//           stroke="#777"
//           fill="none"
//           strokeLinecap="round"
//           strokeLinejoin="round"
//         >
//           <path stroke="none" d="M0 0h24v24H0z" fill="none" />
//           <path d="M7 9a2 2 0 1 1 2 -2v10a2 2 0 1 1 -2 -2h10a2 2 0 1 1 -2 2v-10a2 2 0 1 1 2 2h-10" />
//         </svg>
//       </div>

//       {/* Modal for HotKeyPad */}
//       {showModal && (
//         <div className="fixed inset-0 flex justify-center items-center bg-gray-500 bg-opacity-50 z-50">
//           <div className="bg-white p-4 rounded-md shadow-lg w-3/4 md:w-1/3">
//             <h2 className="text-xl mb-4">Comandos Rápidos</h2>
//             <div id="hotkeypad" data-placeholder="Buscar comando"></div>
//             <button
//               className="mt-4 bg-blue-500 text-white py-2 px-4 rounded-md w-full"
//               onClick={() => setShowModal(false)} // Close modal
//             >
//               Cerrar
//             </button>
//           </div>
//         </div>
//       )}
//     </>
//   );
// };

// export default CommandPalette;
