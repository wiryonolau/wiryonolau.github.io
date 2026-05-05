import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function UniversalIcon({ icon, ...props }) {
    if (!icon) return null;

    // Case 1: Already a JSX element (<FaUser />)
    if (React.isValidElement(icon)) {
        return React.cloneElement(icon, props);
    }

    // Case 2: FontAwesome icon object
    if (
        typeof icon === "object" &&
        icon !== null &&
        ("iconName" in icon || "prefix" in icon)
    ) {
        return <FontAwesomeIcon icon={icon} {...props} />;
    }

    // Case 3: React component (react-icons or custom)
    if (typeof icon === "function") {
        const IconComponent = icon;
        return <IconComponent {...props} />;
    }

    console.warn("Unsupported icon type:", icon);
    return null;
}
