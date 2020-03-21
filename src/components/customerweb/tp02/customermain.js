import React from 'react';
import CompanyTitle from './companytitle';
import CompanyInfo from './companyinfo';
import CompanyBenifit from './companybenifit';
import CompanyJobs from './companyjobs';
import CompanyBrand from './companybrand';
import CompanyCustomize from './companycustomize'
import CompanyQA from './companyqa'
import CompanyContact from './companycontact'

function CustomerMain() {
    return (
        <main id="content" className="content">
            <CompanyTitle />
            <CompanyInfo />
            <CompanyBenifit />
            <CompanyJobs />
            <CompanyBrand />
            <CompanyCustomize />
            <CompanyQA />
            <CompanyContact />
        </main>
    )
}

export default CustomerMain;