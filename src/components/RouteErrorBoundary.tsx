import { Component, ErrorInfo, ReactNode } from 'react';
import { AlertTriangle, RotateCcw, Home } from 'lucide-react';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

export class RouteErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
    error: null,
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error(
      'Route error caught by RouteErrorBoundary:',
      error,
      errorInfo
    );
  }

  private handleReset = () => {
    this.setState({ hasError: false, error: null });
  };

  private handleReload = () => {
    window.location.reload();
  };

  private handleGoHome = () => {
    window.location.href = '/';
  };

  public render() {
    if (this.state.hasError) {
      const isChunkLoadError =
        this.state.error?.name === 'ChunkLoadError' ||
        this.state.error?.message.includes(
          'Failed to fetch dynamically imported module'
        ) ||
        this.state.error?.message.includes(
          'Importing a module script failed'
        ) ||
        this.state.error?.message.includes(
          'error loading dynamically imported module'
        );

      return (
        <div
          role="alert"
          className="min-h-screen w-full flex flex-col items-center justify-center bg-[var(--bg-app)] text-[var(--text-primary)] p-4 transition-colors"
        >
          <div className="w-full max-w-md p-6 sm:p-8 rounded-2xl bg-[var(--bg-surface)] border border-[var(--border-default)] shadow-xl text-center flex flex-col items-center">
            <div className="w-14 h-14 rounded-2xl bg-amber-500/10 text-amber-500 border border-amber-500/20 flex items-center justify-center mb-5">
              <AlertTriangle className="w-7 h-7" />
            </div>

            <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-[var(--text-primary)]">
              {isChunkLoadError ? 'Update Available' : 'Failed to Load Page'}
            </h2>

            <p className="text-sm text-[var(--text-secondary)] mt-2.5 leading-relaxed">
              {isChunkLoadError
                ? 'A new version of RunJS was deployed or your internet connection was temporarily interrupted. Reloading will fetch the latest version.'
                : 'An unexpected error occurred while loading this page. Please try reloading or return to the home screen.'}
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-3 mt-6 w-full">
              <button
                type="button"
                onClick={
                  isChunkLoadError ? this.handleReload : this.handleReset
                }
                className="w-full sm:flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl font-semibold text-sm bg-amber-500 hover:bg-amber-400 text-black shadow-sm transition-all duration-150 cursor-pointer active:scale-[0.98]"
              >
                <RotateCcw className="w-4 h-4" />
                <span>{isChunkLoadError ? 'Reload Page' : 'Try Again'}</span>
              </button>

              <button
                type="button"
                onClick={this.handleGoHome}
                className="w-full sm:flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl font-medium text-sm bg-[var(--bg-surface)] hover:bg-[var(--bg-surface-hover)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] border border-[var(--border-default)] transition-all duration-150 cursor-pointer"
              >
                <Home className="w-4 h-4" />
                <span>Go to Home</span>
              </button>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default RouteErrorBoundary;
