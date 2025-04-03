const ChatHistory = () => {
  const chatSections = [
    {
      title: 'Last 7 Days',
      items: [
        'User Greets with a Simple Hi',
        'User Greets with a Hi',
        'User Greets with Hi',
        'User Greets with a Simple Hi',
        'User Greets with a Hi',
        'User Greets with Hi',
      ]
    },
    {
      title: 'Last 30 Days',
      items: [
        'User Greets with a Simple Hi',
        'User Greets with a Simple Hi',
        'User Greets with a Hi',
        'User Greets with Hi',
        'User Greets with a Simple Hi',
        'User Greets with a Simple Hi',
        'User Greets with a Simple Hi',
      ]
    }
  ]

  return (
    <div className="p-4">
      {chatSections.map((section, index) => (
        <div key={index} className="mb-6">
          <h3 className="text-xs text-gray-500 uppercase mb-2">
            {section.title}
          </h3>
          <ul className="space-y-1">
            {section.items.map((item, itemIndex) => (
              <li key={itemIndex}>
                <div className="p-2 text-sm hover:bg-gray-100 rounded cursor-pointer">
                  {item}
                </div>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  )
}

export default ChatHistory