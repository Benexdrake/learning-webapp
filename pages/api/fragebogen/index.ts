import type { NextApiRequest, NextApiResponse } from "next";
import recht from '@/public/RechtlicheKompetenzen.json'


export default function handler( req: NextApiRequest, res: NextApiResponse)
{
    switch(req.query.id)
    {
        case "1":
            res.status(200).json(recht);
            break;
            
            
        default:
            res.status(200).json(recht);
            break;
    }
}