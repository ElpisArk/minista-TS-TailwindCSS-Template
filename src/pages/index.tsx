import type { PageProps, Metadata } from "minista"

export const metadata: Metadata = {
  title: "minista",
}

export default function Index({ url, title, children }: PageProps) {
  return (
    <>
      <main className="w-full mt-32">
        <div className="m-auto">
          <h1 className="text-8xl text-white text-center">Hello! minista!</h1>
          <div className="w-3/5 m-auto mt-20 p-8 border-4 rounded-lg text-3xl text-white text-center">
            <a href="https://minista.qranoko.jp/">READ THE DOCS ▽</a>
          </div>
        </div>
      </main>
    </>
  )
}
