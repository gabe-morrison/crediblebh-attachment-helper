// ==UserScript==
// @name        CredibleBH Attachment Helper
// @namespace   Violentmonkey Scripts
// @match       https://www.cbh3.crediblebh.com/common/add_attachment.asp*
// @grant       none
// @version     1.0
// @author      -
// @description 1/27/2023, 8:56:24 AM
// ==/UserScript==

const fileInput = document.getElementById('cwfileinput');
const textInput = document.querySelector('input[type="text"]');

const guessFolder = () => {
  const admissionRegex = new RegExp(['Referral'].join('|', 'i'));
  const assessmentRegex = new RegExp(['Stressful Events'].join('|', 'i'));
  const financialRegex = new RegExp(['Benefit', 'SSI', 'Financial', 'SNAP', 'Energy', 'Asst'].join('|', 'i'));
  const hospitalRegex = new RegExp(['Discharge', 'Regions', 'United', 'Abbott', 'Mercy', 'Admission'].join('|', 'i'));
  const housingRegex = new RegExp(['Lease', 'Housing' ].join('|', 'i'));;
  const labsRegex = new RegExp(['CBC', 'Lipid', 'Panel', 'Labs'].join('|', 'i'));
  const legalRegex = new RegExp(['Order', 'Commitment', 'PD', 'Petition', 'PPS', 'SSID'].join('|', 'i'));
  const medicalRegex = new RegExp(['Visit', 'AVS'].join('|', 'i'));
  const correspondenceRegex = new RegExp(['Letter'].join('|', 'i'));
  const roiRegex = new RegExp(['ROI', 'Release'].join('|', 'i'));
  const vocRegex = new RegExp([''].join('|', 'i'));
  const regexObj = {
    'admission': admissionRegex,
    'assessment': assessmentRegex,
    'financial': financialRegex,
    'hospital': hospitalRegex,
    'housing': housingRegex,
    'labs': labsRegex,
    'legal': legalRegex,
    'medical': medicalRegex,
    'correspondence': correspondenceRegex,
    'roi': roiRegex,
    'voc': vocRegex
  };
	for (const [key, reg] of Object.entries(regexObj)) {
    if (reg.test(textInput.value)) {
       switch (key) {
         case 'admission':
           return 53;
         case 'assessment':
           return 172;
         case 'financial':
           return 54;
         case 'hospital':
           return 55;
         case 'housing':
           return 56;
         case 'labs':
           return 57;
         case 'legal':
           return 58;
         case 'medical':
           return 59;
         case 'correspondence':
           return 60;
         case 'roi':
           return 68;
         case 'voc':
           return 62;
         default:
           return 11;
       }
    }
  }
}

fileInput.addEventListener('change', () => {
	textInput.value = document.querySelector('p.name').textContent;
	document.querySelector('input[type="checkbox"]').checked = true;
  document.querySelector('select').value = guessFolder();
})


