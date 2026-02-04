"use client";

const hsafeLetters = [
  {
    char: "H",
    title: "Health",
    detail: "Giám sát sức khỏe của người lao động, kịp thời phát hiện sự cố nguy hiểm để ứng cứu.",
    color: "#009fe3",
  },
  {
    char: "S",
    title: "Safety",
    detail: "Quản lý nhân sự, hỗ trợ công tác an toàn và hồ sơ lao động.",
    color: "#00a651",
  },
  {
    char: "A",
    title: "Access",
    detail: "Kiểm soát ra vào đúng quy trình làm việc, định danh nhân sự, phương tiện và máy móc trên công trường.",
    color: "#00a651",
  },
  {
    char: "F",
    title: "Fire Fighting",
    detail: "Giám sát các hệ thống báo cháy và chữa cháy, hỗ trợ sơ tán khi có sự cố cháy nổ.",
    color: "#00a651",
  },
  {
    char: "E",
    title: "Environment",
    detail: "Giám sát và kịp thời phát hiện các khu vực ô nhiễm hoặc bị nhiễm độc để bảo vệ môi trường và con người.",
    color: "#00a651",
  },
];

export default function HSafeSidebar() {
  return (
    <>
      {/* Desktop Vertical Sidebar - Fixed Left */}
      <aside className="fixed left-3 top-1/2 z-[60] hidden -translate-y-1/2 xl:left-5 xl:block">
        <div
          className="flex flex-col items-center gap-1.5 rounded-[32px] p-2.5"
          style={{
            background: 'linear-gradient(180deg, rgba(10,61,98,0.9) 0%, rgba(12,84,96,0.85) 100%)',
            boxShadow: '0 8px 32px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.1)',
            backdropFilter: 'blur(16px)',
            border: '1px solid rgba(255,255,255,0.15)',
          }}
        >
          {hsafeLetters.map((item) => (
            <div key={item.char} className="group relative">
              {/* Glass Node */}
              <div className="relative flex h-11 w-11 cursor-pointer items-center justify-center text-lg font-black transition-all duration-300 hover:scale-110">
                {/* Semi-transparent background */}
                <div
                  className="absolute inset-0.5 rounded-full transition-all duration-300 group-hover:scale-105"
                  style={{
                    background: 'rgba(255,255,255,0.12)',
                    boxShadow: `inset 0 1px 0 rgba(255,255,255,0.2)`,
                    border: '1px solid rgba(255,255,255,0.1)',
                  }}
                />
                {/* Letter with glow */}
                <span
                  className="relative z-10 transition-all duration-300 group-hover:scale-110"
                  style={{
                    color: item.char === 'H' ? '#38bdf8' : '#4ade80',
                    fontWeight: 900,
                    textShadow: `0 0 12px ${item.char === 'H' ? 'rgba(56,189,248,0.5)' : 'rgba(74,222,128,0.5)'}`,
                  }}
                >
                  {item.char}
                </span>
                {/* Hover glow ring */}
                <div
                  className="absolute inset-0 rounded-full opacity-0 transition-all duration-300 group-hover:opacity-100"
                  style={{
                    boxShadow: `0 0 0 2px ${item.char === 'H' ? '#38bdf8' : '#4ade80'}, 0 0 20px ${item.char === 'H' ? 'rgba(56,189,248,0.4)' : 'rgba(74,222,128,0.4)'}`,
                  }}
                />
              </div>

              {/* Tooltip - Dark glass */}
              <div
                className="pointer-events-none absolute left-14 top-1/2 w-72 -translate-y-1/2 rounded-2xl p-5 opacity-0 transition-all duration-300 group-hover:pointer-events-auto group-hover:translate-x-2 group-hover:opacity-100"
                style={{
                  background: 'linear-gradient(135deg, rgba(10,61,98,0.95) 0%, rgba(12,84,96,0.95) 100%)',
                  boxShadow: `0 20px 40px rgba(0,0,0,0.4), 0 0 0 1px rgba(255,255,255,0.1)`,
                  backdropFilter: 'blur(20px)',
                }}
              >
                {/* Arrow */}
                <div
                  className="absolute -left-2 top-1/2 h-4 w-4 -translate-y-1/2 rotate-45"
                  style={{
                    background: 'rgba(10,61,98,0.95)',
                    borderLeft: '1px solid rgba(255,255,255,0.1)',
                    borderBottom: '1px solid rgba(255,255,255,0.1)',
                  }}
                />
                <h3
                  className="mb-2 text-lg font-bold"
                  style={{ color: item.char === 'H' ? '#38bdf8' : '#4ade80' }}
                >
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed text-slate-300">
                  {item.detail}
                </p>
              </div>
            </div>
          ))}
        </div>
      </aside>

      {/* Mobile/Tablet Horizontal Bar - Bottom Fixed */}
      <aside className="fixed bottom-4 left-1/2 z-[60] -translate-x-1/2 xl:hidden">
        <div
          className="flex items-center gap-1.5 rounded-full px-3 py-2"
          style={{
            background: 'linear-gradient(90deg, rgba(10,61,98,0.9) 0%, rgba(12,84,96,0.85) 100%)',
            boxShadow: '0 8px 32px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.1)',
            backdropFilter: 'blur(16px)',
            border: '1px solid rgba(255,255,255,0.15)',
          }}
        >
          {hsafeLetters.map((item) => (
            <div key={item.char} className="group relative">
              {/* Glass Node - Smaller for mobile */}
              <div className="relative flex h-9 w-9 cursor-pointer items-center justify-center text-base font-black transition-all duration-300 active:scale-95 sm:h-10 sm:w-10 sm:text-lg">
                {/* Semi-transparent background */}
                <div
                  className="absolute inset-0.5 rounded-full transition-all duration-300 group-hover:scale-105"
                  style={{
                    background: 'rgba(255,255,255,0.12)',
                    boxShadow: `inset 0 1px 0 rgba(255,255,255,0.2)`,
                    border: '1px solid rgba(255,255,255,0.1)',
                  }}
                />
                {/* Letter with glow */}
                <span
                  className="relative z-10 transition-all duration-300 group-hover:scale-110"
                  style={{
                    color: item.char === 'H' ? '#38bdf8' : '#4ade80',
                    fontWeight: 900,
                    textShadow: `0 0 12px ${item.char === 'H' ? 'rgba(56,189,248,0.5)' : 'rgba(74,222,128,0.5)'}`,
                  }}
                >
                  {item.char}
                </span>
                {/* Hover glow ring */}
                <div
                  className="absolute inset-0 rounded-full opacity-0 transition-all duration-300 group-hover:opacity-100"
                  style={{
                    boxShadow: `0 0 0 2px ${item.char === 'H' ? '#38bdf8' : '#4ade80'}, 0 0 20px ${item.char === 'H' ? 'rgba(56,189,248,0.4)' : 'rgba(74,222,128,0.4)'}`,
                  }}
                />
              </div>

              {/* Tooltip for desktop hover - Bottom positioned for horizontal bar */}
              <div
                className="pointer-events-none absolute bottom-14 left-1/2 hidden w-64 -translate-x-1/2 rounded-2xl p-4 opacity-0 transition-all duration-300 group-hover:pointer-events-auto group-hover:-translate-y-1 group-hover:opacity-100 sm:block"
                style={{
                  background: 'linear-gradient(135deg, rgba(10,61,98,0.95) 0%, rgba(12,84,96,0.95) 100%)',
                  boxShadow: `0 20px 40px rgba(0,0,0,0.4), 0 0 0 1px rgba(255,255,255,0.1)`,
                  backdropFilter: 'blur(20px)',
                }}
              >
                {/* Arrow pointing down */}
                <div
                  className="absolute -bottom-2 left-1/2 h-4 w-4 -translate-x-1/2 rotate-45"
                  style={{
                    background: 'rgba(10,61,98,0.95)',
                    borderRight: '1px solid rgba(255,255,255,0.1)',
                    borderBottom: '1px solid rgba(255,255,255,0.1)',
                  }}
                />
                <h3
                  className="mb-2 text-base font-bold sm:text-lg"
                  style={{ color: item.char === 'H' ? '#38bdf8' : '#4ade80' }}
                >
                  {item.title}
                </h3>
                <p className="text-xs leading-relaxed text-slate-300 sm:text-sm">
                  {item.detail}
                </p>
              </div>
            </div>
          ))}
        </div>
      </aside>
    </>
  );
}
