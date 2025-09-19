import Link from 'next/link';

import { ContextAlert } from 'components/context-alert';
import { Markdown } from 'components/markdown';

import { getNetlifyContext } from 'utils';

const contextExplainer = `

`;

const preDynamicContentExplainer = `


const postDynamicContentExplainer = `

`;

const ctx = getNetlifyContext();

export default function Page() {
    return (
        <div className="flex flex-col gap-12 sm:gap-16">
            <section>
                <ContextAlert className="mb-6" />
                <h1 className="mb-4">AASE-EMIS DASHBOARD</h1>
                <p className="mb-6 text-lg">Get Your Authentic and Reliable Data Here.</p>
                <Link href="https://sites.google.com/view/aasedeo-user-login/staff-login" className="btn btn-lg sm:min-w-64">
                    Staff Login
                </Link>
            
