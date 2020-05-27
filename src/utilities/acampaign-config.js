// SET UP
export const APIKEY = "20087f9099815ecc8b0c7883c7f86b5cb46e3ed338fe6c1f926c88adf377c0db33f8bafd";
export const APIURL = "https://nanocosmos.api-us1.com/api/3";

// AUTOMATIONS
export const NEW_DEAL = 20;
export const WEBCASTER_DEMO = 23;
export const H5LIVE_DEMO = 1;
export const CONTACT_FOLLOW_UP = 66;

// H5LIVE (FORM ID: 1)

// USECASE -- ID 1 -- (DROPDOWN)
export const H5LIVE_USECASE = {
    title: 'Usecase',
    id: 1,
    values: [
        { id: 3, value: 'iGaming' },
        { id: 7, value: 'Live Auction' },
        { id: 4, value: 'eSports' },
        { id: 2, value: 'Webcasts' },
        { id: 5, value: 'Security & Monitoring' },
        { id: 1, value: 'Entertainment' },
        { id: 73, value: 'Retail' },
        { id: 74, value: 'Journalism' },
        { id: 75, value: 'Broadcast Station' },
        { id: 133, value: 'Marketing, Survey, Polling' },
        { id: 135, value: 'User Generated Content' },
        { id: 134, value: 'Industry' },
        { id: 6, value: 'Other' }
    ]
}

// CUSTOM FIELDS 
// field: "https://nanocosmos.api-us1.com/api/3/fieldOptions/:id/field"
// forms: "https://nanocosmos.api-us1.com/api/3/forms/:id"


// GET A QUOTE (FORM ID: 9)

// USECASE -- FIELD 96 -- (DROPDOWN)
export const USECASE = {
    title: 'Usecase',
    id: 96,
    values: [
        { id: 136, value: 'iGaming' },
        { id: 137, value: 'Live Auction' },
        { id: 138, value: 'Sports' },
        { id: 151, value: 'Betting' },
        { id: 139, value: 'Webcasting' },
        { id: 140, value: 'Security & Monitoring' },
        { id: 141, value: 'Entertainment' },
        { id: 152, value: 'Gaming' },
        { id: 142, value: 'Retail' },
        { id: 143, value: 'Journalism' },
        { id: 144, value: 'Broadcasting' },
        { id: 145, value: 'Marketing' },
        { id: 146, value: 'Surveying' },
        { id: 147, value: 'Polling' },
        { id: 149, value: 'User Generated Content' },
        { id: 150, value: 'Other' }
    ]
}

// INGESTS -- FIELD 49 -- (TEXT)
export const INGESTS = {
    id: 49,
    title: 'Ingests',
}

// RTMP/H.264 Encoder Source -- FIELD 48 -- (TEXT)
export const RTMPSOURCE = {
    id: 48,
    title: 'RTMP/H.264 Encoder Source'
}

// REGION -- FIELD 44 -- (TEXT)
export const REGION = {
    id: 44,
    title: 'Region',
}

// REGION -- FIELD 51 -- (TEXT)
export const TRAFFIC_GB = {
    id: 51,
    title: 'Traffic (GB)'
}

// REGION -- FIELD 50 -- (TEXT)
export const VIEWERS = {
    id: 50,
    title: 'Viewers'
}

// MESSAGE -- FIELD 57 -- (TEXT)
export const MESSAGE = {
    id: 57,
    title: 'Message'
}

// OPTIME -- FIELD 46 -- (TEXT)
export const OPTIME = {
    id: 46,
    title: 'OpTime'
}

// OPTIME -- FIELD 81 -- (TEXT)
export const SKYPEID = {
    id: 81,
    title: 'SkypeId'
}