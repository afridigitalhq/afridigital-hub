import EcosystemOrbit from './EcosystemOrbit';
import SystemSummary from './SystemSummary';
import LiveBanner from './LiveBanner';
import LiveEcosystemGlobe from './globe/LiveEcosystemGlobe';

export default function HeroContainer() {
  return (
    <>
      <LiveEcosystemGlobe />
      <EcosystemOrbit />
      <SystemSummary />
      <LiveBanner />
    </>
  );
}
