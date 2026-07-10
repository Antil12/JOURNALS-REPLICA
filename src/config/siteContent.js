import siteaContent from '../apps/site-a/content'
import sitebContent from '../apps/site-b/content'
import sitecContent from '../apps/site-c/content'

const SITE = import.meta.env.VITE_SITE || 'sitea'

const contents = {
  sitea: siteaContent,
  siteb: sitebContent,
  sitec: sitecContent,
}

export const activeSiteContent = contents[SITE] || contents.sitea

export default activeSiteContent
