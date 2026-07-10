import styles from './JournalInformation.module.css'

const quickLinks = [
  { href: '#aims', label: 'Aims & Scope' },
  { href: '#ownership', label: 'Ownership and Management' },
  { href: '#institution', label: 'About the Institution', subItem: true },
  { href: '#publisher', label: 'About the Publisher', subItem: true },
  { href: '#frequency', label: 'Publication frequency' },
  { href: '#copyright', label: 'Copyright and Licensing' },
  { href: '#openaccess', label: 'Open Access Policy' },
  { href: '#selfarchiving', label: 'Self-Archiving Policy for Authors' },
  { href: '#ethics', label: 'Publication Ethics and Malpractice Statement' },
  { href: '#advertisement', label: 'Advertisement policy' },
]

export default function JournalInformation() {
  return (
    <div className={styles.pageBg}>
      <div className={styles.bodyLayout}>
        <div className={styles.pageContainer}>
          <div className={styles.hero}>
            <span className={styles.eyebrow}>About Journal</span>
            <h1 className={styles.pageHeading}>Journal Information</h1>
          </div>

          <hr className={styles.divider} />

          <ul className={styles.quickLinks}>
            {quickLinks.map((link) => (
              <li key={link.href} className={link.subItem ? styles.subItem : ''}>
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>

          <section id="aims" className={styles.sectionCard}>
            <h2 className={styles.sectionTitle}>Aims & Scope</h2>
            <p>
              <strong>Advances in Anatomy and Clinical Sciences</strong> is the official journal of the{' '}
              <strong>North Chapter of the Anatomists Society</strong>, formerly published under the title{' '}
              <strong>North State Journal of Anatomy (NSJA)</strong>. This journal is dedicated to advancing
              knowledge at the interface of anatomical sciences and clinical practice. The journal aims to
              facilitate translational integration between anatomical research and clinical disciplines,
              enhancing diagnostic, surgical, and therapeutic outcomes. Encourage innovation in anatomical
              education, including modern pedagogical approaches, simulation, and digital technologies. The
              journal serves as a platform to keep healthcare professionals updated on emerging approaches in
              patient management, while simultaneously informing educators about recent advancements in
              clinical anatomy and evolving teaching methodologies.
            </p>
          </section>

          <section id="ownership" className={styles.sectionCard}>
            <h2 className={styles.sectionTitle}>Ownership and Management</h2>
            <p>
              <strong>Advances in Anatomy and Clinical Sciences</strong> is owned and managed under the
              auspices of the <strong>North Chapter of the Anatomists Society</strong> and Jaypee Brothers
              Medical Publishers (P) Ltd.
            </p>

            <h3 id="institution" className={styles.subTitle}>About the Institution</h3>
            <p className={styles.orgName}>
              <a href="https://ncas2017.com/" target="_blank" rel="noreferrer">
                North Chapter of Anatomists Society
              </a>
            </p>
            <p>
              The North Chapter of the Anatomists Society was established in 2001 to promote academic
              interaction and scholarly activities among anatomists in the northern region. The chapter has
              grown steadily, with life membership now exceeding 250 anatomists from multiple northern states
              of India. The Society started the journal with the aim to bridge basic anatomy with clinical
              practice, foster interdisciplinary collaboration, support evidence-based advancements in medical
              education and research and to encourage contributions from emerging and established anatomists.
            </p>

            <h3 id="publisher" className={styles.subTitle}>About the Publisher</h3>
            <p>
              Jaypee Brothers Medical Publishers (P) Ltd is committed to supporting health, medical, and
              dental research communities across continents.{' '}
              <a href="https://www.jaypeejournals.com/journalHome" target="_blank" rel="noreferrer">
                Jaypee Journals
              </a>
              , a division of Jaypee Brothers Medical Publishers, is one of the largest medical publishers in
              the world and provides high-quality open-access journals that are trustworthy, authoritative,
              and accessible to researchers. We provide high-quality support at all stages of the publishing
              cycle so that we can help researchers publish their work. We are the partners of success for
              researchers through global standard publishing as well as open access.
            </p>
          </section>

          <section id="frequency" className={styles.sectionCard}>
            <h2 className={styles.sectionTitle}>Publication Frequency</h2>
            <p>
              <strong>Advances in Anatomy and Clinical Sciences</strong> is a biannual peer-reviewed journal
              focusing on the field of translational research in clinical anatomy, radiological anatomy, gross
              anatomy, microanatomy, histochemistry, developmental anatomy, cytogenetics, neuroanatomy,
              anthropology, morphology, human evolution, Biomechanics of movements, technology in medical
              science and medical education.
            </p>
          </section>

          <section id="copyright" className={styles.sectionCard}>
            <h2 className={styles.sectionTitle}>Copyright and Licensing</h2>
            <p>
              Under Creative Commons, the Authors retain ownership/copyright of their content. The authors
              assign exclusive commercial re-use rights of the article to the Publisher.
            </p>
            <p>
              All open-access articles published are distributed under the terms of the CC BY-NC 4.0 license
              (Creative Commons Attribution-Non-Commercial 4.0 International Public License as currently
              displayed at{' '}
              <a href="http://creativecommons.org/licenses/by-nc/4.0/legalcode" target="_blank" rel="noreferrer">
                http://creativecommons.org/licenses/by-nc/4.0/legalcode
              </a>
              ), which permits unrestricted use, distribution, and reproduction in any medium, for
              non-commercial purposes, provided the original work is properly cited.
            </p>
            <p>
              Authors must submit the{' '}
              <a href="https://d45jl3w9libvn.cloudfront.net/jaypee/static/journals/AACS/supp/OA_License_Agreement.docx" target="_blank" rel="noreferrer">
                Open Access License Agreement Form
              </a>
              {' '}when submitting the manuscript. By signing this form, the author agrees to the following:
            </p>
            <ol className={styles.numberedList}>
              <li>Authors retain the copyright of their article</li>
              <li>Authors grant exclusive commercial and publishing rights to the Publisher</li>
            </ol>
            <p>
              For any commercial use of the article, explicit permission is required from the Publisher at{' '}
              <a href="mailto:journals.permissions@jaypeebrothers.com">
                journals.permissions@jaypeebrothers.com
              </a>
              .
            </p>
            <p>
              Authors are also entitled to deposit the final electronic version of the article into an
              institutional or centrally organized subject repository upon publication. They should include a
              link to the published version of the article on the journal's website, and the journal and
              Publisher should be attributed as the original place of publication, with correct citations
              given.
            </p>
          </section>

          <section id="openaccess" className={styles.sectionCard}>
            <h2 className={styles.sectionTitle}>Open Access Policy</h2>
            <p className={styles.subHeadLine}>
              A comprehensive outlook on the open access policy that we follow:
            </p>
            <p>
              Open access refers to the practice of making peer-reviewed scholarly research and literature
              freely available online to anyone interested in reading it at no cost and with limited
              restrictions regarding reuse. Open access publications are freely and permanently available
              online to anyone with internet access. The journal allows unrestricted use, distribution, and
              reproduction in any medium (which is non-commercial), provided the article is properly
              attributed. All the articles are published, without any technical, financial, or gender
              limitations, in an agreed format on the journal website and deposited in archive and indexing
              databases as applicable to the journal. All articles are assigned a Digital Object Identifier
              (DOI), thereby making them fully citable and searchable by title, author name(s), and the full
              text.
            </p>
            <p className={styles.subHeadLine}>Why open access publishing?</p>
            <p>
              Restricted access to scientific research and advancements through a subscription pay wall
              hinders communication within the scientific community. Moreover, restricted access can also
              hinder the education and dissemination of scientific knowledge to the aspiring younger
              generations who are keen to pursue a career in science. Increased productivity and development of
              science can only be achieved by diffusing knowledge and providing the facilities for creating
              permanent repositories, such as Open Access.
            </p>
            <p>
              The use of a Creative Commons 4.0 License (CC-BY-NC 4.0) enables users/readers/peers to use the
              content with clear permission in a way that it can be reused and redistributed as long as the
              article source is appropriately given credit for non-commercial purposes.
            </p>
          </section>

          <section id="selfarchiving" className={styles.sectionCard}>
            <h2 className={styles.sectionTitle}>Self-Archiving Policy for Authors</h2>
            <p>
              Authors are encouraged to deposit the final published PDF in their institutional repository or
              any suitable subject repository (according to the end-user license of the article, i.e.,
              strictly for non-commercial re-use) immediately upon publication. The deposited version should
              contain the URL and link to the online published version on the publisher's website to clearly
              identify it as the definitive version of record.
            </p>

            <p className={styles.subHeadLine}>Abstract and Citation information</p>
            <p>
              Authors can share the Abstract and "How to cite" information (e.g., Title, Author name,
              Publication dates) of their article anywhere at any time including social media such as
              Facebook, blogs and Twitter, with proper attribution to the original source (the Publisher
              website) or include the DOI number in the social media post that links it to the published
              article on the Journal website.
            </p>

            <p className={styles.subHeadLine}>Submitted Version</p>
            <p>
              Submitted version (SV) or the preprint version is recognized as the author version of an article
              before submission to a journal for peer review. The author accepts full responsibility for the
              article, and the content and layout are set out by the author.
            </p>
            <p>
              Authors can post their preprint version on preprint servers of the authors' choice, authors' or
              institutional websites, preprint servers or preprint commenting platforms, intended for
              non-commercial use. When submitting the manuscript to the journal, authors must disclose all
              pertinent information regarding preprint publication, such as the DOI and licensing terms. The
              author must make sure that the preprint record is updated with a publication reference after it
              is published, including the DOI and a URL link to the journal website where the paper has been
              published.
            </p>

            <p className={styles.subHeadLine}>Accepted Manuscript</p>
            <p>
              The accepted manuscript (AM) is the peer-reviewed version (not the final published version) as
              accepted for publication by the journal that includes modifications based on reviewers'
              suggestions. This version excludes copy editing and type-setting changes.
            </p>
            <p>
              The journal does not recommend that the authors upload AM to their personal website/
              institutional, or other non-commercial subject-based repositories.
            </p>

            <p className={styles.subHeadLine}>Published Version</p>
            <p>
              Published Version (PV) is defined as the final version of the article that has been made
              available by the Publisher on the respective journal website by formally and exclusively putting
              the article either in "online first" or releasing it as a part of the complete issue of that
              journal. This is the final, definitive, citable version of your paper, which has been copyedited,
              typeset, has metadata applied, and has been allocated a DOI.
            </p>
            <p>
              Authors may share the PV with private groups within their institution or through private groups
              on non-commercial repositories that are signatories to the STM Voluntary principles for article
              sharing on Scholarly Collaboration Networks (SCN). The PV may not be uploaded or shared on
              commercial websites or repositories unless the website or repository has signed an agreement
              with the publisher permitting such uploading or sharing.
            </p>
          </section>

          <section id="ethics" className={styles.sectionCard}>
            <h2 className={styles.sectionTitle}>Publication Ethics and Malpractice Statement</h2>
            <p>
              This Publication Ethics and Malpractice Statement is based on the Code of Conduct and Best
              Practice Guidelines for Journal Editors as per the Committee on Publication Ethics, ICMJE & WAME.
              Please visit the <a href="/journal/AACS/page/policy">Policy</a> page for more details.
            </p>
          </section>

          <section id="advertisement" className={styles.sectionCard}>
            <h2 className={styles.sectionTitle}>Advertisement Policy</h2>
            <ol className={styles.numberedList}>
              <li>
                Journals carry advertisements both digitally and in print. All these commercially sponsored
                advertisements are independent of editorial decisions.
              </li>
              <li>
                Journal and the Publisher do not endorse any product or service marked as an advertisement or
                promoted by a sponsor in any of our publications. Editorial content is not compromised by
                commercial or financial interests, or by any specific arrangements with advertising clients or
                sponsors.
              </li>
              <li>
                Journal and the Publisher reserves the right to decline any type of advertising that is
                damaging to the brand, is inappropriate to the content, or is deceptive or misleading. The
                content in the advertisements should be verifiable.
              </li>
              <li>
                Advertisements will not be accepted if they appear to be indecent or offensive in either text
                or artwork, or if they are discriminatory in terms of personal, racial, ethnic, sexual
                orientation, or religious nature.
              </li>
              <li>
                Journal and the Publisher will not accept advertising for products or services known to be
                harmful to health (e.g., tobacco and alcohol products).
              </li>
              <li>
                Even if the advertisement has been implemented online, it will be withdrawn from the journal
                site at any time if the Journal and the Publisher feel it is inappropriate.
              </li>
              <li>
                The product advertorial will not allow any treatment-specific or drug-specific campaign to be
                targeted to a specific article(s) on any page where content related to the product(s) is being
                advertised.
              </li>
              <li>
                Advertisers should make available to the Publisher the marketing authorization and summary of
                product characteristics when submitting their advertisement. In the case of drug
                advertisements, the full generic name of each active ingredient should be clearly stated.
              </li>
              <li>
                Editorial decisions will not be influenced by current or potential sponsors and advertisers and
                will not be influenced by marketing decisions.
              </li>
              <li>
                Information about complaints concerning advertisements will be included in the Advertisements
                page in Print copies only.
              </li>
            </ol>
          </section>
        </div>
      </div>
    </div>
  )
}