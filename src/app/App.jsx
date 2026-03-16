import { BrowserRouter, Routes, Route } from "react-router-dom";
import { lazy, Suspense, Component } from "react";
import { Analytics } from "@vercel/analytics/react";
import { Home } from "../pages/Home";
import { NotFound } from "../pages/NotFound";
import { ProjectDetail } from "../pages/ProjectDetail";
import { useTheme } from "../hooks/useTheme";

const Messages = lazy(() =>
  import("../pages/Messages").then((module) => ({ default: module.Messages }))
);

class AdminErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-background text-foreground">
          <div className="text-center p-8">
            <h1 className="text-2xl font-bold mb-4">Admin Page Unavailable</h1>
            <p className="text-foreground/70">
              There was an error loading this page. Please check your configuration.
            </p>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}

function AdminLoader() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background text-foreground">
      <p className="text-foreground/70">Loading...</p>
    </div>
  );
}

function App() {
  // Initialize theme system at app root to prevent flash
  useTheme();

  return (
    <>
      <Analytics />
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          {/* Support both slug-based and ID-based routes */}
          <Route path="projects/:slug" element={<ProjectDetail />} />
          <Route path="project/:projectId" element={<ProjectDetail />} />
          <Route
            path="lleyton/messages"
            element={
              <AdminErrorBoundary>
                <Suspense fallback={<AdminLoader />}>
                  <Messages />
                </Suspense>
              </AdminErrorBoundary>
            }
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
