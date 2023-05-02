import { BREAKPOINTS as BPK, LANGS as LGK } from "./keys";

export const BREAKPOINTS_WIDTHS = {
  [BPK.MONITOR]: 1500,
  [BPK.WIDE_LAPTOP]: 1280,
  [BPK.LAPTOP]: 1024,
  [BPK.HORIZONTAL_TABLET]: 768,
  [BPK.VERTICAL_TABLET]: 500,
  [BPK.PHONE]: 350,
  [BPK.SMALL_PHONE]: 0,
};

export const USER_PHONE = "388 571-3321";

export const LANGS = {
  [LGK.DEFAULT]: {
    name: "English",
    emoji: "🇬🇧",
  },
  [LGK.SPANISH]: {
    name: "Spanish",
    emoji: "🇪🇸",
  },
};

//prettier-ignore
export const LANGS_INDICATORS = [
  { key: "defaultLang", directive: "dLang", condition: p => p.lang == LGK.DEFAULT },
  { key: "spanish", directive: "sLang", condition: p => p.lang == LGK.SPANISH }
]
