import React, {useMemo, useState} from "react";

export const useHover = () => {
    const [hovered, setHovered] = useState(false);

    const hoverEvents = useMemo(() => ({
        onMouseOver: () => setHovered(true),
        onMouseOut: () => setHovered(false)
    }))

    return [hovered, hoverEvents];
}

export const timeout = 100;
