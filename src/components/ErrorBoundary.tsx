import React, { Component, ErrorInfo, ReactNode } from "react";

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

export class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
    error: null,
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Uncaught error in Abo El Dahab application:", error, errorInfo);
  }

  public handleReload = () => {
    window.location.reload();
  };

  public render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-[#0A0A0A] text-[#C5C5C5] flex items-center justify-center p-6 text-center">
          <div className="max-w-md bg-[#141414] border border-[#2B2B2B] p-8 shadow-2xl">
            <div className="w-12 h-12 mx-auto mb-4 bg-[#E53935]/10 border border-[#E53935]/30 flex items-center justify-center text-[#E53935] font-bold text-xl">
              !
            </div>
            <h2 className="text-xl font-heading font-bold text-white uppercase tracking-wider mb-2">
              ABO EL DAHAB
            </h2>
            <p className="text-xs text-[#8E8E8E] mb-6 leading-relaxed">
              حدث خطأ غير متوقع أثناء تحميل الصفحة. يرجى إعادة المحاولة أو التواصل مباشرة عبر الواتساب.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <button
                type="button"
                onClick={this.handleReload}
                className="flex-1 py-3 px-4 bg-[#E53935] hover:bg-[#c62828] text-white text-xs font-heading font-bold uppercase tracking-wider transition-colors"
              >
                إعادة التحميل / Reload
              </button>
              <a
                href="https://wa.me/201022556513"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-3 px-4 bg-[#1F1F1F] hover:bg-[#2A2A2A] text-white text-xs font-heading font-bold uppercase tracking-wider transition-colors border border-[#333]"
              >
                WhatsApp Chat
              </a>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
