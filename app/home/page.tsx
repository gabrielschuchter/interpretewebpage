import { permanentRedirect } from 'next/navigation';

export default function HomeLegacyPage() {
  permanentRedirect('/');
}
