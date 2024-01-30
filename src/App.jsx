import { Card } from './Card'

export default function App() {
  return (
    <div className='min-h-screen text-sm bg-QLightgrayishblue '>
      <div className='grid w-10/12 max-w-screen-xl gap-8 py-10 mx-auto md:grid-cols-4 '>
        <Card />
      </div>
    </div>
  )
}
