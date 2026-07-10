import styles from './Policy.module.css'

export default function Policy() {
  return (
    <div className={styles.pageBg}>
      <div className={styles.bodyLayout}>
        <div className={styles.pageContainer}>
          <h1 className={styles.pageHeading}>Policy</h1>
          <hr className={styles.divider} />

          <section className={styles.sectionCard}>
            <h2 className={styles.sectionTitle}>Editorial Policies and Publication Ethics</h2>

            <nav className={styles.tocNav} aria-label="Policy sections">
              <a href="#intro">Introduction</a>
              <span className={styles.tocDivider}>|</span>
              <a href="#editors">Duties and Responsibilities of Editors</a>
              <span className={styles.tocDivider}>|</span>
              <a href="#authors">Duties and Responsibilities of Authors</a>
              <span className={styles.tocDivider}>|</span>
              <a href="#reviewers">Duties and Responsibilities of Reviewers</a>
              <span className={styles.tocDivider}>|</span>
              <a href="#copyright">Copyright and Licensing</a>
              <span className={styles.tocDivider}>|</span>
              <a href="#misconduct">Handling Publication Malpractice or Research Misconduct</a>
              <span className={styles.tocDivider}>|</span>
              <a href="#references">References</a>
            </nav>

            {/* ============ 1.0 INTRODUCTION ============ */}
            <h3 id="intro" className={styles.subTitle}>1.0 Introduction</h3>
            <p>
              Scholarly publishing dates back to 1665, and the first peer-reviewed journal appeared in 1731. Today,
              scholarly communication runs largely through digital systems, forming a connected knowledge network
              that depends on everyone involved holding to consistent ethical standards.
            </p>
            <p>
              This policy sets out the practices expected of everyone involved in publishing with the journal. It is
              based on the Code of Conduct and Best Practice Guidelines for Journal Editors issued by the{' '}
              <a href="https://publicationethics.org/" target="_blank" rel="noreferrer">
                Committee on Publication Ethics (COPE)
              </a>.
            </p>

            {/* ============ 2.0 EDITORS ============ */}
            <h3 id="editors" className={styles.subTitle}>2. Duties and Responsibilities of Editors</h3>

            <h4 className={styles.subSubTitle}>2.1 Chief Responsibilities</h4>
            <ol className={styles.romanList}>
              <li>
                Chief Editors and Editors decide whether submitted manuscripts are accepted, based purely on the
                work's validity, originality, novelty, and fit with the journal's scope. They also ensure published
                material is properly archived, with digital support from the Publisher.
              </li>
              <li>
                Chief Editors and Editors evaluate manuscripts on intellectual merit alone, keep submissions
                confidential, and are responsible for deciding which articles are published and when.
              </li>
            </ol>

            <h4 className={styles.subSubTitle}>2.2 Editors with the Publisher</h4>
            <p>
              Editors work with the Publisher to continually improve the journal, update policies as needed, and
              maintain quality — while retaining independent editorial judgment on individual manuscripts. Together
              with editorial board members, they resolve disputes, support fair investigation of suspected
              misconduct (including hearing the accused party's response), and address any breaches of intellectual
              property or related legal issues.
            </p>

            <h4 className={styles.subSubTitle}>2.3 Editors with Authors</h4>
            <p>
              Editors aim to support authors and factor their feedback into how the journal is run. They watch for
              research or publication misconduct, and every manuscript is screened with plagiarism-detection
              software. Editors verify that authors have properly acknowledged funding, consent, and any required
              ethical approvals. Author instructions are kept accessible, and reviewer reports are shared with
              authors in full (barring anything offensive), with authors given the chance to respond.
            </p>

            <h4 className={styles.subSubTitle}>2.4 Editors with Reviewers</h4>
            <p>
              Editors assign manuscripts only to qualified, unbiased reviewers with relevant expertise, and maintain
              a reviewer database, removing anyone who consistently delivers poor reviews. They may guide reviewers
              on writing their reports, require confidentiality, and ask reviewers to declare conflicts of interest.
              Reviewers themselves are expected to disclose any competing interest before agreeing to review, may
              decline for conflict-of-interest or knowledge-gap reasons, must review fairly and flag any ethical
              concerns to the Chief Editor, and must keep submission content confidential while respecting review
              deadlines (extensions are at the Chief Editor's discretion).
            </p>

            <h4 className={styles.subSubTitle}>2.5 Editors with Editorial Board Members</h4>
            <p>
              Chief Editors recruit qualified board members and give them clear guidance on their roles. They
              consult board members on journal direction and challenges, and ensure members receive the training
              and tools needed for editorial work. In turn, board members are expected to actively support the
              journal, act as its ambassadors, and review manuscripts assigned to them.
            </p>

            <h4 className={styles.subSubTitle}>2.6 Disclosure and Conflicts of Interest</h4>
            <p>
              Editors may not disclose information from a manuscript under review, or use it for personal benefit.
              They must avoid commercial pressures that could compromise editorial standards, and must declare any
              financial or personal conflict of interest, stepping back from decisions on any affected manuscript.
              Editors submitting their own work to the journal must disclose this and stay out of that manuscript's
              review and decision process entirely.
            </p>

            <h4 className={styles.subSubTitle}>2.7 Timeliness of the Publication Process</h4>
            <p>
              Editors track how long each stage of publishing takes, from submission to acceptance or rejection,
              monitor reviewer and editor performance and any backlog, and aim to keep decisions and each issue's
              publication on schedule.
            </p>

            <h4 className={styles.subSubTitle}>2.8 Errata, Retractions and Clarifications</h4>
            <p>
              The journal follows{' '}
              <a
                href="https://www.icmje.org/recommendations/browse/publishing-and-editorial-issues/corrections-and-version-control.html"
                target="_blank"
                rel="noreferrer"
              >
                ICMJE recommendations
              </a>{' '}
              on corrections and version control. Errata, clarifications, or retractions are published as quickly
              as possible once an issue is identified after publication, and the corrected or retracted article is
              always directly linked to the original online.
            </p>

            {/* ============ 3.0 AUTHORS ============ */}
            <h3 id="authors" className={styles.subTitle}>3. Duties and Responsibilities of Authors</h3>

            <h4 className={styles.subSubTitle}>3.1 Authorship</h4>
            <p>
              Authorship is reserved for those who made a substantial contribution to the research and its write-up.
              All contributing co-authors must be listed and must agree to the submission. Any change to the author
              list, before or after publication, needs approval from the Chief Editors or Editors, and the
              corresponding author must confirm all co-authors have consented to the submission.
            </p>

            <h4 className={styles.subSubTitle}>3.2 Author Responsibilities</h4>
            <ol className={styles.romanList}>
              <li>
                Authors must report results honestly, with methods described clearly enough for others to repeat
                the work, and must flag any inaccuracy discovered after publication so it can be corrected. Authors
                remain accountable for their work's integrity.
              </li>
              <li>
                Submissions must be new, original work — not reproduced from elsewhere. Simultaneous submission to
                multiple journals is discouraged, though authors may resubmit elsewhere once formally rejected or
                after a withdrawal is accepted.
              </li>
            </ol>

            <h4 className={styles.subSubTitle}>3.3 Research Misconduct</h4>
            <p>
              Plagiarism, fabrication, and falsification are treated as research misconduct, and authors must avoid
              all three (see Section 6.0). Any such issue is reported to the Chief Editors, who investigate with
              the Publisher's support.
            </p>

            <h4 className={styles.subSubTitle}>3.4 Image Manipulation</h4>
            <p>
              Adding, removing, moving, or obscuring features within an image is not permitted. Adjustments for
              overall clarity — brightness, contrast, colour balance — are acceptable only if they don't hide or
              remove information present in the original. Suspected manipulation is referred to the Chief Editors,
              who may request original data for comparison; confirmed manipulation is treated as misconduct and can
              lead to rejection (see Section 6.0).
            </p>

            <h4 className={styles.subSubTitle}>3.5 Multiple, Redundant or Concurrent Publications</h4>
            <ol className={styles.romanList}>
              <li>
                Where a manuscript reuses previously published figures, data, or copyrighted material, authors must
                credit the source, secure permission from the original publisher, and cite the original work in the
                relevant caption.
              </li>
              <li>
                On submission, authors confirm the work hasn't been published or submitted elsewhere (preprints
                excepted). Concurrent submission of the same core research to more than one journal is not
                permitted — though publishing a related abstract, lecture, or thesis excerpt is fine.
              </li>
            </ol>

            <h4 className={styles.subSubTitle}>3.6 Disclosure and Conflicts of Interest</h4>
            <p>
              Any financial or personal interest that could influence an author's judgment — funding sources, stock
              ownership, patents, and similar — must be disclosed at submission. Failing to declare a conflict can
              undermine the journal's credibility.
            </p>

            <h4 className={styles.subSubTitle}>3.7 Availability of Materials and Data Access</h4>
            <p>
              Once accepted, authors agree to make underlying samples and data available to the scientific
              community for non-commercial use — this can include biological samples, sequence data, images, or
              statistical data. Manuscripts should include enough detail for the work to be repeated, with
              reasonable safeguards in place to protect authors' legitimate interests in how materials are reused.
            </p>

            <h4 className={styles.subSubTitle}>3.8 Biosecurity, Animal Use and Research Permits</h4>
            <p>
              The journal will not support research involving infectious agents that could be used as biological
              weapons; the editorial board reviews any manuscript that raises such concerns. All research must
              comply with relevant national laws, and studies involving animals or human subjects require prior
              approval from the appropriate ethics committee, available on request — misconduct here can void the
              submission. Studies using biological resources or samples need the relevant government permit, with
              the permit number listed in the methods section, and informed consent (with privacy protected) must
              be documented for any human-subject research.
            </p>

            <h4 className={styles.subSubTitle}>3.9 Reporting Guidelines</h4>
            <p>
              Authors should follow{' '}
              <a href="http://www.icmje.org/icmje-recommendations.pdf" target="_blank" rel="noreferrer">
                ICMJE
              </a>{' '}
              reporting standards, matched to study type:
            </p>
            <ul className={styles.bulletList}>
              <li>
                Randomized controlled trials —{' '}
                <a href="https://www.equator-network.org/reporting-guidelines/consort/" target="_blank" rel="noreferrer">
                  CONSORT
                </a>{' '}
                flowchart and checklist
              </li>
              <li>
                Observational studies —{' '}
                <a href="https://www.equator-network.org/reporting-guidelines/strobe/" target="_blank" rel="noreferrer">
                  STROBE
                </a>
              </li>
              <li>
                Systematic reviews and meta-analyses —{' '}
                <a href="https://www.equator-network.org/reporting-guidelines/prisma/" target="_blank" rel="noreferrer">
                  PRISMA
                </a>{' '}
                flowchart, or{' '}
                <a
                  href="https://abstracts.cochrane.org/sites/default/files/attachments/pdf/5364-5358.pdf"
                  target="_blank"
                  rel="noreferrer"
                >
                  QUOROM
                </a>
              </li>
              <li>
                Diagnostic accuracy studies —{' '}
                <a href="https://www.equator-network.org/reporting-guidelines/stard/" target="_blank" rel="noreferrer">
                  STARD
                </a>
              </li>
              <li>
                Case reports —{' '}
                <a href="https://www.equator-network.org/reporting-guidelines/care/" target="_blank" rel="noreferrer">
                  CARE
                </a>
              </li>
            </ul>
            <p>
              Further guidance is available from{' '}
              <a href="https://www.equator-network.org/reporting-guidelines/" target="_blank" rel="noreferrer">
                EQUATOR
              </a>{' '}
              and the{' '}
              <a href="https://www.nlm.nih.gov/services/research_report_guide.html" target="_blank" rel="noreferrer">
                NLM's Research Reporting Guidelines and Initiatives
              </a>.
            </p>

            <h4 className={styles.subSubTitle}>3.10 Article Processing Charges (APC)</h4>
            <p>Publishing in this journal carries no article-processing charge.</p>

            <h4 className={styles.subSubTitle}>3.11 Reviewer Suggestions</h4>
            <p>
              Peer review is double-blind. Authors may suggest suitable reviewers or ask to exclude specific
              individuals over a possible conflict of interest, but the final choice of reviewer rests with the
              journal's editors.
            </p>

            <h4 className={styles.subSubTitle}>3.12 Confidential Process</h4>
            <p>
              All correspondence between authors and the journal — emails, reviewer reports, and so on — is
              confidential. Authors may not post confidential material publicly without the journal's prior
              permission, whether the manuscript is ultimately published or rejected.
            </p>

            {/* ============ 4.0 REVIEWERS ============ */}
            <h3 id="reviewers" className={styles.subTitle}>4. Duties and Responsibilities of Reviewers</h3>

            <h4 className={styles.subSubTitle}>4.1 Peer Review Ethics</h4>
            <p>
              Review is double-blind, with two independent external reviewers chosen for relevant expertise and
              willingness to commit the necessary time; their comments guide both the publication decision and
              improvements to the manuscript. Reviewers assess submissions objectively against criteria like
              originality, significance, relevance, and evidence for the conclusions drawn, and check that methods
              and citations are properly presented. Reviews should avoid offensive or discourteous language and
              follow the journal's scope and quality guidelines. Reviews are typically due within two weeks, with
              extensions requiring editor approval, and reviewers must keep the manuscript and all related
              correspondence strictly confidential.
            </p>

            <h4 className={styles.subSubTitle}>4.2 Disclosure and Conflict of Interest</h4>
            <p>
              Reviewers whose own work conflicts or competes with the authors' will not be assigned that
              manuscript. Any potential conflict must be disclosed to the editors before a reviewer agrees to take
              on a manuscript, and editors decide whether to continue using a reviewer who discloses one. Reviewers
              may also decline a review outright over a conflict of interest or insufficient expertise.
            </p>

            {/* ============ 5.0 COPYRIGHT ============ */}
            <h3 id="copyright" className={styles.subTitle}>5.0 Copyright and Licensing</h3>
            <p>
              All open-access articles are published under the CC BY-NC 4.0 license (Creative Commons
              Attribution-Non-Commercial 4.0 International), allowing free use, distribution, and reproduction in
              any medium for non-commercial purposes, provided the original work is properly cited. Full license
              text is available at{' '}
              <a href="http://creativecommons.org/licenses/by-nc/4.0/legalcode" target="_blank" rel="noreferrer">
                creativecommons.org/licenses/by-nc/4.0/legalcode
              </a>.
            </p>
            <p>
              At submission, authors complete the Open Access License Agreement Form, confirming that:
            </p>
            <ol className={styles.numberedList}>
              <li>Authors retain copyright of their own article.</li>
              <li>Authors grant the Publisher exclusive commercial and publishing rights.</li>
            </ol>
            <p>
              Commercial use of an article requires explicit permission from the Publisher, via{' '}
              <a href="mailto:journals.permissions@jaypeebrothers.com">journals.permissions@jaypeebrothers.com</a>.
              Authors may also deposit the final electronic version in an institutional or centrally organized
              subject repository once published, provided they link to the published version and correctly
              attribute the journal and Publisher as the place of original publication.
            </p>

            {/* ============ 6.0 MISCONDUCT ============ */}
            <h3 id="misconduct" className={styles.subTitle}>
              6.0 Handling Publication Malpractice or Research Misconduct
            </h3>

            <h4 className={styles.subSubTitle}>6.1 Definition of Publication Malpractice or Research Misconduct</h4>
            <p>
              The journal follows the U.S. Public Health Service's definition (42 CFR Part 93, June 2005), under
              which research misconduct means fabricating, falsifying, or plagiarizing in proposing, performing, or
              reviewing research, or in reporting results:
            </p>
            <ul className={styles.bulletList}>
              <li>Fabrication — inventing data or results and recording or reporting them as real.</li>
              <li>
                Falsification — manipulating materials, equipment, or processes, or altering/omitting data so the
                research record no longer accurately reflects the work.
              </li>
              <li>Plagiarism — using another person's ideas, process, results, or words without proper credit.</li>
              <li>Honest error or a genuine difference of opinion is not considered misconduct.</li>
            </ul>
            <p>
              This section also draws on the Code of Conduct and Best Practice Guidelines from COPE, WAME, and
              ICMJE.
            </p>

            <h4 className={styles.subSubTitle}>6.2 Provision for Action</h4>
            <p>
              Allegations of misconduct are directed to the Chief Editors, who follow COPE's Core Practices and
              Ethical Oversight Flowcharts — covering duplicate publication, plagiarism, fabricated data,
              authorship disputes, undisclosed conflicts of interest, and reviewer misconduct. A misconduct finding
              requires compelling evidence of a significant, intentional or reckless departure from accepted
              research or publication practice. Where fabricated data or misconduct is found in a published
              article, the corresponding authors receive a copy for signed comment, which may be sent back to the
              original reviewers, and the matter may be referred to the authors' institution. Clear plagiarism in a
              submission leads to rejection or required revision after the authors respond; in a published article,
              it results in retraction or a corrigendum (Section 6.3). The respondent has access to all materials
              related to the case and may appeal a decision within 30 days of being notified.
            </p>

            <h4 className={styles.subSubTitle}>6.3 Erratum, Corrigendum, Retractions and Addendums</h4>
            <p>
              The journal corrects previously published, peer-reviewed articles as needed: an <strong>erratum</strong>{' '}
              for an error made by the journal, a <strong>corrigendum</strong> for an author error, a{' '}
              <strong>retraction</strong> for invalid or unsound work, or an <strong>addendum</strong> for additional
              information about a published article. Confirmed serious misconduct can lead to sanctions ranging from
              article retraction to a ban on future submissions. Investigation outcomes may be published on the
              journal's website to inform the community, though the names of those found responsible are withheld
              from any public report.
            </p>

            {/* ============ 7.0 REFERENCES ============ */}
            <h3 id="references" className={styles.subTitle}>7.0 References</h3>
            <ol className={styles.numberedList}>
              <li>
                COPE Code of Conduct | Committee on Publication Ethics (2025).{' '}
                <a href="https://publicationethics.org/membership/cope-code-of-conduct" target="_blank" rel="noreferrer">
                  publicationethics.org/membership/cope-code-of-conduct
                </a>
              </li>
              <li>
                Core Practices | Committee on Publication Ethics (2025).{' '}
                <a href="https://publicationethics.org/about/what-we-do/our-story/core-practices" target="_blank" rel="noreferrer">
                  publicationethics.org/about/what-we-do/our-story/core-practices
                </a>
              </li>
              <li>
                Council of Science Editors (2018). CSE's White Paper on Promoting Integrity in Scientific Journal
                Publications.{' '}
                <a
                  href="https://www.seaairweb.info/journal/3.CouncilofScientific-Editors-White-Paper.pdf"
                  target="_blank"
                  rel="noreferrer"
                >
                  seaairweb.info
                </a>
              </li>
              <li>
                The European Code of Conduct for Research Integrity (2023).{' '}
                <a
                  href="https://allea.org/wp-content/uploads/2023/06/European-Code-of-Conduct-Revised-Edition-2023.pdf"
                  target="_blank"
                  rel="noreferrer"
                >
                  allea.org
                </a>
              </li>
              <li>
                Public Health Service Policies on Research Misconduct — 42 CFR Part 93 (June 2005).{' '}
                <a
                  href="https://ori.hhs.gov/public-health-service-phs-policies-research-misconduct-%E2%80%93-42-cfr-part-93-%E2%80%93-june-2005"
                  target="_blank"
                  rel="noreferrer"
                >
                  ori.hhs.gov
                </a>
              </li>
              <li>
                International Committee of Medical Journal Editors.{' '}
                <a href="http://www.icmje.org/recommendations/" target="_blank" rel="noreferrer">
                  icmje.org/recommendations
                </a>
              </li>
              <li>
                World Association of Medical Editors (WAME).{' '}
                <a href="https://www.wame.org/policies" target="_blank" rel="noreferrer">
                  wame.org/policies
                </a>
              </li>
            </ol>
          </section>
        </div>
      </div>
    </div>
  )
}