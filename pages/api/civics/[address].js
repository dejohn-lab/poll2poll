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

// REPLACE THESE WITH YOUR OWN
const GOOGLE_API_KEY = 'AIzaSyDH35ZhUADAFaV1mpIeLh4GaxQ5RxchKuo';
const MAPQUEST_API_KEY = ' 8GCaZGAUOmtSpTVkp4Z5ThxrA1IgBioM ';
const ELECTION_ID = 7000;

// Returns the following shape:
//
//    zipCode: string
//    locations: {
//       distance: number
//       location: []pollingLocations
//     }

// pollingLocation format
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

const haversineDistance = ([lat1, lon1], [lat2, lon2], isMiles = false) => {
  const toRadian = (angle) => (Math.PI / 180) * angle;
  const distance = (a, b) => (Math.PI / 180) * (a - b);
  const RADIUS_OF_EARTH_IN_KM = 6371;

  const dLat = distance(lat2, lat1);
  const dLon = distance(lon2, lon1);

  lat1 = toRadian(lat1);
  lat2 = toRadian(lat2);

  // Haversine Formula
  const a = Math.pow(Math.sin(dLat / 2), 2)
    + Math.pow(Math.sin(dLon / 2), 2) * Math.cos(lat1) * Math.cos(lat2);
  const c = 2 * Math.asin(Math.sqrt(a));

  let finalDistance = RADIUS_OF_EARTH_IN_KM * c;

  if (isMiles) {
    finalDistance /= 1.60934;
  }

  return finalDistance;
};

const geoCode = async (address) => {
  const paramAddress = encodeURIComponent(address);
  const paramKey = encodeURIComponent(MAPQUEST_API_KEY);
  const url = `
  http://open.mapquestapi.com/geocoding/v1/address?location=${paramAddress}&key=${paramKey}&outFormat=json&maxResults=1`;

  const apiRes = await fetch(url);
  const data = await apiRes.json();

  const location = data && data.results?.[0].locations?.[0];
  return [location.latLng.lat, location.latLng.lng];
};

const pollingLocations = async (address) => {
  const apiKey = encodeURIComponent(GOOGLE_API_KEY);

  const paramAddress = encodeURIComponent(address);
  const url = `https://www.googleapis.com/civicinfo/v2/voterinfo?address=${paramAddress}&key=${apiKey}&electionId=${encodeURIComponent(ELECTION_ID)}`;
  const apiRes = await fetch(url);
  const data = await apiRes.json();
  return data;
};

const fetchProductionData = async (address) => {
  const latLong = await geoCode(address);
  const results = await pollingLocations(address);

  return {
    address,
    locations: (results.pollingLocations || []).map((loc) => ({
      location: loc,
      distance: haversineDistance(
        latLong, [loc.latitude, loc.longitude], true,
      ),
    })),
  };
};

export default async (req, res) => {
  const {
    query: { address },
  } = req;

  try {
    const data = await fetchProductionData(address);
    // const data = await fetchTestData(zipCode);

    res.statusCode = 200;

    res.json(data);
  } catch (e) {
    console.error(e);
    res.statusCode = 500;
    res.json({ error: e });
  }
};
