export const RESPONSE = [
  {
    id: 1,
    is_agreement: true,
    agreement_type: 'outbound',
    agreement_status: 'requested',
    file_name: '<file_name>',
    created_at: '2017-07-17 21:09:59',
    self_signed: false,
    self_sign_type: 'aadhaar',
    no_of_pages: 1,

    signing_parties: [
      {
        name: '<signer email/mobile>',
        identifier: '<signer email/mobile>',
        status: 'requested',
        type: 'self',
        signature_type: 'aadhaar',
        reason: '<Reason for signing document> ',
      },
    ],
    sign_request_details: {
      name: '<Business_name>',
      identifier: '<Business_email>',
      requested_on: '2017-07-17 21:09:59',
      expire_on: '2017-07-27 23:59:59',
      requester_type: 'org',
    },
    channel: 'api',
  },
];
