// This is just an example,
// so you can safely delete all default props below

export default {
  failed: 'Action failed',
  success: 'Action was successful',
  common: {
    buttons: {
      confirm: 'Confirm'
    }
  },
  general: {
    lorem: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    loremShort: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    waitingWeb3: 'Waiting for polkadot web3 extension',
    waitingSub: 'Waiting for changes on the chain',
    navbar: {
      homeTitle: 'Private Service',
      marketplaceTitle: 'Marketplace',
      custodianTitle: 'Custody',
      signAndVerifyTitle: 'Sign and Verify Message',
      login: 'Login',
      logout: 'Logout'
    },
    footer: {
      contactTitle: 'Contact',
      terms: 'Terms of Use',
      privacyPolicy: 'Privacy Policy',
      faq: 'FAQ',
      copyright: 'Test by Marketplaces',
      sub: 'INC. ALL RIGHTS RESERVED'
    }
  },
  forms: {
    errors: {
      required: 'This field is required',
      isNotValidXpub: 'This is not a valid XPUB',
      isNotValidFingerprint: 'This is not a valid fingerprint',
      isNotValidDerivationPath: 'This is not a valid derivation path',
      positiveInteger: 'This field must contain a positive integer number',
      greaterOrEqualThan: 'The value must be greater than or equal to {value}',
      lessOrEqualThan: 'The value must be less than or equal to {value}',
      containAtLeastCosigners: 'This field must contain at least {value} cosigners address',
      containLessThanCosigners: 'This field must contain at less than {value} cosigners address',
      isNotValidMainetBTC: 'This field must contain a valid mainet BTC address',
      isNotValidPolkadotAddress: 'Is not a valid polkadot address',
      notOwnAccount: 'Not owner account allowed, please set this on "Include owner as cosigner" option',
      fileRequired: 'This field is required',
      greaterOrEqualThanString: 'The length must be greater than or equal to {value}',
      lessOrEqualThanString: 'The length must be less than or equal to {value}',
      notEqual: 'The value must be different to the Owner address'
    }
  },
  pages: {
    marketplace: {
      marketplaceTitle: 'Marketplace',
      addMarketplaceButton: 'Add Marketplace',
      tabs: {
        myMarketplaces: 'My marketplaces',
        allMarketplaces: 'All marketplaces',
        marketInfo: 'Market information',
        enrollmentRequest: 'Enrollment requests'
      },
      details: {
        participantsTitle: 'Participants',
        noParticipants: 'No participants yet',
        numberPaparticipantsTitle: 'Number of participants',
        applicantsTitle: 'Applicants',
        noApplicants: 'No applicants yet',
        pending: 'Your application is under review',
        noMarketplaces: 'No markets yet',
        notesTitle: 'Notes',
        filesTitle: 'Files',
        enrollButton: 'Enroll',
        rejectButton: 'Rejected'
      },
      applyForm: {
        title: 'Apply for Marketplace',
        subtitle: 'Fill in the form to apply for the Marketplace',
        custodian: {
          label: 'Custodian',
          placeholder: 'Custodian address',
          infoLabel: 'Add a third-party custodian (optional)'
        },
        filesTitle: 'Upload files',
        addFilesButton: 'Add Files',
        notes: {
          label: 'Notes',
          placeholder: 'Notes about your application'
        },
        submitButton: 'Submit'
      },
      createForm: {
        title: 'Create new marketplace',
        label: 'Label',
        placeholder: 'Please write a description',
        button: 'Create marketplace'
      },
      searchInput: {
        label: 'Search',
        placeholder: 'Please write a keyword'
      },
      role: {
        administrator: 'Administrator',
        owner: 'Owner'
      },
      applicants: {
        title: 'Applicants'
      },
      privacy: {
        title: 'Privacy solution playground',
        uploadSection: {
          title: 'Upload file',
          fileInput: 'Choose file',
          custodian: 'Address of the custodian',
          shareFile: 'Share file with other addresses'
        },
        downloadSection: {
          title: 'Download file',
          cidInput: 'Download file by CID or ID',
          isShareData: 'The data is shared?'
        },
        buttons: {
          save: 'Save',
          clear: 'Clear',
          download: 'Download',
          openFile: 'Open file'
        },
        query: 'Query: ',
        response: 'Response: '
      }
    }
  }
}
