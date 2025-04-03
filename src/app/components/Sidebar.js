import ChatHistory from './ChatHistory'

const Sidebar = () => {
  return (
    <div className="w-64 bg-gray-100 border-r border-gray-200 flex flex-col">
      <div className="p-4 border-b border-gray-200">
        <h1 className="text-xl font-semibold">Chatbot</h1>
      </div>
      
      <div className="flex-1 overflow-hidden">
        <ChatHistory />
      </div>
      
      
      <div className="p-4 border-t border-gray-200">
        
        <div className="mt-4 text-sm text-gray-500">My Profile</div>

      </div>
    </div>
  )
}

export default Sidebar