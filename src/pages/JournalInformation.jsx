import Sidebar from '../components/layout/Sidebar'
import styles from './JournalInformation.module.css'

export default function JournalInformation() {
  return (
    <div className={styles.pageBg}>
      <div className={styles.bodyLayout}>
        <Sidebar />
        <div className={styles.pageContainer}>
          <div className={styles.hero}>
            <span className={styles.eyebrow}>About Journal</span>
            <h1 className={styles.pageHeading}>Journal Information</h1>
          </div>

          <ul className={styles.quickLinks}>
            <li><a href="#aims">Aims &amp; Scope</a></li>
            <li><a href="#copyright">Copyright and Licensing</a></li>
            <li><a href="#ownership">Ownership and Management</a></li>
            <li><a href="#openaccess">Open Access Policy</a></li>
            <li className={styles.subItem}><a href="#institution">About the Institution</a></li>
            <li><a href="#selfarchiving">Self-Archiving Policy for Authors</a></li>
            <li className={styles.subItem}><a href="#publisher">About the Publisher</a></li>
            <li><a href="#ethics">Publication Ethics and Malpractice Statement</a></li>
            <li><a href="#frequency">Publication Frequency</a></li>
            <li><a href="#advertisement">Advertisement Policy</a></li>
          </ul>

          {/* ================= AIMS & SCOPE ================= */}
          <section id="aims" className={styles.sectionCard}>
            <h2 className={styles.sectionTitle}>Aims &amp; Scope</h2>
            <p>
              <strong>Advances in Anatomy and Clinical Sciences</strong> is the official journal of the{' '}
              <strong>North Chapter of the Anatomists Society</strong>, previously published under the name{' '}
              <strong>North State Journal of Anatomy (NSJA)</strong>. The journal focuses on connecting anatomical
              science with clinical practice, and exists to help translate anatomical research into better
              diagnostic, surgical, and therapeutic outcomes.
            </p>
            <p>
              It also promotes fresh approaches to anatomy education, including simulation-based learning and
              digital teaching tools, and works to keep both clinicians and educators informed about developments
              on either side of the research-to-practice divide.
            </p>
          </section>

          {/* ================= OWNERSHIP & MANAGEMENT ================= */}
          <section id="ownership" className={styles.sectionCard}>
            <h2 className={styles.sectionTitle}>Ownership and Management</h2>
            <p>
              <strong>Advances in Anatomy and Clinical Sciences</strong> is owned and managed jointly by the{' '}
              <strong>North Chapter of the Anatomists Society</strong> and Jaypee Brothers Medical Publishers (P) Ltd.
            </p>

            <h3 id="institution" className={styles.subTitle}>About the Institution</h3>
            <p className={styles.orgName}>
              <a href="https://ncas2017.com/" target="_blank" rel="noreferrer">
                North Chapter of Anatomists Society
              </a>
            </p>
            <p>
              Founded in 2001, the North Chapter of the Anatomists Society was created to encourage academic
              exchange and scholarly work among anatomists across the northern region. Membership has grown
              steadily since, with over 250 life members now spread across several northern states of India. The
              Society launched this journal to connect basic anatomy with clinical practice, support
              interdisciplinary collaboration and evidence-based research in medical education, and give both
              emerging and established anatomists a platform to publish their work.
            </p>

            <h3 id="publisher" className={styles.subTitle}>About the Publisher</h3>
            <p>
              Jaypee Brothers Medical Publishers (P) Ltd works to support health, medical, and dental research
              communities worldwide.{' '}
              <a href="https://www.jaypeejournals.com/journalHome" target="_blank" rel="noreferrer">
                Jaypee Journals
              </a>
              , its journals division, is among the largest medical publishing operations globally, offering
              open-access journals built to be reliable, authoritative, and easy for researchers to access. The
              publisher supports authors through every stage of the publishing process, from submission to
              open-access dissemination.
            </p>
          </section>

          {/* ================= PUBLICATION FREQUENCY ================= */}
          <section id="frequency" className={styles.sectionCard}>
            <h2 className={styles.sectionTitle}>Publication Frequency</h2>
            <p>
              <strong>Advances in Anatomy and Clinical Sciences</strong> publishes biannually and is fully
              peer-reviewed. It covers translational research across clinical anatomy, radiological anatomy, gross
              anatomy, microanatomy, histochemistry, developmental anatomy, cytogenetics, neuroanatomy,
              anthropology, morphology, human evolution, movement biomechanics, and technology in medical
              science and medical education.
            </p>
          </section>

          {/* ================= COPYRIGHT AND LICENSING ================= */}
          <section id="copyright" className={styles.sectionCard}>
            <h2 className={styles.sectionTitle}>Copyright and Licensing</h2>
            <p>
              Under the journal's Creative Commons terms, authors keep ownership and copyright of their work, while
              granting the Publisher exclusive rights to commercially re-use the article.
            </p>
            <p>
              Every open-access article is published under the CC BY-NC 4.0 license (Creative Commons
              Attribution-Non-Commercial 4.0 International), which allows free use, distribution, and reproduction
              in any medium for non-commercial purposes, as long as the original work is properly credited. Full
              license terms are available at{' '}
              <a href="http://creativecommons.org/licenses/by-nc/4.0/legalcode" target="_blank" rel="noreferrer">
                creativecommons.org/licenses/by-nc/4.0/legalcode
              </a>.
            </p>
            <p>
              At the time of submission, authors must complete the{' '}
              <a
                href="https://d45jl3w9libvn.cloudfront.net/jaypee/static/journals/AACS/supp/OA_License_Agreement.docx"
                target="_blank"
                rel="noreferrer"
              >
                Open Access License Agreement Form
              </a>. By signing it, the author confirms that:
            </p>
            <ol className={styles.numberedList}>
              <li>They retain copyright of their own article.</li>
              <li>They grant the Publisher exclusive commercial and publishing rights.</li>
            </ol>
            <p>
              Anyone wishing to use an article commercially needs prior written permission from the Publisher, via{' '}
              <a href="mailto:journals.permissions@jaypeebrothers.com">journals.permissions@jaypeebrothers.com</a>.
            </p>
            <p>
              Authors may also deposit the final electronic version of their article in an institutional or
              centrally organized subject repository once it is published, provided they link back to the
              published version on the journal's website and correctly attribute the journal and Publisher as the
              place of original publication.
            </p>
          </section>

          {/* ================= OPEN ACCESS POLICY ================= */}
          <section id="openaccess" className={styles.sectionCard}>
            <h2 className={styles.sectionTitle}>Open Access Policy</h2>
            <p className={styles.subHeadLine}>A comprehensive outlook on the open access policy that we follow:</p>
            <p>
              Open access means making peer-reviewed scholarly work freely available online, at no cost and with
              minimal restrictions on reuse. Anyone with internet access can read the journal's articles
              permanently and free of charge. The journal permits unrestricted, non-commercial use, distribution,
              and reproduction of its content in any medium, provided the source is properly credited. Articles are
              published without technical, financial, or gender-based barriers, and are deposited in relevant
              archives and indexing databases. Every article receives a Digital Object Identifier (DOI), making it
              fully citable and searchable by title, author, and full text.
            </p>

            <h3 className={styles.subTitle}>Why open access publishing?</h3>
            <p>
              Paywalled access to research slows down communication within the scientific community and can keep
              younger, aspiring scientists from engaging with the literature they need to build a career in
              research. Wider diffusion of knowledge, supported by permanent open repositories, is what drives
              scientific progress forward.
            </p>
            <p>
              By publishing under the CC BY-NC 4.0 license, the journal lets readers and peers reuse and
              redistribute its content for non-commercial purposes, as long as the original source is properly
              credited.
            </p>
          </section>

          {/* ================= SELF-ARCHIVING POLICY ================= */}
          <section id="selfarchiving" className={styles.sectionCard}>
            <h2 className={styles.sectionTitle}>Self-Archiving Policy for Authors</h2>
            <p>
              Authors are encouraged to deposit the final published PDF in an institutional or other suitable
              subject repository as soon as it is published, in line with the article's non-commercial reuse
              terms. The deposited copy should include a URL linking back to the official published version on the
              publisher's site, so it is clearly identifiable as the version of record.
            </p>

            <h3 className={styles.subTitle}>Abstract and Citation Information</h3>
            <p>
              Authors are free to share their article's abstract and "how to cite" details (title, author names,
              publication date) anywhere at any time, including on social platforms such as Facebook, blogs, and
              X/Twitter — as long as they credit the original source (the Publisher's website) or include the
              article's DOI linking back to the journal.
            </p>

            <h3 className={styles.subTitle}>Submitted Version</h3>
            <p>
              The submitted version (SV), or preprint, is the author's own version of the manuscript prior to peer
              review, with content and layout entirely determined by the author. Authors may post this version on
              preprint servers, their own or institutional websites, or preprint commenting platforms for
              non-commercial purposes. When submitting to the journal, authors must disclose any prior preprint
              publication, including its DOI and license terms, and later update the preprint record with a link
              and DOI pointing to the final published article.
            </p>

            <h3 className={styles.subTitle}>Accepted Manuscript</h3>
            <p>
              The accepted manuscript (AM) is the peer-reviewed version accepted for publication, incorporating
              reviewer feedback but not yet copyedited or typeset. The journal asks that authors not upload this
              version to personal, institutional, or other non-commercial repositories.
            </p>

            <h3 className={styles.subTitle}>Published Version</h3>
            <p>
              The published version (PV) is the final, definitive form of the article as released by the
              Publisher — either online first or as part of a complete issue. It is copyedited, typeset, carries
              full metadata, and has been assigned a DOI. Authors may share the PV within private institutional
              groups, or via non-commercial repositories that are signatories to the STM Voluntary Principles for
              article sharing on Scholarly Collaboration Networks. It may not be posted to commercial websites or
              repositories unless they have a specific sharing agreement with the Publisher.
            </p>
          </section>

          {/* ================= PUBLICATION ETHICS ================= */}
          <section id="ethics" className={styles.sectionCard}>
            <h2 className={styles.sectionTitle}>Publication Ethics and Malpractice Statement</h2>
            <p>
              This statement follows the Code of Conduct and Best Practice Guidelines for Journal Editors set out
              by the Committee on Publication Ethics (COPE), ICMJE, and WAME. Full details are available on the{' '}
              <a href="https://www.aacsj.com/journal/AACS/page/policy" target="_blank" rel="noreferrer">
                Policy
              </a>{' '}
              page.
            </p>
          </section>

          {/* ================= ADVERTISEMENT POLICY ================= */}
          <section id="advertisement" className={styles.sectionCard}>
            <h2 className={styles.sectionTitle}>Advertisement Policy</h2>
            <ol className={styles.numberedList}>
              <li>
                The journal carries advertisements both digitally and in print, all placed independently of
                editorial decisions.
              </li>
              <li>
                The journal and Publisher do not endorse any advertised product, service, or sponsor. Editorial
                content is kept free from influence by commercial or financial interests or advertiser
                arrangements.
              </li>
              <li>
                The journal and Publisher reserve the right to decline advertising that could damage the brand, is
                unsuitable for the content, or is misleading; all advertised claims must be verifiable.
              </li>
              <li>
                Advertisements will not be accepted if they are indecent, offensive, or discriminatory on the
                basis of personal, racial, ethnic, sexual orientation, or religious grounds.
              </li>
              <li>
                The journal and Publisher will not accept advertising for products known to be harmful to health,
                such as tobacco and alcohol.
              </li>
              <li>
                Even after an advertisement has gone live online, it can be withdrawn at any time if the journal
                or Publisher deems it inappropriate.
              </li>
              <li>
                Product advertorials may not target treatment- or drug-specific campaigns at particular articles
                covering related content.
              </li>
              <li>
                Advertisers must provide the Publisher with marketing authorization and a summary of product
                characteristics; drug advertisements must clearly state the full generic name of each active
                ingredient.
              </li>
              <li>
                Editorial decisions are never influenced by current or potential sponsors, advertisers, or
                marketing considerations.
              </li>
              <li>
                Complaints regarding advertisements are addressed on the Advertisements page in print copies
                only.
              </li>
            </ol>
          </section>
        </div>
      </div>
    </div>
  )
}