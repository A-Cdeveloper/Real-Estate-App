import { getSettings } from "@/server/queries/settings";
import SocialLink from "./SocialLink";
import { getPlatformName } from "@/lib/utils/social";

const SocialLinks = async () => {
  const settings = await getSettings();
  const { facebook, instagram, x, linkedin, youtube } = settings ?? {};
  return (
    <div className="flex gap-4">
      {facebook && (
        <SocialLink
          icon="f"
          href={facebook}
          ariaLabel={`Visit our ${getPlatformName(facebook)} page`}
        />
      )}
      {instagram && (
        <SocialLink
          icon="i"
          href={instagram}
          ariaLabel={`Visit our ${getPlatformName(instagram)} page`}
        />
      )}
      {x && (
        <SocialLink
          icon="x"
          href={x}
          ariaLabel={`Visit our ${getPlatformName(x)} page`}
        />
      )}
      {linkedin && (
        <SocialLink
          icon="in"
          href={linkedin}
          ariaLabel={`Visit our ${getPlatformName(linkedin)} page`}
        />
      )}
      {youtube && (
        <SocialLink
          icon="y"
          href={youtube}
          ariaLabel={`Visit our ${getPlatformName(youtube)} page`}
        />
      )}
    </div>
  );
};

export default SocialLinks;
