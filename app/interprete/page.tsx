import { permanentRedirect } from 'next/navigation';

export default function InterpreteLegacyPage() {
  permanentRedirect('/');
}
