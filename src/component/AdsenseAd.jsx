import { isAllowedHost } from "../util";

function AdsenseAd() {
    if (!isAllowedHost(window.location.hostname)) {
        return null;
    }

    return (
        <ins
            className="adsbygoogle"
            style={{ display: "block" }}
            data-ad-client="ca-pub-XXXXXXXXXXXXXXXX"
            data-ad-slot="1234567890"
            data-ad-format="auto"
            data-full-width-responsive="true"
        />
    );
}
