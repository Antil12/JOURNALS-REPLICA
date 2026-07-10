import styles from './EditorialBoard.module.css'

const editorInChief = {
  name: 'Dr Nidhi Puri',
  qualification: 'MBBS, MS Anatomy',
  designation: 'Professor & Head',
  institution: 'All India Institute of Medical Sciences (AIIMS), Bilaspur, Himachal Pradesh',
  orcid: '0000-0003-1852-0832',
  email: 'dr.nidhi.anat@aiimsbilaspur.edu.in',
}

const jointEditor = {
  name: 'Dr Bhagya Shree',
  qualification: 'MBBS, MS Anatomy',
  designation: 'Associate Professor',
  institution: 'All India Institute of Medical Sciences (AIIMS), Bilaspur, Himachal Pradesh',
  orcid: '0000-0001-9547-5014',
  email: 'dr.bhagyashree.anat@aiimsbilaspur.edu.in',
}

const editorialBoardMembers = [
  {
    name: 'Dr Anjali Aggarwal',
    qualification: 'MBBS, MD Anatomy',
    designation: 'Professor & Head',
    institution: 'Post Graduate Institute of Medical Sciences & Research (PGIMER), Chandigarh',
    orcid: '0000-0001-6523-5052',
    email: 'aggarwal.anjali@pgimer.edu.in',
  },
  {
    name: 'Dr Kanchan Kapoor',
    qualification: 'M.Sc, PhD Anatomy',
    designation: 'Professor',
    institution: 'Government Medical College & Hospital, Chandigarh',
    orcid: '0000-0003-0763-2900',
    email: 'kanchankapoor62@gmail.com',
  },
  {
    name: 'Dr Punita Salwan',
    qualification: 'MBBS, MS Anatomy',
    designation: 'Professor',
    institution: 'Shri Guru Ram Das Institute of Medical Sciences & Research, Amritsar, Punjab',
    orcid: '0000-0002-4777-8712',
    email: 'punitasalwan@gmail.com',
  },
  {
    name: 'Dr Anju Partap',
    qualification: 'MBBS, MD Anatomy',
    designation: 'Professor & Head',
    institution: 'Indira Gandhi Medical College, Shimla',
    orcid: '0009-0000-4495-8593',
    email: 'dranjupartapk@gmail.com',
  },
  {
    name: 'Dr Anu Sharma',
    qualification: 'MBBS, MD Anatomy, CMCL-FAIMER, Dip Bioethics',
    designation: 'Professor',
    institution: 'Dayanand Medical College & Hospital (DMCH), Ludhiana, Punjab',
    orcid: '0000-0003-3052-4051',
    email: 'dr_anu_sharma@dmch.edu',
  },
  {
    name: 'Dr Priti Chaudhary',
    qualification: 'MBBS, MS Anatomy',
    designation: 'Professor & Head',
    institution: 'All India Institute of Medical Sciences (AIIMS), Bathinda, Punjab',
    orcid: '0000-0002-5869-1743',
    email: 'chaudhary.priti1@aiimsbathinda.edu.in',
  },
  {
    name: 'Dr Yogesh Ashok Sontakke',
    qualification: 'MBBS, MD Anatomy',
    designation: 'Professor',
    institution: 'Jawaharlal Institute of Postgraduate Medical Education & Research (JIPMER), Puducherry',
    orcid: '0000-0002-2592-2605',
    email: 'drypgeshas@gmail.com',
  },
  {
    name: 'Dr Tulika Gupta',
    qualification: 'MBBS, MD Anatomy',
    designation: 'Additional Professor',
    institution: 'Post Graduate Institute of Medical Sciences & Research (PGIMER), Chandigarh',
    orcid: '0000-0003-4910-1796',
    email: 'tulikag11@gmail.com',
  },
  {
    name: 'Dr Har Simarjit Kaur',
    qualification: 'MBBS, MS Anatomy',
    designation: 'Associate Professor',
    institution: 'Government Medical College, Patiala, Punjab',
    orcid: '0000-0002-6594-2977',
    email: 'dr.harsimarjit@gmail.com',
  },
  {
    name: 'Dr Shveta Swami',
    qualification: 'MBBS, MS Anatomy',
    designation: 'Professor',
    institution: 'Kalpana Chawla Government Medical College, Karnal, Haryana',
    orcid: '0000-0002-1074-3305',
    email: 'shveta_swami@rediffmail.com',
  },
  {
    name: 'Dr Gaurav Agnihotri',
    qualification: 'MBBS, MS Anatomy',
    designation: 'Associate Professor',
    institution: 'Government Medical College, Amritsar',
    orcid: '0000-0002-7841-6810',
    email: 'anatomygaurav@yahoo.com',
  },
  {
    name: 'Dr Sushant Swaroop Das',
    qualification: 'MBBS, MD Anatomy',
    designation: 'Associate Professor',
    institution: 'All India Institute of Medical Sciences (AIIMS), Vijaypur, Jammu',
    orcid: '0000-0002-2212-7761',
    email: 'sushant.swaroopdas@aiimsjammu.edu.in',
  },
]

const advisoryBoardMembers = [
  {
    name: 'Dr Subhash Kaushal',
    qualification: 'MBBS, MS Anatomy',
    designation: 'Retd. Professor',
    institution: 'Government Medical College, Patiala, Punjab',
    orcid: null,
    email: 'subhashkaushal1989@gmail.com',
  },
  {
    name: 'Dr Usha Chhabra',
    qualification: 'MBBS, MS Anatomy',
    designation: 'Retd. Professor & Head',
    institution: 'Government Medical College, Patiala, Punjab',
    orcid: null,
    email: 'drdpt49@gmail.com',
  },
  {
    name: 'Dr Gopichand V.V. Patnaik',
    qualification: 'MBBS, MS Anatomy',
    designation: 'Retd. Professor & Head',
    institution: 'MMIMSR, Mullana, Haryana',
    orcid: '0000-0002-2410-3413',
    email: 'dr@live.in',
  },
  {
    name: 'Dr S. L Jethani',
    qualification: 'MBBS, MS Anatomy',
    designation: 'Professor',
    institution: 'Graphic Era Institute of Medical Sciences, Dehradun',
    orcid: '0009-0004-7049-0567',
    email: 'drjethani_sl@rediffmail.com',
  },
  {
    name: 'Dr Ravikant Sharma',
    qualification: 'MBBS, MS Anatomy',
    designation: 'Senior Professor',
    institution: 'Maharishi Markandeshwar Medical College & Hospital (MMMCH), Solan',
    orcid: null,
    email: 'drravikantanatomy@gmail.com',
  },
  {
    name: 'Dr Rajan Singla',
    qualification: 'MBBS, MS Anatomy',
    designation: 'Professor & Head',
    institution: 'Government Medical College, Patiala, Punjab',
    orcid: '0009-0004-3866-4731',
    email: 'rajananat@gmail.com',
  },
  {
    name: 'Dr Mukesh Singla',
    qualification: 'MBBS, MS Anatomy',
    designation: 'Professor & Head',
    institution: 'All India Institute of Medical Sciences (AIIMS), Rishikesh, Uttarakhand',
    orcid: '0000-0001-6792-0627',
    email: 'mukesh.ana@aiimsrishikesh.edu.in',
  },
  {
    name: 'Dr Gopal Gupta',
    qualification: 'MBBS, MD Anatomy, DNB',
    designation: 'Professor & Head',
    institution: 'Pt. B.D. Sharma Post Graduate Institute of Medical Sciences, Rohtak, Haryana',
    orcid: '0000-0002-9382-9381',
    email: 'drgopalanatomy@gmail.com',
  },
  {
    name: 'Dr Susheela Rana',
    qualification: 'MBBS, MD Anatomy',
    designation: 'Professor & Head',
    institution: 'SLBS GMC, Ner Chowk, Mandi, H.P.',
    orcid: null,
    email: 'susheelarana919@gmail.com',
  },
  {
    name: 'Dr Anupama Mahajan',
    qualification: 'MBBS, MS Anatomy, ACME Fellow',
    designation: 'Director Principal cum Professor',
    institution: 'Shri Guru Ram Das Institute of Medical Sciences & Research, Amritsar, Punjab',
    orcid: '0009-0002-9883-358X',
    email: 'anupamasgrd@gmail.com',
  },
  {
    name: 'Dr Lovesh Shukla',
    qualification: 'MBBS, MS Anatomy',
    designation: 'Senior Professor',
    institution: 'Maharaja Agrasen Medical College, Agroha, Hisar, Haryana - 125047',
    orcid: '0000-0003-4828-8093',
    email: 'drlovesh@gmail.com',
  },
  {
    name: 'Dr Maneesha Sharma',
    qualification: 'MBBS, MS Anatomy, PhD',
    designation: 'Professor & Head',
    institution: 'B.R. Ambedkar Institute of Medical Sciences, Mohali',
    orcid: '0000-0001-5097-0767',
    email: 'sksharma2212@gmail.com',
  },
]

function MemberCard({ member }) {
  return (
    <div className={styles.memberCard}>
      <p className={styles.memberName}>{member.name}</p>
      <p className={styles.memberQualification}>{member.qualification}</p>
      <p className={styles.memberDesignation}>{member.designation}</p>
      <p className={styles.memberInstitution}>{member.institution}</p>
      {member.orcid && (
        <a
          className={styles.orcidLink}
          href={`https://orcid.org/${member.orcid}`}
          target="_blank"
          rel="noreferrer"
        >
          orcid.org/{member.orcid}
        </a>
      )}
      <a className={styles.emailLink} href={`mailto:${member.email}`}>
        {member.email}
      </a>
    </div>
  )
}

export default function EditorialBoard() {
  return (
    <div className={styles.pageBg}>
      <div className={styles.bodyLayout}>
<div className={styles.pageContainer}>
          <div className={styles.hero}>
            <span className={styles.eyebrow}>About Journal</span>
            <h1 className={styles.pageHeading}>Editorial Board</h1>
          </div>

          <section className={styles.sectionCard}>
            <h2 className={styles.sectionTitle}>Editor-in-Chief</h2>
            <div className={styles.memberGrid}>
              <MemberCard member={editorInChief} />
            </div>
          </section>

          <section className={styles.sectionCard}>
            <h2 className={styles.sectionTitle}>Joint Editor</h2>
            <div className={styles.memberGrid}>
              <MemberCard member={jointEditor} />
            </div>
          </section>

          <section className={styles.sectionCard}>
            <h2 className={styles.sectionTitle}>Members of Editorial Board</h2>
            <div className={styles.memberGrid}>
              {editorialBoardMembers.map((member) => (
                <MemberCard key={member.email} member={member} />
              ))}
            </div>
          </section>

          <section className={styles.sectionCard}>
            <h2 className={styles.sectionTitle}>Members of Advisory Board</h2>
            <div className={styles.memberGrid}>
              {advisoryBoardMembers.map((member) => (
                <MemberCard key={member.email} member={member} />
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}