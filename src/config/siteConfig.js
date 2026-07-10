import siteaConfig from '../apps/site-a/config'
import sitebConfig from '../apps/site-b/config'
import sitecConfig from '../apps/site-c/config'

const SITE = import.meta.env.VITE_SITE || 'sitea'

const configs = {
  sitea: siteaConfig,
  siteb: sitebConfig,
  sitec: sitecConfig,
}

export const activeSite = SITE
export const siteConfigMap = configs

export default configs[SITE] || configs.sitea
