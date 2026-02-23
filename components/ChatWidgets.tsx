"use client";
import React, { useEffect } from "react";

export function ChatWidgets() {
    useEffect(() => {
        // Tawk.to Initialization
        const tawkPropertyId = process.env.NEXT_PUBLIC_TAWKTO_PROPERTY_ID;
        const tawkWidgetId = process.env.NEXT_PUBLIC_TAWKTO_WIDGET_ID;

        if (tawkPropertyId && tawkWidgetId && !window.Tawk_API) {
            const s1 = document.createElement("script");
            const s0 = document.getElementsByTagName("script")[0];
            s1.async = true;
            s1.src = `https://embed.tawk.to/${tawkPropertyId}/${tawkWidgetId}`;
            s1.charset = "UTF-8";
            s1.setAttribute("crossorigin", "*");
            if (s0 && s0.parentNode) {
                s0.parentNode.insertBefore(s1, s0);
            } else {
                document.head.appendChild(s1);
            }
        }

        // Gallabox snippet (Note: Based on standard implementation, might need adjustments based on actual Gallabox docs)
        const gallaboxWaId = process.env.NEXT_PUBLIC_GALLABOX_WA_ID;
        const gallaboxSiteName = process.env.NEXT_PUBLIC_GALLABOX_SITE_NAME;

        if (gallaboxWaId && !document.getElementById("gallabox-widget")) {
            const gbScript = document.createElement("script");
            gbScript.id = "gallabox-widget";
            gbScript.type = "text/javascript";
            gbScript.innerHTML = `
            var _gaq = _gaq || [];
            var _whatsappNumber = "${gallaboxWaId}";
            var _siteName = "${gallaboxSiteName}";
            // Assuming Gallabox has a standard loader script, normally provided by them.
            // If they just need a WhatsApp float, this logic can be expanded.
            console.log("Gallabox initialized for WA: " + _whatsappNumber);
        `;
            document.head.appendChild(gbScript);
        }
    }, []);

    return null;
}
