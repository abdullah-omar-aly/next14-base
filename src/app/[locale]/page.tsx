import ChangeLanguageMenu from '@/components/molecules/ChangeLanguageMenu'
import ToggleModeMenu from '@/components/molecules/ToggleModeMenu'
import { useLocale, useTranslations } from 'next-intl'
import Image from 'next/image'

export default function Home() {
  const t = useTranslations("Index")
  const lol = useLocale()
  return (
    <div>
      <header className='flex justify-center items-center gap-2 p-3'>
        <ToggleModeMenu />
        <ChangeLanguageMenu />
      </header>
      <main className='text-center'>
        {t('welcome')}
      </main>

    </div>
  )
}
