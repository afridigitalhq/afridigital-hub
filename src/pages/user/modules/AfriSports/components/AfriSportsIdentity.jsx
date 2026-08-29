import { getIdentityVisual } from "../identity/afriSportsIdentity";

export default function AfriSportsIdentity({
  identity,
  size = "md",
  showName = true,
  showCountry = false,
  showType = false,
  className = "",
}) {
  const visual = getIdentityVisual(identity);
  const name = identity?.name || "Unknown";
  const country = identity?.country || "";
  const type = identity?.type || "";

  return (
    <span
      className={`afrisports-identity afrisports-identity-${size} ${className}`.trim()}
      title={country ? `${name} • ${country}` : name}
      data-identity-type={type}
    >
      <span className="afrisports-identity-visual" aria-hidden="true">
        {visual.kind === "logo" ? (
          <img src={visual.value} alt="" loading="lazy" />
        ) : (
          <span className="afrisports-identity-flag">{visual.value}</span>
        )}
      </span>

      {showName && (
        <span className="afrisports-identity-name">
          {name}
        </span>
      )}

      {showCountry && country && (
        <span className="afrisports-identity-country">
          {country}
        </span>
      )}

      {showType && type && (
        <span className="afrisports-identity-type">
          {type === "national_team"
            ? "National Team"
            : type === "league"
              ? "League"
              : "Club"}
        </span>
      )}
    </span>
  );
}
