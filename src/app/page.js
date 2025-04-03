import Sidebar from '@/app/components/Sidebar'
import MainContent from '@/app/components/MainContent'

export default function Home() {
  return (
    <div className="flex flex-1">
      <Sidebar />
      <MainContent />
    </div>
  )
}