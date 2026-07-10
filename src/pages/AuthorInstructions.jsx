import styles from './AuthorInstructions.module.css'
import figImg from '../assets/fig.png'
import tabImg from '../assets/tab.png'
import watermarkImg from '../assets/watermark.png'

const abstractTable = [
  { col: 'Primary Research', rows: ['Aim & Background', 'Methods', 'Results', 'Conclusion', 'Clinical Significance'] },
  { col: 'Literature Reviews', rows: ['Aim & Background', 'Methods', 'Results', 'Conclusion', 'Clinical Significance'] },
  { col: 'Case Reports', rows: ['Aim & Background', 'Case Description', 'Conclusion', 'Clinical Significance', ''] },
  { col: 'Clinical Techniques', rows: ['Aim & Background', 'Technique', 'Conclusion', 'Clinical Significance', ''] },
]

const bodyTable = [
  { col: 'Primary Research', rows: ['Introduction', 'Materials & Methods', 'Results', 'Discussion', 'Conclusion', 'Clinical Significance', 'References'] },
  { col: 'Literature Reviews', rows: ['Introduction', 'Methods', 'Results', 'Discussion', 'Conclusion', 'Clinical Significance', 'References'] },
  { col: 'Case Reports', rows: ['Introduction', 'Case Description', 'Discussion', 'Conclusion', 'Clinical Significance', '', ''] },
  { col: 'Clinical Techniques', rows: ['Introduction', 'Technique', 'Discussion', 'Conclusion', 'Clinical Significance', '', ''] },
]

const reportingTemplates = [
  { checklist: 'CARE', design: 'For Case Reports', href: 'https://d45jl3w9libvn.cloudfront.net/jaypee/static/journals/AACS/supp/CARE_Checklist.docx' },
  { checklist: 'CONSORT', design: 'For Randomized Controlled Trials', href: 'https://d45jl3w9libvn.cloudfront.net/jaypee/static/journals/AACS/supp/CONSORT_Checklist.doc' },
  { checklist: 'PRISMA', design: 'For Systematic Review and Meta-analyses', href: 'https://d45jl3w9libvn.cloudfront.net/jaypee/static/journals/AACS/supp/PRISMA_2020_checklist.pdf' },
  { checklist: 'STROBE', design: 'For Observational Studies', href: 'https://d45jl3w9libvn.cloudfront.net/jaypee/static/journals/AACS/supp/STROBE_Checklist.doc' },
  { checklist: 'SPIRIT', design: 'For Clinical Trials Protocol studies', href: 'https://d45jl3w9libvn.cloudfront.net/jaypee/static/journals/AACS/supp/SPIRIT_Checklist.pdf' },
]

function StructureTable({ data }) {
  const maxRows = Math.max(...data.map((d) => d.rows.length))
  return (
    <div className={styles.tableWrap}>
      <table className={styles.dataTable}>
        <thead>
          <tr>
            {data.map((d) => (
              <th key={d.col}>{d.col}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {Array.from({ length: maxRows }).map((_, i) => (
            <tr key={i}>
              {data.map((d) => (
                <td key={d.col}>{d.rows[i] || ''}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default function AuthorInstructions() {
  return (
    <div className={styles.pageBg}>
      <img
        src={watermarkImg}
        alt=""
        aria-hidden="true"
        className={styles.watermark}
      />
      {/* ============ HEADING + DIVIDER + TOC — sits directly on the page, NOT inside the white card ============ */}
      <div className={styles.tocWrapper}>
        <h1 className={styles.pageHeading}>Author Instructions</h1>
        <hr className={styles.divider} />

        <nav className={styles.tocNav} aria-label="Author Instructions sections">
          <ul>
            <li><a href="#s1">General Instructions for Online Submissions</a></li>
            <li>
              <a href="#s2">Editorial and peer review process</a>
              <ul>
                <li><a href="#s2a">Process for appeals</a></li>
              </ul>
            </li>
            <li><a href="#s3">Article processing charges</a></li>
            <li><a href="#s4">Publication schedule</a></li>
            <li><a href="#s5">Copyright and Licensing</a></li>
            <li><a href="#s7">Types of manuscripts</a>
              <ul>
                <li><a href="#s7a">Reporting guidelines</a></li>
              </ul>
            </li>
            <li><a href="#s8">Manuscript preparation</a></li>
            <li><a href="#s9">Manuscript submission</a></li>
            <li><a href="#s10">Guidelines to send a revised manuscript</a></li>
            <li><a href="#s11">Accepted manuscripts</a></li>
            <li><a href="#s12">Reprints</a></li>
            <li><a href="#s13">Editorial office contact</a></li>
            <li><a href="#s14">Checklist for submission</a></li>
            <li><a href="#s15">Document templates</a></li>
            <li><a href="#s16">Reporting guidelines templates</a></li>
            <li>
              <a href="#s17">Editorial and Publishing policies</a>
              <ul>
                <li><a href="#s17a">Anti-plagiarism policy</a></li>
                <li><a href="#s17b">Protection of research participants</a></li>
                <li><a href="#s17c">Patient consent for publication of case reports</a></li>
                <li><a href="#s17d">Ethics committee approvals and patient consent for research studies</a></li>
                <li><a href="#s17e">Animal studies</a></li>
                <li><a href="#s17f">Clinical trials</a></li>
                <li><a href="#s17g">Data availability statement</a></li>
                <li><a href="#s17h">Authorship</a></li>
                <li><a href="#s17i">Disclosures of conflict of interest</a></li>
                <li><a href="#s17j">Sources of funding</a></li>
                <li><a href="#s17k">Data ownership and permissions</a></li>
                <li><a href="#s17l">Preprints</a></li>
              </ul>
            </li>
          </ul>
        </nav>
      </div>

      {/* ============ WHITE CARD — only wraps the body sections below the TOC ============ */}
      <div className={styles.pageContainer}>
        {/* ============ 1. GENERAL INSTRUCTIONS ============ */}
        <h2 id="s1" className={styles.subTitle}>General Instructions for Online Submissions</h2>
        <p>
          Authors submit their manuscripts to <strong>Advances in Anatomy and Clinical Sciences</strong> through a
          web-based manuscript tracking system (MTS), which is also used to submit revisions, upload supporting
          documents, and track a submission's status. The same system handles all correspondence between the
          editorial office, editors, reviewers, and authors. First-time users should register at the{' '}
          <a href="https://www.aacsj.com/manuscriptTrack/AACS" target="_blank" rel="noreferrer">Manuscript Tracker</a>{' '}
          before submitting. Submissions are accepted on the understanding that the work is original and has not
          been published or is not under consideration elsewhere. Questions can be sent to the Editor-in-Chief at{' '}
          <a href="mailto:editor@aacsj.com">editor@aacsj.com</a>.
        </p>

        {/* ============ 2. EDITORIAL AND PEER REVIEW ============ */}
        <h2 id="s2" className={styles.subTitle}>Editorial and Peer Review Process</h2>
        <p>
          Every submission is acknowledged and run through a plagiarism check, along with an initial screening to
          confirm it follows the author instructions and submission guidelines. One author must be designated as
          the corresponding author for all communication with the journal. The Managing Editor performs this
          initial check and may return the manuscript to the authors for corrections before it proceeds.
        </p>
        <p>
          Manuscripts that pass the initial check move to editorial review, where the Editor-in-Chief assesses
          suitability for the journal's readership and, if suitable, assigns it to an Associate Editor, Editor, or
          Editorial Board Member. This stage takes 5–7 working days; unsuitable manuscripts are rejected
          immediately without external review, and authors are notified.
        </p>
        <p>
          Manuscripts that pass editorial review go to external peer review, with a minimum of two independent
          expert reviewers assessing scientific quality under a double-blind process. The Editor-in-Chief makes
          the final call — revise, accept, or reject — based on reviewer feedback, and authors receive the first
          decision within 4–5 weeks of submission. If revision is requested, authors must respond point-by-point
          to reviewer comments and resubmit; decisions on revised manuscripts follow within 4 weeks of
          resubmission, and this cycle repeats until everyone is satisfied. Progress can be tracked at{' '}
          <a href="https://www.aacsj.com/manuscriptTrack/AACS" target="_blank" rel="noreferrer">
            aacsj.com/manuscriptTrack/AACS
          </a>.
        </p>
        <p>
          Manuscripts are judged on significance, originality, clarity, and fit with the journal's scope — studies
          that challenge existing published research or report well-powered negative results are welcome too.
          Submissions from Editorial Board members are screened by the Editor-in-Chief and sent to external
          reviewers; submissions authored by the Editor-in-Chief are handled entirely by other board members, with
          the final call made by an Associate Editor/Editor. Any board member who is also an author is excluded
          from that manuscript's review and decision, and the same conflict-of-interest exclusion applies to
          reviewers or editors affiliated with the same institution as the submitting authors.
        </p>

        <h3 id="s2a" className={styles.subSubTitle}>Process for Appeals</h3>
        <p>
          Authors with a genuine reason to believe a paper was wrongly rejected may appeal by emailing{' '}
          <a href="mailto:editor@jaypeebrothers.com">editor@jaypeebrothers.com</a> or{' '}
          <a href="mailto:editor@aacsj.com">editor@aacsj.com</a> with a detailed basis for the appeal and any
          supporting evidence. The editorial office acknowledges the appeal, conducts an unbiased review, and
          responds within 6–8 weeks. The paper must not be submitted elsewhere while an appeal is pending. The
          Editor-in-Chief's decision is final, and second appeals are not considered.
        </p>

        {/* ============ 3. APC ============ */}
        <h2 id="s3" className={styles.subTitle}>Article Processing Charges</h2>
        <p>There is no article processing charge for publishing in this journal.</p>

        {/* ============ 4. SCHEDULE ============ */}
        <h2 id="s4" className={styles.subTitle}>Publication Schedule</h2>
        <p><strong>Advances in Anatomy and Clinical Sciences</strong> publishes biannually.</p>

        {/* ============ 5. COPYRIGHT ============ */}
        <h2 id="s5" className={styles.subTitle}>Copyright and Licensing</h2>
        <p>
          Under Creative Commons terms, authors retain copyright of their work while assigning the Publisher
          exclusive commercial re-use rights. All open-access articles are distributed under the CC BY-NC 4.0
          license (Creative Commons Attribution-Non-Commercial 4.0 International, currently at{' '}
          <a href="http://creativecommons.org/licenses/by-nc/4.0/legalcode" target="_blank" rel="noreferrer">
            creativecommons.org/licenses/by-nc/4.0/legalcode
          </a>), permitting free use, distribution, and reproduction in any medium for non-commercial purposes
          provided the original is properly cited.
        </p>
        <p>
          Authors must submit the{' '}
          <a
            href="https://d45jl3w9libvn.cloudfront.net/jaypee/static/journals/AACS/supp/OA_License_Agreement.docx"
            target="_blank"
            rel="noreferrer"
          >
            Open Access License Agreement Form
          </a>{' '}
          with their manuscript. Published articles are freely available online without subscription barriers, and
          users may use, reproduce, disseminate, or display them for personal, research, and educational purposes
          provided that:
        </p>
        <ul className={styles.bulletList}>
          <li>Original authorship is properly and fully attributed.</li>
          <li>The journal and Publisher are credited as the original place of publication, with correct citation details.</li>
          <li>Any partial reproduction or derivative work is clearly indicated as such.</li>
          <li>
            No article is reproduced for commercial use without prior Publisher consent — commercial licensing
            requests go to{' '}
            <a href="mailto:journals.permissions@jaypeebrothers.com">journals.permissions@jaypeebrothers.com</a>.
          </li>
          <li>
            Authors may deposit the final electronic version in an institutional or subject repository once
            published, with a link to the published version and correct attribution to the journal and Publisher.
          </li>
        </ul>

        {/* ============ 17 EDITORIAL & PUBLISHING POLICIES ============ */}
        <h2 id="s17" className={styles.subTitle}>Editorial and Publishing Policies</h2>

        <h3 id="s17a" className={styles.subSubTitle}>Anti-plagiarism Policy</h3>
        <p>
          The journal uses the World Association of Medical Editors' (WAME) definition of plagiarism: using
          someone else's published or unpublished ideas or words without attribution or permission and presenting
          them as new, whether the source is an abstract, a grant application, an IRB application, or a published
          or unpublished manuscript in any format.
        </p>
        <p>
          The journal enforces a strict anti-plagiarism stance and investigates any allegation of plagiarism or
          unauthorized reuse of published content to protect authors' rights and the journal's reputation. Every
          submission is run through duplication-checking software. Confirmed plagiarism is handled according to
          COPE guidelines; if discovered after publication, the journal investigates and — depending on the
          outcome — may notify the authors' institution and funders, retract the article, or pursue legal action.
          Plagiarism can be reported to <a href="mailto:editor@jaypeebrothers.com">editor@jaypeebrothers.com</a>.
          Broader policy on misconduct is on the{' '}
          <a href="https://www.aacsj.com/journal/AACS/page/policy" target="_blank" rel="noreferrer">Policy page</a>.
        </p>

        <h3 id="s17b" className={styles.subSubTitle}>Protection of Research Participants</h3>
        <p>The journal follows ICMJE recommendations:</p>
        <ol className={styles.numberedList}>
          <li>
            Human research must be planned, conducted, and reported in line with the 2013 revision of the
            Declaration of Helsinki, with prior approval from the relevant ethics committee or institutional
            review board.
          </li>
          <li>
            Identifying details — names, initials, hospital numbers, photographs, pedigrees — should not be
            published unless scientifically essential and the patient (or guardian) gives written informed
            consent, having been told whether identifiable material may appear online as well as in print.
          </li>
          <li>
            Non-essential identifying details should be omitted, with informed consent obtained wherever anonymity
            is in doubt (masking only the eyes in a photo, for example, is not sufficient — digital removal of
            identifying features is advised instead, without altering the data's interpretation).
          </li>
        </ol>

        <h3 id="s17c" className={styles.subSubTitle}>Patient Consent for Publication of Case Reports</h3>
        <p>
          Following CARE guidelines, written informed consent from the patient or legal guardian is required for
          any clinical or imaging detail included in a manuscript, and the manuscript must state that this consent
          was obtained.
        </p>
        <ul className={styles.bulletList}>
          <li>If the patient is deceased or incapacitated, consent must come from relatives, and this must be stated.</li>
          <li>
            If consent cannot be obtained from either the patient or relatives, the head of the medical team or
            the IRB must take responsibility for anonymizing the patient, stated accordingly.
          </li>
          <li>If the IRB has waived informed consent, this must be stated in the manuscript.</li>
          <li>For a child or minor patient, consent must come from a parent or legal guardian and be documented.</li>
        </ul>
        <p>
          Download the{' '}
          <a
            href="https://d45jl3w9libvn.cloudfront.net/jaypee/static/journals/AACS/supp/Patient_consent_form.docx"
            target="_blank"
            rel="noreferrer"
          >
            Patient Consent Form
          </a>.
        </p>

        <h3 id="s17d" className={styles.subSubTitle}>
          Ethics Committee Approvals and Patient Consent for Participation in Research Studies
        </h3>
        <p>Any paper involving human participants, data, or tissue must state:</p>
        <ol className={styles.numberedList}>
          <li>The name of the approving ethics committee or institutional review board.</li>
          <li>The approval number and date.</li>
        </ol>
        <p>
          If ethical approval was not required or was exempt, the manuscript must state this along with the
          reason. It must also state whether written or verbal informed consent to participate was obtained, or
          note if the Ethics Committee/IRB waived this requirement as impossible or impracticable to obtain.
        </p>

        <h3 id="s17e" className={styles.subSubTitle}>Animal Studies</h3>
        <p>
          The journal does not consider animal research or animal studies for publication — such submissions are
          rejected without review.
        </p>

        <h3 id="s17f" className={styles.subSubTitle}>Clinical Trials</h3>
        <p>
          The journal follows{' '}
          <a
            href="https://www.icmje.org/recommendations/browse/publishing-and-editorial-issues/clinical-trial-registration.html"
            target="_blank"
            rel="noreferrer"
          >
            ICMJE recommendations
          </a>{' '}
          on trial registration, which define a clinical trial as any research project that prospectively assigns
          people to an intervention — with or without a comparison group — to study a health-related intervention
          and outcome.
        </p>
        <ol className={styles.numberedList}>
          <li>
            Trials must be registered in a public registry at or before first patient enrollment; a substantial
            delay between registration and posting needs an explanatory letter from the authors.
          </li>
          <li>
            An acceptable registry must capture at minimum the 24-item WHO/ICMJE trial registration data set at
            the time of registration, before the first participant is enrolled.
          </li>
          <li>Secondary analyses of a primary trial should reference that trial's registration number rather than register separately.</li>
          <li>
            Authors are responsible for meeting their funder's and regulator's requirements for reporting
            aggregate results in trial registries, and for explaining any discrepancy between registry results and
            the journal publication.
          </li>
          <li>Authors must follow ICMJE's data-sharing policy for clinical trials.</li>
        </ol>

        <h3 id="s17g" className={styles.subSubTitle}>Data Availability Statement</h3>
        <p>
          Articles reporting results from research data must include a Data Availability Statement explaining
          where the supporting data can be found — for example, in a named repository, a public-domain resource,
          within the article or its supplementary material, available on request from a named contact, or
          releasable after an embargo due to commercial restrictions. Where data is not publicly available, the
          manuscript must say so along with any conditions for accessing it.
        </p>

        <h3 id="s17h" className={styles.subSubTitle}>Authorship</h3>
        <p>
          The journal follows ICMJE's authorship criteria — everyone listed as an author must meet all four, and
          everyone who meets all four should be listed:
        </p>
        <ul className={styles.bulletList}>
          <li>A substantial contribution to the work's conception, design, data acquisition, analysis, or interpretation; AND</li>
          <li>Drafting the work or critically revising it for important intellectual content; AND</li>
          <li>Final approval of the version to be published; AND</li>
          <li>Agreement to be accountable for all aspects of the work's accuracy and integrity.</li>
        </ul>
        <p>
          It is the authors' collective responsibility — not the journal's — to confirm everyone listed meets
          these criteria; editors don't arbitrate authorship disputes or decide who qualifies. Author order is
          decided by the author group, not the editors. One author must be designated corresponding author,
          responsible for communication with the journal throughout submission, review, and publication, and
          remaining reachable after publication for any follow-up requests.
        </p>

        <h4 className={styles.subSubSubTitle}>Changes to Authorship</h4>
        <p>
          The author list is considered final once the Open Access License Agreement form is signed at
          submission; requests to add or remove an author afterward are not normally accepted. Genuine cases
          require the{' '}
          <a
            href="https://d45jl3w9libvn.cloudfront.net/jaypee/static/journals/AACS/supp/Change_in_authorship.docx"
            target="_blank"
            rel="noreferrer"
          >
            Authorship Change Request Form
          </a>, signed by all listed authors plus the author being added or removed, sent to{' '}
          <a href="mailto:editor@aacsj.com">editor@aacsj.com</a> with a letter explaining the reason. The
          Editor-in-Chief reviews each request individually.
        </p>

        <h4 className={styles.subSubSubTitle}>Author Identification</h4>
        <p>
          All authors must provide an ORCID iD at submission; registration is free at{' '}
          <a href="https://orcid.org/register" target="_blank" rel="noreferrer">orcid.org/register</a>.
        </p>

        <h4 className={styles.subSubSubTitle}>Author Contributions</h4>
        <p>
          Authors must describe their individual roles using the CRediT (Contributor Roles Taxonomy) framework,
          which offers 14 role categories and allows more than one per author — see{' '}
          <a href="https://credit.niso.org/" target="_blank" rel="noreferrer">credit.niso.org</a> for details.
        </p>

        <h4 className={styles.subSubSubTitle}>Non-author Contributorship / Acknowledgement</h4>
        <p>
          Anyone contributing but not meeting all four authorship criteria should be acknowledged rather than
          listed as an author. The Acknowledgements section should specify: general support (e.g., from a
          department chair); technical help; writing, editing, or proofreading assistance; and financial or
          material support, describing its nature. The corresponding author must obtain written permission from
          everyone named in acknowledgements. Download the{' '}
          <a
            href="https://d45jl3w9libvn.cloudfront.net/jaypee/static/journals/AACS/supp/Acknowledgement_form.docx"
            target="_blank"
            rel="noreferrer"
          >
            Acknowledgement Form
          </a>.
        </p>

        <h3 id="s17i" className={styles.subSubTitle}>Disclosures of Conflict of Interest</h3>
        <p>
          Conflicts of interest can be financial or non-financial. Authors must disclose any financial interest or
          affiliation with institutions, organizations, or companies referenced in the manuscript, and any
          competing interest that could appear to bias the work. If an author is an editorial board member, this
          must be stated. All authors must complete the{' '}
          <a
            href="https://d45jl3w9libvn.cloudfront.net/jaypee/static/journals/AACS/supp/ICMJE_disclosure.docx"
            target="_blank"
            rel="noreferrer"
          >
            ICMJE Disclosure Form
          </a>{' '}
          at submission.
        </p>

        <h3 id="s17j" className={styles.subSubTitle}>Sources of Funding</h3>
        <p>
          Authors must declare all funding received for the submitted research, including funder name, award
          number, grant recipient, and the funder's role. If there was no funding, the manuscript should state
          this explicitly.
        </p>

        <h3 id="s17k" className={styles.subSubTitle}>Data Ownership and Permissions</h3>
        <p>
          Figures, data tables, and charts submitted must be owned by the author(s); otherwise, permission from
          the original copyright holder is required for reuse, and securing it is the author's sole
          responsibility, completed before acceptance. Credit for any copyrighted material must appear in the
          figure legend along with a statement that permission was obtained.
        </p>

        <h3 id="s17l" className={styles.subSubTitle}>Preprints</h3>
        <p>
          Papers previously posted to preprint servers are welcome. Authors should note this on the title page,
          naming the preprint server and DOI. The preprint should not be updated with a new version while under
          peer review, and once accepted, authors must link the preprint entry to the final published version.
        </p>

        {/* ============ 7. TYPES OF MANUSCRIPTS ============ */}
        <h2 id="s7" className={styles.subTitle}>Types of Manuscripts</h2>
        <p>
          All submission types follow the standard format described under Manuscript Components below.
        </p>

        <h3 id="s7a" className={styles.subSubTitle}>Reporting Guidelines</h3>
        <p>
          Authors should follow the relevant{' '}
          <a href="https://www.equator-network.org/reporting-guidelines/" target="_blank" rel="noreferrer">
            EQUATOR Network reporting guideline
          </a>{' '}
          for their study type and upload the matching checklist at submission. The{' '}
          <a href="https://www.goodreports.org/" target="_blank" rel="noreferrer">EQUATOR wizard</a> can help
          identify the correct checklist; further resources are at the{' '}
          <a href="https://www.nlm.nih.gov/services/research_report_guide.html" target="_blank" rel="noreferrer">
            NLM's Research Reporting Guidelines and Initiatives
          </a>.
        </p>

        <h4 className={styles.subSubSubTitle}>Editorials</h4>
        <p>
          Solicited commentary and analysis on an article appearing in the same issue, which may include figures
          and tables. Limit: 1000 words, up to 10 references.
        </p>

        <h4 className={styles.subSubSubTitle}>Original Articles</h4>
        <p>Reports of original clinical or basic research form the journal's primary content.</p>
        <ul className={styles.bulletList}>
          <li>
            Types include randomized controlled trials, intervention studies, screening/diagnostic test studies,
            outcome studies, cost-effectiveness analyses, case-control series, and high-response-rate surveys.
          </li>
          <li>Clinical trial studies must give the trial registry number in both the abstract and the Methods section, plus a statement on protocol availability.</li>
          <li>
            Randomized controlled trials must follow{' '}
            <a
              href="https://d45jl3w9libvn.cloudfront.net/jaypee/static/journals/AACS/supp/CONSORT_Checklist.doc"
              target="_blank"
              rel="noreferrer"
            >
              CONSORT
            </a>{' '}
            guidelines, with a completed flow chart submitted as a cited figure and the checklist uploaded as a
            supplementary file.
          </li>
          <li>
            Observational studies should follow the{' '}
            <a
              href="https://d45jl3w9libvn.cloudfront.net/jaypee/static/journals/AACS/supp/STROBE_Checklist.doc"
              target="_blank"
              rel="noreferrer"
            >
              STROBE
            </a>{' '}
            statement, with the completed checklist attached.
          </li>
          <li>
            Cost/health outcome evaluations should follow{' '}
            <a
              href="https://d45jl3w9libvn.cloudfront.net/jaypee/static/journals/AACS/supp/CHEERS-2022-checklist.pdf"
              target="_blank"
              rel="noreferrer"
            >
              CHEERS
            </a>{' '}
            guidelines, checklist included.
          </li>
          <li>Text: 3000–5000 words; abstract up to 250 words; up to 5 tables/figures combined; up to 40 references.</li>
        </ul>

        <h4 className={styles.subSubSubTitle}>Review Articles</h4>
        <ul className={styles.bulletList}>
          <li>Types include systematic reviews, meta-analyses, narrative reviews, and scoping reviews.</li>
          <li>
            Systematic reviews should be prospectively registered in a registry such as{' '}
            <a href="https://www.crd.york.ac.uk/prospero/" target="_blank" rel="noreferrer">PROSPERO</a>, with the
            registry number given under Methodology, per{' '}
            <a
              href="https://d45jl3w9libvn.cloudfront.net/jaypee/static/journals/AACS/supp/PRISMA_2020_checklist.pdf"
              target="_blank"
              rel="noreferrer"
            >
              PRISMA
            </a>{' '}
            recommendations.
          </li>
          <li>Any previously published or deposited review protocol should be mentioned in the manuscript.</li>
          <li>Systematic reviews/meta-analyses must follow PRISMA, with a cited flow chart figure and the completed checklist uploaded.</li>
          <li>Length: 3000–5000 words; up to 6 tables/figures combined; up to 50 references.</li>
        </ul>

        <h4 className={styles.subSubSubTitle}>Case Reports</h4>
        <p>
          The journal welcomes case reports highlighting practical diagnostic or management insights, covering
          one to three patients, with no identifying information in text, images, or pedigrees.
        </p>

        <h4 className={styles.subSubSubTitle}>Case Series</h4>
        <p>
          A descriptive study format presenting a series of cases of a disease or clinical pattern observed in
          practice.
        </p>

        <h4 className={styles.subSubSubTitle}>Letters to the Editor</h4>
        <p>
          Accepted for issues raised by articles published in the journal within the last 6 months, limited to
          1000 words and 4 references. Not all letters are published; those selected may be forwarded to the
          original authors or relevant experts for a response, and are typically published alongside that reply.
        </p>

        <h4 className={styles.subSubSubTitle}>Announcements</h4>
        <p>
          Conference, meeting, course, and award announcements of interest to readers, up to 200–300 words, with
          a contact name and address for further information.
        </p>

        {/* ============ 8. MANUSCRIPT PREPARATION ============ */}
        <h2 id="s8" className={styles.subTitle}>Manuscript Preparation</h2>
        <p>Submissions require the following as separate documents:</p>
        <ul className={styles.bulletList}>
          <li>Cover letter</li>
          <li>Title page</li>
          <li>Main article — research article, case report, or review article</li>
          <li>Figure/table/graph/flowchart file with descriptive legends</li>
          <li>Supplemental content</li>
          <li>Reporting guideline checklist as a supplementary file</li>
        </ul>

        <h3 className={styles.subSubTitle}>Manuscript Components</h3>
        <p>
          Submit as a Microsoft Word 97-2013 or newer document, double-spaced with 1-inch margins, left-justified,
          in the "Normal" Word style (Arial 12-point preferred), with all pages numbered. See the{' '}
          <a href="#s15">document templates</a> for reference.
        </p>

        <h4 className={styles.subSubSubTitle}>Cover Letter</h4>
        <p>A letter to the Editor-in-Chief explaining why the journal should consider the manuscript.</p>

        <h4 className={styles.subSubSubTitle}>Title Page</h4>
        <p>
          <strong>Title —</strong> Appears at the top of the first page, clearly describing the article and
          avoiding abbreviations; it should note the study design (e.g., "case-control study," "systematic
          review").
        </p>
        <p>
          <strong>Name and affiliation —</strong> Each author's full name, highest degree(s), and designation,
          plus department/institution and full address (city, state, country) for each. ORCID must be included,
          and the corresponding author clearly identified. Author order must be settled before submission — see{' '}
          <a href="#s17h">Authorship</a> for post-submission changes.
        </p>
        <p>
          <strong>Author name indexing —</strong> Authors should be listed First–Middle–Surname; "JR Doe" or "Jane
          Robert Doe" will be indexed in citations as "Doe JR."
        </p>
        <p>
          <strong>Change of affiliation —</strong> If an author's affiliation changes before publication, the
          listed affiliation should reflect where most of the work was done, with current details in a footnote or
          acknowledgement.
        </p>
        <p>
          <strong>Corresponding address —</strong> Name, address, phone, fax, and email of the corresponding
          author.
        </p>
        <p>
          <strong>Running head —</strong> A short title of no more than 45 characters including spaces.
        </p>

        <h4 className={styles.subSubSubTitle}>Declarations Page</h4>
        <p>
          A separate document listing the following; any not applicable should still be listed with "Not
          applicable" and a brief reason:
        </p>
        <ul className={styles.bulletList}>
          <li>Ethics approval and patient consent to participate</li>
          <li>Patient consent for publication</li>
          <li>Animal studies</li>
          <li>Author contributions</li>
          <li>Acknowledgments</li>
          <li>Conflict of interest</li>
          <li>Sources of funding</li>
          <li>Availability of data and materials</li>
          <li>Clinical trial registry number</li>
          <li>PROSPERO registry number</li>
        </ul>

        <h4 className={styles.subSubSubTitle}>Supplementary Materials</h4>
        <ul className={styles.bulletList}>
          <li>Copies of permissions</li>
          <li>Reporting guidelines checklist</li>
        </ul>

        <h3 className={styles.subSubTitle}>Main Article</h3>

        <h4 className={styles.subSubSubTitle}>Abstract</h4>
        <p>
          A structured abstract of roughly 200–300 words, using only material from the main text. Authors must
          state clinical relevance both within the abstract and at the end of the main text; clinical trial
          studies should give the registration number at the end of the abstract. The required headings vary by
          article type:
        </p>
        <StructureTable data={abstractTable} />

        <h4 className={styles.subSubSubTitle}>Keywords</h4>
        <p>
          List 3–10 keywords below the abstract, including the study type (systematic review, RCT, cohort study,
          case-control study, laboratory research, case report, etc.). Keywords drive discoverability on PubMed
          and elsewhere; authors are encouraged to draw from the{' '}
          <a href="https://www.ncbi.nlm.nih.gov/mesh/" target="_blank" rel="noreferrer">MeSH database</a>.
        </p>

        <h4 className={styles.subSubSubTitle}>Body of the Manuscript</h4>
        <p>The body should use bold headings appropriate to the article type:</p>
        <StructureTable data={bodyTable} />

        <h3 className={styles.subSubTitle}>Introduction</h3>
        <p>
          State the study's background and significance, its precise aim or hypothesis, and cite only directly
          relevant references — without pre-empting the results.
        </p>

        <h3 className={styles.subSubTitle}>Material and Methods</h3>
        <p>
          Describe the study design, subject selection (human or animal), and methods/materials in enough detail
          for replication — routine techniques can simply be referenced, but novel methods need full detail. State
          that the research was approved by the relevant ethics body, and note clinical trial registration and
          informed consent type (see <a href="#s17b">Protection of Research Participants</a>). Name manufacturers
          and locations for commercial materials, devices, or software, and specify statistical methods clearly
          enough for a knowledgeable reader to verify them, quantifying results with appropriate uncertainty
          measures. Further guidance:{' '}
          <a
            href="https://www.icmje.org/recommendations/browse/manuscript-preparation/preparing-for-submission.html"
            target="_blank"
            rel="noreferrer"
          >
            ICMJE — Preparing for Submission
          </a>.
        </p>

        <h3 className={styles.subSubTitle}>Results</h3>
        <p>
          State results concisely, highlighting only the most significant findings without repeating table/figure
          data in the text. Report all primary and secondary outcomes defined in Methods; supplemental technical
          detail can go in an appendix. Statistical significance in figures/tables should use sequential
          superscripts (a, b, c) rather than symbols like *, ¶, or #.
        </p>

        <h3 className={styles.subSubTitle}>Discussion</h3>
        <p>
          Focus on the study's new and important findings, relating them logically to other relevant research.
          Summarize — don't repeat — the Results, and close with a summary of data and conclusions. Avoid
          unsupported claims, keep clinical and statistical significance distinct, and don't discuss economic
          costs/benefits without the data to back it up. Avoid priority claims or references to unfinished work;
          flag any new hypotheses clearly as such, and note the study's limitations.
        </p>

        <h3 className={styles.subSubTitle}>Conclusion</h3>
        <p>State the study's conclusions and directions for future research.</p>

        <h3 className={styles.subSubTitle}>Clinical Significance</h3>
        <p>3–4 sentences on the study's clinical relevance.</p>

        <h3 className={styles.subSubTitle}>List of Abbreviations</h3>
        <p>
          List all abbreviations used with their descriptions, using only standard ones; spell out each term
          followed by its abbreviation in parentheses on first use, except standard units of measurement.
        </p>

        <h3 className={styles.subSubTitle}>References</h3>
        <p>
          List references in order of appearance in the text (not alphabetically), following{' '}
          <a href="https://www.nlm.nih.gov/bsd/uniform_requirements.html" target="_blank" rel="noreferrer">
            NLM's Sample References
          </a>{' '}
          and Vancouver style, detailed in{' '}
          <a href="https://www.ncbi.nlm.nih.gov/books/NBK7256/" target="_blank" rel="noreferrer">
            NLM's Citing Medicine (2nd ed.)
          </a>. Place the reference number as a superscript at the end of the relevant sentence, separating
          multiple numbers with commas — e.g., "…presence of a smear layer.<sup>4,5,8-15</sup>" If a reference
          applies mid-sentence, number it right after the relevant text — e.g., "Bailey<sup>2</sup> found that 46%
          showed signs of metastasis while Varner<sup>3</sup> found only 28%."
        </p>

        <h4 className={styles.subSubSubTitle}>Journal</h4>
        <ol className={styles.numberedList}>
          <li>Le Huec JC, Jouve JL, Szpalski M. Surgical techniques in pediatric spine surgery. Eur Spine J. 2014 May 9. [Epub ahead of print].</li>
          <li>Kanter AS, Morr S. Response. J Neurosurg Spine 2014 Apr;20(4):473.</li>
          <li>Miladi L, Mousny M. A novel technique for treatment of progressive scoliosis in young children using a 3-hook and 2-screw construct (H3S2) on a single sub-muscular growing rod: surgical technique. Eur Spine J. 2014 May 9. [Epub ahead of print].</li>
          <li>Lee KY. Comparison of pyogenic spondylitis and tuberculous spondylitis. Asian Spine J. 2014 Apr; 8(2):216-223.</li>
        </ol>

        <h4 className={styles.subSubSubTitle}>Abstract</h4>
        <p>AL-Harbi SA, Farsi N. Microleakage of Ormocer-based restorative material in primary teeth: an in vivo study [abstract]. J Clin Pediatr Dent 2007;32(1):13-18.</p>

        <h4 className={styles.subSubSubTitle}>Authored Book</h4>
        <p>Keith H Bridwell, Ronald L DeWald. The textbook of spinal surgery. 3rd ed. Philadelphia, PA: Lippincott Williams and Wilkins, 2011. 2112 p.</p>

        <h4 className={styles.subSubSubTitle}>Article or Chapter in an Edited Book</h4>
        <p>Suken A Shah, Harvey Smith. Operative treatment of neuromuscular spinal deformity. In: Thomas JE, Baron SL, Andrew WM., editors. Surgical Management of Spinal Deformities. Philadelphia, PA: Saunders Elsevier, 2009;p 157-166.</p>

        <h4 className={styles.subSubSubTitle}>Article in an Edited Book with Volume</h4>
        <p>Mayer M. Minimally Invasive Spine Surgery: A Surgical Manual. Berlin, Heidelberg: Springer 2005;2 496 p.</p>
        <p>
          Ali A Baaj, Praveen V Mummaneni. Handbook of Spine Surgery. 2011, 480 p. Available at:{' '}
          <a href="http://books.google.co.in/books/about/Handbook_of_Spine_Surgery.html?id=-MRYK8l40SYCandredir_esc=y" target="_blank" rel="noreferrer">
            books.google.co.in
          </a>
        </p>

        <h4 className={styles.subSubSubTitle}>Online Reference</h4>
        <p>Prasanthi LK. A study to determine the effectiveness of the Snakes and Ladders game on common ailments among primary school children of a selected school, Bengaluru, 2008.</p>

        <h4 className={styles.subSubSubTitle}>Monograph</h4>
        <p>
          Lawrence, Ruth A. A review of the medical benefits and contraindications to breastfeeding in the United
          States [Internet]. Arlington (VA): National Centre for Education in Maternal and Child Health; 1997 Oct
          [cited 2000 Apr 24]. p. 40. Available from:{' '}
          <a href="http://www.ncemch.org/pubs/PDFs/breastfeedingTIB.pdf" target="_blank" rel="noreferrer">
            ncemch.org
          </a>
        </p>

        <h4 className={styles.subSubSubTitle}>Preprints</h4>
        <p>
          Citations to preprints must clearly indicate the reference is a preprint — include the word "preprint"
          after the citation, note it in the text, and link to the preprint (and its DOI, if the archive assigns
          one).
        </p>

        <h3 className={styles.subSubTitle}>Figures and Tables</h3>
        <p><strong>Figures</strong></p>
        <p>
          Figures follow the reference list in numerical order, each with a descriptive legend, and should also be
          uploaded as a separate file. Photographs must be in colour, in focus, free of distracting artifacts, and
          consistently exposed, with labels/arrows added before upload. Landscape images need to be at least 600 ×
          450 px at 300 ppi; graphs around 500 px wide with legible labels and clear data points. Avoid
          oversized files, which can cause transmission or processing errors. Radiographs, drawings, and graphs
          may be black-and-white, though colour is preferred.
        </p>
        <p>
          File names should follow the figure order (Fig. 1, Fig. 2, Figs 1–5, etc.; spelled out as "Figure 1" in
          running text). Accepted formats: TIFF, PSD, PNG, JPEG — PowerPoint-generated images must be saved as
          JPEG before upload.
        </p>
        <p><em>Example:</em> "Figure 4: Histologic features demonstrating perivascular eosinophilic condensation and hyalinization (H&E stain at 20x magnification)."</p>
        <figure className={styles.exampleFigure}>
          <img src={figImg} alt="Example histologic figure showing perivascular eosinophilic condensation and hyalinization" className={styles.exampleImage} />
          <figcaption className={styles.exampleCaption}>
            Figure 4: Histologic features demonstrating perivascular eosinophilic condensation and hyalinization (H&E stain at 20x magnification).
          </figcaption>
        </figure>
        <p>
          Call-outs in the text should mark where each image belongs — e.g., "…blood vessels within the stroma
          showed a prominent condensation and hyalinization of the peripheral collagen (Figure 4)."
        </p>
        <p><strong>Tables</strong></p>
        <p>
          Tables follow the figure list in numerical order, each with a legend and a text call-out marking its
          place in the article. Use Word's table function rather than tabbed columns.
        </p>
        <p><em>Example:</em> "…where there were 30 males and 14 females. The mean age of patients was 26.95 ± 14.87 years… (Table 1)."</p>
        <figure className={styles.exampleFigure}>
          <img src={tabImg} alt="Example demographic and clinical characteristics table" className={styles.exampleImage} />
          <figcaption className={styles.exampleCaption}>
            Table 1: Demographic and clinical characteristics of subjects by treatment group.
          </figcaption>
        </figure>

        <h3 className={styles.subSubTitle}>Supplemental Content</h3>
        <p>
          Authors may submit supplemental digital content — questionnaires, graphs, tables, figures, databases,
          videos — to support the article's text. This material doesn't appear in the article itself but is
          accessible online via an embedded URL. Cite each item consecutively in the text, and clearly label the
          legend as "Supplemental Digital Content" or "Supplemental Video" with a brief description.
        </p>

        {/* ============ 9. MANUSCRIPT SUBMISSION ============ */}
        <h2 id="s9" className={styles.subTitle}>Manuscript Submission</h2>
        <p>
          Once all files are ready, register as an author from the homepage via{' '}
          <a href="https://manuscript.scriptorszone.com/login/index.do?journalCode=AACS" target="_blank" rel="noreferrer">
            Author Registration
          </a>. A username and password will be emailed to you, which you'll use to log in at{' '}
          <a href="https://www.aacsj.com/journalDetails/AACS" target="_blank" rel="noreferrer">
            aacsj.com/journalDetails/AACS
          </a>{' '}
          and select "Author."
        </p>
        <p>
          After logging in, follow the steps in the Manual for Manuscript Submission. Completing submission
          generates a system ID (e.g., JPJ1296170815), which can be used to track the manuscript from submission
          to publication at{' '}
          <a href="https://www.aacsj.com/manuscriptTrack/AACS" target="_blank" rel="noreferrer">
            aacsj.com/manuscriptTrack/AACS
          </a>.
        </p>

        {/* ============ 10. REVISED MANUSCRIPT ============ */}
        <h2 id="s10" className={styles.subTitle}>Guidelines for Sending a Revised Manuscript</h2>
        <p>
          Revisions follow the same submission process as a first-time submission, except the Title Page and
          Cover Letter aren't required again. Authors should include the reviewers' comments with a
          point-by-point response at the start of the revised file, and highlight all changed text within the
          article itself.
        </p>

        {/* ============ 11. ACCEPTED MANUSCRIPTS ============ */}
        <h2 id="s11" className={styles.subTitle}>Accepted Manuscripts</h2>
        <p>
          A confirmation email goes to the corresponding author on acceptance. Around 2–4 weeks later, authors
          may email <a href="mailto:editor@aacsj.com">editor@aacsj.com</a> to ask about issue placement. A galley
          proof is sent to the corresponding author for final changes shortly before the issue publishes.
        </p>

        <h3 className={styles.subSubTitle}>Online Proof Correction</h3>
        <p>
          Once the accepted article's galley proof is ready, it goes to the corresponding author, who can edit
          text and comment on figures/tables directly, and must answer the accompanying query form — a faster,
          more accurate process than marking up a static PDF.
        </p>
        <p>
          This proof stage is for checking typesetting, edits, and completeness/correctness of text, tables, and
          figures only — substantial changes at this point need Editor approval. All corrections should be sent
          back in a single communication after careful review, and proofs must be returned within 48–72 hours of
          receipt, as noted in the accompanying cover letter.
        </p>

        <h3 className={styles.subSubTitle}>Corrections</h3>
        <p>
          For the policy on post-publication corrections, see the{' '}
          <a href="https://www.aacsj.com/journal/AACS/page/policy" target="_blank" rel="noreferrer">Policy page</a>.
        </p>

        {/* ============ 12. REPRINTS ============ */}
        <h2 id="s12" className={styles.subTitle}>Reprints</h2>
        <p>
          Reprints are available on request for a nominal fee — email Tushar Nanda at{' '}
          <a href="mailto:tushar.nanda@jaypeebrothers.com">tushar.nanda@jaypeebrothers.com</a>.
        </p>

        {/* ============ 13. EDITORIAL OFFICE CONTACT ============ */}
        <h2 id="s13" className={styles.subTitle}>Editorial Office Contact</h2>
        <p>
          For help with submitting a manuscript, contact{' '}
          <a href="mailto:editor@jaypeebrothers.com">editor@jaypeebrothers.com</a> or{' '}
          <a href="mailto:editor@aacsj.com">editor@aacsj.com</a>.
        </p>

        {/* ============ 14. CHECKLIST ============ */}
        <h2 id="s14" className={styles.subTitle}>Checklist for Submission</h2>
        <p>Documents to upload to the manuscript system:</p>
        <ul className={styles.bulletList}>
          <li>Cover letter</li>
          <li>Title page</li>
          <li>Declaration page</li>
          <li>Main article — research article, case report, or review article</li>
          <li>Figure with descriptive legend</li>
          <li>Table/graph/flowchart (with descriptive legends) file</li>
          <li>Supplemental content (optional)</li>
          <li>Reporting guideline checklist as a supplementary file</li>
        </ul>
        <p>Declaration forms to upload:</p>
        <ul className={styles.bulletList}>
          <li><a href="https://d45jl3w9libvn.cloudfront.net/jaypee/static/journals/AACS/supp/Submission_form.docx" target="_blank" rel="noreferrer">Submission form</a></li>
          <li><a href="https://d45jl3w9libvn.cloudfront.net/jaypee/static/journals/AACS/supp/Authorship_form.docx" target="_blank" rel="noreferrer">Authorship form</a></li>
          <li><a href="https://d45jl3w9libvn.cloudfront.net/jaypee/static/journals/AACS/supp/Acknowledgement_form.docx" target="_blank" rel="noreferrer">Acknowledgement form</a></li>
          <li><a href="https://d45jl3w9libvn.cloudfront.net/jaypee/static/journals/AACS/supp/ICMJE_disclosure.docx" target="_blank" rel="noreferrer">Conflict of Interest (ICMJE disclosure form)</a></li>
          <li><a href="https://d45jl3w9libvn.cloudfront.net/jaypee/static/journals/AACS/supp/Funding.docx" target="_blank" rel="noreferrer">Funding form</a></li>
          <li><a href="https://d45jl3w9libvn.cloudfront.net/jaypee/static/journals/AACS/supp/Patient_consent_form.docx" target="_blank" rel="noreferrer">Patient consent form</a></li>
          <li><a href="https://d45jl3w9libvn.cloudfront.net/jaypee/static/journals/AACS/supp/OA_License_Agreement.docx" target="_blank" rel="noreferrer">Open Access License Agreement form</a></li>
        </ul>

        {/* ============ 15. DOCUMENT TEMPLATES ============ */}
        <h2 id="s15" className={styles.subTitle}>Document Templates</h2>
        <ul className={styles.bulletList}>
          <li><a href="https://d45jl3w9libvn.cloudfront.net/jaypee/static/journals/AACS/supp/Case_report.docx" target="_blank" rel="noreferrer">Case report</a></li>
          <li><a href="https://d45jl3w9libvn.cloudfront.net/jaypee/static/journals/AACS/supp/Original_research%20article.docx" target="_blank" rel="noreferrer">Original research article</a></li>
          <li><a href="https://d45jl3w9libvn.cloudfront.net/jaypee/static/journals/AACS/supp/Systematic%20review%20article.docx" target="_blank" rel="noreferrer">Systematic review article</a></li>
        </ul>

        {/* ============ 16. REPORTING GUIDELINE TEMPLATES ============ */}
        <h2 id="s16" className={styles.subTitle}>Reporting Guidelines Templates</h2>
        <div className={styles.tableWrap}>
          <table className={styles.dataTable}>
            <thead>
              <tr>
                <th>Checklists</th>
                <th>Study Designs</th>
                <th>Template</th>
              </tr>
            </thead>
            <tbody>
              {reportingTemplates.map((r) => (
                <tr key={r.checklist}>
                  <td>{r.checklist}</td>
                  <td>{r.design}</td>
                  <td>
                    <a href={r.href} target="_blank" rel="noreferrer">Download</a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p>
          If your study design isn't listed here, visit{' '}
          <a href="https://www.equator-network.org/reporting-guidelines/" target="_blank" rel="noreferrer">
            equator-network.org/reporting-guidelines
          </a>.
        </p>
      </div>
    </div>
  )
}