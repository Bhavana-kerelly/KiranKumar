import React from 'react';

/**
 * KneeAnatomyGraphic
 * Stroke-based orthopaedic knee joint anatomical illustration.
 * Purely SVG — no external assets, no crash risk.
 */
export function KneeAnatomyGraphic({ className = '', style = {} }) {
  return (
    <svg
      viewBox="0 0 360 500"
      className={`w-full h-full ${className}`}
      style={style}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Orthopaedic knee joint anatomical diagram"
      role="img"
    >
      <defs>
        <radialGradient id="kag-glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#C9A45C" stopOpacity="0.10" />
          <stop offset="100%" stopColor="#071B2A" stopOpacity="0" />
        </radialGradient>
        <filter id="kag-soft">
          <feGaussianBlur stdDeviation="0.6" />
        </filter>
      </defs>

      {/* Ambient bone glow */}
      <ellipse cx="180" cy="255" rx="130" ry="190" fill="url(#kag-glow)" />

      {/* ================================================
          FEMUR — Thigh bone
      ================================================ */}
      {/* Femur shaft — left cortex */}
      <path
        d="M 164 28 C 160 75, 157 135, 154 178 C 151 206, 149 220, 147 242"
        stroke="#F5F7F6" strokeWidth="1.4" strokeOpacity="0.45" strokeLinecap="round"
      />
      {/* Femur shaft — right cortex */}
      <path
        d="M 196 28 C 200 75, 203 135, 206 178 C 209 206, 211 220, 213 242"
        stroke="#F5F7F6" strokeWidth="1.4" strokeOpacity="0.45" strokeLinecap="round"
      />
      {/* Femur medullary canal (inner faint) */}
      <path
        d="M 172 38 C 170 90, 169 150, 168 195 C 167 220, 167 235, 167 250"
        stroke="#456982" strokeWidth="0.5" strokeOpacity="0.25" strokeLinecap="round" strokeDasharray="3 6"
      />
      <path
        d="M 188 38 C 190 90, 191 150, 192 195 C 193 220, 193 235, 193 250"
        stroke="#456982" strokeWidth="0.5" strokeOpacity="0.25" strokeLinecap="round" strokeDasharray="3 6"
      />

      {/* Femoral medial condyle */}
      <path
        d="M 147 242 C 140 252, 132 265, 135 280 C 138 292, 151 296, 163 292 C 174 288, 177 277, 174 265"
        stroke="#F5F7F6" strokeWidth="1.4" strokeOpacity="0.65" strokeLinecap="round"
      />
      {/* Femoral lateral condyle */}
      <path
        d="M 213 242 C 220 252, 228 265, 225 280 C 222 292, 209 296, 197 292 C 186 288, 183 277, 186 265"
        stroke="#F5F7F6" strokeWidth="1.4" strokeOpacity="0.65" strokeLinecap="round"
      />
      {/* Intercondylar notch */}
      <path
        d="M 174 265 C 177 257, 180 254, 180 250 C 180 254, 183 257, 186 265"
        stroke="#F5F7F6" strokeWidth="1" strokeOpacity="0.35" strokeLinecap="round"
      />

      {/* ================================================
          PATELLA — Kneecap (in front)
      ================================================ */}
      <path
        d="M 162 235 C 160 218, 166 207, 180 205 C 194 207, 200 218, 198 235 C 196 248, 188 255, 180 255 C 172 255, 164 248, 162 235 Z"
        stroke="#C9A45C" strokeWidth="1.3" strokeOpacity="0.65"
      />
      {/* Patella inner surface */}
      <path
        d="M 168 237 C 167 226, 171 218, 180 217 C 189 218, 193 226, 192 237 C 191 245, 186 250, 180 250 C 174 250, 169 245, 168 237 Z"
        stroke="#C9A45C" strokeWidth="0.5" strokeOpacity="0.25"
      />

      {/* ================================================
          TIBIA — Shin bone
      ================================================ */}
      {/* Lateral tibial plateau */}
      <path
        d="M 225 305 C 216 300, 204 298, 196 300"
        stroke="#F5F7F6" strokeWidth="1.4" strokeOpacity="0.65" strokeLinecap="round"
      />
      {/* Medial tibial plateau */}
      <path
        d="M 135 305 C 144 300, 156 298, 164 300"
        stroke="#F5F7F6" strokeWidth="1.4" strokeOpacity="0.65" strokeLinecap="round"
      />
      {/* Tibial intercondylar eminence */}
      <path
        d="M 164 300 C 168 292, 173 288, 180 287 C 187 288, 192 292, 196 300"
        stroke="#F5F7F6" strokeWidth="1.25" strokeOpacity="0.5" strokeLinecap="round"
      />
      {/* Tibial plateau — full top edge */}
      <path
        d="M 135 305 C 145 308, 160 308, 168 307 C 174 307, 180 307, 186 307 C 194 307, 209 308, 225 305"
        stroke="#F5F7F6" strokeWidth="1.4" strokeOpacity="0.6" strokeLinecap="round"
      />
      {/* Tibial tuberosity */}
      <path
        d="M 172 310 C 174 318, 175 328, 174 338 C 173 345, 170 348, 168 350"
        stroke="#F5F7F6" strokeWidth="1" strokeOpacity="0.35" strokeLinecap="round"
      />

      {/* Tibia shaft — left */}
      <path
        d="M 157 312 C 159 360, 161 405, 163 448"
        stroke="#F5F7F6" strokeWidth="1.4" strokeOpacity="0.4" strokeLinecap="round"
      />
      {/* Tibia shaft — right */}
      <path
        d="M 203 312 C 201 360, 199 405, 197 448"
        stroke="#F5F7F6" strokeWidth="1.4" strokeOpacity="0.4" strokeLinecap="round"
      />
      {/* Tibia bottom */}
      <path
        d="M 163 448 C 166 460, 172 466, 180 468 C 188 466, 194 460, 197 448"
        stroke="#F5F7F6" strokeWidth="1.2" strokeOpacity="0.3" strokeLinecap="round"
      />

      {/* ================================================
          TECHNICAL OVERLAY — scanning rings, axes, labels
      ================================================ */}
      {/* Outer scanning ring (centered on joint) */}
      <circle cx="180" cy="296" r="112" stroke="#456982" strokeWidth="0.6" strokeOpacity="0.22" strokeDasharray="5 10" />
      {/* Mid ring */}
      <circle cx="180" cy="296" r="72" stroke="#C9A45C" strokeWidth="0.5" strokeOpacity="0.18" strokeDasharray="3 8" />
      {/* Inner ring */}
      <circle cx="180" cy="296" r="40" stroke="#456982" strokeWidth="0.4" strokeOpacity="0.2" />

      {/* Mechanical axis — vertical */}
      <line x1="180" y1="16" x2="180" y2="480" stroke="#C9A45C" strokeWidth="0.5" strokeOpacity="0.18" strokeDasharray="5 10" />
      {/* Joint reference line — horizontal */}
      <line x1="92" y1="296" x2="268" y2="296" stroke="#C9A45C" strokeWidth="0.5" strokeOpacity="0.22" strokeDasharray="3 9" />

      {/* Axis tick marks */}
      <line x1="174" y1="24" x2="186" y2="24" stroke="#C9A45C" strokeWidth="0.8" strokeOpacity="0.5" />
      <line x1="174" y1="464" x2="186" y2="464" stroke="#C9A45C" strokeWidth="0.8" strokeOpacity="0.5" />
      <line x1="97" y1="290" x2="97" y2="302" stroke="#456982" strokeWidth="0.8" strokeOpacity="0.45" />
      <line x1="263" y1="290" x2="263" y2="302" stroke="#456982" strokeWidth="0.8" strokeOpacity="0.45" />

      {/* Joint centre ping */}
      <circle cx="180" cy="296" r="3.5" fill="#C9A45C" fillOpacity="0.55" />
      <circle cx="180" cy="296" r="7" stroke="#C9A45C" strokeWidth="0.6" strokeOpacity="0.3" />

      {/* Corner bracket — top right */}
      <path d="M 258 80 L 268 80 L 268 68" stroke="#456982" strokeWidth="0.6" strokeOpacity="0.35" strokeLinecap="round" />
      {/* Corner bracket — bottom left */}
      <path d="M 102 420 L 92 420 L 92 432" stroke="#456982" strokeWidth="0.6" strokeOpacity="0.35" strokeLinecap="round" />

      {/* Technical labels */}
      {/* FEMUR label */}
      <text x="50" y="172" fontSize="7" fill="#94AEC4" fillOpacity="0.65" fontFamily="monospace" letterSpacing="1.2" textAnchor="end">
        FEMUR
      </text>
      <line x1="52" y1="170" x2="148" y2="175" stroke="#94AEC4" strokeWidth="0.4" strokeOpacity="0.35" />

      {/* TIBIA label */}
      <text x="50" y="390" fontSize="7" fill="#94AEC4" fillOpacity="0.65" fontFamily="monospace" letterSpacing="1.2" textAnchor="end">
        TIBIA
      </text>
      <line x1="52" y1="388" x2="152" y2="370" stroke="#94AEC4" strokeWidth="0.4" strokeOpacity="0.35" />

      {/* PATELLA label */}
      <text x="100" y="228" fontSize="6.5" fill="#C9A45C" fillOpacity="0.6" fontFamily="monospace" letterSpacing="0.8" textAnchor="end">
        PATELLA
      </text>
      <line x1="102" y1="226" x2="158" y2="234" stroke="#C9A45C" strokeWidth="0.4" strokeOpacity="0.4" />

      {/* JOINT LINE label */}
      <text x="278" y="294" fontSize="6.5" fill="#C9A45C" fillOpacity="0.65" fontFamily="monospace" letterSpacing="0.8">
        JOINT LINE
      </text>
      <text x="278" y="303" fontSize="5.5" fill="#456982" fillOpacity="0.6" fontFamily="monospace" letterSpacing="0.8">
        ALIGNMENT
      </text>

      {/* MOTION label top */}
      <text x="188" y="24" fontSize="6" fill="#C9A45C" fillOpacity="0.55" fontFamily="monospace" letterSpacing="1">
        AXIS
      </text>

      {/* Subtle measurement arc on lateral side */}
      <path
        d="M 248 255 A 70 70 0 0 1 248 338"
        stroke="#456982" strokeWidth="0.5" strokeOpacity="0.3" strokeDasharray="2 5"
      />
    </svg>
  );
}

export default KneeAnatomyGraphic;
