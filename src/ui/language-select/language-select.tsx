import { Select } from '../select'
import { SelectVariant, ValueType } from '../select/select-types'
import { FlagComponent } from './flag-component'
import { FlagSelectOption } from './language-select-types'

export const LanguageSelect = ({
  changeLangHandler,
  isMobile,
  languageSelectData,
  value,
}: {
  changeLangHandler: (value: string) => void
  isMobile: boolean
  languageSelectData: ValueType[]
  value: string
}) => {
  // const { isMobile } = useMatchMedia()
  // const { asPath, locale, pathname, push, query } = useRouter()
  // const typedLocale = locale as LocalType
  // const { t } = useTranslation()
  // const icon = flagIcons[locale]

  //, locale = LocalType.EN
  // const { [typedLocale]: language } = t.navigation.header

  // const changeLangHandler = (value: string) => {
  //   void push({ pathname, query }, asPath, { locale: value })
  // }
  const languageSelectOptions: Array<FlagSelectOption> = languageSelectData.map(data => {
    return {
      label: (
        <FlagComponent
          icon={data.icon}
          isMobile={isMobile}
          key={data.id}
          language={data.language}
        />
      ),
      value: data.language,
    }
  })

  return (
    <Select
      onChange={changeLangHandler}
      options={languageSelectOptions}
      placeholder={value}
      value={value}
      variant={isMobile ? SelectVariant.LanguageMobile : SelectVariant.Language}
    />
  )
}
