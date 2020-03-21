import React from 'react';
import Helmet from 'react-helmet';

function TitleSet(props) {
    const defaultTitle = '1111 人力銀行';
    const defaultMeta = {
        keywords: '1111,人力,徵才',
        description: '1111 人力銀行'
    }
    const defaultLogo = "/image/logo-1111.png";
    const defaultURL = "https://1111.com.tw";

    return (
    
        <Helmet>
            <title>{props.title ? props.title : defaultTitle}</title>
            <meta name="title" content={props.title ? props.title : defaultTitle} />
            <meta property="og:title" content={props.title ? props.title : defaultTitle} />
            <meta charSet="utf-8" />
            <meta property="og:type" content="website" />
            <meta name="description" content={props.meta.description ? props.meta.description : defaultMeta.description} />
            <meta property="og:description" content={props.meta.description ? props.meta.description : defaultMeta.description} />
            <meta name="keywords" content={props.meta.keywords ? props.meta.keywords : defaultMeta.keywords} />
            <meta property="og:image" content={props.logo ? props.logo : defaultLogo} />
            <meta property="og:url" content={props.publicURL ? props.publicURL : defaultURL} />
            <link rel="canonical" href={props.publicURL ? props.publicURL : defaultURL} />
            {props.style && props.style.map((url, index) =>
                <link key={index} rel="stylesheet" href={url} type="text/css"/>
            )}
            {props.script && props.script.map((url, index) =>
                <script key={index} async src={url} />
            )}
            
       </Helmet>
    )
}

export default TitleSet;
