import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const data = {
    news: 'Latest news',
    about: 'About our company',
    works: 'Our works',
    stockist: 'Stockist details',
    shop: 'Shop information',
    contact: 'Contact us',
  };

  res.status(200).json(data);
}
