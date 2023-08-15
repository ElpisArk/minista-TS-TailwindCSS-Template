import type { GlobalProps } from "minista"
import { Head } from "minista"
import "@/styles/globals.css"

export default function ({ url, title, children }: GlobalProps) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.png"></link>
        <meta property="description" content="description" />
      </Head>
      {url === "/" ? (
        <div className="home">{children}</div>
      ) : (
        <div>{children}</div>
      )}
    </>
  )
}
