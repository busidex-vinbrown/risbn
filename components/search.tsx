'use client';
import React from 'react';
import { useState } from 'react';
import  { RestApi } from '../api/search';
import { Utils } from '../api/utils';
import { useRouter } from 'next/navigation'

//var template = require('../templates/search.html');

export default function Search() {
    const[query, setQuery] = React.useState('');
    const router = useRouter()
    let api = new RestApi();
    let utils = new Utils();
    //console.log(template);

    async function getResults(){
        console.log(query);
        
        let response = await api.doSearch(query);
        let results: string [] = [];
        response.SearchModel.Results.forEach((r: any) => {
            if(r.FrontFileId){
                results.push(r.FrontFileId + '.' + r.FrontFileType)
            }
            //;
            
        })
        let q = utils.compress(JSON.stringify(results).trim());
 
        router.push(`./results?r=${encodeURIComponent(q)}`)
    }

    return (
        <div>
            <input type="text" id="search" onChange={event => setQuery(event.target.value)} />
            <button onClick={getResults}>Search</button>
        </div>
    )
}
