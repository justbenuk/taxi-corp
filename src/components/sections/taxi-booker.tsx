'use client';

import PageContainer from "@/components/page-container";
import { useEffect, useRef } from "react";

declare global {
  interface Window {
    iFrameResize?: (options: Record<string, unknown>, selector: string) => void;
  }
}


export default function TaxiBooker() {
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://portal.cab9.app/js/iframeResizer.min.js';
    script.async = true;

    script.onload = () => {
      if (typeof window.iFrameResize === 'function') {
        window.iFrameResize({}, '#bookingFrame');
      }
    };

    document.body.appendChild(script);

    // Setup message listener for scroll to top
    const headerHeight = 0;

    const handleMessage = (e: MessageEvent) => {
      if (e.data?.type === 'scrollToTop' && iframeRef.current) {
        const iframe = iframeRef.current;
        const rect = iframe.getBoundingClientRect();
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const iframeTop = rect.top + scrollTop;
        const targetScrollPosition = iframeTop - headerHeight;

        window.scrollTo({
          top: targetScrollPosition,
          behavior: 'smooth'
        });
      }
    };

    window.addEventListener('message', handleMessage);

    // Cleanup
    return () => {
      window.removeEventListener('message', handleMessage);
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  }, []);

  return (
    <div>
      <PageContainer>
        <iframe
          ref={iframeRef}
          src="https://booker.cab9.app?company=ACO&code=0951"
          id="bookingFrame"
          width="100%"
          height="100%"
          className="rounded-2xl min-h-[60dvh]"
        />
      </PageContainer>
    </div>
  );
}

