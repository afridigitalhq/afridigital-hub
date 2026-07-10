export default function GoogleAuthButton({onGoogleAuth}){
  return (
    <button className="google-auth-button" onClick={onGoogleAuth}>
      <span className="google-icon">G</span>
      <span>Continue with Google</span>
    </button>
  );
}
