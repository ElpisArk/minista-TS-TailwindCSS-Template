import type { GlobalProps } from "minista"
import { Head } from "minista"
import Header from "@/components/Header"
import "@/styles/globals.css"

export default function Global({ url, title, children }: GlobalProps) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.png"></link>
        <meta property="description" content="description" />
      </Head>
      {url === "/" ? (
        <div>
          <Header header="INDEX" />
          {children}
        </div>
      ) : (
        <div>
          <Header header="MENU" />
          {children}
        </div>
      )}
    </>
  )
}
