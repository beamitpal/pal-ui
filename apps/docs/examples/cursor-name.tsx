'use client';

import { Cursor, CursorBody, CursorName, CursorPointer } from '@repo/cursor';

const Example = () => (
  <Cursor>
    <CursorPointer />
    <CursorBody>
      <CursorName>Amit Pal</CursorName>
    </CursorBody>
  </Cursor>
);

export default Example;
