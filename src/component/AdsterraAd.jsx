import { useEffect, useMemo } from "react";
import { Container } from "react-bootstrap";
import { isAllowedHost } from "../util";
import { useBreakpoint } from "./Breakpoint";

export const AdsterraPopunder = function AdsterraPopunder({
    src,
    allowedHosts = [],
}) {
    const allowed = isAllowedHost(allowedHosts);

    useEffect(() => {
        if (!allowed) return;

        const script = document.createElement("script");

        script.src = src;

        script.async = true;
        script.setAttribute("data-adsterra", "true");

        document.body.appendChild(script);

        return () => {
            script.remove();
        };
    }, [allowed]);

    if (!allowed) return null;

    return null;
};

export const AdsterraBanner = function AdsterraBanner({
    adsId,
    width = 320,
    height = 50,
    allowedHosts = [],
}) {
    const allowed = isAllowedHost(allowedHosts);

    const containerId = useMemo(
        () => `adsterra-banner-${Math.random().toString(36).slice(2)}`,
        [],
    );

    useEffect(() => {
        if (!allowed) return;

        const container = document.getElementById(containerId);

        if (!container) return;

        container.innerHTML = "";

        window.atOptions = {
            key: adsId,
            format: "iframe",
            height,
            width,
            params: {},
        };

        const script = document.createElement("script");

        script.src = `https://www.highperformanceformat.com/${adsId}/invoke.js`;

        script.async = true;

        container.appendChild(script);

        const timer = setTimeout(() => {
            const iframe = container.querySelector("iframe");

            if (iframe) {
                iframe.style.width = `${width}px`;
                iframe.style.height = `${height}px`;

                iframe.style.minWidth = `${width}px`;
                iframe.style.maxWidth = `${width}px`;

                iframe.style.minHeight = `${height}px`;
                iframe.style.maxHeight = `${height}px`;

                iframe.style.position = "static";
                iframe.style.inset = "auto";

                iframe.style.border = "0";
                iframe.style.margin = "0";
                iframe.style.padding = "0";

                iframe.style.display = "block";
                iframe.style.overflow = "hidden";
            }
        }, 1000);

        return () => {
            clearTimeout(timer);

            if (container) {
                container.innerHTML = "";
            }
        };
    }, [allowed, adsId, width, height, containerId]);

    if (!allowed) return null;

    return (
        <Container
            fluid
            className="position-fixed bottom-0 start-50 translate-middle-x d-flex justify-content-center p-0"
            style={{
                zIndex: 9999,
                width: "auto",
                maxWidth: "100vw",
                overflow: "hidden",
                pointerEvents: "none",
                marginBottom: "0.5rem",
            }}
        >
            <div
                style={{
                    width,
                    height,
                    overflow: "hidden",
                    position: "relative",
                    pointerEvents: "auto",
                    lineHeight: 0,
                    background: "transparent",
                }}
            >
                <div
                    id={containerId}
                    style={{
                        width,
                        height,
                        overflow: "hidden",
                    }}
                />
            </div>
        </Container>
    );
};
