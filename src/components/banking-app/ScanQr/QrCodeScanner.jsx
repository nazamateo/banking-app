import { useEffect } from "react";
import { Html5QrcodeScanner } from "html5-qrcode";

const qrcodeRegionId = "html5qr-code-full-region";

function QrCodeScanner({
  fps,
  qrbox,
  aspectRatio,
  disableFlip,
  onScanSuccess,
  onScanFailure,
}) {
  useEffect(() => {
    const createConfig = (fps, qrbox, aspectRatio, disableFlip) => {
      let config = {};
      if (fps) {
        config.fps = fps;
      }

      if (qrbox) {
        config.qrbox = qrbox;
      }

      if (aspectRatio) {
        config.aspectratio = aspectRatio;
      }

      if (disableFlip !== undefined) {
        config.disableFlip = disableFlip;
      }

      return config;
    };

    let config = createConfig(fps, qrbox, aspectRatio, disableFlip);

    if (!onScanSuccess) {
      throw "qrCodeSuccessCallback is required callback.";
    }

    let html5QrCodeScanner = new Html5QrcodeScanner(
      qrcodeRegionId,
      config,
      false
    );
    html5QrCodeScanner.render(onScanSuccess, onScanFailure);
  }, []);

  return <div id={qrcodeRegionId} />;
}

export default QrCodeScanner;
