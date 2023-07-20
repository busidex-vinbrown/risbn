'use client';
import React from 'react';
import  { Utils } from '../api/utils';
import { useRouter } from 'next/router'
import Link from 'next/link'

export default function Results() {
    
    const utils = new Utils();
    const router = useRouter()
    const { pathname, query } = router;

    let r: string = decodeURIComponent(query.r as string);

    let results = utils.decompress(r);
    
    let aResults = JSON.parse(results);
    
    let html = aResults.map((fileId: string)=> {
        return (
        <div key={fileId}>
            <img src={`https://az381524.vo.msecnd.net/cards/${fileId}`} height="150" width="300"/>
        </div>)
    });

        
    return (
        <div className="results">
            <Link href="/">Home</Link>
            <div className="grid grid-cols-4 gap-4">
                {html}
            </div>
            </div>
            )
}