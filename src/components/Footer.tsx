type FooterProps = {
  onNavigateToHome: () => void;
};

export function Footer({ onNavigateToHome }: FooterProps) {
  return (
    <footer
      className="border-t mt-12 lg:mt-16"
      style={{
        backgroundColor: "#F8FAFC",
        borderColor: "#E2E8F0",
      }}
    >
      <div className="max-w-[1920px] mx-auto px-4 lg:px-8 py-8 lg:py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3
              className="mb-4 text-lg"
              style={{
                color: "#1E293B",
                lineHeight: "1.2",
              }}
            >
              光影观点
            </h3>
            <p
              className="text-sm"
              style={{
                color: "#64748B",
                fontSize: "14px",
                lineHeight: "1.5",
              }}
            >
              专注于文艺电影解析与社会观点分享，致力于深度阅读与独立思考。
            </p>
          </div>

          <div>
            <h4
              className="mb-4"
              style={{
                color: "#1E293B",
                fontSize: "16px",
                lineHeight: "1.2",
              }}
            >
              快速链接
            </h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={onNavigateToHome}
                  className="transition-colors"
                  style={{
                    color: "#64748B",
                    fontSize: "14px",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.color = "#60A5FA")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.color = "#64748B")
                  }
                >
                  首页
                </button>
              </li>
              <li>
                <button
                  className="transition-colors"
                  style={{
                    color: "#64748B",
                    fontSize: "14px",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.color = "#60A5FA")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.color = "#64748B")
                  }
                >
                  关于我们
                </button>
              </li>
              <li>
                <button
                  className="transition-colors"
                  style={{
                    color: "#64748B",
                    fontSize: "14px",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.color = "#60A5FA")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.color = "#64748B")
                  }
                >
                  联系我们
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4
              className="mb-4"
              style={{
                color: "#1E293B",
                fontSize: "16px",
                lineHeight: "1.2",
              }}
            >
              法律声明
            </h4>
            <ul className="space-y-2">
              <li>
                <button
                  className="transition-colors"
                  style={{
                    color: "#64748B",
                    fontSize: "14px",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.color = "#60A5FA")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.color = "#64748B")
                  }
                >
                  隐私政策
                </button>
              </li>
              <li>
                <button
                  className="transition-colors"
                  style={{
                    color: "#64748B",
                    fontSize: "14px",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.color = "#60A5FA")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.color = "#64748B")
                  }
                >
                  使用条款
                </button>
              </li>
              <li>
                <button
                  className="transition-colors"
                  style={{
                    color: "#64748B",
                    fontSize: "14px",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.color = "#60A5FA")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.color = "#64748B")
                  }
                >
                  版权声明
                </button>
              </li>
            </ul>
          </div>
        </div>

        <div
          className="pt-6 lg:pt-8 border-t text-center text-sm"
          style={{
            borderColor: "#E2E8F0",
            color: "#64748B",
            fontSize: "14px",
          }}
        >
          <p>© 2025 光影观点. 保留所有权利.</p>
        </div>
      </div>
    </footer>
  );
}