import {LANDING_AUTH_CTA_TRUTH} from './LandingAuthCTA.truth';
export default function LandingAuthCTA({navigate}){
return (<section className='glass-card landing-auth-cta' data-module={LANDING_AUTH_CTA_TRUTH.MODULE}><h2>Join AfriDigital</h2><p>Access the full ecosystem experience.</p><div><button onClick={()=>navigate(LANDING_AUTH_CTA_TRUTH.LOGIN)}>🔐 Login</button><button onClick={()=>navigate(LANDING_AUTH_CTA_TRUTH.SIGNUP)}>🚀 Sign Up</button></div></section>);
}
