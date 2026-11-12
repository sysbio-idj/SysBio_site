export function ScienceVisual() {
  const nodes = [
    [229, 158, 7],
    [268, 109, 5],
    [312, 155, 6],
    [355, 119, 4],
    [385, 175, 8],
    [327, 219, 7],
    [255, 231, 5],
    [204, 204, 4],
    [161, 132, 4],
    [183, 78, 3],
    [247, 55, 3],
    [331, 58, 3],
    [410, 92, 3],
    [453, 144, 4],
    [459, 225, 4],
    [400, 264, 5],
    [329, 292, 4],
    [261, 291, 3],
    [191, 275, 3],
    [144, 216, 3],
    [129, 173, 3],
    [219, 340, 3],
    [371, 339, 3],
    [486, 293, 3],
  ];
  const edges = [
    [0, 1],
    [0, 2],
    [0, 6],
    [0, 7],
    [0, 8],
    [1, 2],
    [1, 3],
    [1, 9],
    [1, 10],
    [2, 3],
    [2, 4],
    [2, 5],
    [3, 4],
    [3, 11],
    [3, 12],
    [4, 5],
    [4, 12],
    [4, 13],
    [4, 14],
    [5, 6],
    [5, 15],
    [5, 16],
    [6, 7],
    [6, 16],
    [6, 17],
    [7, 8],
    [7, 18],
    [7, 19],
    [8, 9],
    [8, 20],
    [9, 10],
    [10, 11],
    [11, 12],
    [12, 13],
    [13, 14],
    [14, 15],
    [14, 23],
    [15, 16],
    [15, 22],
    [15, 23],
    [16, 17],
    [16, 22],
    [17, 18],
    [17, 21],
    [18, 19],
    [18, 21],
    [19, 20],
    [21, 22],
  ];
  return (
    <div
      className="science-visual"
      aria-label="Ilustração conceitual da integração entre ciência, dados e tecnologia"
      role="img"
    >
      <div className="visual-caption">
        <span className="status-dot" /> CONEXÕES QUE GERAM CONHECIMENTO
      </div>
      <svg
        className="network-art"
        viewBox="0 0 580 390"
        fill="none"
        aria-hidden="true"
      >
        <defs>
          <pattern
            id="grid"
            width="23"
            height="23"
            patternUnits="userSpaceOnUse"
          >
            <circle cx="1" cy="1" r=".7" fill="#d1ddd9" />
          </pattern>
        </defs>
        <rect x="32" y="8" width="520" height="368" fill="url(#grid)" />
        <circle
          cx="300"
          cy="193"
          r="145"
          stroke="#dce8e3"
          strokeDasharray="3 7"
        />
        <circle cx="300" cy="193" r="101" stroke="#e6eeea" />
        {edges.map(([a, b], i) => (
          <path
            key={i}
            d={`M${nodes[a][0]} ${nodes[a][1]}L${nodes[b][0]} ${nodes[b][1]}`}
            stroke={i < 20 ? "#7caaa0" : "#bfd3cb"}
            strokeWidth={i < 20 ? 1.15 : 0.8}
          />
        ))}
        {nodes.map(([cx, cy, r], i) => (
          <g key={i}>
            {r > 5 && <circle cx={cx} cy={cy} r={r + 6} fill="#e1efea" />}
            <circle
              cx={cx}
              cy={cy}
              r={r}
              fill={i < 8 ? "#258477" : "#85b0a4"}
              stroke="#f6faf7"
              strokeWidth="2"
            />
          </g>
        ))}
        <g fill="#6e8984" fontSize="9" fontFamily="monospace">
          <text x="90" y="99">
            01 / CIÊNCIA
          </text>
          <text x="403" y="329">
            02 / DADOS
          </text>
          <text x="76" y="321">
            03 / TECNOLOGIA
          </text>
        </g>
      </svg>
      <div className="visual-footer">
        <span>DA COMPLEXIDADE À CLAREZA</span>
        <span className="visual-cross">+</span>
      </div>
    </div>
  );
}
