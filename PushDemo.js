import * as PushAPI from "@pushprotocol/restapi";
import * as ethers from "ethers";


// 👇️ Content import
import {title, body} from './payload.js';

const PK = '****'; // channel private key
const Pkey = `0x${PK}`;
const signer = new ethers.Wallet(Pkey);

const sendNotification = async() => {
  try {
    const apiResponse = await PushAPI.payloads.sendNotification({
      signer,
      type: 3, // target
      identityType: 2, // direct payload
      notification: {
        title: title, // `[sdk-test] notification title`,
        body: body, // `sample notification body`,
      },
      payload: {
        title: title, // `[sdk-test] payload title`,
        body:  body, // `sample msg body`,
        cta: '',
        img: ''
      },
      //recipients: 'eip155:5:0xCdBE6D076e05c5875D90fa35cc85694E1EAFBBd1', // recipient address
      //channel: 'eip155:5:0xD8634C39BBFd4033c0d3289C4515275102423681', // your channel address
      recipients: 'eip155:5:***', // recipient address
      channel: 'eip155:5:***', // your channel address
      env: 'staging'
    });
    
    // apiResponse?.status === 204, if sent successfully!
    console.log('API repsonse: ', apiResponse);
  } catch (err) {
    console.error('Error: ', err);
  }
}

sendNotification();