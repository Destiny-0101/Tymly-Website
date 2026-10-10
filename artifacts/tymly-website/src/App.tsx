import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ErrorBoundary } from '@/components/error-boundary';
import { Toaster } from '@/components/ui/toaster';
import { TooltipProvider } from '@/components/ui/tooltip';
import { Route, Router as WouterRouter, Switch, useLocation } from 'wouter';
import { AboutPage } from './pages/about';
import { ContactPage } from './pages/contact';
import { DownloadPage } from './pages/download';
import { FAQPage } from './pages/faq';
import { HowItWorksPage } from './pages/how-it-works';
import { HomePage } from './pages/home';
import { LegalPage } from './pages/legal-page';
import { NotFoundPage } from './pages/not-found-page';
import { ProductPage } from './pages/product';

const queryClient = new QueryClient();

/**
 * Keep the public routes together in one flat switch.
 * The final route intentionally catches any URL not matched above.
 */
function SiteRouter() {
  const [location] = useLocation();

  return (
    <ErrorBoundary resetKey={location}>
      <Switch>
        <Route path="/" component={HomePage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/product" component={ProductPage} />
        <Route path="/how-it-works" component={HowItWorksPage} />
        <Route path="/contact" component={ContactPage} />
        <Route path="/download" component={DownloadPage} />
        <Route path="/faq" component={FAQPage} />
        <Route path="/privacy" component={() => <LegalPage kind="privacy" />} />
        <Route path="/terms" component={() => <LegalPage kind="terms" />} />
        <Route component={NotFoundPage} />
      </Switch>
    </ErrorBoundary>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, '')}>
          <SiteRouter />
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
