export default {

    // if set to true, the user will be routed to /tutorial instead of /play if
    // they haven't taken a tutorial
  needsTutorial: true,
    // each time the app is run, it will check this manifest and update the firebase database
    // if new entries are there, they will be added, and entries that aren't in the manifest
    // but are in the firebase database will be *removed*
  manifestUrl: 'https://raw.githubusercontent.com/DCAN-Labs/abcd-func/master/config/manifest.json',
  manifestType: 'json',
  widgetType: 'ImageSwipe',
  widgetProperties: {
    baseUrlTemplate: 'https://s3-us-west-2.amazonaws.com/abcd-braindr/abcd-func/{0}.gif',
    delimiter: '%',
    leftSwipeLabel: 'Fail',
    rightSwipeLabel: 'Pass',
  },

    // if manifestType = 'pubmed' then you should also include a manifestQuery key.
    // if manifestType = 'json' then you're fine
    // if manifestType = 'github' then you need to provide a github user, repo,
    // and path under manifestGitHub

  // manifestType: 'github',
  // manifestQuery: '(neuroimaging OR "Magnetic Resonance Imaging" OR "MRI") AND brain AND autism',
  // manifestGitHub: { user: 'akeshavan',
  //   repo: 'mHealthLandscape',
  //   path: 'ios',
  // },

  // manifestType: 'S3',
  // manifestS3: {
  //   bucket: 'himatdata',
  //   prefix: 'BeringStrait',
  //   delimiter: '.wav',
  //   max_keys: 10000,
  // },

  // widgetType: 'ImageSwipe', //'BranchingTemplateWidget',
  /* eslint-disable */
  // widgetProperties: {
    // titleKey: 'trackName',
    // textKey: 'description',
    // baseUrlTemplate: 'https://raw.githubusercontent.com/akeshavan/mHealthLandscape/master/ios/{0}.json',
    // delimiter: '%',
    // autoComplete: [
    //   'active data entry',
    //   'passive data entry',
    //   'gamified',
    //   'social media',
    //   'educational',
    //   'sensors',
    // ],
    // stages: [
    //   {
    //     id: 'relevant',
    //     showCriteria: {},
    //     question: 'Is this app about mental health?',
    //     responseProperties: {
    //       widgetType: 'TextBinarySwipe',
    //       widgetProperties: {
    //         titleKey: 'trackName',
    //         textKey: 'description',
    //         delimiter: '%',
    //         baseUrlTemplate: 'https://raw.githubusercontent.com/akeshavan/mHealthLandscape/master/ios/{0}.json',
    //         leftSwipeLabel: 'No',
    //         rightSwipeLabel: 'Yes',
    //       },
    //     },
    //   },
    //   {
    //     id: 'datacollection',
    //     showCriteria: {
    //       node: 'relevant',
    //       statement: '==',
    //       value: 1,
    //     },
    //     question: 'Does this app collect user data?',
    //     responseProperties: {
    //       widgetType: 'TextBinarySwipe',
    //       widgetProperties: {
    //         titleKey: 'trackName',
    //         textKey: 'description',
    //         delimiter: '%',
    //         baseUrlTemplate: 'https://raw.githubusercontent.com/akeshavan/mHealthLandscape/master/ios/{0}.json',
    //         leftSwipeLabel: 'No',
    //         rightSwipeLabel: 'Yes',
    //       },
    //     },
    //   },
    //   {
    //     id: 'sensors',
    //     showCriteria: {
    //       node: 'datacollection',
    //       statement: '==',
    //       value: 1,
    //     },
    //     question: 'Interoperable with sensors/wearables?',
    //     responseProperties: {
    //       widgetType: 'TextBinarySwipe',
    //       widgetProperties: {
    //         titleKey: 'trackName',
    //         textKey: 'description',
    //         delimiter: '%',
    //         baseUrlTemplate: 'https://raw.githubusercontent.com/akeshavan/mHealthLandscape/master/ios/{0}.json',
    //         leftSwipeLabel: 'No',
    //         rightSwipeLabel: 'Yes, sensors',
    //       },
    //     },
    //   },
    //   {
    //     id: 'social',
    //     showCriteria: {
    //       node: 'datacollection',
    //       statement: '==',
    //       value: 1,
    //     },
    //     question: 'Is there a social component?',
    //     responseProperties: {
    //       widgetType: 'TextBinarySwipe',
    //       widgetProperties: {
    //         titleKey: 'trackName',
    //         textKey: 'description',
    //         delimiter: '%',
    //         baseUrlTemplate: 'https://raw.githubusercontent.com/akeshavan/mHealthLandscape/master/ios/{0}.json',
    //         leftSwipeLabel: 'Not social',
    //         rightSwipeLabel: 'Yes, social',
    //       },
    //     },
    //   },
    //   {
    //     id: 'game',
    //     showCriteria: {
    //       node: 'datacollection',
    //       statement: '==',
    //       value: 1,
    //     },
    //     question: 'Are there game elements?',
    //     responseProperties: {
    //       widgetType: 'TextBinarySwipe',
    //       widgetProperties: {
    //         titleKey: 'trackName',
    //         textKey: 'description',
    //         delimiter: '%',
    //         baseUrlTemplate: 'https://raw.githubusercontent.com/akeshavan/mHealthLandscape/master/ios/{0}.json',
    //         leftSwipeLabel: 'No',
    //         rightSwipeLabel: 'Yes',
    //       },
    //     },
    //   },
    //   {
    //     id: 'disorder',
    //     showCriteria: {
    //       node: 'datacollection',
    //       statement: '==',
    //       value: 1,
    //     },
    //     question: 'What disorders does it target?',
    //     responseProperties: {
    //       widgetType: 'TextTagger',
    //       widgetProperties: {
    //         titleKey: 'trackName',
    //         textKey: 'description',
    //         delimiter: '%',
    //         baseUrlTemplate: 'https://raw.githubusercontent.com/akeshavan/mHealthLandscape/master/ios/{0}.json',
    //         autoComplete: ['depression', 'anxiety', 'sleep'],
    //       },
    //     },
    //   },
    //   {
    //     id: 'treatment',
    //     showCriteria: {
    //       node: 'datacollection',
    //       statement: '==',
    //       value: 1,
    //     },
    //     question: 'What is the treatment strategy?',
    //     responseProperties: {
    //       widgetType: 'TextTagger',
    //       widgetProperties: {
    //         titleKey: 'trackName',
    //         textKey: 'description',
    //         delimiter: '%',
    //         baseUrlTemplate: 'https://raw.githubusercontent.com/akeshavan/mHealthLandscape/master/ios/{0}.json',
    //         autoComplete: ['CBT', 'journal'],
    //       },
    //     },
    //   },
    // ],
  // },
  /* eslint-enable */
  iconAttribute: {
    name: 'openmoji',
    url: 'http://openmoji.org',
  },

  levels: {
    0: {
      level: 0,
      min: 0,
      max: 100,
      character: null,
      img: null,
      img_grey: null,
    },
    1: {
      level: 1,
      min: 101,
      max: 350,
      character: 'fish',
      img: 'https://raw.githubusercontent.com/hfg-gmuend/openmoji/master/color/svg/1F41F.svg?sanitize=true',
      img_grey: 'https://raw.githubusercontent.com/hfg-gmuend/openmoji/master/black/svg/1F41F.svg?sanitize=true',
    },
    2: {
      level: 2,
      min: 351,
      max: 750,
      character: 'frog',
      img: 'https://raw.githubusercontent.com/hfg-gmuend/openmoji/master/color/svg/1F438.svg?sanitize=true',
      img_grey: 'https://raw.githubusercontent.com/hfg-gmuend/openmoji/master/black/svg/1F438.svg?sanitize=true',
    },
    3: {
      level: 3,
      min: 751,
      max: 1000,
      character: 'duck',
      img: 'https://raw.githubusercontent.com/hfg-gmuend/openmoji/master/color/svg/1F986.svg?sanitize=true',
      img_grey: 'https://raw.githubusercontent.com/hfg-gmuend/openmoji/master/black/svg/1F986.svg?sanitize=true',
    },
    4: {
      level: 4,
      min: 1001,
      max: 1500,
      character: 'koala',
      img: 'https://raw.githubusercontent.com/hfg-gmuend/openmoji/master/color/svg/1F428.svg?sanitize=true',
      img_grey: 'https://raw.githubusercontent.com/hfg-gmuend/openmoji/master/black/svg/1F428.svg?sanitize=true',
    },
    5: {
      level: 5,
      min: 1501,
      max: 2000,
      character: 'cat',
      img: 'https://raw.githubusercontent.com/hfg-gmuend/openmoji/master/color/svg/1F408.svg?sanitize=true',
      img_grey: 'https://raw.githubusercontent.com/hfg-gmuend/openmoji/master/black/svg/1F408.svg?sanitize=true',
    },
    6: {
      level: 6,
      min: 2001,
      max: 2500,
      character: 'lion',
      img: 'https://raw.githubusercontent.com/hfg-gmuend/openmoji/master/color/svg/1F981.svg?sanitize=true',
      img_grey: 'https://raw.githubusercontent.com/hfg-gmuend/openmoji/master/black/svg/1F981.svg?sanitize=true',
    },
  },


    // this shows a 'beta' ribbon in the bottom right corner
  betaMode: false,

  firebaseKeys: {
    apiKey: 'AIzaSyATIdUCOdQD7j1JE-9jYOsxYflc1LKPvRs',
    authDomain: 'abcd-func.firebaseapp.com',
    databaseURL: 'https://abcd-func.firebaseio.com',
    projectId: 'abcd-func',
    storageBucket: 'abcd-func.appspot.com',
    messagingSenderId: '868069283447',
  },

  app: {
    navbarVariant: 'info',
  },

    // Homepage configuration
    // your app's title and tagline
  home: {
    title: 'ABCD Functional Swipes For Science',
    tagline: 'Quality control of ABCD Study functional image registrations',
      // background image on Homepage
    backgroundUrl: 'http://www.kurzweilai.net/images/brain-network.png',
  },

    // Play configuration
  play: {
    blankImage: 'https://raw.githubusercontent.com/SwipesForScience/testConfig/master/images/undraw_blank_canvas.svg?sanitize=true',

  },

    // Chats configuration
  chats: {
    blankImage: 'https://raw.githubusercontent.com/SwipesForScience/testConfig/master/images/undraw_no_data.svg?sanitize=true',
  },

    // Profile configuration
  profile: {
    blankImage: 'https://raw.githubusercontent.com/SwipesForScience/testConfig/master/images/undraw_chatting.svg?sanitize=true',
  },

    // your app's tutorial page
    // describe your problem and the way you want people to annotate
  tutorial: {
      // there is only 1 available custom animiation right now, and its 'Bubbles'
    customBackgroundAnimation: 'Bubbles',
      // steps have 2 parts, the intro and examples. In the intro you provide
      // text and images. In the examples, you provide text, data pointers, and tutorial steps
      // that the widget will display
    steps: {
      intro: [
        {
            // keep the text really short
          text: 'Functional MRI (fMRI) is used to measure brain activity over time whereas structural MRI (i.e T1) is used to measure brain shape at one point in time',
          image: 'https://raw.githubusercontent.com/DCAN-Labs/abcd-func/master/config/tutorial_imgs/2sidebyside.JPG',
        },
        {
            // use \n to linebreak the text
          text: 'The fMRI image is much more blurry than the T1 image and is more difficult to define the white and gray matter.\nTherefore, the ABCD Study aligns blurry fMRI image to the clear T1 image.\nThis allows us to map the brain activity from the fMRI image to the precise regions defined in the T1 image.',
          image: 'https://raw.githubusercontent.com/DCAN-Labs/abcd-func/master/config/tutorial_imgs/fMRIalignsT1.JPG',
        },
        {
            // use \n to linebreak the text
          text: 'There are 2 types of images to asses the quality of the fMRI registration to the T1. These images are the T1 and the fMRI overlaid onto each other.',
          image: 'https://raw.githubusercontent.com/DCAN-Labs/abcd-func/master/config/tutorial_imgs/sidebysiderest_testwidth.JPG',
        },
        {
            // use \n to linebreak the text
          text: 'The quality of the functional registration depends on how well the fMRI image and T1 align. Common functional registration errors include: field of view cut off, signal dropout, movement artifacts, and signal inhomogeneity.',
          image: 'https://raw.githubusercontent.com/DCAN-Labs/abcd-func/master/config/tutorial_imgs/alignexample.JPG',
        },
        {
            // use \n to linebreak the text
          text: 'Field of view cut-off occurs when the participant’s head is not fully in the scanner and either the bottom or top of the brain is cut off',
          image: 'https://raw.githubusercontent.com/DCAN-Labs/abcd-func/master/config/tutorial_imgs/failwithtexttest.JPG',
        },
        {
            // use \n to linebreak the text
          text: 'Not all field of view cut-off errors imply bad quality, it is to what extent the brain is cut off.',
          image: 'https://raw.githubusercontent.com/DCAN-Labs/abcd-func/master/config/tutorial_imgs/passwithtexttest.JPG',
        },
        {
            // use \n to linebreak the text
          text: 'Signal dropout occurs when the scanner does not record brain activity properly',
          image: 'https://raw.githubusercontent.com/DCAN-Labs/abcd-func/master/config/tutorial_imgs/signalfail.JPG',
        },
        {
            // use \n to linebreak the text
          text: 'Not all signal dropout errors imply bad quality, it is to what extent the signal is not recorded',
          image: 'https://raw.githubusercontent.com/DCAN-Labs/abcd-func/master/config/tutorial_imgs/passsignal.JPG',
        },
        {
            // use \n to linebreak the text
          text: 'Movement artifacts occur when the participant is moving too much during the fMRI scan',
          image: 'https://raw.githubusercontent.com/DCAN-Labs/abcd-func/master/config/tutorial_imgs/movementhorz.JPG',
        },
        {
            // use \n to linebreak the text
          text: 'Signal inhomogeneity occurs when the participant is not positioned properly in the scanner causing their brain activity signal to be skewed towards one side of the brain',
          image: 'https://raw.githubusercontent.com/DCAN-Labs/abcd-func/master/config/tutorial_imgs/inhomohorz.JPG',
        },
        {
            // use \n to linebreak the text
          text: 'Ignore warped brain shapes when assessing the quality of the functional registration. \n Warped brains are due to poor registration of the T1 to the MNI atlas and is not a problem with the functional scan. \n Warped brains will be quality checked in the t1 registration app',
          image: 'https://raw.githubusercontent.com/DCAN-Labs/abcd-func/master/config/tutorial_imgs/ignorewarp.JPG',
        },
        {
            // use \n to linebreak the text
          text: 'Below are examples of good and bad quality functional scans:',
          image: 'https://raw.githubusercontent.com/DCAN-Labs/abcd-func/master/config/tutorial_imgs/example1.JPG',
        },
        {
            // use \n to linebreak the text
          text: '',
          image: 'https://raw.githubusercontent.com/DCAN-Labs/abcd-func/master/config/tutorial_imgs/example2.JPG',
        },
        {
            // use \n to linebreak the text
          text: '',
          image: 'https://raw.githubusercontent.com/DCAN-Labs/abcd-func/master/config/tutorial_imgs/example3.JPG',
        },
        {
            // use \n to linebreak the text
          text: '',
          image: 'https://raw.githubusercontent.com/DCAN-Labs/abcd-func/master/config/tutorial_imgs/example4.JPG',
        },
      ],
      examples: [
        {
            // fill these with examples with respect to the widget you're using
          text: 'swipe right when the image is good quality',
          pointer: 'NDARINV04R9REGF_baselineYear1Arm1_task-rest01_in_t1',
          answer: 1,
          tutorialStep: 0,
        },
        {
          text: 'swipe left when its bad',
          pointer: 'old_NDARINVUXMACPNB_baselineYear1Arm1_rfMRI_REST1_in_t1_copy1',
          answer: 0,
          tutorialStep: 1,
        },
        {
          text: `if you're not sure, click 'help' \n to discuss with scientists ${''}`,
          pointer: 'NDARINV01NAYMZH_baselineYear1Arm1_task-rest01_in_t1',
          answer: 0,
          tutorialStep: 2,
        },
        {
          text: 'Are you ready to play?',
          tutorialCompleted: true,
        },
      ],
    },
  },

};
