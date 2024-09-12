export type Props = Partial<{
  header: string
}>

export default function Header(props: Props) {
  return (
    <header>
      <h1 className="mt-10 ml-10 text-6xl text-white">{props.header}</h1>
    </header>
  )
}
