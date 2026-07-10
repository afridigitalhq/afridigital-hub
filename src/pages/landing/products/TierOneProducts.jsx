import AfriCommercePreview from "./showcase/AfriCommercePreview";
import AfriCCTVPreview from "./showcase/AfriCCTVPreview";
import AfriSportsPreview from "./showcase/AfriSportsPreview";
import AfriMetaWorldPreview from "./showcase/AfriMetaWorldPreview";

export default function TierOneProducts({ navigate }) {
  return (
    <section>

      <h2 className="section-title">
        🌟 Tier 1 Products
      </h2>

      <div className="product-showcase-grid">

        <AfriCommercePreview
          onExplore={() => navigate("/user/modules/AfriCommerce")}
        />

        <AfriCCTVPreview
          onExplore={() => navigate("/user/modules/AfriCCTV")}
        />

        <AfriSportsPreview
          onExplore={() => navigate("/user/modules/AfriSports")}
        />

        <AfriMetaWorldPreview
          onExplore={() => navigate("/user/modules/AfriMetaWorld")}
        />

      </div>

    </section>
  );
}
