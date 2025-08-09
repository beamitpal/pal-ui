import { QRCode } from '@repo/qr-code/server';

const Example = () => (
  <QRCode
    background="#eee"
    data="https://beamitpal.com/"
    foreground="#111"
  />
);

export default Example;
