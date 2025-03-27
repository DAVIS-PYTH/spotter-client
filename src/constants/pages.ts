type Page = {
  title: string;
  page: string;
  route: string;
};

type PageKeys = 'HOME' | 'ONBOARDING' | 'DASHBOARD';

type Pages = Record<PageKeys, Page>;

export const PAGES: Pages = {
  ONBOARDING: {
    title: 'Onboarding',
    page: 'OnboardingPage',
    route: '/onboarding',
  },
  HOME: {
    title: 'Welcome',
    page: 'LandingPage',
    route: '/',
  },
  DASHBOARD: {
    title: 'Dashboard',
    page: 'DashboardPage',
    route: '/dashboard',
  },
};
