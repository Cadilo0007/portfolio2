// Section.jsx or Section.tsx (React version)
export default function Section({ title, children }) {
  return (
    <section className="max-w-[700px] mx-auto mb-12 sm:mb-10 font-mono">
      {title && (
        <h2 className="mb-2 font-bold leading-[1.5] text-[1.5rem]">
          {title}
        </h2>
      )}
      {children}
    </section>
  );
}
