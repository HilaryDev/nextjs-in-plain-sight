import { useState } from 'react';
import Head from 'next/head';

import FilesForm from 'components/files-form';
import { PossibleActionsToPerform } from 'types';

import Introduction from 'components/introduction';


export default function Home(): JSX.Element {
  const [actionToPerform, setActionToPerform] = useState<PossibleActionsToPerform | null>(null);

  const handleChangeOfActionToPerform = (action: PossibleActionsToPerform): void =>
    setActionToPerform(action);


  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="initial-scale=1.0, width=device-width"
        />
        <meta name="description" content="Tool" />

        <title>InPlainSight (by HilaryDev)</title>

        <link rel="icon" href="/favicon.ico" />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>


      <main
        className="white"
      >
        <Introduction
          actionToPerform={actionToPerform}
          handleChangeOfActionToPerform={handleChangeOfActionToPerform}
        />


        {actionToPerform && (
          <FilesForm
            actionToPerform={actionToPerform}
          />
        )}
      </main>
    </>
  );
}
