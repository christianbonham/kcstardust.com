import type { NextApiRequest, NextApiResponse } from 'next';

const endpoint =
  process.env.NODE_ENV === 'development'
    ? 'https://www.kcstardust.com/email.php'
    : 'https://www.kcstardust.com/email.php';

export default async function Email(req: NextApiRequest, res: NextApiResponse) {
  console.log('Email API', req.body);
  console.log('process.env.NODE_ENV', process.env.NODE_ENV);

  console.log('endpoint', endpoint);
  try {
    // proxy to the server
    const proxyResult = await fetch(endpoint, {
      body: req.body,
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
    });
    const proxyData = await proxyResult.json();
    console.log('proxy data', proxyData);

    return res.status(200).json(proxyData);
  } catch (e) {
    return res.status(500).json({ error: '500 server error:', serverError: e });
  }
}
