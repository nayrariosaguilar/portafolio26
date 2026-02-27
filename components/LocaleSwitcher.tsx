'use client';

import {useLocale, useTranslations} from 'next-intl';
import {routing, usePathname, useRouter} from '@/i18n/routing';
import {useTransition} from 'react';
import { useParams } from 'next/navigation';

export default function LocaleSwitcher() {
  const t = useTranslations('LocaleSwitcher');
  const locale = useLocale();
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const pathname = usePathname();
  const params = useParams();

  function onSelectChange(nextLocale: string) {
    startTransition(() => {
      router.replace(
        // @ts-expect-error -- any params are okay here
        {pathname, params},
        {locale: nextLocale}
      );
    });
  }

  return (
    <div className="flex gap-2">
      {routing.locales.map((l) => (
        <button
          key={l}
          onClick={() => onSelectChange(l)}
          disabled={isPending || locale === l}
          className={`text-xs font-bold uppercase transition hover:text-foreground ${
            locale === l ? 'text-foreground border-b-2 border-foreground' : 'text-foreground/40'
          }`}
        >
          {l}
        </button>
      ))}
    </div>
  );
}
