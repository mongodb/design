import { Metadata } from 'next';

export default function manifest(): Metadata {
  return {
    title: 'LeafyGreen Docs',
    description: 'LeafyGreen Docs',
    icons: [
      {
        url: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
    ],
  };
}
