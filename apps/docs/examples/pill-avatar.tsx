'use client';

import { Pill, PillAvatar } from '@repo/pill';

const Example = () => (
  <Pill>
    <PillAvatar
      fallback="AP"
      src="https://pbs.twimg.com/profile_images/1907941010509869057/js-XKlKV_400x400.jpg"
    />
    @beamitpal
  </Pill>
);

export default Example;
