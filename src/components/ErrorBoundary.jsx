import { Component } from "react";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      errorInfo: null,
      runtimeErrors: [],
    };
    this.handleWindowError = this.handleWindowError.bind(this);
    this.handleRejection = this.handleRejection.bind(this);
    this.handleReset = this.handleReset.bind(this);
  }

  static getDerivedStateFromError(error) {
    return { error };
  }

  componentDidCatch(error, errorInfo) {
    this.setState({ error, errorInfo });
    console.error("ErrorBoundary yakaladı:", error, errorInfo);
  }

  componentDidMount() {
    window.addEventListener("error", this.handleWindowError);
    window.addEventListener("unhandledrejection", this.handleRejection);
  }

  componentWillUnmount() {
    window.removeEventListener("error", this.handleWindowError);
    window.removeEventListener("unhandledrejection", this.handleRejection);
  }

  handleWindowError(event) {
    const message =
      event.error?.stack || event.message || "Bilinmeyen runtime hatası";
    this.setState((prev) => ({
      runtimeErrors: [
        ...prev.runtimeErrors,
        { type: "error", message, at: new Date().toLocaleTimeString() },
      ],
    }));
  }

  handleRejection(event) {
    const reason = event.reason;
    const message =
      reason?.stack || reason?.message || String(reason) || "İşlenmemiş promise reddi";
    this.setState((prev) => ({
      runtimeErrors: [
        ...prev.runtimeErrors,
        { type: "promise", message, at: new Date().toLocaleTimeString() },
      ],
    }));
  }

  handleReset() {
    this.setState({ error: null, errorInfo: null, runtimeErrors: [] });
  }

  render() {
    const { error, errorInfo, runtimeErrors } = this.state;
    const hasRenderError = Boolean(error);
    const hasRuntimeErrors = runtimeErrors.length > 0;

    return (
      <>
        {!hasRenderError && this.props.children}

        {hasRenderError && (
          <div className="min-h-screen bg-gray-100 px-4 py-12 flex items-start justify-center">
            <div className="w-full max-w-3xl bg-white border-2 border-gray-200 rounded-lg p-6 md:p-8">
              <span className="inline-block text-sm font-semibold border-2 border-gray-200 py-2 px-4 rounded-full uppercase tracking-wide mb-6 text-gray-900">
                Uygulama Hatası
              </span>

              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Bir şeyler ters gitti
              </h1>

              <p className="text-lg text-gray-600 font-light mb-6">
                Sayfa render edilirken bir hata oluştu. Aşağıda hatanın detayları
                yer alıyor.
              </p>

              <div className="bg-gray-100 border-2 border-gray-200 rounded-lg p-4 mb-4">
                <p className="font-semibold text-gray-900 mb-2">
                  {error?.name || "Error"}: {error?.message}
                </p>
                {error?.stack && (
                  <pre className="text-xs text-gray-700 whitespace-pre-wrap break-words overflow-x-auto">
                    {error.stack}
                  </pre>
                )}
              </div>

       

              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={this.handleReset}
                  className="px-6 py-3 bg-black text-white font-semibold rounded-lg hover:-translate-y-1 transition-all duration-300"
                >
                  Tekrar Dene
                </button>
                <button
                  onClick={() => window.location.reload()}
                  className="px-6 py-3 bg-white text-black font-semibold border-2 border-gray-200 rounded-lg hover:-translate-y-1 transition-all duration-300"
                >
                  Sayfayı Yenile
                </button>
              </div>
            </div>
          </div>
        )}

        {hasRuntimeErrors && (
          <div className="fixed bottom-4 left-4 z-[9999] w-full max-w-md">
            <div className="bg-white border-2 border-gray-900 rounded-lg shadow-lg overflow-hidden">
              <div className="flex items-center justify-between bg-gray-900 text-white px-4 py-2">
                <span className="text-sm font-semibold">
                  Runtime hataları ({runtimeErrors.length})
                </span>
                <button
                  onClick={this.handleReset}
                  className="text-xs font-semibold uppercase tracking-wide hover:text-green-400"
                >
                  Temizle
                </button>
              </div>
              <div className="max-h-64 overflow-y-auto divide-y-2 divide-gray-100">
                {runtimeErrors.map((err, index) => (
                  <div key={index} className="px-4 py-3">
                    <p className="text-xs font-semibold text-gray-900">
                      [{err.at}] {err.type === "promise" ? "Promise reddi" : "Hata"}
                    </p>
                    <pre className="mt-1 text-xs text-gray-700 whitespace-pre-wrap break-words">
                      {err.message}
                    </pre>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </>
    );
  }
}

export default ErrorBoundary;
