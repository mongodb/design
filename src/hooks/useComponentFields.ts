'use client';

import { useState, useEffect } from 'react';

import { fetchComponent } from '@/utils/ContentStack/getContentstackResources';
import { ComponentFields } from '@/utils/ContentStack/types';

/** @deprecated */
export default function useComponentFields({
  componentName,
  includeContent = false,
}: {
  componentName: string;
  includeContent?: boolean;
}) {
  const [component, setComponent] = useState<ComponentFields>();

  useEffect(() => {
    (async function () {
      const componentObj = await fetchComponent(componentName, {
        includeContent,
      });
      setComponent(componentObj);
    })();
  }, [componentName, includeContent]);

  return component;
}
