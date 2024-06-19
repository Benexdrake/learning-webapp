import type { NextApiRequest, NextApiResponse } from "next";
import recht from '@/public/RechtlicheKompetenzen.json'
import betrieb from '@/public/BetriebsFinanzwirtschaftlicheKompetenz.json'
import multi from '@/public/MultiTest.json'


export default function handler( req: NextApiRequest, res: NextApiResponse)
{
    switch(req.query.id?.toString())
    {
        case "1":
            res.status(200).json(recht);
            break;
        case "2":
            res.status(200).json(betrieb);
            break;
        case "3":
            res.status(200).json(multi);
            break;
                
        default:
            res.status(200).json(recht);
            break;
    }
}
