/**
 * HOW TO USE:
 * Replace GOOGLE_API_KEY with an API key from here:
 * https://console.developers.google.com/apis/credentials
 *
 * Replace Election with the right election from here:
 * https://developers.google.com/civic-information/docs/v2/elections/electionQuery
 *
 * API docs:
 * https://developers.google.com/civic-information/docs/v2/elections/voterInfoQuery
 *
 * API Response reference
 * {
  "kind": "civicinfo#voterInfoResponse",
  "election": elections Resource,
  "otherElections": [
    elections Resource
  ],
  "normalizedInput": {
    "locationName": string,
    "line1": string,
    "line2": string,
    "line3": string,
    "city": string,
    "state": string,
    "zip": string
  },
  "pollingLocations": [
    {
      "id": string,
      "address": {
        "locationName": string,
        "line1": string,
        "line2": string,
        "line3": string,
        "city": string,
        "state": string,
        "zip": string
      },
      "notes": string,
      "pollingHours": string,
      "name": string,
      "voterServices": string,
      "startDate": string,
      "endDate": string,
      "latitude": double,
      "longitude": double,
      "sources": [
        {
          "name": string,
          "official": boolean
        }
      ]
    }
  ],
  "earlyVoteSites": [
    {
      "id": string,
      "address": {
        "locationName": string,
        "line1": string,
        "line2": string,
        "line3": string,
        "city": string,
        "state": string,
        "zip": string
      },
      "notes": string,
      "pollingHours": string,
      "name": string,
      "voterServices": string,
      "startDate": string,
      "endDate": string,
      "latitude": double,
      "longitude": double,
      "sources": [
        {
          "name": string,
          "official": boolean
        }
      ]
    }
  ],
  "dropOffLocations": [
    {
      "id": string,
      "address": {
        "locationName": string,
        "line1": string,
        "line2": string,
        "line3": string,
        "city": string,
        "state": string,
        "zip": string
      },
      "notes": string,
      "pollingHours": string,
      "name": string,
      "voterServices": string,
      "startDate": string,
      "endDate": string,
      "latitude": double,
      "longitude": double,
      "sources": [
        {
          "name": string,
          "official": boolean
        }
      ]
    }
  ],
  "contests": [
    {
      "id": string,
      "type": string,
      "primaryParty": string,
      "electorateSpecifications": string,
      "special": string,
      "ballotTitle": string,
      "office": string,
      "level": [
        string
      ],
      "roles": [
        string
      ],
      "district": {
        "name": string,
        "scope": string,
        "id": string
      },
      "numberElected": long,
      "numberVotingFor": long,
      "ballotPlacement": long,
      "candidates": [
        {
          "name": string,
          "party": string,
          "candidateUrl": string,
          "phone": string,
          "photoUrl": string,
          "email": string,
          "orderOnBallot": long,
          "channels": [
            {
              "type": string,
              "id": string
            }
          ]
        }
      ],
      "referendumTitle": string,
      "referendumSubtitle": string,
      "referendumUrl": string,
      "referendumBrief": string,
      "referendumText": string,
      "referendumProStatement": string,
      "referendumConStatement": string,
      "referendumPassageThreshold": string,
      "referendumEffectOfAbstain": string,
      "referendumBallotResponses": [
        string
      ],
      "sources": [
        {
          "name": string,
          "official": boolean
        }
      ]
    }
  ],
  "state": [
    {
      "id": string,
      "name": string,
      "electionAdministrationBody": {
        "name": string,
        "electionInfoUrl": string,
        "electionRegistrationUrl": string,
        "electionRegistrationConfirmationUrl": string,
        "electionNoticeText": string,
        "electionNoticeUrl": string,
        "absenteeVotingInfoUrl": string,
        "votingLocationFinderUrl": string,
        "ballotInfoUrl": string,
        "electionRulesUrl": string,
        "voter_services": [
          string
        ],
        "hoursOfOperation": string,
        "correspondenceAddress": {
          "locationName": string,
          "line1": string,
          "line2": string,
          "line3": string,
          "city": string,
          "state": string,
          "zip": string
        },
        "physicalAddress": {
          "locationName": string,
          "line1": string,
          "line2": string,
          "line3": string,
          "city": string,
          "state": string,
          "zip": string
        },
        "electionOfficials": [
          {
            "name": string,
            "title": string,
            "officePhoneNumber": string,
            "faxNumber": string,
            "emailAddress": string
          }
        ]
      },
      "local_jurisdiction": (AdministrationRegion),
      "sources": [
        {
          "name": string,
          "official": boolean
        }
      ]
    }
  ],
  "mailOnly": boolean
}
 */

const GOOGLE_API_KEY = 'AIzaSyDH35ZhUADAFaV1mpIeLh4GaxQ5RxchKuo';
const ELECTION_ID = 7000;

// Returns the following shape:
// [
//   {
//     "id": string,
//     "address": {
//       "locationName": string,
//       "line1": string,
//       "line2": string,
//       "line3": string,
//       "city": string,
//       "state": string,
//       "zip": string
//     },
//     "notes": string,
//     "pollingHours": string,
//     "name": string,
//     "voterServices": string,
//     "startDate": string,
//     "endDate": string,
//     "latitude": double,
//     "longitude": double,
//     "sources": [
//       {
//         "name": string,
//         "official": boolean
//       }
//     ]
//   }
// ]

const fetchTestData = () => {
  return [
   {
     "id": "blah",
     "address": {
       "locationName": "DMV",
       "line1": "625 Atlantic Ave",
       "line2": "2nd Floor",
       "line3": "",
       "city": "Brooklyn",
       "state": "NY",
       "zip": "11221",
     },
     "notes": "",
     "pollingHours": "9am-5pm",
     "name": "Test test",
     "voterServices": "Español",
     "startDate": "11-01-2020",
     "endDate": "11-10-2020",
     "latitude": -1,
     "longitude": -2,
     "sources": [],
   }
 ]
}

const fetchProductionData = async (zipCode) => {
  const apiKey = encodeURIComponent(GOOGLE_API_KEY);

  const address = encodeURIComponent(zipCode);
  const url = `https://www.googleapis.com/civicinfo/v2/voterinfo?address=${address}&key=${apiKey}&electionId=${encodeURIComponent(ELECTION_ID)}`;
  const apiRes = await fetch(url);

  const apiResponseData = await apiRes.json();
  return apiResponseData.pollingLocations || [];
}

export default async (req, res) => {
  const {
    query: { zipCode },
  } = req

  // const data = await fetchProductionData(zipCode);
  const data = await fetchTestData(zipCode);

  res.statusCode = 200

  res.json({pollingLocations: data})
}
