import React from 'react'
import { Languages } from 'lucide-react'
import { useTranslation } from 'react-i18next'

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../../ui/select'

const STORAGE_KEY = 'lang'

export function LanguageSelect() {
  const { i18n, t } = useTranslation()

  type Lang = 'en' | 'fi' | 'sv'

  const resolveLang = (): Lang => {
    const lang = i18n.language?.toLowerCase()
    if (lang?.startsWith('fi')) return 'fi'
    if (lang?.startsWith('sv')) return 'sv'
    return 'en'
  }

  const value = resolveLang()

  const setLanguage = (lng: Lang) => {
    i18n.changeLanguage(lng)
    document.documentElement.lang = lng
    try {
      localStorage.setItem(STORAGE_KEY, lng)
    } catch {
      // ignore
    }
  }

  return (
    <Select value={value} onValueChange={(v) => setLanguage(v as Lang)}>
      <SelectTrigger
        aria-label={t('languageSelect.ariaLabel')}
        className='h-9 w-9 p-0 justify-center'
      >
        <SelectValue>
          <Languages className='h-4 w-4' />
        </SelectValue>
      </SelectTrigger>

      <SelectContent align='end'>
        <SelectItem value='en'>{t('languageSelect.languages.en')}</SelectItem>
        <SelectItem value='fi'>{t('languageSelect.languages.fi')}</SelectItem>
        <SelectItem value='sv'>{t('languageSelect.languages.sv')}</SelectItem>
      </SelectContent>
    </Select>
  )
}
