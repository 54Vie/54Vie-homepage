// 54Vie — Standalone App root (route giữa các sub-pages)
// Load CUỐI cùng — sau khi tất cả pages đã expose qua window.

function App() {
  const path = typeof window !== 'undefined' ? window.location.pathname : '';
  if (path.indexOf('/help') !== -1)    return <HelpPage/>;
  if (path.indexOf('/safety') !== -1)  return <SafetyPage/>;
  if (path.indexOf('/terms') !== -1)   return <TermsPage/>;
  if (path.indexOf('/privacy') !== -1) return <PrivacyPage/>;
  if (path.indexOf('/b2b') !== -1)     return <B2BPage/>;
  return <Homepage/>;
}
window.App = App;
