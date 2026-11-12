import type { CSSProperties } from "react";

const paths: Record<string, React.ReactNode> = {
  arrow: <path d="M5 12h14m-6-6 6 6-6 6" />,
  diagonal: <path d="M6 18 18 6M6 6h12v12" />,
  search: (
    <>
      <circle cx="10.5" cy="10.5" r="6.5" />
      <path d="m16 16 4.5 4.5" />
    </>
  ),
  dna: (
    <>
      <path d="M7 3c0 8 10 10 10 18M17 3c0 8-10 10-10 18M8 5h8M8 19h8M9 9h6M9 15h6" />
    </>
  ),
  cells: (
    <>
      <circle cx="8" cy="8" r="4" />
      <circle cx="17" cy="9" r="3" />
      <circle cx="12" cy="17" r="4" />
      <path d="M8 8h.01M17 9h.01M12 17h.01" />
    </>
  ),
  layers: (
    <>
      <path d="m12 3 10 5-10 5L2 8l10-5Zm-9 9 9 5 9-5M3 16l9 5 9-5" />
    </>
  ),
  chart: (
    <>
      <path d="M4 3v17h17M8 15V9m5 6V5m5 10v-4" />
    </>
  ),
  dots: (
    <>
      {[
        [6, 6],
        [12, 5],
        [18, 7],
        [5, 13],
        [12, 12],
        [19, 14],
        [9, 19],
        [16, 19],
      ].map(([cx, cy], i) => (
        <circle key={i} cx={cx} cy={cy} r={i % 2 ? 1.7 : 1} />
      ))}
    </>
  ),
  molecule: (
    <>
      <path d="m8 7 8 2m-9 1 3 7m7-5-4 5" />
      <circle cx="5" cy="6" r="3" />
      <circle cx="19" cy="10" r="3" />
      <circle cx="12" cy="20" r="3" />
    </>
  ),
  flask: (
    <>
      <path d="M9 3h6M10 3v7L4 19a1.3 1.3 0 0 0 1 2h14a1.3 1.3 0 0 0 1-2l-6-9V3M7 15h10" />
    </>
  ),
  network: (
    <>
      <path d="m7 6 10 1M6 8l3 9m8-7-5 8M8 6l2 11" />
      <circle cx="5" cy="5" r="3" />
      <circle cx="19" cy="8" r="3" />
      <circle cx="10" cy="20" r="3" />
    </>
  ),
  check: <path d="m5 12 4 4L19 6" />,
  mail: (
    <>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 6 9 7 9-7" />
    </>
  ),
};

export function Icon({
  name,
  className = "",
  style,
}: {
  name: string;
  className?: string;
  style?: CSSProperties;
}) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
      style={style}
    >
      {paths[name] ?? paths.network}
    </svg>
  );
}

export function Logo({ inverse = false }: { inverse?: boolean }) {
  return (
    <span className={`logo ${inverse ? "logo-inverse" : ""}`}>
      <svg
        width="32"
        height="34"
        viewBox="0 0 32 34"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="m8 8 16 1M8 8l-1 17m1-17 17 17M7 25l18-16M7 25h18M24 9l1 16"
          stroke="currentColor"
          strokeWidth="1.3"
        />
        <circle cx="8" cy="8" r="4" fill="currentColor" />
        <circle cx="24" cy="9" r="3" fill="currentColor" />
        <circle cx="7" cy="25" r="3" fill="currentColor" />
        <circle cx="25" cy="25" r="4" fill="currentColor" />
      </svg>
      <span>
        Sys<span className="logo-bio">Bio</span>
        <span className="logo-period">.</span>
      </span>
    </span>
  );
}
