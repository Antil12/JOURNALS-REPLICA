export default {
  home: {
    heading: 'Site C Journal',
    description: 'Site C journal portal description and summary content.',
    submitLabel: 'Submit Manuscript',
    searchPlaceholder: 'Search site content',
    journalCode: 'SCJ',
    stats: [
      { label: 'Authors', value: '0' },
      { label: 'Articles Submitted', value: '1' },
      { label: 'Published Articles', value: '0' },
      { label: 'Scholarly Citations', value: '0' },
      { label: 'Readership', value: '0' },
    ],
    latestArticlesHeading: 'Latest Articles',
    highlights: [
      { icon: 'fa-eye', label: 'Latest insights', href: '#' },
      { icon: 'fa-user-plus', label: 'Become a reviewer', href: '#' },
      { icon: 'fa-book', label: 'Abstracting information', href: '#' },
      { icon: 'fa-globe', label: 'Explore more journals', href: '#' },
    ],
  },
  journalInformation: {
    eyebrow: 'About Journal',
    heading: 'Journal Information',
    quickLinks: [
      { href: '#aims', label: 'Aims & Scope' },
      { href: '#copyright', label: 'Copyright and Licensing' },
      { href: '#ownership', label: 'Ownership and Management' },
      { href: '#openaccess', label: 'Open Access Policy' },
    ],
    aims: { title: 'Aims & Scope', paragraphs: ['Site C journal details.'] },
    ownership: {
      title: 'Ownership and Management',
      paragraphs: ['Managed by Example Publishing Group.'],
      institution: {
        title: 'About the Institution',
        name: 'Example Institution C',
        link: 'https://example.com/institution-c',
        paragraphs: ['Site C partner institution information.']
      },
      publisher: {
        title: 'About the Publisher',
        paragraphs: ['Site C publisher information.']
      }
    },
    frequency: { title: 'Publication Frequency', paragraphs: ['Biannual.'] },
    copyright: { title: 'Copyright and Licensing', paragraphs: ['CC BY-NC terms.'] },
    openAccess: { title: 'Open Access Policy', intro: 'Open access overview.', paragraphs: ['Free access to readers.'] },
    selfArchiving: { title: 'Self-Archiving Policy for Authors', paragraphs: ['Author sharing guidelines.'] },
    ethics: { title: 'Publication Ethics and Malpractice Statement', paragraphs: ['Editorial ethics guidance.'] },
    advertisementPolicy: { title: 'Advertisement Policy', paragraphs: ['Site-specific advertising policy.'] },
  },
  editorialBoard: {
    eyebrow: 'About Journal',
    heading: 'Editorial Board',
    sections: [
      { title: 'Editor-in-Chief', members: [{ name: 'Example Editor', qualification: 'PhD', designation: 'Editor', institution: 'Example University', orcid: null, email: 'editor@example.com' }] },
    ],
  },
  currentIssue: {
    eyebrow: 'Current Issue',
    heading: 'Current Issue',
    intro: 'This is the placeholder current issue content for Site C.',
    featuredTitle: 'Featured Focus',
    featuredParagraphs: ['Site C issue overview.'],
    accessTitle: 'Access',
    bullets: ['Read online and download PDF.'],
  },
  contact: {
    eyebrow: 'Contact Us',
    heading: 'Contact Us',
    sections: [
      {
        title: "Publisher's Corporate Office",
        subtitle: "Corporate Office",
        lines: [
          "Jaypee Brothers Medical Publishers Pvt. Ltd.",
          "4838/24, Ansari Road, Daryaganj, New Delhi 110 002, India 110002, India",
          "Phone: +91-11-43574357",
          "Fax: +91-11-43574314",
          "Email: editor@jaypeebrothers.com / journals.editor@jaypeebrothers.com",
          "Website: www.jaypeejournals.com"
        ]
      },
      {
        title: "Registered Office",
        lines: [
          "Jaypee Brothers Medical Publishers Pvt. Ltd.",
          "23/23-B, Ansari Road, Daryaganj, New Delhi 110 002, India",
          "Phone: +91-11-23272143, +91-11-23272703, +91-11-23282021, +91-11-23245672",
          "Email: jaypee@jaypeebrothers.com",
          "Website: https://jaypeebrothers.com"
        ]
      },
      {
        title: "For ISSN and RNI Query",
        lines: [
          "Nikita Pal",
          "110002, India",
          "Phone: +91-11-43574357",
          "Email: nikita@jaypeebrothers.com"
        ]
      },
      {
        title: "For Indexing",
        lines: [
          "Awani Mishra",
          "110002, India",
          "Phone: +91-11-43574357 | Ex-5117",
          "Email: info.indexing@jaypeejournals.com"
        ]
      },
      {
        title: "Overseas Offices",
        subtitle: "UK Office",
        lines: [
          "JP Medical Ltd.",
          "83 Victoria Street, London SW1H 0HW (UK) , London",
          "Phone: +44-(0)2031708910",
          "Fax: +02-03-0086180",
          "Email: info@jpmedpub.com",
          "Website: www.jpmedpub.com"
        ]
      }
    ],
  },
  subscription: {
    eyebrow: 'Subscription',
    heading: 'Subscription',
    intro: 'Subscription information for Site C.',
    sections: [{ title: 'Access Options', paragraphs: ['Institutional and individual subscriptions.'] }],
  },
  advertisement: {
    eyebrow: 'Business Opportunities',
    heading: 'Advertisement',
    intro: 'Advertising information for Site C.',
    sections: [{ title: 'Advertising Policy', paragraphs: ['Placeholder advertising policy.'] }],
  },
  rightsPermissions: {
    eyebrow: 'Business Opportunities',
    heading: 'Rights & Permissions',
    intro: 'Permission requests for Site C.',
    sections: [{ title: 'Permission Requests', paragraphs: ['Placeholder rights and permissions guidance.'] }],
  },
  authorInstructions: {
    eyebrow: 'Author Zone',
    heading: 'Author Instructions',
    intro: 'Author instructions for Site C.',
  },
  grievanceRedressal: {
    eyebrow: 'Contact Us',
    heading: 'Grievance Redressal',
    sections: [
      {
        title: 'General Queries:',
        email: 'complaint.journals@jaypeebrothers.com'
      },
      {
        title: 'Technical Queries:',
        email: 'complaint.tech@jaypeebrothers.com'
      }
    ]
  }
}
