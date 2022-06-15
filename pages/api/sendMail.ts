import { NextApiRequest, NextApiResponse } from 'next'

const mailchimp = require('@mailchimp/mailchimp_marketing')

mailchimp.setConfig({
  apiKey: process.env.MAILCHIMP_KEY,
  server: process.env.MAILCHIMP_SERVER_CODE
})

const listID = '147630c4f6'

export default async function handler (
  req: NextApiRequest,
  res: NextApiResponse
) {
  const jsonData = {
    email_address: req.body.email,
    status: 'subscribed'
  }
  try {
    const fetch = await mailchimp.lists.addListMember(listID, jsonData)
    if (fetch.status === 'subscribed') {
      res.status(200).json({ status: 'subscribed' })
    }
  } catch (error) {
    console.error(error)
    res.status(error?.status).json({ error: error })
  }
}
