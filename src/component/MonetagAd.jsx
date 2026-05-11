import { useEffect } from "react";

export default function MonetagAd() {
    useEffect(() => {
        const s = document.createElement("script");
        // s.dataset.zone = "10988947";
        s.dataset.zone = "10990774";
        s.src = "https://nap5k.com/tag.min.js";
        s.async = true;

        document.body.appendChild(s);

        return () => {
            s.remove();
        };
    }, []);

    return null;
}
