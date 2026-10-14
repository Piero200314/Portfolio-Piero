// Iconos propios de interfaz. Los logos de tecnologías provienen de Devicon.
const paths = {
  arrow: (
    <>
      <path d="M7 17 17 7M7 7h10v10" />
    </>
  ),
  down: (
    <>
      <path d="M12 4v16m-6-6 6 6 6-6" />
    </>
  ),
  code: (
    <>
      <path d="m8 7-5 5 5 5m8-10 5 5-5 5m-3-13-2 16" />
    </>
  ),
  award: (
    <>
      <circle cx="12" cy="8" r="5" />
      <path d="m8 12-1 9 5-3 5 3-1-9" />
    </>
  ),
  mail: (
    <>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 6 9 7 9-7" />
    </>
  ),
  plus: (
    <>
      <path d="M12 5v14M5 12h14" />
    </>
  ),
  pause: (
    <>
      <path d="M8 5v14M16 5v14" />
    </>
  ),
  play: (
    <>
      <path d="m8 5 11 7-11 7z" />
    </>
  ),
  menu: (
    <>
      <path d="M4 7h16M4 17h16" />
    </>
  ),
  close: (
    <>
      <path d="m6 6 12 12M6 18 18 6" />
    </>
  ),
  check: (
    <>
      <path d="m5 12 4 4L19 6" />
    </>
  ),
  clock: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </>
  ),
};
export default function Icon({ name, ...props }) {
  return (
    <svg
      className="pf-icon"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      {paths[name] || paths.code}
    </svg>
  );
}
