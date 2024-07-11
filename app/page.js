import Link from "next/link";

export default function Home() {

  return (
    <>
      <h1>Welcome!</h1>
      <p className="mar-bot-20">This document guide you to setup the necessary things to kick off the Ford IMG Shop and Buy Project</p>
      <Link className="link" href="/local-setup-ui">Let's get started &gt;</Link>
    </>
    
  );
}
