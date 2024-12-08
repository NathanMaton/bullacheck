import React, { useEffect, useRef, memo } from 'react';
import { LoadingSpinner } from './LoadingSpinner';
import { ErrorMessage } from './ErrorMessage';

function TradingViewWidgetComponent() {
  const container = useRef<HTMLDivElement>(null);
  const [isLoading, setIsLoading] = React.useState(true);
  const [hasError, setHasError] = React.useState(false);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://s3.tradingview.com/tv.js";
    script.type = "text/javascript";
    script.async = true;

    const createWidget = () => {
      if (window.TradingView) {
        new window.TradingView.widget({
          container_id: "tradingview_widget",
          symbol: "CRYPTOCAP:BTC.D",
          interval: "D",
          timezone: "Etc/UTC",
          theme: "light",
          style: "1",
          locale: "en",
          toolbar_bg: "#f1f3f6",
          enable_publishing: false,
          allow_symbol_change: false,
          save_image: false,
          hide_volume: false,
          height: 500,
          width: "100%",
        });
        setIsLoading(false);
      }
    };

    script.onload = createWidget;
    script.onerror = () => {
      setHasError(true);
      setIsLoading(false);
    };

    if (container.current) {
      container.current.innerHTML = '<div id="tradingview_widget"></div>';
      container.current.appendChild(script);
    }

    return () => {
      if (container.current) {
        container.current.innerHTML = '';
      }
    };
  }, []);

  if (hasError) {
    return <ErrorMessage />;
  }

  return (
    <div className="relative w-full h-[500px]">
      {isLoading && <LoadingSpinner />}
      <div className="tradingview-widget-container" ref={container} />
    </div>
  );
}

export const TradingViewWidget = memo(TradingViewWidgetComponent);