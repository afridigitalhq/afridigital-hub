import AfriCommercePreview from "../../../../pages/landing/products/showcase/AfriCommercePreview";
import AfriCCTVPreview from "../../../../pages/landing/products/showcase/AfriCCTVPreview";
import AfriTrackerPreview from "../../../../pages/landing/products/showcase/AfriTrackerPreview";
import AfriWorkPreview from "../../../../pages/landing/products/showcase/AfriWorkPreview";
import AfriBoostPreview from "../../../../pages/landing/products/showcase/AfriBoostPreview";
import AfriSportsPreview from "../../../../pages/landing/products/showcase/AfriSportsPreview";
import AfriMetaWorldPreview from "../../../../pages/landing/products/showcase/AfriMetaWorldPreview";

const PREVIEW_MAP = {
  africommerce: AfriCommercePreview,
  africctv: AfriCCTVPreview,
  afritracker: AfriTrackerPreview,
  afriwork: AfriWorkPreview,
  afriboost: AfriBoostPreview,
  afrisports: AfriSportsPreview,
  afrimetaworld: AfriMetaWorldPreview
};

export default function ProductPreviewResolver({ product }) {
  const Preview = PREVIEW_MAP[product.id];

  if (!Preview) {
    return null;
  }

  return <Preview />;
}
