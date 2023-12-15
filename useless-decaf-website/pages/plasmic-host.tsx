import * as React from 'react';
import { PlasmicCanvasHost, registerComponent } from '@plasmicapp/react-web/lib/host';

import {CFooter, PlasmicCFooterProps} from '../CustomComponent/CFooter'

registerComponent(CFooter, {
  name: 'CFooter',
  importPath: '../CustomComponent/CFooter',
  ...PlasmicCFooterProps,
});

export default function PlasmicHost() {
  return <PlasmicCanvasHost />;
}
