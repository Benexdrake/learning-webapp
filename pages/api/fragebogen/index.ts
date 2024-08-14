import type { NextApiRequest, NextApiResponse } from "next";
import recht from '@/public/RechtlicheKompetenzen.json'
import betrieb from '@/public/BetriebsFinanzwirtschaftlicheKompetenz.json'
import uebung1 from '@/public/Übungsfragen_Strafrecht.json'
import multi from '@/public/MultiTest.json'
import linux from '@/public/linux.json'


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
            res.status(200).json(uebung1);
            break;
        case "4":
            res.status(200).json(linux);
            break;
        default:
            res.status(200).json(recht);
            break;
    }
}
