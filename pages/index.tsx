import Search from '../components/search'
import MediaContainer from '../components/media-container'
import Profile from '../components/profile'
export default function IndexPage() {
    return (
      <>
        <main className="flex min-h-screen flex-col items-center p-">
      
      <div >
        <h1 className="mb-3 text-6xl font-semibold">RISBN</h1>
      </div>
      <div className="grid grid-cols-2 gap-10">
        <div className="col-span-2 justify-center justify-self-center max-h-3">
          <Search />
        </div>
        <div>
          <Profile />
        </div>
        <div>
          <MediaContainer />
        </div>
      </div>
    </main>
      </>
    )
  }